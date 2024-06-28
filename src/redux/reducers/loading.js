import { actionTypesLoading } from "../types";

let initState = {
    fullScreenLoading: 0,
};

export function loading(prevState = initState, action) {
    switch (action.type) {
        case actionTypesLoading.START_LOADING:
            return {
                ...prevState,
                [action.payload]: true,
            };
        case actionTypesLoading.FINISH_LOADING:
            return {
                ...prevState,
                [action.payload]: false,
            };
        default:
            return prevState;
    }
}
