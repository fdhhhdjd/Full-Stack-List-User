import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
const port = 5000;
app.use(bodyParser.json());
app.use(cors());
app.get("/", (req, res) => res.send("Home FullStack"));
app.listen(port, () =>
  console.log(`server is listening on port:http://localhost:${port}`)
);
