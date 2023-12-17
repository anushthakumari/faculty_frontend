import axios from "axios";

import api_urls from "constants/api_urls";

axios.defaults.baseURL = api_urls.RES_BASE_URL;

const upload_res = async (
  files = [],
  element_type = "",
  title = "",
  desc = "",
  user_id = null,
  user_name = null,
  is_private = true
) => {
  const formData = new FormData();
  files.forEach((file) => formData.append("file", file));

  formData.append("is_private", is_private);
  formData.append("element_type", element_type);

  if (user_name) {
    formData.append("user_name", user_name);
  }

  if (user_id) {
    formData.append("user_id", user_id);
  }

  if (title) {
    formData.append("title", title);
  }

  if (desc) {
    formData.append("desc", desc);
  }

  const { data } = await axios.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

const delete_res = async (assest_id = "") => {
  return await axios.delete("/delete/" + assest_id);
};

const get_res = async (element_type) => {
  const { data } = await axios.get("/assets", {
    params: {
      element_type,
    },
  });

  return data;
};

const resourcesAPIs = {
  upload_res,
  delete_res,
  get_res,
};

export default resourcesAPIs;
