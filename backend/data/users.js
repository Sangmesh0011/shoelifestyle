import bcryptjs from "bcryptjs";

const users = [
  {
    name: "Admin1",
    email: "admin1@email.com",
    password: bcryptjs.hashSync("11111111", 10),
    isAdmin: true,
  },
  {
    name: "User1",
    email: "user1@email.com",
    password: bcryptjs.hashSync("11111111", 10),
    isAdmin: false,
  },
  {
    name: "User2",
    email: "user2@email.com",
    password: bcryptjs.hashSync("11111111", 10),
    isAdmin: false,
  },
];

export default users;
