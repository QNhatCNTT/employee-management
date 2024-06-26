import { actionTypesLoading } from "../types";

const startLoading = (type) => (dispatch) => {
    console.log("run", type);
    dispatch({ type: actionTypesLoading.START_LOADING, payload: type });
};

const finishLoading = (type) => (dispatch) => {
    dispatch({ type: actionTypesLoading.FINISH_LOADING, payload: type });
};

export const actionLoading = {
    startLoading,
    finishLoading,
};
