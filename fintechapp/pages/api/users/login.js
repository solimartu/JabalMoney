const { PrismaClient } = require("@prisma/client");
var jwt = require("jsonwebtoken");
var userShouldBeLoggedIn = require("../guards/userShouldBeLoggedIn");
var userShouldBeUnique = require("../guards/userShouldBeUnique");
require("dotenv").config();
var bcrypt = require("bcrypt");
const saltRounds = 10;

const supersecret = process.env.SUPER_SECRET;


//first i create a new table in my db called users with userId, username, email and password columns
// 
export default async function login(req, res) {
  const { username, password } = req.body;

  try {
    const user = await models.User.findOne({
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

// GET the profile of the logged user
// router.get("/profile", userShouldBeLoggedIn, async function (req, res, next) {
//   const { id } = req.user;

//   const username = await models.User.findOne({
//     where: {
//       id,
//     },
//   });

//   res.send(username.username);
// });

// module.exports = router;
