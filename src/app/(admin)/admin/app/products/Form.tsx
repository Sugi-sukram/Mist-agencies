import React, { useState, useEffect } from "react";
import { Form, Input, InputNumber, Button, Select } from "antd";
import { unitOptions } from "@/config/unitOptions";

const { Option } = Select;

interface ProductFormProps {
  onSubmit: (values: any) => void;
  initialValues?: any; // Allow passing initial values for editing
  loading?: boolean; // Accept loading state from parent component
}

const ProductForm: React.FC<ProductFormProps> = ({
  onSubmit,
  initialValues,
  loading,
}) => {
  const [form] = Form.useForm(); // Initialize form instance

  useEffect(() => {
    // Set initial values when the component mounts or when initialValues changes
    if (initialValues) {
      form.setFieldsValue(initialValues);
    }
  }, [initialValues, form]);

  const onFinish = async (values: any) => {
    if (loading) return; // Prevent submission if already loading
    try {
      await onSubmit(values);
    } catch (error) {
      console.error("Failed to submit:", error);
    }
  };

  return (
    <Form
      form={form}
      name="productForm"
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        name: "",
        unit: "",
        volume: 0,
        packSize: 0,
        originalPrice: 0,
        discountPrice: 0,
        ImageUrl: "",
        ...initialValues, // Spread initialValues to override defaults
      }}
    >
      <div className="!h-[70vh] px-6 py-2 overflow-auto">
        <Form.Item
          name="name"
          label="Product Name"
          rules={[
            { required: true, message: "Please input the product name!" },
          ]}
        >
          <Input placeholder="Enter product name" />
        </Form.Item>

        <Form.Item
          name="unit"
          label="Unit"
          rules={[{ required: true, message: "Please select a unit!" }]}
        >
          <Select placeholder="Select unit">
            {unitOptions.map((unit) => (
              <Option key={unit.value} value={unit.value}>
                {unit.label}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="volume"
          label="Volume"
          rules={[{ required: true, message: "Please input the volume!" }]}
        >
          <InputNumber
            min={0}
            placeholder="Enter volume"
            style={{ width: "100%" }}
          />
        </Form.Item>

        <Form.Item
          name="packSize"
          label="Pack Size"
          rules={[{ required: true, message: "Please input the pack size!" }]}
        >
          <InputNumber
            min={0}
            placeholder="Enter pack size"
            style={{ width: "100%" }}
          />
        </Form.Item>

        <Form.Item
          name="originalPrice"
          label="Original Price"
          rules={[
            { required: true, message: "Please input the original price!" },
          ]}
        >
          <InputNumber
            min={0}
            placeholder="Enter original price"
            style={{ width: "100%" }}
          />
        </Form.Item>

        <Form.Item
          name="discountPrice"
          label="Discount Price"
          rules={[
            { required: true, message: "Please input the discount price!" },
          ]}
        >
          <InputNumber
            min={0}
            placeholder="Enter discount price"
            style={{ width: "100%" }}
          />
        </Form.Item>

        <Form.Item
          name="ImageUrl"
          label="Image URL"
          rules={[{ required: true, message: "Please input the image URL!" }]}
        >
          <Input placeholder="Enter image URL" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default ProductForm;
