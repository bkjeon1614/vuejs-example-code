import { ResPage, ResultData, User } from "@/api/interface/index";

import http from "@/api";

export const getUserList = (params: User.ReqGetUserParams) => {
  return http.get<ResPage<User.ResUser>>(`/api/users`, params);
};

export const getUserData = (params: { id: string }) => {
  return http.get<ResultData<User.ResUser>>(`/api/users/` + params.id);
};
