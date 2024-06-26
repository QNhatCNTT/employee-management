import qs from "query-string";
import { processLoadingAction } from "../helper";
import apiConfig from "@/constants/configApi";
import { actionTypesEmployee } from "../types";

const apiGetListEmployee =
    ({ search, page, limit }) =>
    async (dispatch) => {
        const query = qs.stringify({ search, page, limit });
        const response = await processLoadingAction({
            dispatch,
            options: {...apiConfig.employee.getList, query},
            type: actionTypesEmployee.GET_EMPLOYEE,
        });
        return response;
    };

export const actionEmployee = {
    apiGetListEmployee,
};
