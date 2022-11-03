import fs from "node:fs";

function getAllFriends() {
  const rawData = fs.readFileSync("./test.json");
  return JSON.parse(rawData as unknown as string);
}

function getFriendById(id: number) {
  const rawData = fs.readFileSync("./test.json");
  const data = JSON.parse(rawData as unknown as string);

  return data.friends.find((friend: { id: number }) => friend.id === id);
}

function addFriend(friend: { id: number; name: string }) {
  const rawData = fs.readFileSync("./test.json");
  let data = JSON.parse(rawData as unknown as string);

  data.friends.push(friend);

  fs.writeFileSync("./test.json", JSON.stringify(data));

  return friend;
}

function updateFriend(id: number, friend: { id: number; name: string }) {
  const rawData = fs.readFileSync("./test.json");
  let data = JSON.parse(rawData as unknown as string);

  const index = data.friends.findIndex(
    (friend: { id: number }) => friend.id === id
  );

  data.friends[index] = friend;

  fs.writeFileSync("./test.json", JSON.stringify(data));

  return friend;
}

function deleteFriend(id: number) {
  const rawData = fs.readFileSync("./test.json");
  let data = JSON.parse(rawData as unknown as string);

  const index = data.friends.findIndex(
    (friend: { id: number }) => friend.id === id
  );

  data.friends.splice(index, 1);

  fs.writeFileSync("./test.json", JSON.stringify(data));

  return data.friends;
}

export { addFriend, deleteFriend, getAllFriends, getFriendById, updateFriend };
