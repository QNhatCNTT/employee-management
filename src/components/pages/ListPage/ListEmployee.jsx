import React from "react";
import { useSelector } from "react-redux";
import Grid from "@/components/Grid";
import CardEmployee from "@/components/CardEmployee";
import styles from "./index.module.scss";
import Nodata from "../Nodata";
import { actionTypesEmployee } from "@/redux/types";
import dataEmployees from "./mockData";

export default function ListEmployee() {
    // const employees = useSelector((state) => state.employee.employees);
    const employees = [...dataEmployees, ...dataEmployees, ...dataEmployees, ...dataEmployees];
    const employeeLoading = useSelector((state) => state?.loading[actionTypesEmployee.GET_EMPLOYEE]);

    return (
        <React.Suspense fallback={<>...Loading</>}>
            <Grid
                className={styles.list}
                items={employees ?? Array(12).fill("")}
                itemKey={"id"}
                renderItem={(employee) => <CardEmployee employee={employee} />}
            ></Grid>
            {!employeeLoading && employees?.length === 0 && <Nodata />}
        </React.Suspense>
    );
}
