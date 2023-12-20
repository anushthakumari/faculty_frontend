import axios from "axios";

import api_urls from "constants/api_urls";
import localStorage from "libs/localStorage";

const getPosts = async () => {
  const { data } = await axios.get(api_urls.POST_SERVICE_API_URL + "community-posts");

  return data;
};

const savePost = async (imageUrl, caption) => {
  const userData = localStorage.getUser();

  const { data } = await axios.post(api_urls.POST_SERVICE_API_URL + "community-posts", {
    user_id: userData.user_id,
    username: userData.user_name,
    imageUrl,
    caption,
  });

  return data;
};

const postsAPIs = {
  getPosts,
  savePost,
};

export default postsAPIs;
