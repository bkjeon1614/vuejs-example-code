export interface Result {
  code: string;
  msg: string;
}

export interface ResultData<T = any> extends Result {
  data: T;
}

export interface ResPage<T = any> extends Result {
  pageNum: number;
  pageSize: number;
  totalCnt: number;
  data: T[];
}

export interface ReqPage {
  pageNum?: number;
  pageSize?: number;
}

export namespace Sample {
  export interface ReqGetSampleParams extends ReqPage {
    title?: string;
    description?: string;
  }
  export interface ResSampleList {
    title: string;
    description: string;
    ingredients: string[];
    image: string;
    id: number;
  }
}

export namespace User {
  export interface ReqGetUserParams extends ReqPage {
    username?: string;
    email?: string;
  }
  export interface ResUser {
    id: string;
    username: string;
    age: number;
    email: string;
  }
}
