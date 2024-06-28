import axios from "axios";
import { actionLoading } from "./actions/loading";

export const createSuccessActionType = (type) => `${type}_SUCCESS`;
export const createFailureActionType = (type) => `${type}_FAILURE`;

export async function processLoadingAction({ dispatch, options, payload, type }) {
    const SUCCESS = createSuccessActionType(type);
    const FAILURE = createFailureActionType(type);
    dispatch(actionLoading.startLoading(type));
    try {
        const response = await sendRequest(options, payload);
        dispatch(actionLoading.finishLoading(type));
        return dispatch({
            type: response.status === 200 ? SUCCESS : FAILURE,
            payload: response.data,
        });
    } catch (e) {
        dispatch(actionLoading.finishLoading(type));
        return dispatch({
            type: FAILURE,
            payload: e,
            error: true,
        });
    }
}

async function sendRequest(options, payload) {
    const { path, method, headers, query } = options;
    let fullPath = path;
    let body = payload;

    // replace path params
    for (let key of Object.keys(payload || {})) {
        const keyCompare = `/:${key}`;
        if (fullPath.indexOf(keyCompare) !== -1) {
            fullPath = fullPath.replace(keyCompare, payload[key]);
        }
    }
    if (query) {
        fullPath += `?${query}`;
    }
    if (headers["Content-Type"] === "multipart/form-data") {
        const formData = objectToFormData(payload);

        delete headers["Content-Type"];

        body = formData;
    }

    return await axios({
        method,
        url: fullPath,
        data: body,
        headers,
    });
}

function objectToFormData(obj, formData = new FormData(), parentKey = "") {
    for (const key in obj) {
        const keyName = parentKey ? (Array.isArray(obj) ? parentKey : `${parentKey}.${key}`) : key;
        if (typeof obj[key] === "object" && !(obj[key] instanceof File)) {
            const arrayKey = parentKey ? `${parentKey}[${key}]` : key;
            objectToFormData(obj[key], formData, arrayKey);
        } else {
            formData.append(keyName, obj[key]);
        }
    }

    return formData;
}
