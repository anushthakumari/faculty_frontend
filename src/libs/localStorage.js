import secureLocalStorage from "react-secure-storage";
import storage_keys from "constants/storage_keys";

const default_courses = [
  {
    id: 1,
    title: "Modular Suspension",
    createdAt: new Date().toISOString(),
    status: "published",
    comment_count: 2,
  },
  {
    id: 2,
    title: "Human Heart Anatomy",
    createdAt: new Date().toISOString(),
    status: "published",
    comment_count: 2,
  },
];

const defaultStats = {
  course_count: 2,
  student_count: 2,
  credit_points: 2500,
  resourse_count: 2,
  avg_eng: "80%",
  avg_rating: 4,
  badge: "acharya",
};

const defaultUser = {
  user_id: "randomstring123",
  user_name: "Jai Shankar",
};

const setUser = (data = {}) => {
  secureLocalStorage.setItem(storage_keys.USER, data);
};

const unsetUser = () => {
  secureLocalStorage.removeItem(storage_keys.USER);
};

const getUser = () => {
  const user = secureLocalStorage.getItem(storage_keys.USER);
  return user;
};

const removeUser = () => {
  secureLocalStorage.removeItem(storage_keys.USER);
};

const getPosts = () => {
  const user = getUser();
  const posts = secureLocalStorage.getItem(storage_keys.POSTS);

  return posts
    ? posts
    : [
        {
          id: 0,
          ...user,
          caption:
            "I have found a really good diagram explaining the human heart, i would like to share it to you guys",
          mediaUrl:
            "https://cdn.britannica.com/05/85505-050-44E1AD82/Cross-section-human-heart.jpg",
          likesCount: 1,
          commentsCount: 0,
          createdAt: new Date().toISOString(),
        },
      ];
};

const savePost = (data = {}) => {
  const saved_posts = getPosts();

  const posts = [...saved_posts, data];

  secureLocalStorage.setItem(storage_keys.POSTS, posts);
};

const getComments = () => {
  const user = getUser();
  const comments = secureLocalStorage.getItem(storage_keys.COMMENTS);

  return comments
    ? comments
    : [
        {
          id: 0,
          ...user,
          caption: "I really loved it!",
          createdAt: new Date().toISOString(),
        },
        {
          id: 1,
          ...user,
          caption: "you made it really easy!",
          createdAt: new Date().toISOString(),
        },
        {
          id: 2,
          ...user,
          caption: "your course is goood!",
          createdAt: new Date().toISOString(),
        },
      ];
};

const saveComment = (data = {}) => {
  const saved_comm = getComments();

  const comments = [...saved_comm, data];

  secureLocalStorage.setItem(storage_keys.COMMENTS, comments);
};

const getLanguageCode = () => {
  const langCode = secureLocalStorage.getItem(storage_keys.LANG_CODE);

  return langCode ? langCode : "en";
};

const setLanguageCode = (code = "en") => {
  const langCode = secureLocalStorage.setItem(storage_keys.LANG_CODE, code);

  return langCode ? langCode : "en";
};

const getOnboardState = () => secureLocalStorage.getItem(storage_keys.ONBOARD);
const setOnboardState = (bool = true) => {
  const is_done = Boolean(bool);

  if (is_done) {
    secureLocalStorage.setItem(storage_keys.ONBOARD, "true");
    return;
  }

  secureLocalStorage.removeItem(storage_keys.ONBOARD);
};

const getCourses = () => {
  const courses = secureLocalStorage.getItem(storage_keys.COURSES);

  if (courses) {
    return courses;
  }

  return default_courses;
};

const setCourses = (data = {}) => {
  const saved_courses = getCourses();

  secureLocalStorage.setItem(storage_keys.COURSES, [...saved_courses, data]);
};

const getStats = () => {
  const savedStats = secureLocalStorage.getItem(storage_keys.STATS);

  return savedStats ? savedStats : defaultStats;
};

const localStorage = {
  setUser,
  unsetUser,
  getUser,
  getPosts,
  savePost,
  getComments,
  saveComment,
  getLanguageCode,
  setLanguageCode,
  getOnboardState,
  setOnboardState,
  getCourses,
  setCourses,
  getStats,
  removeUser,
};

export default localStorage;
