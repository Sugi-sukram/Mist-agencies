"use client";
import React, { useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Typography,
  message,
  Space,
} from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import homePageImage from "@/assets/home-page_02-10.jpg";

import Image from "next/image";
import appIcon from "@/assets/appIcon.png";
const { Title } = Typography;

const LoginPage: React.FC = () => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    // If "Remember Me" is checked, store username and password in localStorage
    if (values.remember) {
      localStorage.setItem('username', values.username);
      localStorage.setItem('password', values.password); // Be careful with storing passwords!
    } else {
      sessionStorage.setItem('username', values.username);
      sessionStorage.setItem('password', values.password); // Only persist for the session
    }

    message.success('Login Successful!');
    console.log('Received values of form: ', values);
  };
  useEffect(() => {
    // Check localStorage for stored username/password if "Remember Me" was used
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (storedUsername && storedPassword) {
      form.setFieldsValue({
        username: storedUsername,
        password: storedPassword,
        remember: true, // Automatically check the "Remember Me" box
      });
    }
  }, [form]);

  return (
    <section
      className="bg-blue-100 text-center flex align-middle justify-center relative bg-cover bg-center h-screen bg-no-repeat "
      style={{
        backgroundImage: `url(${homePageImage.src})`,
      }}
    >
      <div className="flex justify-center items-center bg-transparent">
        <div className="bg-white p-6 rounded-lg shadow-lg  max-w-md text-center">
          <div className="mb-8 text-center">
            <div className="flex justify-center items-center mb-4">
              <Image
                src={appIcon.src}
                alt="Mist Agencies Logo"
                width={80}
                height={80}
              />
            </div>
            <Title level={1} className=" font-bold">
              Mist Agencies
            </Title>
            <Title level={4} className="mt-2 font-semibold">
              Welcome Back!
            </Title>
            <p>Log in to your account</p>
          </div>
          <Form
           form={form}
            name="login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
                className="py-2 px-4 border border-gray-300 rounded-md w-full"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Password"
                className="py-2 px-4 border border-gray-300 rounded-md w-full"
              />
            </Form.Item>
            <Form.Item className="flex justify-between items-center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a className="text-blue-600 hover:underline" href="">
                Forgot password?
              </a>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
          <Space className="mt-4">
            <p>
              Don't have an account?{" "}
              <a href="/register" className="text-blue-600 hover:underline">
                Register now!
              </a>
            </p>
          </Space>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
