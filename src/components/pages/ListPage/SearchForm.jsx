import { cleanObject } from "@/utils";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Flex, Form, Input } from "antd";
import { useSearchParams } from "react-router-dom";

export default function SearchForm() {
    const keySeach = "search";
    const [searchParams, setSearchParams] = useSearchParams();
    const initialValues = {
        [keySeach]: "",
    };
    console.log("searchParams", searchParams.has(keySeach));
    const onSubmit = (value) => {
        setSearchParams(cleanObject(value));
    };
    return (
        <Form layout="inline" initialValues={initialValues} onFinish={onSubmit}>
            <Flex gap={20} wrap>
                <Form.Item name={keySeach}>
                    <Input placeholder="Search Name" style={{ width: 400 }} />
                </Form.Item>
                <Button icon={<SearchOutlined />} type="primary" htmlType="submit">
                    Search
                </Button>
            </Flex>
        </Form>
    );
}
