import { createFailureActionType, createSuccessActionType } from "../helper";
import { actionTypesPositionResources } from "../types";
let initState = {
    positionResources: [],
    error: false,
    message: null,
};

export function positionResources(prevState = initState, action) {
    switch (action.type) {
        case createSuccessActionType(actionTypesPositionResources.GET_POSITION_RESOURCES):
            return {
                ...prevState,
                positionResources: action.payload,
            };
        case createFailureActionType(actionTypesPositionResources.GET_POSITION_RESOURCES):
            return {
                ...prevState,
                message: action.payload,
                error: true,
            };
        default:
            return prevState;
    }
}
