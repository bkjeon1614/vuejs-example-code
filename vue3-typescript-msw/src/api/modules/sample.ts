import { Sample } from "@/api/interface/index";

import http from "@/api";

export const getSampleList = (params: Sample.ReqGetSampleParams) => {
  return http.get<Sample.ResSampleList[]>(
    `https://api.sampleapis.com/coffee/hot`,
    params
  );
};
