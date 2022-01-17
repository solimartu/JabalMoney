const { PrismaClient } = require("@prisma/client");
var jwt = require("jsonwebtoken");
// var userShouldBeLoggedIn = require("../guards/userShouldBeLoggedIn");
// var userShouldBeUnique = require("../guards/userShouldBeUnique");
require("dotenv").config();
var bcrypt = require("bcrypt");



export default async function register(req, res) {
  //REGISTER a new user
  const saltRounds = 10;
  // router.post("/register", userShouldBeUnique, async (req, res) => {
  const { username, email, password } = req.body;
  console.log('la password boluda', password)
  console.log('hay una email nooo', email)
  const prisma = new PrismaClient();

  try {
    const hash = await bcrypt.hash(password, saltRounds);
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hash,
      },
    });

    res.send({ message: "Register successful" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
  register()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}
