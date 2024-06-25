/* eslint-disable react/prop-types */
import { Spin } from "antd";
import styles from "./LoadingOverlay.module.scss";

function LoadingOverlay({
    loading = false,
    background = "rgba(255, 255, 255, 0.75)",
    blur = 2,
    size = "large",
    children,
}) {
    if (!loading) return null;

    return (
        <div className={styles.root} style={{ "--overlay-bg": background, "--overlay-blur": blur + "px" }}>
            <Spin size={size} spinning={loading}>
                {children}
            </Spin>
        </div>
    );
}

export default LoadingOverlay;
