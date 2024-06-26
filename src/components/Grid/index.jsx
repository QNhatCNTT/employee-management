/* eslint-disable react/prop-types */
import classNames from "classnames";
import styles from "./index.module.scss";

function Grid({ renderItem, itemKey, items, className, children }) {
    return (
        <div className={classNames(styles.root, className)}>
            {items?.map((item, index) => (
                <div key={item[itemKey] ?? index}>{renderItem(item)}</div>
            ))}
            {children}
        </div>
    );
}

export default Grid;
