/**
 * Sanity CMS Client Stub
 *
 * This file prepares the data-fetching architecture for Sanity CMS integration.
 * Uncomment and configure when the Sanity project is set up.
 */

// import { createClient } from '@sanity/client';
//
// export const sanityClient = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
//   apiVersion: '2026-05-01',
//   useCdn: true,
// });
//
// /**
//  * Fetch a page by slug from Sanity.
//  */
// export async function getPageBySlug(slug: string) {
//   return sanityClient.fetch(
//     `*[_type == "page" && slug.current == $slug][0]{
//       title,
//       description,
//       body,
//       "slug": slug.current
//     }`,
//     { slug }
//   );
// }

export {};
