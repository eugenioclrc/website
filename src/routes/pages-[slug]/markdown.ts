import * as matter from 'gray-matter';
import MarkdownIt  from 'markdown-it';

export default function processMarkdown(filename) {
  const { content, data } = matter.read(filename);
  const md = new MarkdownIt();
  
  return { content: md.render(content), data };
}