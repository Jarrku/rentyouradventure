import { createClient } from 'urql';

const previewClient = createClient({ url: process.env.contentfulPreviewGraphQLUrl! });
const client = createClient({ url: process.env.contentfulGraphQLUrl! });

export const getContentfulClient = (preview: boolean) => (preview ? previewClient : client);

