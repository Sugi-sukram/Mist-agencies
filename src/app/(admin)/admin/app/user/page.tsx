"use client";

import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Popconfirm, message } from "antd";
import {Admin as Users } from "@/prisma/index";
import axiosPrivate from "@/utils/axios";
import UserForm from "./UserForm";

const UserPage: React.FC = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [editingUser, setEditingUser] = useState<Users | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  // Fetch users
  const getUsers = async () => {
    try {
      const res = await axiosPrivate.get(`/api/v1/user`);
      if (res && res.data) {
        setUsers(res.data.users);
      }
    } catch (error) {
      message.error("Failed to fetch users.");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  // Show modal for add/edit
  const showModal = (user: Users | null = null) => {
    setEditingUser(user); // If user is passed, edit it; otherwise, add new
    setIsModalVisible(true);
  };

  // Handle cancel modal
  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingUser(null); // Reset the editing user
  };

  // Handle submit (Add or Edit)
  const onSubmit = async (values: any) => {
    setLoading(true);
    try {
      if (editingUser) {
        // Update user
        await axiosPrivate.post(`/api/v1/user/${editingUser.id}`, values);
        message.success("User updated successfully");
      } else {
        // Create new user
        let res = await axiosPrivate.post(`/api/v1/user`, values);
        if (res && res.data) {
          message.success("User added successfully");
          setIsModalVisible(false);
          setEditingUser(null);
          getUsers(); // Refresh user list
        }
      }
    } catch (error) {
      message.error("Failed to save user.");
    } finally {
      setLoading(false);
    }
  };

  // Delete user
  const handleDelete = async (id: string) => {
    try {
      await axiosPrivate.delete(`/api/v1/users/${id}`);
      message.success("User deleted successfully");
      getUsers(); // Refresh user list
    } catch (error) {
      message.error("Failed to delete user.");
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
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
      key: "mobile",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: Users) => (
        <>
          <Button type="link" onClick={() => showModal(record)}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this user?"
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
        <h2 className="text-xl font-bold">User Management</h2>
        <Button type="primary" onClick={() => showModal(null)}>
          + Add User
        </Button>
      </div>

      {/* Users Table */}
      <Table
        columns={columns}
        dataSource={users}
        rowKey="id"
        pagination={{ pageSize: 5 }}
      />

      {/* User Form inside Modal */}
      <Modal
        title={editingUser ? "Edit User" : "Add User"}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <UserForm
          onSubmit={onSubmit}
          initialValues={editingUser}
          loading={loading}
        />
      </Modal>
    </div>
  );
};

export default UserPage;
