import { actionTypesToolLanguageResources } from "../types";
import { processLoadingAction } from "../helper";
import apiConfig from "@/constants/configApi";

const apiGetListToolLanguageResources = () => async (dispatch) => {
    const response = await processLoadingAction({
        dispatch,
        options: { ...apiConfig.toolLanguageResources.getList },
        type: actionTypesToolLanguageResources.GET_TOOL_LANGUAGE,
    });
    return response;
};

export const actionToolLanguageResources = {
    apiGetListToolLanguageResources,
};
