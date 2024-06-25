import React from "react";
import LoadingOverlay from "./components/loadings/LoadingOverlay";
import RootRoutes from "./routes";
import "@/styles/reset.scss";
import LayoutPage from "./components/pages/Layout";

function App() {
    return (
        <LayoutPage>
            <React.Suspense fallback={<LoadingOverlay loading />}>
                <RootRoutes />
            </React.Suspense>
        </LayoutPage>
    );
}

export default App;
