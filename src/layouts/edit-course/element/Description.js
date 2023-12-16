import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState, convertFromHTML } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import draftToHtml from "draftjs-to-html";

import Box from "@mui/material/Box";

import {
  useModuleBuilderState,
  useChapterElementKeyValue,
} from "layouts/edit-course/ModuleBuilderState.provider";

const Description = ({ chapterIndex, element_id, ...rest }) => {
  // const { t } = useTranslation();

  const { editChapterElement } = useModuleBuilderState();
  const value = useChapterElementKeyValue(chapterIndex, element_id, "value");

  const [editorState, seteditorState] = useState(() => {
    // Parse HTML string and create ContentState
    const htmlString = value ? value : "<p>Your HTML content goes here</p>";
    const blocksFromHTML = convertFromHTML(htmlString);
    const contentState = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    );

    return EditorState.createWithContent(contentState);
  });

  const handleBlur = () => {
    const convertedValue = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    editChapterElement(chapterIndex, element_id, "value", convertedValue);
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
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        onBlur={handleBlur}
      />
    </Box>
  );
};

export default Description;
