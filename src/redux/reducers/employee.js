import { createFailureActionType, createSuccessActionType } from "../helper";
import { actionTypesEmployee } from "../types";

let initState = {
    employees: [],
    error: false,
    message: null,
};

export function employee(prevState = initState, action) {
    switch (action.type) {
        case createSuccessActionType(actionTypesEmployee.GET_EMPLOYEE):
            return {
                ...prevState,
                employees: action.payload,
            };
        case createFailureActionType(actionTypesEmployee.GET_EMPLOYEE):
            return {
                ...prevState,
                message: action.payload,
                error: true,
            };
        case createSuccessActionType(actionTypesEmployee.UPDATE_EMPLOYEE):
            return {
                ...prevState,
            };
        case createFailureActionType(actionTypesEmployee.UPDATE_EMPLOYEE):
            return {
                ...prevState,
                message: action.payload,
                error: true,
            };
        case createSuccessActionType(actionTypesEmployee.CREATE_EMPLOYEE):
            return {
                ...prevState,
            };
        case createFailureActionType(actionTypesEmployee.CREATE_EMPLOYEE):
            return {
                ...prevState,
                message: action.payload,
                error: true,
            };
        case createSuccessActionType(actionTypesEmployee.DELETE_EMPLOYEE):
            return {
                ...prevState,
            };
        case createFailureActionType(actionTypesEmployee.DELETE_EMPLOYEE):
            return {
                ...prevState,
                message: action.payload,
                error: true,
            };
        default:
            return prevState;
    }
}
