import { createFailureActionType, createSuccessActionType } from "../helper";
import { actionTypesToolLanguageResources } from "../types";
let initState = {
    toolLanguageResources: [],
    error: false,
    message: null,
};

export function toolLanguageResources(prevState = initState, action) {
    switch (action.type) {
        case createSuccessActionType(actionTypesToolLanguageResources.GET_TOOL_LANGUAGE):
            return {
                ...prevState,
                toolLanguageResources: action.payload,
            };
        case createFailureActionType(actionTypesToolLanguageResources.GET_TOOL_LANGUAGE):
            return {
                ...prevState,
                message: action.payload,
                error: true,
            };
        default:
            return prevState;
    }
}
