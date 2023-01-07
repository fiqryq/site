import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import highlight from 'rehype-highlight';
import rehypePrism from '@mapbox/rehype-prism';

const Content = defineDocumentType(() => ({
  name: 'Content',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: false
    },
    author: {
      type: 'string',
      description: 'Author of the post',
      required: false
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: false
    },
    banner: {
      type: 'string',
      description: 'Banner of the post',
      required: false
    },
    tag: {
      type: 'string',
      description: 'Tag of the post',
      required: false
    },
    description: {
      type: 'string',
      description: 'Short description of the post',
      required: false
    }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc: any) => `/content/${doc._raw.flattenedPath}`
    }
  }
}));

export default makeSource({
  contentDirPath: 'content',
  mdx: {
    rehypePlugins: [highlight, rehypePrism]
  },
  documentTypes: [Content]
});
