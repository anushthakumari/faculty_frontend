import React from "react";
import Stack from "@mui/material/Stack";

import ChapterSection from "./ChapterSection";

const raw_chapters = [
  [
    {
      type: "index",
      value: 1,
    },
    {
      type: "section_title",
      element_id: "4a3a3d8f-07c6-4664-8ced-e810260ca0a9",
      index: 0,
      value: "chapter title 2",
    },
    {
      file_url: "http://localhost:5000/uploads/images/file-1702969067490-614926362.webp",
      asset_id: "65813eebfb96361bffdc017c",
      asset_userame: "Jai Shankar",
      asset_is_private: false,
      type: "image",
      element_id: "436c8ab6-23be-4bd5-b821-080ba84143ce",
      index: 2,
    },
    {
      file_url: "http://localhost:5000/uploads/videos/file-1702973444190-169405933.mp4",
      asset_id: "658150046e92d8d3287d9ea9",
      asset_is_private: true,
      type: "video",
      element_id: "f2655c97-a840-4280-a255-8b4225332640",
      index: 3,
    },
  ],
  [
    {
      type: "index",
      value: 2,
    },
    {
      type: "section_title",
      element_id: "a68be9f4-07a9-42e1-b5c7-d121e0cee8a2",
      index: 0,
      value: "chapter title 3",
    },
    {
      file_url: "/realistic_human_heart.glb",
      asset_id: "randomstrin1",
      asset_userame: "Jai Shankar",
      asset_is_private: false,
      type: "model",
      element_id: "f2a8564f-2a3b-491b-9c30-85840be9108e",
      index: 2,
    },
  ],
  [
    {
      type: "index",
      value: 0,
    },
    {
      type: "section_title",
      element_id: "2c9ec19e-d7a0-47c7-a50f-c8de750b1fa4",
      index: 0,
      value: "This is chapter title1",
    },
    {
      type: "heading",
      element_id: "bcce88b4-5dbe-46a1-9439-0078e577dbe0",
      index: 2,
      value: "This is heading",
    },
    {
      type: "desc",
      element_id: "09c5e21f-2ccf-4ba2-aa3a-26fd8ddc9895",
      index: 3,
      value: "<p><strong>I am ready to go and this is a description</strong></p>\n",
    },
  ],
];

//sort chapters
const chapters = raw_chapters.sort((a, b) => {
  const indexA = a.find((item) => item.type === "index").value;
  const indexB = b.find((item) => item.type === "index").value;
  return indexA - indexB;
});

const Chapters = () => {
  console.log({ sorted: chapters });

  return (
    <Stack gap={4}>
      {chapters.map((v, i) => (
        <ChapterSection key={i} chapterIndex={i} />
      ))}
    </Stack>
  );
};

export default Chapters;
