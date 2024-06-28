/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Form, Input, message } from "antd";
import styles from "./index.module.scss";
import { initEmployee } from "./initData";
import PositionForm from "./PositionForm";
import { prepareInitValueForm, prepareValueForm } from "@/utils";

export default function FormData({ isCreating = false, detailEmployee, onSubmit }) {
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const positions = Form.useWatch(["positions"], form);

    const getInitData = () => {
        if (isCreating) {
            return initEmployee;
        }
        return prepareInitValueForm({ ...detailEmployee });
    };

    const handleSubmit = (values) => {
        const valuePrepare = prepareValueForm(values);
        // console.log("valuePrepare", valuePrepare);
        onSubmit?.(values);
        messageApi.open({
            type: "success",
            content: isCreating ? "Create employee success" : "Update employee success",
        });
    };
    return (
        <Form
            className={styles.form}
            form={form}
            id="form-create-employee"
            layout="vertical"
            initialValues={getInitData()}
            onFinish={handleSubmit}
        >
            {contextHolder}
            <Form.Item
                name="name"
                label="Name"
                rules={[
                    {
                        required: true,
                        message: "",
                    },
                ]}
                style={{ width: 400 }}
            >
                <Input placeholder="Enter employee name" />
            </Form.Item>

            <PositionForm form={form} positions={positions} />
        </Form>
    );
}
