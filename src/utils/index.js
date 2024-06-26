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
