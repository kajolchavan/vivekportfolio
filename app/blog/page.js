import { client } from "@/cms/lib/client";
import BlogMain from "@/components/BlogMain";
import BlogSidebar from "@/components/BlogSidebar";
import PageBanner from "@/components/PageBanner";
import NoxfolioLayout from "@/layout/NoxfolioLayout";
import Link from "next/link";

export const metadata = {
  title: "Blogs",
};

const fetchBlogData = async () =>{
  const blogsQuery = `*[_type == "blogs" ]{
    coverImage{
         asset->{
           _id,
           url
         }
       },
    bannerImage{
         asset->{
           _id,
           url
         }
       },
    title,
      content,
      _id
 
      
       
       
   }`
   console.log("hii")
  const blogs = await client.fetch(blogsQuery);
  console.log(blogs)
  return blogs
  
}
  
export const dynamic = 'auto'
export const dynamicParams = true
export const revalidate = 0
const BlogPage = async () => {
  const blogs = await fetchBlogData()
  
  return (
    <NoxfolioLayout>
      <PageBanner pageName={"Blogs"} />
   <BlogMain blogs={blogs} />
    </NoxfolioLayout>
  );
};



export default BlogPage;
