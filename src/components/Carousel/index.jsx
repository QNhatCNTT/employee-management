/* eslint-disable react/prop-types */
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import styles from "./index.module.scss";

const Carousel = ({ slides, loop = false, renderItem, delay = 5000, playOnInit = false	, ...options }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop, ...options }, [Autoplay({ playOnInit, delay })]);

    useEffect(() => {
        emblaApi?.plugins()?.autoplay;
    }, [emblaApi]);

    return (
        <div className={styles.embla}>
            <div className={styles.emblaViewport} ref={emblaRef}>
                <div className={styles.emblaContainer}>
                    {slides.map((item, index) => (
                        <div className={styles.emblaSlide} key={index}>
                            <div className={styles.emblaSlideNumber}>{renderItem(item)}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
