import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  const rawData = fs.readFileSync("./test.json");
  let data = JSON.parse(rawData as unknown as string);

  data.friends.push({ id: 3, name: "John" });

  console.log(data);

  fs.writeFileSync("./test.json", JSON.stringify(data));

  const newData = fs.readFileSync("./test.json");
  res.end(JSON.stringify(JSON.parse(newData as unknown as string)));
});

server.listen(8080, () => {
  fs.writeFile(
    "./test.json",
    JSON.stringify({
      friends: [
        { id: 1, name: "John" },
        { id: 2, name: "Jane" },
      ],
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

  console.log("Server is listening on port 3000");
});
