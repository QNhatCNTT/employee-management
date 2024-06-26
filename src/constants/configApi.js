import { apiURL } from ".";

const baseHeader = {
    "Content-Type": "application/json",
};

const multipartFormHeader = {
    "Content-Type": "multipart/form-data",
};

const apiConfig = {
    employee: {
        getList: {
            path: `${apiURL}/Employees`,
            method: "GET",
            headers: baseHeader,
        },
        getDetail: {
            path: `${apiURL}/Employees/:id`,
            method: "GET",
            headers: baseHeader,
        },
        create: {
            path: `${apiURL}/Employees`,
            method: "POST",
            headers: multipartFormHeader,
        },
        update: {
            path: `${apiURL}/Employees/:id`,
            method: "PUT",
            headers: multipartFormHeader,
        },
        delete: {
            path: `${apiURL}/Employees/:id`,
            method: "DELETE",
            headers: baseHeader,
        },
    },
    positionResource: {
        getList: {
            path: `${apiURL}/PositionResources`,
            method: "GET",
            headers: baseHeader,
        },
    },
    toolLanguageResources: {
        getList: {
            path: `${apiURL}/ToolLanguageResources`,
            method: "GET",
            headers: baseHeader,
        },
    },
};

export default apiConfig;
