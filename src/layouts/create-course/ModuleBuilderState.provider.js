import React, { createContext, useContext, useState, useCallback } from "react";

import element_types from "constants/element_types";

const ModuleBuilderStateContext = createContext({});

const ModuleBuilderState = ({ children }) => {
  const [data, setdata] = useState([[{ type: element_types.section_title }]]);

  const addChapter = useCallback(() => {
    setdata((prev) => [...prev, [{ type: element_types.section_title }]]);
  }, []);

  const addContent = useCallback((type, chapterIndex = 0) => {
    setdata((prev) => {
      const newSate = [...prev];
      newSate[chapterIndex] = [...newSate[chapterIndex], { type }];
    });
  }, []);

  const getChapterElementsByIndex = useCallback(
    (chapterIndex = 0) => {
      return data[chapterIndex];
    },
    [data]
  );

  const value = {
    data,
    addChapter,
    addContent,
    getChapterElementsByIndex,
  };

  return (
    <ModuleBuilderStateContext.Provider value={value}>
      {children}
    </ModuleBuilderStateContext.Provider>
  );
};

export default ModuleBuilderState;

export const useModuleBuilderState = () => useContext(ModuleBuilderStateContext);
