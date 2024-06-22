"use client"
import { client } from "@/cms/lib/client";
import BlogSidebar from "@/components/BlogSidebar";
import NoxfolioLayout from "@/layout/NoxfolioLayout";
import Link from "next/link";
import { useParams } from 'next/navigation'
import PortableText from "react-portable-text";


const fetchBlogDetails = async (id) =>{
  const blogDetailsQuery = `*[_type == "blogs" &&  _id == '${id}']{
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
  }`;
  const blogDetails = await client.fetch(blogDetailsQuery);
  return blogDetails[0]
}

const BlogDetails = async () => {
  const { slug } = useParams()
  
  const blogDetails = await fetchBlogDetails(slug)
  console.log(blogDetails)
  return (
    <NoxfolioLayout>
      <section className="page-banner-area pt-200 rpt-140 pb-100 rpb-60 rel z-1 text-center">
        <div className="container">
          <div className="banner-inner text-white">
            <h3 className="page-title wow fadeInUp delay-0-2s">
              {" "}
              {blogDetails?.title}
            </h3>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center wow fadeInUp delay-0-4s">
                <li className="breadcrumb-item">
                  <Link legacyBehavior href="/">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active">
                  {" "}
                  {blogDetails?.title}
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* Page Banner End */}
      {/* Blog Details Area start */}
      <section className="blog-details-area pb-70 rpb-40 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-details-wrap">
             
                <div className="image mb-35 wow fadeInUp delay-0-5s">
               { blogDetails?.bannerImage &&  <img
                    src={blogDetails?.bannerImage?.asset?.url}
                    alt="Blog Details"
                  />}
                </div>
                <div className="content wow fadeInUp delay-0-2s">
                  <p className="big-letter">
                  {
                    blogDetails?.content && <PortableText
              // Pass in block content straight from Sanity.io
              content={blogDetails?.content}
              projectId="rhkj6pd9"
              dataset="production"
              // Optionally override marks, decorators, blocks, etc. in a flat
              // structure without doing any gymnastics
              serializers={{
                h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                li: ({ children }) => <li className="special-list-item">{children}</li>,
              
              }}
            />
                  }
                  </p>
             
                </div>
        
              </div>
            </div>
            
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
    </NoxfolioLayout>
  );
};
export default BlogDetails;
