import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

import localStorage from "libs/localStorage";

import i18next from "i18n";

const columns = [
  { Header: "Title", accessor: "title", width: "45%", align: "left" },
  { Header: "Status", accessor: "status", align: "center" },
  { Header: "Created At", accessor: "createdAt", align: "center" },
  { Header: "view", accessor: "view", align: "center" },
  { Header: "Edit", accessor: "edit", align: "center" },
  { Header: "Comments", accessor: "comments", align: "center" },
];

const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

const courses = localStorage.getCourses();

const useCoursesData = (onAction) => {
  const [rows, setrows] = useState([]);
  const [coursesData, setcoursesData] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const navigate = useNavigate();

  const fetchData = useCallback(() => {
    setisLoading(true);
    setTimeout(() => {
      setcoursesData(courses);
      setrows(
        courses.map((v) => ({
          title: (
            <MDTypography
              component="a"
              href="#"
              variant="subtitle2"
              color="text"
              fontWeight="medium"
              textTransform="capitalize"
            >
              {v.title}
            </MDTypography>
          ),
          student_count: (
            <MDTypography
              component="a"
              href="#"
              variant="subtitle2"
              color="text"
              fontWeight="medium"
              textTransform="capitalize"
            >
              {v.student_count}
            </MDTypography>
          ),
          comments: (
            <MDTypography
              variant="body2"
              color="text"
              fontWeight="medium"
              onClick={() => {
                navigate("/course_comments/" + v.id);
              }}
            >
              {i18next.t("courses.view_comments")}
            </MDTypography>
          ),
          edit: (
            <MDTypography
              variant="body2"
              color="text"
              fontWeight="medium"
              onClick={() => {
                navigate("/edit_course/" + v.id);
              }}
            >
              {i18next.t("courses.edit_course")}
            </MDTypography>
          ),
          status: (
            <MDBox ml={-1}>
              <MDBadge
                badgeContent={v.status}
                color={v.status === "published" ? "success" : "secondary"}
                variant="gradient"
                size="lg"
              />
            </MDBox>
          ),
          createdAt: (
            <MDTypography variant="body2" color="text" fontWeight="medium">
              {formatDate(v.createdAt)}
            </MDTypography>
          ),
          view: (
            <MDTypography
              variant="body2"
              color="text"
              fontWeight="medium"
              onClick={() => {
                onAction?.(v);
              }}
            >
              View
            </MDTypography>
          ),
        }))
      );
      setisLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return {
    columns,
    rows,
    fetchData,
    coursesData,
    isLoading,
  };
};

export default useCoursesData;
