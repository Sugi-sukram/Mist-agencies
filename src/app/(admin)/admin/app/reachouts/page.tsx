"use client";

import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  Popconfirm,
  message,
  Modal,
  Col,
  Row,
  Divider,
  Card,
} from "antd";
import axiosPrivate from "@/utils/axios";

const ReachoutsPage: React.FC = () => {
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedContact, setSelectedContact] = useState<any>(null);

  // Fetch contact requests
  const getContacts = async () => {
    setLoading(true);
    try {
      const res = await axiosPrivate.get(`/api/v1/contact-request`);
      if (res && res.data) {
        setContacts(res.data.contacts);
      }
    } catch (error) {
      message.error("Failed to fetch contact requests.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getContacts(); // Get contact requests on component mount
  }, []);

  // Delete contact request
  const handleDelete = async (id: string) => {
    setLoading(true);
    try {
      await axiosPrivate.delete(`/api/v1/contactRequests/${id}`);
      message.success("Contact request deleted successfully");
      getContacts(); // Refresh contact list after delete
    } catch (error) {
      message.error("Failed to delete contact request.");
    } finally {
      setLoading(false);
    }
  };

  // Show contact details in a modal
  const showModal = (contact: any) => {
    setSelectedContact(contact);
    setIsModalVisible(true);
  };

  // Handle modal close
  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedContact(null); // Clear selected contact
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
      title: "Packing Type",
      dataIndex: "packingType",
      key: "packingType",
    },
    {
      title: "Venue",
      dataIndex: "Venue",
      key: "Venue",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: any) => (
        <>
          <Button type="link" onClick={() => showModal(record)}>
            View
          </Button>
          <Popconfirm
            title="Are you sure to delete this contact request?"
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
        <h2 className="text-xl font-bold">Reachouts Management</h2>
      </div>

      {/* Contact Requests Table */}
      <Table
        columns={columns}
        dataSource={contacts}
        rowKey="id"
        loading={loading}
        pagination={{ pageSize: 5 }}
      />

      {/* Modal for viewing contact details */}
      <Modal
        title="Contact Request Details"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={800} // Increased width for better content layout
        style={{ maxWidth: "95%" }} // Ensures responsiveness on smaller screens
      >
        {selectedContact && (
          <Card
            bordered={false}
            style={{
              padding: "20px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Row gutter={24} style={{ marginBottom: "15px" }}>
              <Col span={12}>
                <p>
                  <strong style={{ fontSize: "16px", color: "#333" }}>
                    Name:
                  </strong>{" "}
                  <span style={{ fontSize: "16px" }}>
                    {selectedContact.name}
                  </span>
                </p>
              </Col>
              <Col span={12}>
                <p>
                  <strong style={{ fontSize: "16px", color: "#333" }}>
                    Email:
                  </strong>{" "}
                  <span style={{ fontSize: "16px" }}>
                    {selectedContact.email}
                  </span>
                </p>
              </Col>
            </Row>

            <Row gutter={24} style={{ marginBottom: "15px" }}>
              <Col span={12}>
                <p>
                  <strong style={{ fontSize: "16px", color: "#333" }}>
                    Mobile:
                  </strong>{" "}
                  <span style={{ fontSize: "16px" }}>
                    {selectedContact.mobile}
                  </span>
                </p>
              </Col>
              <Col span={12}>
                <p>
                  <strong style={{ fontSize: "16px", color: "#333" }}>
                    Packing Type:
                  </strong>{" "}
                  <span style={{ fontSize: "16px" }}>
                    {selectedContact.packingType}
                  </span>
                </p>
              </Col>
            </Row>

            <Row gutter={24} style={{ marginBottom: "15px" }}>
              <Col span={12}>
                <p>
                  <strong style={{ fontSize: "16px", color: "#333" }}>
                    Venue:
                  </strong>{" "}
                  <span style={{ fontSize: "16px" }}>
                    {selectedContact.Venue}
                  </span>
                </p>
              </Col>
              <Col span={12}>
                <p>
                  <strong style={{ fontSize: "16px", color: "#333" }}>
                    Address:
                  </strong>{" "}
                  <span style={{ fontSize: "16px" }}>
                    {selectedContact.address}
                  </span>
                </p>
              </Col>
            </Row>

            <Row gutter={24} style={{ marginBottom: "15px" }}>
              <Col span={12}>
                <p>
                  <strong style={{ fontSize: "16px", color: "#333" }}>
                    Pincode:
                  </strong>{" "}
                  <span style={{ fontSize: "16px" }}>
                    {selectedContact.pincode}
                  </span>
                </p>
              </Col>
            </Row>

            <Divider />

            <div style={{ textAlign: "center" }}>
              <Button
                onClick={handleCancel}
                type="primary"
                style={{ padding: "0 30px", fontSize: "16px" }}
              >
                Close
              </Button>
            </div>
          </Card>
        )}
      </Modal>
    </div>
  );
};

export default ReachoutsPage;
