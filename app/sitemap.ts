import { BlogPost } from "@/lib/types";
import { getBlogs } from "@/sanity/actions";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts: BlogPost[] = await getBlogs({
        query:"",
        page: "1",
      });

      const postPageEntries: MetadataRoute.Sitemap = posts.map((post: BlogPost) => ({
        url: `${process.env.NEXT_PUBLIC_URL}/post/${post.slug}`
      }));


    return [
        ...postPageEntries
    ]
}