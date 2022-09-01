import { error } from '@sveltejs/kit';

import slugify from 'slugify';
import * as matter from 'gray-matter';
import MarkdownIt  from 'markdown-it';

import fs from 'fs';
import path from 'path';


/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {

  const slug = slugify(params.slug);
  const filename = path.resolve('src/routes/content/'+slug+'.md');

  if (fs.existsSync(filename)){
    const { content, data } = matter.read(filename);
    const md = new MarkdownIt({ html: true });
  
    return { content: md.render(content), data };
  }
  


  throw error(404, 'Not found');
}