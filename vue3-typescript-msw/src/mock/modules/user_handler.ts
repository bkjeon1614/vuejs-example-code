import { rest } from "msw";
import { users, user } from "@/mock/modules/data/users";

const handlers = [
  rest.get("/api/users", (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(1000), ctx.json(users));
  }),
  rest.get("/api/users/M221114EEE", (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(1000), ctx.json(user));
  }),
];

export default handlers;
