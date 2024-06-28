import { Button, Flex, Modal } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import FormData from "../FormData";
import styles from "./index.module.scss";
import classNames from "classnames";
const { confirm } = Modal;
const detailEmployee = {
    id: 1,
    name: "Harry Kali",
    positions: [
        {
            id: 1,
            positionResourceId: 1,
            displayOrder: 0,
            toolLanguages: [
                {
                    id: 1,
                    toolLanguageResourceId: 2,
                    displayOrder: 0,
                    from: 2018,
                    to: 2024,
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                    images: [
                        {
                            id: 1,
                            cdnUrl: "/public/image-carousel/image-1.jpg",
                            displayOrder: 0,
                        },
                        {
                            id: 2,
                            cdnUrl: "/public/image-carousel/image-2.jpg",
                            displayOrder: 1,
                        },
                    ],
                },
            ],
        },
    ],
};

export default function SavePage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const isCreating = !id;

    const onCancel = () => {
        navigate(-1);
    };

    const onConfirmDelete = () => {
        confirm({
            title: `Do you want to delete ${detailEmployee.name}?`,
            content: '',
            okText: 'Confirm',
            okType: 'danger',
            cancelText: 'Cancel',
            onOk: () => {
                //handle delete
                onCancel();
            },
            onCancel() {
                //handle cancel
            },
        });
    }
    return (
        <Flex vertical className={styles.savePageRoot}>
            <Flex className={styles.heading}>
                <Flex className={styles.layout} align="center">
                    <p className={styles.titlePage}>Create employee profile</p>
                </Flex>
            </Flex>
            <div className={styles.formContainer}>
                <div className={styles.layout}>
                    <FormData isCreating={isCreating} detailEmployee={detailEmployee} />
                </div>
            </div>
            <Flex className={styles.actionBar}>
                <Flex gap={24} className={styles.layout} justify="space-between" align="center">
                    <Button className={classNames(styles.actionBtn, {
                        [styles.hidden]: isCreating
                    })} onClick={onConfirmDelete} danger>
                        Delete
                    </Button>
                    <Flex gap={24}>
                        <Button className={styles.actionBtn} onClick={onCancel}>
                            Cancel
                        </Button>
                        <Button
                            type="primary"
                            htmlType="submit"
                            form="form-create-employee"
                            className={classNames(styles.actionBtn, styles.save)}
                        >
                            Save
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}
