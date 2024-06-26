/* eslint-disable react/prop-types */
import { Card, Flex } from "antd";
import styles from "./index.module.scss";
import { dataTransformEmployee } from "@/utils";
import { useSelector } from "react-redux";

export default function CardEmployee({ employee }) {
    const toolLanguageResources = useSelector((state) => state.toolLanguageResources.toolLanguageResources);
    const positionResources = useSelector((state) => state.positionResources.positionResources);
    const dataTransform = dataTransformEmployee({ dataEmployee: employee, positionResources, toolLanguageResources });
    console.log("dataTransform: ", dataTransform);
    return (
        <Card className={styles.cardRoot}>
            <Flex vertical gap={24}>
                <img src="/src/assets/image-portfolio.jpg" alt="image-thumbnail" className={styles.thumbnail} />
                <Flex vertical gap={8}>
                    <Flex justify="space-between" gap={24}>
                        <span>{dataTransform.name}</span>
                        <span>
                            {dataTransform.positions[0].toolLanguages[0].to -
                                dataTransform.positions[0].toolLanguages[0].from}{" "}
                            years
                        </span>
                    </Flex>
                    <span>{dataTransform.positions[0].positionResourceName}</span>
                </Flex>
                <span className={styles.description}>{dataTransform.positions[0].toolLanguages[0].description}</span>
            </Flex>
        </Card>
    );
}
