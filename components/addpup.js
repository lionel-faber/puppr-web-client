import { Form, Input, InputNumber, Button, Select } from "antd";
import styles from "./AddPup.module.css";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export default function AddPup() {
  const [form] = Form.useForm();

  const onFinish = async (pet) => {
    var formData = new FormData();
    formData.append("name", pet.name);
    formData.append("gender", pet.gender);
    formData.append("age", pet.age);
    formData.append("about", pet.about);
    var photo = document.querySelector('input[type="file"]');
    formData.append("petPhoto", photo.files[0]);
    var requestOptions = {
      method: "POST",
      body: formData,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://localhost:5000/api/pets/add",
        requestOptions
      );
      if (response.status == 200) {
        form.resetFields();
        alert("Pet added!");
      } else {
        alert("Unexpected response: ", response);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form form={form} {...layout} onFinish={onFinish}>
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, message: "Please enter a name" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="gender"
        label="Gender"
        rules={[{ required: true, message: "Please choose a gender" }]}
      >
        <Select>
          <Select.Option value="male">male</Select.Option>
          <Select.Option value="female">female</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="age"
        label="Age"
        rules={[
          {
            type: "number",
            required: true,
            min: 0,
            max: 99,
            message: "Please enter the age",
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        name="about"
        label="Introduction"
        rules={[{ required: true, message: "A few words would be nice" }]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        name="petPhoto"
        label="Photo"
        rules={[{ required: true, message: "A picture says a thousand words" }]}
      >
        <Input type="file" accept="image/*" capture="camera" />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" className={styles.formButton}>
          Submit
        </Button>
        <Button
          htmlType="button"
          onClick={onReset}
          className={styles.formButton}
        >
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
}

export async function getStaticProps() {}
