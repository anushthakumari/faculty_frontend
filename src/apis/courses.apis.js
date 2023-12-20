import axios from "axios";

import api_urls from "constants/api_urls";
import localStorage from "libs/localStorage";

const createCourses = async (title = "") => {
  const userData = localStorage.getUser();

  const { data } = await axios.post(api_urls.LMS_USERS_BASE_URL + "courses", {
    title,
    user_id: userData.user_id,
    username: userData.user_name,
  });

  return data;
};

const getCourseById = async (course_id = "") => {
  const { data } = await axios.get(api_urls.LMS_USERS_BASE_URL + "courses/" + course_id);

  return data;
};

const saveCourse = async (course_id, chapters) => {
  const { data } = await axios.put(api_urls.LMS_USERS_BASE_URL + "courses/" + course_id + "/save", {
    chapters,
  });

  return data;
};

const publishCourse = async (course_id, chapters, is_published = true) => {
  const { data } = await axios.put(
    api_urls.LMS_USERS_BASE_URL + "courses/" + course_id + "/publish",
    {
      chapters,
      is_published,
    }
  );

  return data;
};

const getCourseByUserId = async (user_id = "") => {
  const { data } = await axios.get(api_urls.LMS_USERS_BASE_URL + "user/" + user_id + "/courses");

  return data;
};

const getCourseAnalyticsByUserId = async (user_id = "") => {
  const { data } = await axios.get(api_urls.LMS_USERS_BASE_URL + "user/" + user_id + "/analytics");

  return data;
};

const getDashboard = async () => {
  const userData = localStorage.getUser();
  const { data } = await axios.get(
    api_urls.LMS_USERS_BASE_URL + "user/" + userData.user_id + "/dash"
  );

  return data;
};

const coursesAPIs = {
  createCourses,
  getCourseById,
  saveCourse,
  publishCourse,
  getCourseByUserId,
  getCourseAnalyticsByUserId,
  getDashboard,
};

export default coursesAPIs;
