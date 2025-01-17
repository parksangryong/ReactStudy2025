import axios from "axios";

export async function uploadFiles(files: File[], uploadUrl: string) {
  try {
    const formData = new FormData();

    files.forEach((file) => {
      formData.append("files", file);
    });

    console.log(formData);

    const response = await axios.post(uploadUrl, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    alert("업로드 실패");
    throw error;
  }
}
