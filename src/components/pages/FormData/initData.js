const initToolLanguageResource = {
    toolLanguageResourceId: null,
    displayOrder: 0,
    from: null,
    to: null,
    description: "",
    images: [],
};

const initPositionResource = {
    positionResourceId: null,
    displayOrder: 0,
    toolLanguages: [{ ...initToolLanguageResource }],
};

const initEmployee = {
    name: "",
    positions: [{ ...initPositionResource }],
};

export { initEmployee, initPositionResource, initToolLanguageResource };
