import styles from "./index.module.scss";
export default function Nodata() {
    return (
        <div className={styles.nodataRoot}>
            <img src="/public/nodata-image.jpg" alt="no-data-image" />
            <span>No Result Found</span>
        </div>
    );
}
