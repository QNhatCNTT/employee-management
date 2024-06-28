/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import LoadingOverlay from "./components/loadings/LoadingOverlay";
import RootRoutes from "./routes";
import "@/styles/reset.scss";
import { useDispatch } from "react-redux";
import { actionPositionResources } from "./redux/actions/positionResources";
import { actionToolLanguageResources } from "./redux/actions/toolLanguageResources";

function App() {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(actionPositionResources.apiGetListPositionResources());
    //     dispatch(actionToolLanguageResources.apiGetListToolLanguageResources());
    // }, [dispatch]);
    return (
        <React.Suspense fallback={<LoadingOverlay loading />}>
            <RootRoutes />
        </React.Suspense>
    );
}

export default App;
