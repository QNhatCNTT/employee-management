import { actionTypesPositionResources } from "../types";
import { processLoadingAction } from "../helper";
import apiConfig from "@/constants/configApi";

const apiGetListPositionResources = () => async (dispatch) => {
    const response = await processLoadingAction({
        dispatch,
        options: { ...apiConfig.positionResource.getList },
        type: actionTypesPositionResources.GET_POSITION_RESOURCES,
    });
    return response;
};

export const actionPositionResources = {
    apiGetListPositionResources,
};
