import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `posts/**/*.md`,
    fields: {
        title: {
            type: 'string',
            description: 'The title of the post',
            required: true,
        },
        date: {
            type: 'date',
            description: 'The date of the post',
            required: true,
        },
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (post) => `/${post._raw.flattenedPath}`,
        },
    },
}));

export const Page = defineDocumentType(() => ({
    name: 'Page',
    filePathPattern: `pages/**/*.md`,
    fields: {
        title: {
            type: 'string',
            description: 'The title of the post',
            required: true,
        },
        date: {
            type: 'date',
            description: 'The date of the post',
            required: true,
        },
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (post) => `/${post._raw.flattenedPath}`,
        },
    },
}));

export default makeSource({
    contentDirPath: 'contents',
    documentTypes: [Post, Page],
})