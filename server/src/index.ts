import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import { loginRouter } from "./routes/loginRoute";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ name: "session", keys: ["awrcd"] }));
app.use(loginRouter);

app.listen(3000, () => {
  console.log("Server up and running...");
});
