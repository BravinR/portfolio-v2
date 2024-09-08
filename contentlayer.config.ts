// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import readingTime from 'reading-time';
// support for anchor links
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
// adds rel to external links
import rehypeExternalLinks from 'rehype-external-links';
// support for math
import rehypeKatex from 'rehype-katex';
// support code titles
import rehypeCodeTitles from 'rehype-code-titles'
// support for code syntax highlighting
import rehypePrism from 'rehype-prism-plus';
// adds slug to headings
import rehypeSlug from 'rehype-slug';
// support for github flavored markdown
import remarkGfm from 'remark-gfm';
// support for math
import remarkMath from 'remark-math';
import emoji from 'remark-emoji';

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
	fields: {
		title: { type: 'string', required: true },
		author: { type: 'string', default: 'Bravin.' },
		date: { type: 'date', required: true },
		image: {
			type: 'string',
			description: 'Hero Image URL',
			// TODO: Change this to a generic default image
			default: 'https://avatars.githubusercontent.com/u/101227423?s=200&v=4'
		},
		imageAlt: { type: 'string', description: 'Hero Image Alt' },
		excerpt: { type: 'string' },
		tags: {
			type: 'list',
			of: { type: 'string' },
			required: true
		}
	},
	computedFields: {
		url: {
			type: 'string',
			resolve: (post) => `/blog/${post._raw.sourceFileName.replace(/\.mdx$/, '')}`
		},
		slug: {
			type: 'string',
			resolve: (post) => post._raw.sourceFileName.replace(/\.mdx$/, '')
		},
		readTime: { type: 'string', resolve: (doc) => readingTime(doc.body.raw).text },
		image: {
			type: 'string',
			resolve: (post) => (post.image.startsWith('http') ? post.image : `/${post.image}`)
		}
	}
}))

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  	mdx: {
		remarkPlugins: [remarkGfm, remarkMath],
		rehypePlugins: [
			rehypeSlug,
			rehypeAutolinkHeadings,
            // @ts-expect-error
			rehypeKatex,
			rehypePrism,
			rehypeExternalLinks,
            rehypeCodeTitles,
			emoji 
		]
	}
})
