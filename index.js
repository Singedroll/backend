import { customersRouter } from "./router/customers.router";
import express from "express";

const app = express();
// const { sql } = require("./database");
import { sql } from "./database";

app.use(express.json());

const port = 8080;

app.use("/customers", customersRouter);

app.listen(port, () => {
  console.log(`server running at a http://localhost:${port}/`);
});
