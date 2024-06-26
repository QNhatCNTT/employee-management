import { combineReducers } from "redux";
import { employee } from "./employee";
import { positionResources } from "./positionResources";
import { toolLanguageResources } from "./toolLanguageResources";
import { loading } from "./loading";

export const reducers = combineReducers({ employee, positionResources, toolLanguageResources, loading });
