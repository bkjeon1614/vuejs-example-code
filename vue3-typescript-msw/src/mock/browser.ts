import { setupWorker } from "msw";
import user_handler from "@/mock/modules/user_handler";

export const worker = setupWorker(...user_handler);
