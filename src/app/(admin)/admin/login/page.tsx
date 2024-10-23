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
import axiosPrivate from "@/utils/axios";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";
const { Title } = Typography;
const cookieStore = new Cookies();


const LoginPage: React.FC = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const onFinish = async(values: any) => {
    if (values.remember) {
      localStorage.setItem('username', values.username);
      localStorage.setItem('password', values.password); 
    } else {
      sessionStorage.setItem('username', "");
      sessionStorage.setItem('password', ""); 
    }
    const { username, password } = values;
    const res = await axiosPrivate("/api/v1/login", {
      method: "post",
      data: { username, password },
    });
    if (res && res.data && res.data.status) {
      message.success(res.data.message);
      form.resetFields();
      cookieStore.set("token", res.data.token, {
        path: "/",
      });
      cookieStore.set("pk", res.data.publicKey, {
        path: "/",
      });
      cookieStore.set("userId", res.data.user.id, {
        path: "/",
      });
      router.push("/admin/app/dashboard");
    }
  };
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    if (storedUsername && storedPassword) {
      form.setFieldsValue({
        username: storedUsername,
        password: storedPassword,
        remember: true, 
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
