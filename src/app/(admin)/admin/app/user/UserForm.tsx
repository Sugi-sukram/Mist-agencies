import React, { useEffect } from "react";
import { Form, Input, InputNumber, Button } from "antd";

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
        ...initialValues, // Spread initialValues to override defaults
      }}
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, message: "Please input the user's name!" }]}
      >
        <Input placeholder="Enter name" />
      </Form.Item>

      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true, message: "Please input the email!" }]}
      >
        <Input placeholder="Enter email" />
      </Form.Item>

      <Form.Item
        name="mobile"
        label="Mobile"
        rules={[{ required: true, message: "Please input the mobile number!" }]}
      >
        <Input placeholder="Enter mobile number" />
      </Form.Item>

      <Form.Item
        name="city"
        label="City"
        rules={[{ required: true, message: "Please input the city!" }]}
      >
        <Input placeholder="Enter city" />
      </Form.Item>

      <Form.Item
        name="state"
        label="State"
        rules={[{ required: true, message: "Please input the state!" }]}
      >
        <Input placeholder="Enter state" />
      </Form.Item>

      <Form.Item
        name="country"
        label="Country"
        rules={[{ required: true, message: "Please input the country!" }]}
      >
        <Input placeholder="Enter country" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UserForm;
