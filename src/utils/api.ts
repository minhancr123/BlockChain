import axios from "../utils/axios.customize";


export const registerAPI = (username: string,
    commonName: string,
    organization: string,
    organizationalUnit: string,
    country: string,
    state: string,
    locality: string
) => {
    const url = `/ap1/v1/auth/register`
    return axios.post(url, { username, commonName, organization, organizationalUnit, country, state, locality })
}

export const loginAPI = (username: string, password: string) => {

    const url = `/api/v1/auth/login`
    return axios.post(url, { username: username, password })
}
export const changePasswordAPI = async (
    username: string,
    oldPassword: string,
    newPassword: string,
    confirmPassword: string
  ) => {
    const url = `http://192.168.2.17:3000/api/v1/auth/change-password`;
  
    try {
      const response = await axios.post(url, {
        username,
        oldPassword,
        newPassword,
        confirmPassword,
      });
      return response;

    } catch (error: any) {
      console.error("Error changing password:", error.response?.data || error);
      return { success: false, message: "Lỗi khi đổi mật khẩu!" };
    }
  };
