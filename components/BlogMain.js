import { client, urlFor } from "@/cms/lib/client";

import Link from "next/link";

const BlogMain = ({blogs}) => {
    
  return (
    <div>
           <section className="blog-standard-area pb-70 rpb-40 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-standard-wrap">
                <div className="row">
                {
                    blogs?.length !== 0 && blogs?.map((blog)=>(
                        <div key={blog._id} className="col-md-6 col-lg-4 item">
                    <div className="blog-item style-two wow fadeInUp delay-0-2s">
                      <div className="image">
                      {blog?.coverImage &&  <img
                          src={blog?.coverImage?.asset?.url}
                          alt="Blog Standard"
                        />}
                      </div>
                      <div className="content">
                        {/* <div className="blog-meta mb-20">
                          <Link legacyBehavior className="tag" href="blog">
                            Design
                          </Link>
                          <Link legacyBehavior className="tag" href="blog">
                            Figma
                          </Link>
                        </div> */}
                        <h5>
                          <Link legacyBehavior href={`blog-details/${blog?._id}`}>
                            {blog.title}
                          </Link>
                        </h5>
                        {/* <hr /> */}
                        {/* <div className="blog-meta mb-5">
                          <a className="date" href="#">
                            <i className="far fa-calendar-alt" /> September 25,
                            2023
                          </a>
                        </div> */}
                      </div>
                    </div>
                  </div>
                    ))
                }
                

       
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
    </div>
  )
}





export default BlogMain