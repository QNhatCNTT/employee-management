import { Link } from "react-router-dom";
import { Button, Result } from "antd";
import paths from "@/constants/paths";

const NotFound = () => {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Trang không tồn tại"
            extra={
                <Link to={paths.employeeLists}>
                    <Button type="primary">Trở về</Button>
                </Link>
            }
        />
    );
};

export default NotFound;
