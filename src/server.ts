import express from "express";
import requireDir from "require-dir";
import allowCors from "./config/cors";
import { routesApi } from "./routes";
import 'dotenv/config';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(allowCors);

requireDir("./models");

app.use(routesApi);

const port = 3002;

app.listen(port, () => {
  console.log("Server is running on PORT 3002");
});
