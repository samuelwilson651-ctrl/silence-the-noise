import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImage } from "@/types";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN,
});

const builder = imageUrlBuilder(sanityClient);
export function urlFor(source: SanityImage) { return builder.image(source); }

export const queries = {
  allArticles: `*[_type=="article"&&defined(slug.current)]|order(publishedAt desc){_id,title,slug,excerpt,category,pillars,publishedAt,readingTime,featured,memberOnly,coverImage}`,
  articlesByCategory: `*[_type=="article"&&category==$category]|order(publishedAt desc){_id,title,slug,excerpt,category,pillars,publishedAt,readingTime,memberOnly,coverImage}`,
  articleBySlug: `*[_type=="article"&&slug.current==$slug][0]{_id,title,slug,excerpt,body,category,pillars,tags,publishedAt,readingTime,memberOnly,coverImage,"author":author->{name,credentials},"related":*[_type=="article"&&category==^.category&&slug.current!=$slug]|order(publishedAt desc)[0..2]{_id,title,slug,excerpt,readingTime,coverImage}}`,
  featuredArticles: `*[_type=="article"&&featured==true]|order(publishedAt desc)[0..5]{_id,title,slug,excerpt,category,pillars,readingTime,memberOnly,coverImage}`,
  allDevotionals: `*[_type=="devotional"&&defined(slug.current)]|order(publishedAt desc){_id,title,slug,scriptureReference,category,pillars,theme,publishedAt,memberOnly,coverImage}`,
  devotionalBySlug: `*[_type=="devotional"&&slug.current==$slug][0]{_id,title,slug,scripture,scriptureReference,reflection,prayer,category,pillars,theme,publishedAt,memberOnly,coverImage}`,
  allPodcast: `*[_type=="podcast"]|order(episodeNumber desc){_id,title,slug,episodeNumber,description,duration,audioUrl,category,pillars,publishedAt,memberOnly}`,
  allVideos: `*[_type=="videoSeries"]|order(seriesNumber desc){_id,title,slug,seriesNumber,description,duration,videoUrl,category,pillars,publishedAt,memberOnly}`,
};

export const getAllArticles    = () => sanityClient.fetch(queries.allArticles);
export const getArticlesByCategory = (category: string) => sanityClient.fetch(queries.articlesByCategory, { category });
export const getArticleBySlug = (slug: string) => sanityClient.fetch(queries.articleBySlug, { slug });
export const getFeaturedArticles = () => sanityClient.fetch(queries.featuredArticles);
export const getAllDevotionals = () => sanityClient.fetch(queries.allDevotionals);
export const getDevotionalBySlug = (slug: string) => sanityClient.fetch(queries.devotionalBySlug, { slug });
export const getAllPodcast     = () => sanityClient.fetch(queries.allPodcast);
export const getAllVideos      = () => sanityClient.fetch(queries.allVideos);
