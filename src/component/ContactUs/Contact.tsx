import React from "react";
import { Form, Input, Button, Select, message } from "antd";
import { PhoneOutlined, MailOutlined, HomeOutlined } from "@ant-design/icons";
import { ContactDetails } from "@/config/Contact-details";
import axiosPrivate from "@/utils/axios";
import { BiPhoneCall } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import Image from "next/image";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import MapComponent from "../MapComponent";

const { Option } = Select;

const ContactForm = () => {
  const ProductPricing = [
    {
      size: "300 ml",
      price: 150,
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSaRa5iEJU1LOIdN6FGD2wjMxKT-tc7qeqsVZKwOKPj9aCiMLCgFec7BvaSBoNLwaz8slU7R6CDa_8BqUHnXlPqCgb8Jmhbi-BJ_0v_bYn7C2Ib8TIDHkpqIw",
    },
    {
      size: "500 ml",
      price: 150,
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSaRa5iEJU1LOIdN6FGD2wjMxKT-tc7qeqsVZKwOKPj9aCiMLCgFec7BvaSBoNLwaz8slU7R6CDa_8BqUHnXlPqCgb8Jmhbi-BJ_0v_bYn7C2Ib8TIDHkpqIw",
    },
    {
      size: "1 Ltr",
      price: 150,
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSaRa5iEJU1LOIdN6FGD2wjMxKT-tc7qeqsVZKwOKPj9aCiMLCgFec7BvaSBoNLwaz8slU7R6CDa_8BqUHnXlPqCgb8Jmhbi-BJ_0v_bYn7C2Ib8TIDHkpqIw",
    },
    {
      size: "2 Ltr",
      price: 150,
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSaRa5iEJU1LOIdN6FGD2wjMxKT-tc7qeqsVZKwOKPj9aCiMLCgFec7BvaSBoNLwaz8slU7R6CDa_8BqUHnXlPqCgb8Jmhbi-BJ_0v_bYn7C2Ib8TIDHkpqIw",
    },
    {
      size: "5 Ltr",
      price: 150,
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSaRa5iEJU1LOIdN6FGD2wjMxKT-tc7qeqsVZKwOKPj9aCiMLCgFec7BvaSBoNLwaz8slU7R6CDa_8BqUHnXlPqCgb8Jmhbi-BJ_0v_bYn7C2Ib8TIDHkpqIw",
    },
    {
      size: "20 Ltr",
      price: 150,
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSaRa5iEJU1LOIdN6FGD2wjMxKT-tc7qeqsVZKwOKPj9aCiMLCgFec7BvaSBoNLwaz8slU7R6CDa_8BqUHnXlPqCgb8Jmhbi-BJ_0v_bYn7C2Ib8TIDHkpqIw",
    },
  ];
  const [form] = Form.useForm();
  const onFinish = async (values: any) => {
    const res = await axiosPrivate("api/v1/contact-request", {
      method: "post",
      data: values,
    });
    if (res && res.data && res.data.status) {
      message.success(res.data.message);
      form.resetFields();
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between mb-8 p-4 md:p-10 gap-10">

        {/* Contact Form Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-lg font-semibold mb-4 text-[#3A82D7]">
            Get In Touch With Us
          </h2>
          <Form
            layout="vertical"
            form={form}
            onFinish={onFinish}
            className="space-y-4"
          >
            <Form.Item
              label="Full Name"
              name="name"
              rules={[
                { required: true, message: "Please enter your full name!" },
              ]}
            >
              <Input placeholder="Full Name*" className="bg-[#E2EDFA] w-full" />
            </Form.Item>
            <Form.Item
              label="Contact Number"
              name="mobile"
              rules={[
                {
                  required: true,
                  message: "Please enter your contact number!",
                },
              ]}
            >
              <Input
                placeholder="Contact Number*"
                maxLength={10}
                className="bg-[#E2EDFA] w-full"
                type="number"
              />
            </Form.Item>
            <Form.Item
              label="Email Address"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please enter a valid email address!",
                },
              ]}
            >
              <Input
                placeholder="Email Address*"
                className="bg-[#E2EDFA] w-full"
              />
            </Form.Item>
            <Form.Item
              label="Packing Type"
              name="packingType"
              rules={[
                { required: true, message: "Please select a packing type!" },
              ]}
            >
              <Select placeholder="Packing Type*" className="w-full">
                <Option value="25 Litre">25 Litre</Option>
                <Option value="50 Litre">50 Litre</Option>
                <Option value="100 Litre">100 Litre</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Number of Units Required"
              name="units"
              rules={[
                {
                  required: true,
                  message: "Please select the number of units!",
                },
              ]}
            >
              <Select
                placeholder="Number of Units Required*"
                className="w-full"
              >
                <Option value="1 - 5">1 - 5</Option>
                <Option value="5 - 10">5 - 10</Option>
                <Option value="10 - 15">10 - 15</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Choose venue"
              name="venue"
              rules={[{ required: true, message: "Please select an option!" }]}
            >
              <Select placeholder="Choose*" className="w-full">
                <Option value="Marriage Hall">Marriage Hall</Option>
                <Option value="Party">Party</Option>
                <Option value="Meeting">Meeting</Option>
                <Option value="Office">Office</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Full Address"
              name="address"
              rules={[
                { required: true, message: "Please enter your full address!" },
              ]}
            >
              <Input.TextArea
                placeholder="Enter Your Full Address"
                className="bg-[#E2EDFA] w-full"
              />
            </Form.Item>
            <Form.Item>
              {/* <button
                // type="primary"
                // htmlType="submit"
                className="bg-[#94C245] w-full md:w-auto"
              >
                SUBMIT
              </button> */}
            </Form.Item>
          </Form>
        </div>

        <div className="w-full md:w-1/2 mb-6 md:mb-0 text-left flex-col">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Product Pricing</h3>
            <div className="flex flex-col w-full  gap-3">
              {ProductPricing.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border p-4 rounded-md shadow-sm"
                >
                  <Image
                    src={item.image}
                    alt="Product"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <div className="block text-sm text-[3A82D7]">
                      {item.size}
                    </div>
                    <div className="block text-sm text-[3A82D7]">
                      {item.size}
                    </div>
                    <div className="block text-xs text-gray-500">
                      ₹ {item.price}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 border-[1px] rounded-full border-[gray] px-4 py-1 ">
                    {/* <Button
                      icon={}
                     
                    /> */}
                    <MinusOutlined  className="border-none bg-transparent rounded-full" />
                    <input className="!w-10 text-center" defaultValue={1} />
                    <PlusOutlined  className="border-none bg-transparent rounded-full ml-1" />
                    {/* <Button
                      icon={<PlusOutlined />}
                      className="border-none bg-transparent rounded-full"
                    /> */}
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500">
                      ₹ {item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {/* Total and Submit */}
            <div className="flex justify-between mt-6">
              <span className="text-lg font-bold">Total: ₹ 3000</span>
              <Button
                type="primary"
                size="large"
                className="hover:bg-blue-600 transition duration-200"
              >
                SUBMIT
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between mb-8 p-4 md:p-10 gap-10">
        {/* Address Section */}

        <div className="w-full md:w-1/2 mb-6 md:mb-0 text-left flex-col">
        <div className="font-semibold text-2xl md:text-4xl leading-tight text-gray-800">
          Address
        </div>
        <div className="flex flex-row items-start space-x-3 mt-5">
          <MdOutlineLocationOn
            color="#3A82D7"
            className="font-semibold"
            fontSize={40}
          />
          <p className="text-lg md:text-2xl leading-relaxed text-gray-700">
            {ContactDetails.address}
          </p>
        </div>
        <div className="mt-4 flex flex-row items-center space-x-3">
          <MdOutlineEmail
            color="#3A82D7"
            className="font-semibold"
            fontSize={22}
          />
          <p className="text-lg md:text-2xl leading-relaxed text-gray-700">
            {ContactDetails.email}
          </p>
        </div>
        <div className="mt-2 flex flex-row items-center space-x-3">
          <BiPhoneCall fill="#3A82D7" fontSize={22} />
          <p className="text-lg md:text-2xl leading-relaxed text-gray-700">
            +91{" "}
            {ContactDetails.phoneNumber.map((pn, index) => (
              <React.Fragment key={index}>
                {pn}
                {index !== ContactDetails.phoneNumber.length - 1 && " / "}
              </React.Fragment>
            ))}
          </p>
        </div>
        <p className="mt-4 text-lg md:text-2xl leading-relaxed text-gray-700">
          <b>GSTIN</b>: {ContactDetails.GSTIN}
        </p>
      </div>

        {/* map viewer*/}
        <div className="w-full md:w-1/2">
        <MapComponent />
        </div>

       
      </div>
     
    </div>
  );
};

export default ContactForm;