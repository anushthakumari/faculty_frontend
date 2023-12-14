import React, { createContext, useContext, useState, useCallback } from "react";

const ModuleBuilderStateContext = createContext({});

const ModuleBuilderState = ({ children }) => {
  const [data, setdata] = useState([]);

  const addContent = useCallback((type) => {
    setdata((prev) => [...prev, { type }]);
  }, []);

  const value = {
    data,
    addContent,
  };

  return (
    <ModuleBuilderStateContext.Provider value={value}>
      {children}
    </ModuleBuilderStateContext.Provider>
  );
};

export default ModuleBuilderState;

export const useModuleBuilderState = () => useContext(ModuleBuilderStateContext);
