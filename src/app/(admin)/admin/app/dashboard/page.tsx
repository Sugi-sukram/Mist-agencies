"use client";

import React, { useState, useEffect } from "react";
import { Card, Row, Col, Statistic, Table, Button, Divider, Tooltip } from "antd";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as ChartTooltip, Legend, ResponsiveContainer } from "recharts";
import { UserOutlined, AppstoreAddOutlined, FileTextOutlined } from "@ant-design/icons";
import axiosPrivate from "@/utils/axios";

// Dummy data for illustration
const dummyChartData = [
  { name: "Jan", users: 30, requests: 12 },
  { name: "Feb", users: 45, requests: 20 },
  { name: "Mar", users: 60, requests: 25 },
  { name: "Apr", users: 80, requests: 35 },
  { name: "May", users: 120, requests: 45 },
];

const Dashboard: React.FC = () => {
  const [usersCount, setUsersCount] = useState(0);
  const [productsCount, setProductsCount] = useState(0);
  const [contactRequestsCount, setContactRequestsCount] = useState(0);
  const [recentRequests, setRecentRequests] = useState<any[]>([]);

  useEffect(() => {
    // Fetch data for Users, Products, Contact Requests, etc.
    const getDashboardData = async () => {
      try {
        const userRes = await axiosPrivate.get("/api/v1/user"); // Get users count
        const productRes = await axiosPrivate.get("/api/v1/products"); // Get products count
        const contactRes = await axiosPrivate.get("/api/v1/contact-request"); // Get contact requests count

        setUsersCount(userRes.data.users.length); // Assuming users is an array
        setProductsCount(productRes.data.products.length); // Assuming products is an array
        setContactRequestsCount(contactRes.data.contacts.length); // Assuming contacts is an array

        // Get recent contact requests for table
        setRecentRequests(contactRes.data.contacts);
      } catch (error) {
        console.error("Failed to fetch dashboard data", error);
      }
    };

    getDashboardData();
  }, []);

  // Define the columns for the contact requests table
  const contactColumns = [
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
          <Button type="link" style={{ color: "#1890ff" }}>
            View
          </Button>
        </>
      ),
    },
  ];

  return (
    <div className="p-6 h-full overflow-auto ">
      {/* User Statistics */}
      <Row gutter={16} justify="space-around">
        <Col span={7}>
          <Card
            className="dashboard-card"
            hoverable
            style={{ background: "#e6f7ff", borderRadius: "15px" }}
          >
            <Statistic
              title="Total Users"
              value={usersCount}
              prefix={<UserOutlined style={{ fontSize: 24 }} />}
              style={{ textAlign: "center", color: "#1890ff" }}
            />
          </Card>
        </Col>

        {/* Product Statistics */}
        <Col span={7}>
          <Card
            className="dashboard-card"
            hoverable
            style={{ background: "#f6ffed", borderRadius: "15px" }}
          >
            <Statistic
              title="Total Products"
              value={productsCount}
              prefix={<AppstoreAddOutlined style={{ fontSize: 24 }} />}
              style={{ textAlign: "center", color: "#52c41a" }}
            />
          </Card>
        </Col>

        {/* Contact Request Statistics */}
        <Col span={7}>
          <Card
            className="dashboard-card"
            hoverable
            style={{ background: "#fff7e6", borderRadius: "15px" }}
          >
            <Statistic
              title="Total Contact Requests"
              value={contactRequestsCount}
              prefix={<FileTextOutlined style={{ fontSize: 24 }} />}
              style={{ textAlign: "center", color: "#faad14" }}
            />
          </Card>
        </Col>
      </Row>

      <Divider />

      {/* Chart Section */}
      <Row gutter={16}>
        <Col span={12}>
          <Card title="User Growth Over Time" bordered={false} style={{ backgroundColor: "#f0f5ff" }}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dummyChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <ChartTooltip />
                <Legend />
                <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        <Col span={12}>
          <Card title="Contact Requests Over Time" bordered={false} style={{ backgroundColor: "#e6fffb" }}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dummyChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <ChartTooltip />
                <Legend />
                <Line type="monotone" dataKey="requests" stroke="#82ca9d" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>

      <Divider />

      {/* Recent Contact Requests Table */}
      <Card
        title="Recent Contact Requests"
        className="dashboard-card"
        bordered={false}
        style={{
          backgroundColor: "#f9f9f9",
          borderRadius: "15px",
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Table
          columns={contactColumns}
          dataSource={recentRequests}
          rowKey="id"
          pagination={{ pageSize: 5 }}
          bordered
          style={{ backgroundColor: "#fff" }}
        />
      </Card>
    </div>
  );
};

export default Dashboard;
