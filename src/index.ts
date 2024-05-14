import 'dotenv/config';

import {
  deleteBlogsLambda,
  getBlogsLambda,
  postBlogsLambda,
} from './functions';

const postBlog = async () => {
  const res = await postBlogsLambda();
  console.log(res);
};

const getBlogs = async () => {
  const res = await getBlogsLambda();
  console.log(res);
  await deleteBlog();
};

const deleteBlog = async () => {
  const res = await deleteBlogsLambda();
  console.log(res);
};

const main = async () => {
  await postBlog();
  await getBlogs();
};

main();
