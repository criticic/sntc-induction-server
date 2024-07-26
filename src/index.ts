import { Hono } from "hono"
import { drizzle } from "drizzle-orm/d1";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import userRouter from "./routes/user";
import clubRouter from "./routes/clubs";

type Bindings = {
  DB: D1Database;
};

const app = new Hono<{ Bindings: Bindings }>();

app.use(clerkMiddleware());
app.route('/api/v1/users',userRouter);
app.route('/api/v1/clubs',clubRouter);

export default app;