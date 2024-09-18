// import { createServer } from "http";  express hereglej bga bolhoor eniig heregleh shaardlaggui bolson
import express from "express";
import { Server } from "http";
// const { log } = require("console");
// const http = require("http");
const app = express();
app.use(express.json());

const port = 8080;

// const server = http.createServer((request, response) => {
//   response.statusCode = 200;
//   response.setHeader("Content-type", "text/plain");
//   response.end("Hello World");
//   console.log(request);
//   console.log(response);
// });
// server.listen(port, () => {
//     console.log(`server running at a http://localhost:${port}/`);
//   });

app.get("/articles", (request, response) => {
  response.send("Hello Response from Express");
});

app.post("/addArticle", (request, response) => {
  console.log(request);
  response.send("Product successfully added");
});
app.listen(port, () => {
  console.log(`server running at a http://localhost:${port}/`);
});
