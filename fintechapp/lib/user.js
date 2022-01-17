import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";
const { PrismaClient } = require("@prisma/client");

export async function createUser({ username, password }) {

 const prisma = new PrismaClient();
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");
  //here should be with PRISMA

//   const user = {
//     id: uuidv4(),
//     createdAt: Date.now(),
//     username,
//     hash,
//     salt,
//   };

const user = await prisma.user.create({
  data: {
    username,
    password: hash,
  },
});
  // here goes prisma
  //   users.push(user);

  return { username, createdAt: Date.now() };
}

// Here you should lookup for the user in your DB
export async function findUser({ username }) {
  //find unique user
const prisma = new PrismaClient();
const user = await prisma.user.findUnique({
    where:{
        username,
    }
})
}

// Compare the password of an already fetched user (using `findUser`) and compare the
// mirar como lo hicimos con sequelize

export function validatePassword(inputPassword) {

   const prisma = new PrismaClient();
   const user = await prisma.user.findUnique({
     where: {
       username,
     },
   });

  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, "sha512")
    .toString("hex");
  const passwordsMatch = user.password === inputHash;
  return passwordsMatch;
}
