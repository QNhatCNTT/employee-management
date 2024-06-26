import React, { useEffect } from "react";
import LoadingOverlay from "./components/loadings/LoadingOverlay";
import RootRoutes from "./routes";
import "@/styles/reset.scss";
import LayoutPage from "./components/pages/Layout";
import { useDispatch } from "react-redux";
import { actionPositionResources } from "./redux/actions/positionResources";
import { actionToolLanguageResources } from "./redux/actions/toolLanguageResources";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actionPositionResources.apiGetListPositionResources());
        dispatch(actionToolLanguageResources.apiGetListToolLanguageResources());
    }, [dispatch]);
    return (
        <LayoutPage>
            <React.Suspense fallback={<LoadingOverlay loading />}>
                <RootRoutes />
            </React.Suspense>
        </LayoutPage>
    );
}

export default App;
