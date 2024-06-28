import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";
import NotFound from "@/components/pages/NotFound";

const RootRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route) => {
                    return <Route key={route.path} exact path={route.path} element={route.element} />;
                })}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RootRoutes;
