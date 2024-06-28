/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useCallback, useRef, useState } from "react";
import { Button, Card, Flex, Modal, message } from "antd";
import { useSelector } from "react-redux";
import { dataTransformEmployee, getAllImages } from "@/utils";
import { DeleteOutlined } from "@ant-design/icons";
import Carousel from "../Carousel";

import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import paths from "@/constants/paths";

const { confirm } = Modal;
export default function CardEmployee({ employee, onDelete }) {
    const navigate = useNavigate();
    const carousel = useRef(null);
    const [messageApi, contextHolder] = message.useMessage();
    const [currentSnap, setCurrentSnap] = useState(0);
    // const toolLanguageResources = useSelector((state) => state.toolLanguageResources.toolLanguageResources);
    // const positionResources = useSelector((state) => state.positionResources.positionResources);
    // const dataTransform = dataTransformEmployee({ dataEmployee: employee, positionResources, toolLanguageResources });
    const dataTransform = employee;
    const imageList = getAllImages(dataTransform);

    const inInfinity = imageList?.length > 1;

    const onClickCardDetail = () => {
        navigate(paths.employeeDetail.replace(":id", employee?.id));
    }

    const onConfirmDelete = (e) => {
        e.stopPropagation();
        confirm({
            title: `Do you want to delete ${dataTransform.name}?`,
            content: '',
            okText: 'Confirm',
            okType: 'danger',
            cancelText: 'Cancel',
            onOk: () => {
                onDelete?.(employee?.id);
                messageApi.success("Delete employee success");
            },
            onCancel() {
            },
        });
    }
    return (
        <Card className={styles.cardRoot} onClick={onClickCardDetail}>
            {contextHolder}
            <Flex vertical gap={24}>
                <Carousel
                    slides={imageList}
                    loop={inInfinity}
                    playOnInit
                    renderItem={(image) => <img src={image} alt="image-thumbnail" className={styles.thumbnail} />}
                />
                <Flex vertical gap={8}>
                    <Flex justify="space-between" gap={24}>
                        <span>{dataTransform.name}</span>
                        <span>
                            {dataTransform.positions[0].toolLanguages[0].to -
                                dataTransform.positions[0].toolLanguages[0].from}{" "}
                            years
                        </span>
                    </Flex>
                    <span>{dataTransform.positions[0].positionResourceName}</span>
                </Flex>
                <span className={styles.description}>{dataTransform.positions[0].toolLanguages[0].description}</span>
                <Flex justify="center" align="center" className={styles.delButton}>
                    <Button className={styles.btnDel} icon={<DeleteOutlined />} onClick={(e) => onConfirmDelete(e)}></Button>
                </Flex>
            </Flex>
        </Card>
    );
}
