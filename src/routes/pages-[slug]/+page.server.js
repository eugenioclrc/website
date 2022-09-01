import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  // const post = await getPostFromDatabase(params.slug);
  const post = {
    title: "dasd",
    content: "dsad"
  }
 
  if (post) {
    return post;
  }
 
  throw error(404, 'Not found');
}