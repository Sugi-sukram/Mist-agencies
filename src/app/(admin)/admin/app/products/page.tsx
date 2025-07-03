"use client";

import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Popconfirm, message } from "antd";
import ProductForm from "./Form";
import { Products } from "@/prisma/index";
import axiosPrivate from "@/utils/axios";

const Page: React.FC = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [editingProduct, setEditingProduct] = useState<Products | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  // Fetch products
  const getProducts = async () => {
    try {
      const res = await axiosPrivate.get(`/api/v1/products`);
      if (res && res.data) {
        setProducts(res.data.products);
      }
    } catch (error) {
      message.error("Failed to fetch products.");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // Show modal
  const showModal = (product: Products | null = null) => {
    setEditingProduct(product); // If product is passed, it will be edited
    setIsModalVisible(true);
  };

  // Close modal
  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingProduct(null); // Reset editing product
  };

  // Submit form (Add or Edit)
  const onSubmit = async (values: any) => {
    setLoading(true);
    try {
      if (editingProduct) {
        // Update product
        await axiosPrivate.post(`/api/v1/products/${editingProduct.id}`, values);
        message.success("Product updated successfully");
      } else {
        // Create new product
        let res = await axiosPrivate.post(`/api/v1/products`, values);
        if (res && res.data) {
          message.success("Product added successfully");
          setIsModalVisible(false);
          setEditingProduct(null)
          getProducts(); // Refresh product list
        }
      }
    } catch (error) {
      message.error("Failed to save product.");
    } finally {
      setLoading(false);
    }
  };

  // Delete product
  const handleDelete = async (id: string) => {
    try {
      await axiosPrivate.delete(`/api/v1/products/${id}`);
      message.success("Product deleted successfully");
      getProducts(); // Refresh product list
    } catch (error) {
      message.error("Failed to delete product.");
    }
  };

  // Define table columns
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Unit",
      dataIndex: "unit",
      key: "unit",
    },
    {
      title: "Volume",
      dataIndex: "volume",
      key: "volume",
    },
    {
      title: "Pack Size",
      dataIndex: "packSize",
      key: "packSize",
    },
    {
      title: "Original Price",
      dataIndex: "originalPrice",
      key: "originalPrice",
    },
    {
      title: "Discount Price",
      dataIndex: "discountPrice",
      key: "discountPrice",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: Products) => (
        <>
          <Button type="link" onClick={() => showModal(record)}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this product?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link" danger>
              Delete
            </Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Products Management</h2>
        <Button type="primary" onClick={() => showModal(null)}>
          + Add Product
        </Button>
      </div>

      {/* Products Table */}
      <Table
        columns={columns}
        dataSource={products}
        rowKey="id"
        pagination={{ pageSize: 5 }}
      />

      {/* Product Form inside Modal */}
      <Modal
        title={editingProduct ? "Edit Product" : "Add Product"}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <ProductForm
          onSubmit={onSubmit}
          initialValues={editingProduct}
          loading={loading}
        />
      </Modal>
    </div>
  );
};

export default Page;
