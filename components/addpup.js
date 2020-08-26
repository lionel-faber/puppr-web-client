import { Form, Input, Upload, InputNumber, Button, Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const onFinish = values => {
    console.log(values);
};

const onReset = () => {
    form.resetFields();
};

export default function AddPup() {
    return (
        <Form onFinish={onFinish}>
            <Form.Item name={['pet', 'name']} label="Name" rules={[{ required: true, }]}>
                <Input />
            </Form.Item>
            <Form.Item name={['pet', 'gender']} label="Gender" rules={[{ required: true }]}>
                <Select>
                    <Select.Option value="male">male</Select.Option>
                    <Select.Option value="female">female</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item name={['pet', 'age']} label="Age" rules={[{ type: 'number', required: true, min: 0, max: 99 }]}>
                <InputNumber />
            </Form.Item>
            <Form.Item name={['pet', 'introduction']} label="Introduction" rules={[{ required: true }]}>
                <Input.TextArea />
            </Form.Item>
            <Form.Item
                name={['pet', 'photo']}
                label="Photo"
                valuePropName="photo"
                rules={[{ required: true }]}
            >
                <Upload name="logo" action="/upload.do" listType="picture">
                    <Button>
                        <UploadOutlined /> Click to upload
                    </Button>
                </Upload>
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                <Button htmlType="button" onClick={onReset}>
                    Reset
                </Button>
            </Form.Item>
        </Form>
    )
}
