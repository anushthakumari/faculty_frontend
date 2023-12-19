import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import localStorage from "libs/localStorage";

const columns = [
  { Header: "Title", accessor: "title", width: "45%", align: "left" },
  { Header: "Created At", accessor: "createdAt", align: "center" },
  { Header: "rate", accessor: "rate", align: "center" },
  { Header: "Total Comments", accessor: "comment_count", align: "center" },
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
          comment_count: (
            <MDTypography
              variant="body2"
              color="text"
              fontWeight="medium"
              onClick={() => {
                navigate("/course_comments/" + v.id);
              }}
            >
              {v.comment_count}
            </MDTypography>
          ),
          createdAt: (
            <MDTypography variant="body2" color="text" fontWeight="medium">
              {formatDate(v.createdAt)}
            </MDTypography>
          ),
          rate: (
            <MDTypography
              variant="body2"
              color="text"
              fontWeight="medium"
              onClick={() => {
                navigate("/rate_course_details/" + v.id);
              }}
            >
              Rate this course
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
