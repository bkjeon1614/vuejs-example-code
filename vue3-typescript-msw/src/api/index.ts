import axios, {
  AxiosInstance,
  AxiosError,
  AxiosResponse,
  AxiosRequestConfig,
} from "axios";
import { ResultEnum } from "@/enums/httpEnum";
import { checkStatus } from "./helper/checkStatus";

const axiosConfig = {
  timeout: 10000,
};

class RequestHttp {
  service: AxiosInstance;
  public constructor(axiosConfig: AxiosRequestConfig) {
    this.service = axios.create(axiosConfig);

    this.service.interceptors.request.use(
      (axiosConfig: AxiosRequestConfig) => {
        return {
          ...axiosConfig,
          headers: { ...axiosConfig.headers, "x-access-token": "bkjeon" },
        };
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );
    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        const { data } = response;

        if (data.code && data.code !== ResultEnum.SUCCESS) {
          console.log("Application Error !!: " + data.msg);
          return Promise.reject(data);
        }

        return data;
      },
      async (error: AxiosError) => {
        const { response } = error;
        if (error.message.indexOf("timeout") !== -1) {
          console.log("Request timed out! Please try again later");
        }

        if (response) checkStatus(response.status);
        return Promise.reject(error);
      }
    );
  }
  get<T>(url: string, params?: object, _object = {}): Promise<T> {
    return this.service.get(url, { params, ..._object });
  }
  post<T>(url: string, params?: object, _object = {}): Promise<T> {
    return this.service.post(url, params, _object);
  }
  put<T>(url: string, params?: object, _object = {}): Promise<T> {
    return this.service.put(url, params, _object);
  }
  delete<T>(url: string, params?: any, _object = {}): Promise<T> {
    return this.service.delete(url, { params, ..._object });
  }
}

export default new RequestHttp(axiosConfig);
