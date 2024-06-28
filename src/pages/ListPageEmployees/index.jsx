import LayoutPage from "@/components/pages/Layout";
import ListPage from "@/components/pages/ListPage";
import useTitle from "@/hooks/useTitle";

export default function ListPageEmployees() {
    useTitle("List page");
    return (
        <LayoutPage>
            <ListPage />
        </LayoutPage>
    );
}
