import express, { request, response } from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json("Hello guys");
});

app.listen(3333, () => {
  console.log("Server is on 🚀🚀");
});
