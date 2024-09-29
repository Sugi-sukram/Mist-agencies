import React from "react";
import { Form, Input, Button, Select } from "antd";
import { PhoneOutlined, MailOutlined, HomeOutlined } from "@ant-design/icons";
import { ContactDetails } from "@/config/Contact-details"; // Ensure you have this file set up

import { BiPhoneCall } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import MapComponent from "../MapComponent";

const { Option } = Select;

const ContactForm = () => {
  const onFinish = (values: any) => {
    console.log("Form values: ", values);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between mb-8 pl-40 pr-40 p-10 gap-10">
        {/* Address Section */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0 text-left">
          <div className="font-semibold text-4xl">Address</div>
          {/* Address Line */}
          <div className="flex flex-row items-start space-x-2 mt-5">
            <MdOutlineLocationOn
              color="#3A82D7"
              className="font-semibold"
              fontSize={40}
            />
            <p className="text-2xl">{ContactDetails.address}</p>
          </div>

          {/* Email Line */}
          <div className="mt-4 flex flex-row items-center space-x-2">
            <MdOutlineEmail
              color="#3A82D7"
              className="font-semibold"
              fontSize={22}
            />
            <p className="text-2xl">{ContactDetails.email}</p>
          </div>

          {/* Phone Number Line */}
          <div className="mt-2 flex flex-row items-center space-x-2">
            <BiPhoneCall fill="#3A82D7" fontSize={22} />
            <p className="text-2xl">
              +91{" "}
              {ContactDetails.phoneNumber.map((pn, index) => (
                <React.Fragment key={index}>
                  {pn}
                  {index !== ContactDetails.phoneNumber.length - 1 && " / "}
                </React.Fragment>
              ))}
            </p>
          </div>
          <p className="mt-2 text-2xl">GSTIN: {ContactDetails.GSTIN}</p>
        </div>

        {/* Contact Form Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-lg font-semibold mb-4">Get In Touch With Us</h2>
          <Form layout="vertical" onFinish={onFinish} className="space-y-4">
            <Form.Item
              label="Full Name"
              name="fullname"
              rules={[
                { required: true, message: "Please enter your full name!" },
              ]}
            >
              <Input placeholder="Full Name*" />
            </Form.Item>

            <Form.Item
              label="Contact Number"
              name="contact"
              rules={[
                {
                  required: true,
                  message: "Please enter your contact number!",
                },
              ]}
            >
              <Input placeholder="Contact Number*" />
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
              <Input placeholder="Email Address*" />
            </Form.Item>

            <Form.Item
              label="Packing Type"
              name="packingType"
              rules={[
                { required: true, message: "Please select a packing type!" },
              ]}
            >
              <Select placeholder="Packing Type*">
                <Option value="25 Litre">25 Litre</Option>
                <Option value="50 Litre">50 Litre</Option>
                <Option value="100 Litre">100 Litre</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Choose"
              name="choose"
              rules={[{ required: true, message: "Please select an option!" }]}
            >
              <Select placeholder="Choose*">
                <Option value="Marriage Hall">Marriage Hall</Option>
                <Option value="Party">Party</Option>
                <Option value="Meeting">Meeting</Option>
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
              <Select placeholder="Number of Units Required*">
                <Option value="1 - 5">1 - 5</Option>
                <Option value="5 - 10">5 - 10</Option>
                <Option value="10 - 15">10 - 15</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Full Address"
              name="address"
              rules={[
                {
                  required: true,
                  message: "Please enter your full address!",
                },
              ]}
            >
              <Input.TextArea placeholder="Enter Your Full Address" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full">
                SUBMIT
              </Button>
            </Form.Item>
          </Form>
        </div>

        {/* Map Section */}
        {/* <div className="w-full md:w-1/2">
        <h2 className="text-lg font-semibold mb-4">Our Location</h2>
      </div> */}
      </div>
      <div className="w-full h-[500px]">
        <MapComponent />
      </div>
    </>
  );
};

export default ContactForm;
