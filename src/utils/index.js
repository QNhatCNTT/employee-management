import dayjs from "dayjs";

export const cleanObject = (obj, isNullish = false) => {
    let result = {};
    if (obj) {
        Object.keys(obj).forEach((key) => {
            if (
                (!Array.isArray(obj[key]) && (isNullish ? ![undefined, null, NaN].includes(obj[key]) : obj[key])) ||
                obj[key]?.length
            )
                result[key] = obj[key];
        });
    }
    return result;
};

export const dataTransformEmployee = ({ dataEmployee, positionResources, toolLanguageResources }) => {
    return {
        name: dataEmployee?.name,
        positions: dataEmployee?.positions?.map((position) => ({
            ...position,
            positionResourceName: positionResources?.find(
                (positionResource) => positionResource.positionResourceId === position?.positionResourceId
            )?.name,
            toolLanguages: position.toolLanguages.map((toolLanguage) => ({
                ...toolLanguage,
                toolLanguageResourceName: toolLanguageResources?.find(
                    (language) => language.toolLanguageResourceId === toolLanguage?.toolLanguageResourceId
                )?.name,
            })),
        })),
    };
};
export const getAllImages = (dataEmployee) => {
    const listImages = [];
    dataEmployee.positions.forEach((position) => {
        position.toolLanguages.forEach((toolLanguage) => {
            toolLanguage.images.forEach((image) => {
                listImages.push(image.cdnUrl);
            });
        });
    });
    return listImages;
};

export const prepareValueForm = (value) => {
    return {
        ...value,
        positions: value.positions.map((position, indexP) => ({
            ...position,
            displayOrder: indexP,
            toolLanguages: position.toolLanguages.map((toolLanguage, indexT) => ({
                ...toolLanguage,
                displayOrder: indexT,
                from: +dayjs(toolLanguage.from).format("YYYY"),
                to: +dayjs(toolLanguage.to).format("YYYY"),
                images: mappingImageMap(toolLanguage.images),
            })),
        })),
    };
};

const mappingImageMap = (images) => {
    return images.map((image, indexM) => ({
        data: image.cdnUrl,
        displayOrder: indexM,
    }));
};

export const prepareInitValueForm = (value) => {
    return {
        ...value,
        positions: value.positions.map((position) => ({
            ...position,
            toolLanguages: position.toolLanguages.map((toolLanguage) => ({
                ...toolLanguage,
                from: dayjs(`${toolLanguage.from}-01-01`),
                to: dayjs(`${toolLanguage.to}-01-01`),
            })),
        })),
    };
};
