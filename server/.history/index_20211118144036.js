import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import useRouters from "./routes/users.js";

const app = express();
const port = 5000;
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

app.use("/", useRouters);
app.get("/", (req, res) => res.send("Home FullStack"));
app.all("*", (req, res) => res.send("Router doesn't exist"));
app.listen(port, () =>
  console.log(`server is listening on port:http://localhost:${port}`)
);
