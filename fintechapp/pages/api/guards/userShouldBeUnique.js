const { PrismaClient } = require("@prisma/client");

async function userShouldBeUnique(req, res, next) {
  const prisma = new PrismaClient();
  try {
    const { username } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });
    if (!user) next();
    else
      return res
        .status(403)
        .send({ message: "This username already exists, please use another." });
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = userShouldBeUnique;
