import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import fs from "node:fs";
import path from "node:path";

import * as url from "node:url";

import { addFriend } from "./utils.js";

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(url.fileURLToPath(new URL(".", import.meta.url))));
});

app.post("/formdata", (req: any, res: any) => {
  const { id, name } = req.body;

  const friend = addFriend({ id: Number(id), name });

  res.send(friend);
});

app.listen(port, () => {
  fs.writeFile(
    "./test.json",
    JSON.stringify({
      friends: [],
    }),
    { flag: "wx" },
    (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("File created");
      }
    }
  );

  console.log(`Server running on port ${port}`);
});
