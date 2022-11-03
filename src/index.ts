import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  const rawData = fs.readFileSync("./test.json");
  let data = JSON.parse(rawData as unknown as string);

  data.friends.push({ id: 3, name: "John" });

  console.log(data);

  fs.writeFileSync("./test.json", JSON.stringify(data));
  res.end("Hello World!");
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
