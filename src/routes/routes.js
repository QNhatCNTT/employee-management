import paths from "@/constants/paths";
import CreatePageEmployee from "@/pages/CreatePageEmployee";
import DetailPageEmployee from "@/pages/DetailPageEmployee";
import ListPageEmployees from "@/pages/ListPageEmployees";

const routes = [
    {
        path: paths.employeeLists,
        element: ListPageEmployees,
    },
    {
        path: paths.employeeCreate,
        element: CreatePageEmployee,
    },
    {
        path: paths.employeeDetail,
        element: DetailPageEmployee,
    },
];

export default routes;
