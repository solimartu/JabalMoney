# JabalMoney

JabalMoney is a project inspired but our own economic hardships, take a quick test to have a clear picture of your financial situation and start uploading your incomes and expenses.
This project is not complete yet, but it will eventually!

## Built with

- Next.JS
- Prisma
- TailWindCSS
- JWT

### Database schema

![databaseschema](DBSCHEMA.PNG)

### API Routes

This has been our first project using next.js so likely there are funny things happening, as calling Prisma in getStaticProps. Sometimes we created our api routes, some other not.
We are experimenting!

| URL                         | HTTP METHOD | DESCRIPTION              | REQ                                           | RES                                                                 |
|-----------------------------|-------------|--------------------------|-----------------------------------------------|---------------------------------------------------------------------|
| /api/users/login            | POST        |                          | {"username": string, "password": string}      | { message: "Login successful, here is your token", token }          |
| /api/users/register         | POST        |                          | { username: "", email: "", password: "" }     | { message: "Register successful" }                                  |
| /api/questions              | GET         | to get all the questions |                                               | [{questions: {}, opcions:{} ]                                       |
| /api/calculator/balance     | GET         | to get all the movements |                                               | {ingresos: totalingresos,,gastos: totalgastos,,balance: balance,,}; |
| /api/calculator/movimientos | POST        | to add a movement        | {amount: float, concept: string, tipo:string} |                                                                     |
## User Flow

![register](userflow\register.jpeg)
![login](userflow\login.jpeg)
![question1](userflow\q1.jpeg)
![question2](userflow\q2.jpeg)
![profile](userflow\profile.PNG)

## Set up

### Database preparation

Type mysql -u root -p to access the MySQL CLI using your password.

In the MySQL CLI, type `create database DB_NAME`; to create a database in MySQL.

Add in the .env file the direction to connect your database with Prisma: DATABASE_URL="mysql://root:root@127.0.0.1:3306/DB_NAME"

To add Prisma:

`npm init -y`
`npm install prisma --save-dev`

and `npx prisma init`

And run the migration with `npx prisma migrate dev --name init`

To run the seeds: `npx prisma db seed`

## Development

`cd fintechapp` and

`npm run dev` or `yarn dev`

Your page will run at  `http://localhost:3000`

### Notes

At the moment the project is mostly working, but we are still figuring how to protect our routes and eventually we will use D3 in the user profile.
