import React, { useEffect } from "react";
import { Form, Input, InputNumber, Button, Switch, Select } from "antd";
import { unitOptions } from "@/config/unitOptions"; // Assuming you have unitOptions for unit selection
const { Option } = Select;

interface UserFormProps {
  onSubmit: (values: any) => void;
  initialValues?: any; // Allow passing initial values for editing
  loading?: boolean; // Accept loading state from parent component
}

const UserForm: React.FC<UserFormProps> = ({
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
      name="userForm"
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        name: "",
        email: "",
        mobile: "",
        city: "",
        state: "Tamil Nadu",
        country: "India",
        isActive: true,
        isProductOwner: false,
        ...initialValues, // Spread initialValues to override defaults
      }}
    >
      {/* Name */}
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, message: "Please input the user's name!" }]}
      >
        <Input placeholder="Enter name" />
      </Form.Item>

      {/* Email */}
      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true, message: "Please input the email!" }]}
      >
        <Input placeholder="Enter email" />
      </Form.Item>

      {/* Mobile */}
      <Form.Item
        name="mobile"
        label="Mobile"
        rules={[
          { required: true, message: "Please input the mobile number!" },
          {
            pattern: /^[0-9]{10}$/,
            message: "Mobile number must be 10 digits",
          },
        ]}
      >
        <Input placeholder="Enter mobile number" />
      </Form.Item>

      {/* Profile URL */}
      <Form.Item
        name="profileURL"
        label="Profile URL"
        rules={[{ type: "url", message: "Please input a valid URL!" }]}
      >
        <Input placeholder="Enter profile URL" />
      </Form.Item>

      {/* Address */}
      <Form.Item
        name="address"
        label="Address"
        rules={[{ required: true, message: "Please input the address!" }]}
      >
        <Input placeholder="Enter address" />
      </Form.Item>

      {/* Pincode */}
      <Form.Item
        name="pincode"
        label="Pincode"
        rules={[{ required: true, message: "Please input the pincode!" }]}
      >
        <Input placeholder="Enter pincode" />
      </Form.Item>

      {/* City */}
      <Form.Item
        name="city"
        label="City"
        rules={[{ required: true, message: "Please input the city!" }]}
      >
        <Input placeholder="Enter city" />
      </Form.Item>

      {/* State */}
      <Form.Item
        name="state"
        label="State"
        rules={[{ required: true, message: "Please input the state!" }]}
      >
        <Input placeholder="Enter state" />
      </Form.Item>

      {/* Country */}
      <Form.Item
        name="country"
        label="Country"
        rules={[{ required: true, message: "Please input the country!" }]}
      >
        <Input placeholder="Enter country" />
      </Form.Item>

      {/* Password */}
      <Form.Item
        name="password"
        label="Password"
        rules={[
          { required: true, message: "Please input the password!" },
          { min: 6, message: "Password must be at least 6 characters" },
        ]}
      >
        <Input.Password placeholder="Enter password" />
      </Form.Item>

      {/* Confirm Password
      <Form.Item
        name="confirmPassword"
        label="Confirm Password"
        rules={[
          { required: true, message: "Please confirm the password!" },
          {
            validator: (_, value) =>
              value === form.getFieldValue("password")
                ? Promise.resolve()
                : Promise.reject("Passwords do not match!"),
          },
        ]}
      >
        <Input.Password placeholder="Confirm password" />
      </Form.Item> */}

      {/* Is Active */}
      <Form.Item name="isActive" label="Is Active" valuePropName="checked">
        <Switch />
      </Form.Item>

      {/* Is Product Owner */}
      <Form.Item name="isProductOwner" label="Is Product Owner" valuePropName="checked">
        <Switch />
      </Form.Item>

    

      {/* Submit Button */}
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UserForm;
