import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import routes from "./routes";
import paths from "@/constants/paths";
import NotFound from "@/components/pages/NotFound";

const RootRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={paths.home} exact element={<Navigate to={paths.employeeLists} replace />} />
                {routes.map((route) => {
                    return <Route key={route.path} exact path={route.path} element={<route.element />} />;
                })}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RootRoutes;
