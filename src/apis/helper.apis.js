import axios from "axios";

const upload_file = async (file) => {
  const formData = new FormData();
  formData.append("images", file);

  const { data } = await axios.post(
    "https://www.ingenral.com/api/images?type=single&path=blog_images",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return "https://www.ingenral.com/" + data.data;
};

const helperApis = {
  upload_file,
};

export default helperApis;
