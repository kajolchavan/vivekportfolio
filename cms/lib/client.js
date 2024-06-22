
import imageUrlBuilder from '@sanity/image-url';

import {createClient} from '@sanity/client'
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: 'jsnual1a',
  dataset: 'production',
  apiVersion: '2022-03-07',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})



const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);