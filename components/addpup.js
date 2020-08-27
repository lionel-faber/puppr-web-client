import { Form, Input, InputNumber, Upload, Button, Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons'
import styles from "./AddPup.module.css"

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

    const onFinish = pet => {
        // var options = {
        //     'method': 'POST',
        //     'url': 'puppr-india.herokuapp.com/api/pets/add',
        //     'headers': {
        //     },
        //     formData: {
        //         'petPhoto': {
        //             // 'value': fs.createReadStream(pet.photo),
        //             // 'options': {
        //             //     'filename': '4.jpeg',
        //             //     'contentType': null
        //             // }
        //         },
        //         'name': pet.name,
        //         'gender': pet.gender,
        //         'age': pet.age,
        //         'about': pet.about
        //     }
        // };
        // request(options, function (error, response) {
        //     if (error) throw new Error(error);
        //     console.log(response.body);
        // });
        console.log(pet);
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <Form form={form} {...layout} onFinish={onFinish}>
            <Form.Item name={['name']} label="Name" rules={[{ required: true, }]}>
                <Input />
            </Form.Item>
            <Form.Item name={['gender']} label="Gender" rules={[{ required: true }]}>
                <Select>
                    <Select.Option value="male">male</Select.Option>
                    <Select.Option value="female">female</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item name={['age']} label="Age" rules={[{ type: 'number', required: true, min: 0, max: 99 }]}>
                <InputNumber />
            </Form.Item>
            <Form.Item name={['introduction']} label="Introduction" rules={[{ required: true }]}>
                <Input.TextArea />
            </Form.Item>
            <Form.Item
                name={['photo']}
                label="Photo"
                valuePropName="photo"
                rules={[{ required: true }]}
            >
                <Upload name="logo" listType="picture">
                    <Button>
                        <UploadOutlined /> Click to upload
                    </Button>
                </Upload>
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" className={styles.formButton}>
                    Submit
                </Button>
                <Button htmlType="button" onClick={onReset} className={styles.formButton}>
                    Reset
                </Button>
            </Form.Item>
        </Form>
    )
}

export async function getStaticProps() {


}