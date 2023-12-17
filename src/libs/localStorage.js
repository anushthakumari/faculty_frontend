import secureLocalStorage from "react-secure-storage";
import storage_keys from "constants/storage_keys";

const setUser = (data = {}) => {
  secureLocalStorage.setItem(storage_keys.USER, data);
};

const unsetUser = () => {
  secureLocalStorage.removeItem(storage_keys.USER);
};

const getUser = () => {
  const user = secureLocalStorage.getItem(storage_keys.USER);
  return user
    ? user
    : {
        user_id: "randomstring123",
        user_name: "Jai Shankar",
      };
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
          caption: "I am having a good time here..",
          mediaUrl:
            "https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2018/02/thumb_720_450_Jungledreamstime_l_56902828.jpg",
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

const localStorage = {
  setUser,
  unsetUser,
  getUser,
  getPosts,
  savePost,
  getComments,
  saveComment,
};

export default localStorage;
