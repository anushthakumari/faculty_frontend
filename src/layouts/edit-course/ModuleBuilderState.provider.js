import React, { createContext, useContext, useState, useCallback, useMemo } from "react";
import { v4 as uuid } from "uuid";

import element_types from "constants/element_types";

const defaultSate = [
  //this array is representing a section
  [
    { type: element_types.index, value: 0 }, //chapter's position in the array
    { type: element_types.section_title, element_id: uuid(), index: 0 }, //element of the chapter
  ],
];

const ModuleBuilderStateContext = createContext(defaultSate);

const ModuleBuilderState = ({ children }) => {
  const [data, setdata] = useState(defaultSate);

  const addChapter = useCallback(() => {
    setdata((prev) => [
      ...prev,
      [
        { type: element_types.index, value: prev.length }, //chapter's position should be last in the chapters
        { type: element_types.section_title, element_id: uuid(), index: 0 }, //elements of the chapter
      ],
    ]);
  }, []);

  const removeChapterByIndex = useCallback((chapterIndex = 0) => {
    setdata((prev) => prev.filter((v, i) => i !== chapterIndex));
  }, []);

  const addElementToChapter = useCallback((type, chapterIndex = 0, data = {}) => {
    setdata((prev) => {
      const newSate = [...prev];

      const newElementIndex = newSate[chapterIndex].length; //position of the elemnt in the chapter

      newSate[chapterIndex] = [
        ...newSate[chapterIndex],
        { ...data, type, element_id: uuid(), index: newElementIndex },
      ];

      return newSate;
    });
  }, []);

  const removeChapterElementByElementID = useCallback((chapterIndex = 0, element_id) => {
    setdata((prev) => {
      const chapterElements = prev[chapterIndex];
      const newChapterElements = chapterElements.filter((v) => v.element_id !== element_id);

      const newSate = [...prev];
      newSate[chapterIndex] = newChapterElements;

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
    removeChapterElementByElementID,
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

export const useGetChapterElementsByIndex = (chapterIndex = 0) => {
  const { data } = useModuleBuilderState();

  return useMemo(() => {
    return data[chapterIndex];
  }, [data, chapterIndex]);
};
