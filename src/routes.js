import Dashboard from "layouts/dash";
import Analytics from "layouts/analytics";
import Webinar from "layouts/webinar";
import CreateCourse from "layouts/create-course";
import EditCourse from "layouts/edit-course";
import Courses from "layouts/courses";
import FreeResources from "layouts/free-resources";
import HelpDesk from "layouts/help-desk";
import CourseComments from "layouts/course-comments";
import Earn from "layouts/earn";
import Community from "layouts/community";
import RateCourses from "layouts/rate-courses";
import LeaderBorard from "layouts/leaderboard";
import RateCourseDetails from "layouts/rate-course-details";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import TeacherProfile from "layouts/teacher-profile";

// @mui icons
import Icon from "@mui/material/Icon";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PeopleIcon from "@mui/icons-material/People";
import InterestsIcon from "@mui/icons-material/Interests";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import GradeIcon from "@mui/icons-material/Grade";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

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
    name: "Analytics",
    key: "analytics",
    icon: <Icon fontSize="small">leaderboard</Icon>,
    route: "/analytics",
    component: <Analytics />,
  },
  {
    type: "collapse",
    name: "Courses",
    key: "courses",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/courses",
    component: <Courses />,
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
  {
    type: "collapse",
    name: "Course Comments",
    key: "course_comments",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/course_comments/:id",
    component: <CourseComments />,
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
  // {
  //   type: "collapse",
  //   name: "Earn",
  //   key: "earn",
  //   icon: (
  //     <Icon fontSize="small">
  //       <MonetizationOnIcon />
  //     </Icon>
  //   ),
  //   route: "/earn",
  //   component: <Earn />,
  // },
  {
    type: "collapse",
    name: "leaderboard",
    key: "leaderboard",
    icon: (
      <Icon fontSize="small">
        <MonetizationOnIcon />
      </Icon>
    ),
    route: "/leaderborad",
    component: <LeaderBorard />,
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
    component: <Community />,
  },
  {
    type: "collapse",
    name: "Webinar",
    key: "webinar",
    icon: (
      <Icon fontSize="small">
        <VideoCallIcon />
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
    name: "Rate Courses",
    key: "rate_courses",
    icon: (
      <Icon fontSize="small">
        <GradeIcon />
      </Icon>
    ),
    route: "/rate_courses",
    component: <RateCourses />,
  },
  {
    type: "collapse",
    name: "Rate Courses This Course",
    key: "rate_course_details",
    icon: (
      <Icon fontSize="small">
        <GradeIcon />
      </Icon>
    ),
    route: "/rate_course_details/:id",
    component: <RateCourseDetails />,
    hideInSideNav: true,
  },
  {
    type: "collapse",
    name: "Help Desk",
    key: "profile",
    icon: (
      <Icon fontSize="small">
        <AccountBoxIcon />
      </Icon>
    ),
    route: "/profile",
    component: <TeacherProfile />,
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
    component: <HelpDesk />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
    hideInSideNav: true,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
    hideInSideNav: true,
  },
];

export default routes;
