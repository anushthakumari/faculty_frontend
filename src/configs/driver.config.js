import i18next from "i18n";

const t = i18next.t;

const driver_config = {
  showProgress: true,
  steps: [
    {
      element: "#side_nav_dashboard",
      popover: {
        title: t("dashboard.driver_title"),
        description: t("dashboard.driver_description"),
        side: "left",
        align: "start",
      },
    },
    {
      element: "#side_nav_analytics",
      popover: {
        title: t("analytics.driver_title"),
        description: t("analytics.driver_description"),
        side: "left",
        align: "start",
      },
    },
    {
      element: "#side_nav_courses",
      popover: {
        title: t("courses.driver_title"),
        description: t("courses.driver_description"),
        side: "left",
        align: "start",
      },
    },
    {
      element: "#side_nav_add_course",
      popover: {
        title: t("add_course.driver_title"),
        description: t("add_course.driver_description"),
        side: "left",
        align: "start",
      },
    },
    // {
    //   element: "#side_nav_earn",
    //   popover: {
    //     title: t("earn.driver_title"),
    //     description: t("earn.driver_description"),
    //     side: "left",
    //     align: "start",
    //   },
    // },
    {
      element: "#side_nav_community",
      popover: {
        title: t("community.driver_title"),
        description: t("community.driver_description"),
        side: "left",
        align: "start",
      },
    },
    {
      element: "#side_nav_webinar",
      popover: {
        title: t("webinar.driver_title"),
        description: t("webinar.driver_description"),
        side: "left",
        align: "start",
      },
    },
    {
      element: "#side_nav_free_resources",
      popover: {
        title: t("free_resources.driver_title"),
        description: t("free_resources.driver_description"),
        side: "left",
        align: "start",
      },
    },
    {
      element: "#side_nav_rate_courses",
      popover: {
        title: t("rate_courses.driver_title"),
        description: t("rate_courses.driver_description"),
        side: "left",
        align: "start",
      },
    },
    {
      element: "#side_nav_help_desk",
      popover: {
        title: t("help_desk.driver_title"),
        description: t("help_desk.driver_description"),
        side: "left",
        align: "start",
      },
    },
  ],
};

export default driver_config;
