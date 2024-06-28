/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button, Flex, Form } from "antd";
import { initPositionResource } from "./initData";
import PositionItem from "./PositionItem";
import styles from "./PositionForm.module.scss";
export default function PositionForm({ form, isCreating, positions }) {
    return (
        <Form.List name={"positions"}>
            {(fields, { add, remove }, { errors }) => {
                return (
                    <Flex gap={24} vertical>
                        {fields.map((field, indexP) => {
                            return (
                                <PositionItem
                                    key={field.key}
                                    indexP={indexP}
                                    field={field}
                                    form={form}
                                    remove={() => remove(field.name)}
                                />
                            );
                        })}
                        <Flex>
                            <Button onClick={() => add(initPositionResource)}>Add position</Button>
                        </Flex>
                    </Flex>
                );
            }}
        </Form.List>
    );
}
