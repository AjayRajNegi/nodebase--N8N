import { inngest } from "@/inngest/client";
import { serve } from "inngest/next";
import { execute } from "./functions";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [execute],
});
