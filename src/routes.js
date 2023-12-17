import Dashboard from "layouts/dash";
import Tables from "layouts/tables";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import Webinar from "layouts/webinar";
import CreateCourse from "layouts/create-course";
import EditCourse from "layouts/edit-course";
import FreeResources from "layouts/free-resources";

// @mui icons
import Icon from "@mui/material/Icon";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PeopleIcon from "@mui/icons-material/People";
import InterestsIcon from "@mui/icons-material/Interests";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Courses",
    key: "courses",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/courses",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Add Course",
    key: "add_course",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/add_course",
    component: <CreateCourse />,
  },
  {
    type: "collapse",
    name: "Edit Course",
    key: "edit_course",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/edit_course/:id",
    component: <EditCourse />,
    hideInSideNav: true,
  },
  // {
  //   type: "collapse",
  //   name: "RTL",
  //   key: "rtl",
  //   icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
  //   route: "/rtl",
  //   component: <RTL />,
  // },
  {
    type: "collapse",
    name: "Earn",
    key: "earn",
    icon: (
      <Icon fontSize="small">
        <MonetizationOnIcon />
      </Icon>
    ),
    route: "/earn",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Community",
    key: "community",
    icon: (
      <Icon fontSize="small">
        <PeopleIcon />
      </Icon>
    ),
    route: "/community",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Webinar",
    key: "webinar",
    icon: (
      <Icon fontSize="small">
        <PeopleIcon />
      </Icon>
    ),
    route: "/webinar",
    component: <Webinar />,
  },
  {
    type: "collapse",
    name: "Free Resources",
    key: "free_resources",
    icon: (
      <Icon fontSize="small">
        <InterestsIcon />
      </Icon>
    ),
    route: "/free_resources",
    component: <FreeResources />,
  },
  {
    type: "collapse",
    name: "Help Desk",
    key: "help_desk",
    icon: (
      <Icon fontSize="small">
        <ContactSupportIcon />
      </Icon>
    ),
    route: "/help_desk",
    component: <Profile />,
  },
  // {
  //   type: "collapse",
  //   name: "Sign In",
  //   key: "sign-in",
  //   icon: <Icon fontSize="small">login</Icon>,
  //   route: "/authentication/sign-in",
  //   component: <SignIn />,
  // },
  // {
  //   type: "collapse",
  //   name: "Sign Up",
  //   key: "sign-up",
  //   icon: <Icon fontSize="small">assignment</Icon>,
  //   route: "/authentication/sign-up",
  //   component: <SignUp />,
  // },
];

export default routes;
