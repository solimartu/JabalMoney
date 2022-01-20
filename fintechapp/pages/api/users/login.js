const { PrismaClient } = require("@prisma/client");
var jwt = require("jsonwebtoken");
var userShouldBeLoggedIn = require("../guards/userShouldBeLoggedIn");
var userShouldBeUnique = require("../guards/userShouldBeUnique");
require("dotenv").config();
var bcrypt = require("bcrypt");
const saltRounds = 10;

const supersecret = process.env.SUPERSECRET;

export default async function login(req, res) {
  const prisma = new PrismaClient();

  const { username, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (user) {
      const user_id = user.id;
      const correctPassword = await bcrypt.compare(password, user.password);
      if (!correctPassword) throw new Error("Incorrect password");
      //i create a new token with the username and id
      var token = jwt.sign({ user_id }, supersecret);
      res.send({ message: "Login successful, here is your token", token });
    } else {
      throw new Error("User does not exist");
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
}
