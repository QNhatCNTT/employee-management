/* eslint-disable no-unused-vars */
import { Button, Flex } from "antd";
import styles from "./index.module.scss";
import { PlusOutlined } from "@ant-design/icons";
import SearchForm from "./SearchForm";
import { Link, useSearchParams } from "react-router-dom";
import paths from "@/constants/paths";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionEmployee } from "@/redux/actions/employee";
import ListEmployee from "./ListEmployee";
import { cleanObject } from "@/utils";
export default function ListPage() {
    // const dispatch = useDispatch();
    // const [searchParams] = useSearchParams();
    // const search = searchParams.get("search");

    // useEffect(() => {
    //     dispatch(actionEmployee.apiGetListEmployee(cleanObject({ search })));
    // }, [dispatch, search]);
    return (
        <div className={styles.listPage}>
            <Flex vertical gap={20} className={styles.heading}>
                <p className={styles.title}>List Employees</p>
                <div>
                    <Flex justify="space-between" wrap gap={24}>
                        <SearchForm />
                        <Link to={paths.employeeCreate}>
                            <Button icon={<PlusOutlined />} type="primary">
                                Add Employee
                            </Button>
                        </Link>
                    </Flex>
                </div>
            </Flex>
            <div className={styles.listPageContent}>
                <ListEmployee />
            </div>
        </div>
    );
}
