import request from "./myAxios";
import {UserType} from "../model/user";

export const getCurrent = async () => {
    try {
      const getCurrentUser: UserType = await request.get("/user/current");
      if (getCurrentUser) {
        sessionStorage.setItem("longUser", JSON.stringify(getCurrentUser));
      } else {
        sessionStorage.setItem("longUser", JSON.stringify({}));
      }
      return getCurrentUser;
    } catch (error) {
      console.error("Failed to get current user:", error);
      return null;
    }
  };

export default getCurrent