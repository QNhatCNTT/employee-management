/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { DeleteOutlined, InfoCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { DatePicker, Flex, Form, Select, Input, Button, Upload, Image } from "antd";
import styles from "./ToolLanguageItem.module.scss";
import classNames from "classnames";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
const { TextArea } = Input;
export default function ToolLanguageItem({ indexP, indexT, field, form, remove }) {
    const { status } = Form.Item.useStatus();
    const toolLanguages = form.getFieldValue(["positions", indexP, "toolLanguages"]);
    const images = toolLanguages[indexT]?.images;

    const [fileList, setFileList] = useState([]);

    useEffect(() => {
        const formattedFileList = images.map((item, index) => ({
            uid: `${item?.cdnUrl}-${new Date().getTime()}`,
            name: `Image ${item.id}`,
            status: "done",
            url: item?.cdnUrl,
            cdnUrl: item?.cdnUrl,
            order: index,
        }));
        setFileList(formattedFileList);
    }, []);

    const handleImageChange = (fileList, field) => {
        const images = fileList.map((el) => ({
            ...el,
            cdnUrl: el.originFileObj,
        }));
        setFileList(images);
        form.setFieldValue(field.name, images);
    };

    const customRequest = ({ file, onSuccess, onError, onProgress }) => {
        setTimeout(() => {
            const uploadProgress = setInterval(() => {
                setFileList((prevList) => {
                    return prevList.map((item) => {
                        if (item.uid === file.uid) {
                            const newPercent = item.percent + 10;
                            if (newPercent < 100) {
                                return { ...item, percent: newPercent };
                            } else {
                                clearInterval(uploadProgress);
                                return { ...item, status: "done", percent: 100 };
                            }
                        }
                        return item;
                    });
                });
            }, 200);
        });
    };
    return (
        <Flex vertical className={styles.toolLanguagueRoot}>
            <Flex gap={24} justify="space-between">
                <Form.Item
                    name={[indexT, "toolLanguageResourceId"]}
                    label="Tool/Language"
                    rules={[
                        {
                            required: true,
                            message: "",
                        },
                    ]}
                    style={{ width: 220 }}
                >
                    <Select allowClear placeholder="Select Tool/Language" getPopupContainer={(node) => node.parentNode}>
                        <Select.Option value={1}>Javascript</Select.Option>
                        <Select.Option value={2}>Typescript</Select.Option>
                        <Select.Option value={3}>Python</Select.Option>
                    </Select>
                </Form.Item>
                <Flex gap={10}>
                    <Form.Item
                        name={[indexT, "from"]}
                        label="From"
                        rules={[
                            {
                                required: true,
                                message: "",
                            },
                        ]}
                    >
                        <DatePicker
                            picker="year"
                            format="YYYY"
                            placeholder="From"
                            style={{ width: 80 }}
                            getPopupContainer={(node) => node.parentNode}
                            disabledDate={(currentDate) => {
                                const endYear = form.getFieldValue([
                                    "positions",
                                    indexP,
                                    "toolLanguages",
                                    indexT,
                                    "to",
                                ]);
                                if (!endYear) {
                                    return currentDate && currentDate.year() > dayjs().year();
                                }

                                return currentDate && currentDate.year() > dayjs(endYear).year();
                            }}
                        />
                    </Form.Item>
                    <Flex vertical>
                        <span
                            style={{
                                display: "block",
                                width: "5px",
                                lineHeight: "30px",
                                height: "30px",
                                textAlign: "center",
                            }}
                        ></span>
                        <span
                            style={{
                                display: "inline-block",
                                width: "5px",
                                lineHeight: "32px",
                                textAlign: "center",
                                marginBottom: "24px",
                            }}
                        >
                            -
                        </span>
                    </Flex>

                    <Form.Item
                        name={[indexT, "to"]}
                        label="To"
                        rules={[
                            {
                                required: true,
                                message: "",
                            },
                        ]}
                    >
                        <DatePicker
                            picker="year"
                            format="YYYY"
                            placeholder="To"
                            style={{ width: 80 }}
                            getPopupContainer={(node) => node.parentNode}
                            disabledDate={(currentDate) => {
                                const startYear = form.getFieldValue([
                                    "positions",
                                    indexP,
                                    "toolLanguages",
                                    indexT,
                                    "from",
                                ]);
                                if (!startYear) {
                                    return currentDate && currentDate.year() > dayjs().year();
                                }
                                return (
                                    currentDate &&
                                    (currentDate.year() > dayjs().year() ||
                                        currentDate.year() < dayjs(startYear).year())
                                );
                            }}
                        />
                    </Form.Item>
                </Flex>
            </Flex>
            <Form.Item name={[indexT, "description"]}>
                <TextArea
                    placeholder="Description..."
                    autoSize={{
                        minRows: 5,
                        maxRows: 5,
                    }}
                />
            </Form.Item>
            <Flex gap={5} className={styles.noticeUpload}>
                <span>
                    <InfoCircleOutlined />
                </span>
                <span>
                    <em>Upload up to 4 images</em>
                </span>
            </Flex>
            <Form.List name={[indexT, "images"]}>
                {(imageFields) => (
                    <>
                        {imageFields.map((imageField, imgIndex) => (
                            <Form.Item
                                {...imageField}
                                key={imageField.key}
                                name={[imageField.name, "cdnUrl"]}
                                style={{ display: "none" }}
                            >
                                <Image
                                    src={form.getFieldValue([
                                        "positions",
                                        indexP,
                                        "toolLanguages",
                                        indexT,
                                        "images",
                                        imgIndex,
                                        "cdnUrl",
                                    ])}
                                    alt="images"
                                    height={100}
                                    width={100}
                                />
                            </Form.Item>
                        ))}

                        <Upload
                            className={status === "error" && styles.error}
                            listType="picture-card"
                            multiple
                            fileList={fileList}
                            accept=".png,.jpeg,.jpg"
                            customRequest={customRequest}
                            maxCount={4}
                            showUploadList={{
                                showPreviewIcon: false,
                            }}
                            onChange={({ fileList, file }) =>
                                handleImageChange(fileList, {
                                    name: ["positions", indexP, "toolLanguages", indexT, "images"],
                                })
                            }
                        >
                            {imageFields.length < 4 && (
                                <button
                                    style={{
                                        border: 0,
                                        background: "none",
                                        cursor: "pointer",
                                    }}
                                    type="button"
                                >
                                    <PlusOutlined />
                                    <div
                                        style={{
                                            marginTop: 8,
                                        }}
                                    >
                                        Upload
                                    </div>
                                </button>
                            )}
                        </Upload>
                    </>
                )}
            </Form.List>
            <Flex
                align="center"
                justify="center"
                className={classNames(styles.boxDel, { [styles.hidden]: toolLanguages.length === 1 })}
            >
                <Button icon={<DeleteOutlined />} className={styles.delBtn} onClick={() => remove(field.name)} danger>
                    Delete Tool/Language
                </Button>
            </Flex>
        </Flex>
    );
}
