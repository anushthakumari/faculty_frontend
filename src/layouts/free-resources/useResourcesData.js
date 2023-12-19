import React, { useState, useEffect, useCallback } from "react";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

import resourcesAPIs from "apis/resources.apis";

const columns = [
  { Header: "Title", accessor: "title", width: "45%", align: "left" },
  { Header: "author", accessor: "author", align: "left" },
  { Header: "Resource Type", accessor: "status", align: "center" },
  { Header: "Posted On", accessor: "posted", align: "center" },
  { Header: "action", accessor: "action", align: "center" },
];

const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

const useResourcesData = (onAction) => {
  const [isLoading, setisLoading] = useState(false);
  const [rows, setrows] = useState([]);
  const [resourcesData, setresourcesData] = useState([]);

  const fetchResources = useCallback(() => {
    setisLoading(true);
    resourcesAPIs
      .get_res()
      .then((d) => {
        setresourcesData(d);
        setrows(
          d.map((v) => ({
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
            author: <Author name={v.user_name} />,
            status: (
              <MDBox ml={-1}>
                <MDBadge
                  badgeContent={v.element_type}
                  color="secondary"
                  variant="gradient"
                  size="lg"
                />
              </MDBox>
            ),
            posted: (
              <MDTypography
                component="a"
                href="#"
                variant="caption"
                color="text"
                fontWeight="medium"
              >
                {formatDate(v.createdAt)}
              </MDTypography>
            ),
            action: (
              <MDTypography
                variant="caption"
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
      })
      .catch((e) => {
        console.log("cannot get assests!", e);
      })
      .finally((e) => {
        setisLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchResources();
  }, []);

  return {
    columns,
    rows,
    fetchResources,
    resourcesData,
    isLoading,
  };
};

const Author = ({ name }) => (
  <MDBox display="flex" alignItems="center" lineHeight={1}>
    <MDBox ml={2} lineHeight={1}>
      <MDTypography variant="subtitle2" color="text" fontWeight="medium" textTransform="capitalize">
        {name}
      </MDTypography>
    </MDBox>
  </MDBox>
);

export default useResourcesData;
