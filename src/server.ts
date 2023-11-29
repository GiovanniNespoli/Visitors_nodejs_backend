import "reflect-metadata";
import "./modules/visitors/config/index";
import express, { Application } from "express";
import cors from "cors";
import routes from "./routes";

const app: Application = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
