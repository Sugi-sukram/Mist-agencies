import React from "react";
import { Form, Input, Button, Select, message } from "antd";
import { PhoneOutlined, MailOutlined, HomeOutlined } from "@ant-design/icons";
import { ContactDetails } from "@/config/Contact-details";
import axiosPrivate from "@/utils/axios";
import { BiPhoneCall } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";

const { Option } = Select;

const ContactForm = () => {
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
              { required: true, message: "Please enter your contact number!" },
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
              { required: true, message: "Please select the number of units!" },
            ]}
          >
            <Select placeholder="Number of Units Required*" className="w-full">
              <Option value="1 - 5">1 - 5</Option>
              <Option value="5 - 10">5 - 10</Option>
              <Option value="10 - 15">10 - 15</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Choose venue"
            name="Venue"
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
            <Button
              type="primary"
              htmlType="submit"
              className="bg-[#94C245] w-full md:w-auto"
            >
              SUBMIT
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
