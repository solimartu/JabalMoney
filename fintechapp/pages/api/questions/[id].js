import { PrismaClient } from "@prisma/client";

export async function getStaticProps({ params }) {
  const questions = await prisma.question.findMany({
    where: {
      id: params.id,
    },
  });

  //   const postData = getPostData(params.id);
  return {
    props: {
      questions,
    },
  };
}

export async function getStaticPaths() {
  const prisma = new PrismaClient();
  const paths = await prisma.question.findMany();
  //   const paths = getAllPostIds(); // ver como tenemos todos los IDS
  res.json(questions);
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ questions }) {
  return (
    <div>
      {questions.title}
      <br />
      {questions.id}
      <br />
      {questions.category}
    </div>
  );
}
