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

const localStorage = {
  setUser,
  unsetUser,
  getUser,
  getPosts,
  savePost,
};

export default localStorage;
