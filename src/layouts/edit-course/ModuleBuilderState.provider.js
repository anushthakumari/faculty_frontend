import React, { createContext, useContext, useState, useCallback, useMemo } from "react";
import { v4 as uuid } from "uuid";

import element_types from "constants/element_types";

const ModuleBuilderStateContext = createContext({});

const ModuleBuilderState = ({ children }) => {
  const [data, setdata] = useState([[{ type: element_types.section_title, element_id: uuid() }]]);

  const addChapter = useCallback(() => {
    setdata((prev) => [...prev, [{ type: element_types.section_title, element_id: uuid() }]]);
  }, []);

  const removeChapterByIndex = useCallback((chapterIndex = 0) => {
    setdata((prev) => prev.filter((v, i) => i !== chapterIndex));
  }, []);

  const addElementToChapter = useCallback((type, chapterIndex = 0) => {
    setdata((prev) => {
      const newSate = [...prev];
      newSate[chapterIndex] = [...newSate[chapterIndex], { type, element_id: uuid() }];

      return newSate;
    });
  }, []);

  const editChapterElement = useCallback(
    (chapterIndex = 0, element_id = "", key = "", value = "") => {
      setdata((prev) => {
        //get element
        const chapterElements = prev[chapterIndex];
        const elementIndex = chapterElements.findIndex((v) => v.element_id === element_id);

        const newState = [...prev];
        newState[chapterIndex][elementIndex][key] = value;

        return newState;
      });
    },
    []
  );

  const getChapterElementKeyValue = useCallback(
    (chapterIndex = 0, element_id = "", key = "") => {
      //get element
      const chapterElements = data[chapterIndex];
      const elementIndex = chapterElements.findIndex((v) => v.element_id === element_id);

      return chapterElements[elementIndex][key];
    },
    [data]
  );

  const getChapterElementsByIndex = useCallback(
    (chapterIndex = 0) => {
      return data[chapterIndex];
    },
    [data]
  );

  const value = {
    data,
    addChapter,
    removeChapterByIndex,
    addElementToChapter,
    getChapterElementsByIndex,
    editChapterElement,
    getChapterElementKeyValue,
  };

  return (
    <ModuleBuilderStateContext.Provider value={value}>
      {children}
    </ModuleBuilderStateContext.Provider>
  );
};

export default ModuleBuilderState;

export const useModuleBuilderState = () => useContext(ModuleBuilderStateContext);

export const useChapterElementKeyValue = (chapterIndex, element_id, key = "") => {
  const { data } = useModuleBuilderState();

  return useMemo(() => {
    //get element
    const chapterElements = data[chapterIndex];
    const elementIndex = chapterElements.findIndex((v) => v.element_id === element_id);

    return chapterElements[elementIndex][key];
  }, [data]);
};
