import React, { createContext, useState } from "react";

export const LoaderContext = createContext();

const PreloaderContext = ({ children }) => {
    const [ triggerOutro, setTriggerOutro] = useState(false);

    return (
        <LoaderContext.Provider value={[triggerOutro, setTriggerOutro]}>
        {children}
        </LoaderContext.Provider>
    );
};

export default PreloaderContext;