const { PrismaClient } = require("@prisma/client");
var jwt = require("jsonwebtoken");
var userShouldBeLoggedIn = require("../guards/userShouldBeLoggedIn");
var userShouldBeUnique = require("../guards/userShouldBeUnique");
require("dotenv").config();
var bcrypt = require("bcrypt");



export default async function register(req, res) {
  //REGISTER a new user
  const saltRounds = 10;
  // router.post("/register", userShouldBeUnique, async (req, res) => {
  const { username, password } = req.body;
  const prisma = new PrismaClient();

  try {
    const hash = await bcrypt.hash(password, saltRounds);
    await prisma.user.create({
      data: {
        username,
        password: hash,
      },
    });

    res.send({ message: "Register successful" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
}
