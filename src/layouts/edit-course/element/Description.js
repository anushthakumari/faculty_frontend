import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import Box from "@mui/material/Box";

import { useModuleBuilderState } from "layouts/edit-course/ModuleBuilderState.provider";

const Description = ({ chapterIndex, element_id, ...rest }) => {
  const { t } = useTranslation();

  const { editChapterElement, data } = useModuleBuilderState();
  const [editorState, seteditorState] = useState(EditorState.createEmpty());

  const value = useMemo(() => {
    //get element
    const chapterElements = data[chapterIndex];
    const elementIndex = chapterElements.findIndex((v) => v.element_id === element_id);

    return chapterElements[elementIndex]["value"];
  }, [chapterIndex, element_id, data]);

  const onChangeHandler = (e) => {
    editChapterElement(chapterIndex, element_id, "value", e.target.value);
  };

  const onEditorStateChange = (es) => {
    seteditorState(es);
  };

  return (
    <Box height={"100%"}>
      <Editor
        wrapperStyle={{
          position: "relative",
          minHeight: "100%",
        }}
        editorStyle={{
          borderRadius: "12px",
          border: "1px solid #d3d3d3",
          padding: "4px 6px",
        }}
        initialEditorState={editorState}
        onEditorStateChange={onEditorStateChange}
      />
    </Box>
  );
};

export default Description;
