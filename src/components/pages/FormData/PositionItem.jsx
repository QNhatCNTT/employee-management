/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { DeleteOutlined } from "@ant-design/icons";
import { Form, Select, Flex, Button } from "antd";
import React from "react";
import { initToolLanguageResource } from "./initData";
import ToolLanguageItem from "./ToolLanguageItem";
import classNames from "classnames";
import styles from "./PositionItem.module.scss";

export default function PositionItem({ indexP, field, form, remove }) {
    const positionList = form.getFieldValue(["positions"]);
    return (
        <div className={styles.positionRoot}>
            <Flex gap={24}>
                <Form.Item
                    label="Position"
                    name={[indexP, "positionResourceId"]}
                    rules={[
                        {
                            required: true,
                            message: "",
                        },
                    ]}
                    style={{ width: 400 }}
                >
                    <Select allowClear placeholder="Select position" getPopupContainer={(node) => node.parentNode}>
                        <Select.Option value={1}>Front-end Developer</Select.Option>
                        <Select.Option value={2}>Back-end Developer</Select.Option>
                        <Select.Option value={3}>Designer</Select.Option>
                    </Select>
                </Form.Item>
                <Flex vertical className={classNames(styles.tempDel, {
                    [styles.hidden]: positionList.length === 1,
                })}>
                    <div className={styles.temp}></div>
                    <Button
                        icon={<DeleteOutlined />}
                        className={styles.delBtn}
                        onClick={() => remove(field.name)}
                        danger
                    >
                        Delete Position
                    </Button>
                </Flex>
            </Flex>
            <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) =>
                    prevValues.positionResourceId !== currentValues.positionResourceId
                }
            >
                {({ getFieldValue }) => {
                    const positionValue = getFieldValue(["positions", indexP, "positionResourceId"]);
                    return positionValue ? (
                        <Form.List name={[indexP, "toolLanguages"]}>
                            {(fields, { add, remove }, { errors }) => {
                                return (
                                    <Flex gap={24} vertical className={styles.toolLanguages}>
                                        <Flex gap={24} wrap>
                                            {fields.map((field, indexT) => {
                                                return (
                                                    <ToolLanguageItem
                                                        key={field.key}
                                                        indexT={indexT}
                                                        indexP={indexP}
                                                        field={field}
                                                        form={form}
                                                        remove={remove}
                                                    />
                                                );
                                            })}
                                        </Flex>
                                        <Button
                                            onClick={() => add(initToolLanguageResource)}
                                            type="primary"
                                            style={{ width: 150 }}
                                        >
                                            Add Tool/Language
                                        </Button>
                                    </Flex>
                                );
                            }}
                        </Form.List>
                    ) : null;
                }}
            </Form.Item>
        </div>
    );
}
