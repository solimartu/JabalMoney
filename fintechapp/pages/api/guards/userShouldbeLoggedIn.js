const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
require("dotenv").config();
const supersecret = process.env.SUPER_SECRET;

function userShouldBeLoggedIn(req, res, next) {
  const prisma = new PrismaClient();
  //check if there is the token
  //there is an header called authorization
  const token = req.headers["authorization"]?.replace(/^Bearer\s/, "");
  if (!token) {
    return res.status(401).send({ message: "You have to log in first" });
  }
  //verify the token
  jwt.verify(token, supersecret, async (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Invalid token" });
    } else {
      try {
        const user = await prisma.user.findUnique({
          where: {
            id: decoded.user_id,
          },
        });
        req.user = user;

        next();
      } catch (err) {
        res.status(500).send(err);
      }
    }
  });
}

module.exports = userShouldBeLoggedIn;
