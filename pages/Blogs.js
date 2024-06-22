import BlogMain from "@/components/BlogMain";
import BlogSidebar from "@/components/BlogSidebar";
import PageBanner from "@/components/PageBanner";
import NoxfolioLayout from "@/layout/NoxfolioLayout";
import Link from "next/link";

export const metadata = {
  title: "Blogs",
};

const BlogPage = () => {
  return (
    <NoxfolioLayout>
      <PageBanner pageName={"Blogs"} />
   <BlogMain />
    </NoxfolioLayout>
  );
};

export const getServerSideProps = async () => {
  
    console.log("hii")
    const blogsQuery = `*[_type == "blogs" ]`
    const blogs = await client.fetch(blogsQuery);
    return {
      props: {blogs}
    }
  }

export default BlogPage;
