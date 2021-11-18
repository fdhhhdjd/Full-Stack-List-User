import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
const app = express();
const port = 5000;
app.use(morgan("combined"));
app.use(bodyParser.json());
apps.use(cors());
app.get("/", (req, res) => res.send("Home FullStack"));
app.listen(port, () =>
  console.log(`server is listening on port:http://localhost:${port}`)
);