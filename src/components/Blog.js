export default function Blog() {
  const blogCategories = [
    "Career & Certification Guidance",
    "Infection Control & Best Practices", 
    "Tools, Tech & Equipment Insights",
    "Behind the Scenes at Raly",
    "Student Success Stories"
  ];

  const sampleBlogs = [
    {
      title: "How to Pass the CBSPD Exam on Your First Try",
      category: "Career & Certification Guidance",
      excerpt: "Essential study strategies and tips from successful candidates to ace your certification exam.",
      readTime: "5 min read"
    },
    {
      title: "The Role of Sterile Processing Technicians in Infection Prevention", 
      category: "Infection Control & Best Practices",
      excerpt: "Understanding the critical impact SPD professionals have on patient safety and healthcare outcomes.",
      readTime: "7 min read"
    },
    {
      title: "Top 5 Skills Agencies Look for in SPD Professionals",
      category: "Career & Certification Guidance", 
      excerpt: "Discover the most in-demand skills that will make you stand out in the competitive job market.",
      readTime: "4 min read"
    },
    {
      title: "Building a Career in Sterile Processing: A Beginner's Guide",
      category: "Career & Certification Guidance",
      excerpt: "Your complete roadmap to starting and advancing your career in sterile processing.",
      readTime: "8 min read"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-[1170px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h3 className="text-5xl font-bold text-[#024d94] mb-6">
            Insights, Updates & Expert Tips in Sterile Processing
          </h3>
          <img src="/images/line.png" className="mx-auto mb-8" alt="" />
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Stay up to date with industry trends, educational tips, certification insights, and professional growth in the world of sterile processing and healthcare.
          </p>
        </div>

        {/* Blog Categories */}
        <div className="mb-16">
          <h4 className="text-2xl font-bold text-[#024d94] text-center mb-8">Blog Categories</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogCategories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#f8d171] cursor-pointer group">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#024d94] rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#f8d171] transition-colors duration-300">
                    <i className="icon-folder text-white group-hover:text-[#024d94] text-lg"></i>
                  </div>
                  <h5 className="text-lg font-bold text-[#024d94] group-hover:text-[#024d94]">{category}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Blog Posts */}
        <div className="mb-16">
          <h4 className="text-2xl font-bold text-[#024d94] text-center mb-12">Latest Articles</h4>
          <div className="grid md:grid-cols-2 gap-8">
            {sampleBlogs.map((blog, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group cursor-pointer">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block bg-[#f8d171] text-[#024d94] px-3 py-1 rounded-full text-sm font-semibold">
                      {blog.category}
                    </span>
                    <span className="text-gray-500 text-sm">{blog.readTime}</span>
                  </div>
                  <h5 className="text-xl font-bold text-[#024d94] mb-3 group-hover:text-[#024d94] transition-colors duration-300">
                    {blog.title}
                  </h5>
                  <p className="text-gray-600 leading-relaxed mb-4">{blog.excerpt}</p>
                  <div className="flex items-center text-[#024d94] font-semibold group-hover:text-[#f8d171] transition-colors duration-300">
                    <span>Read More</span>
                    <i className="icon-arrow-right ml-2"></i>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-[#024d94] rounded-xl p-12 text-center">
          <h4 style={{color: '#ffffff'}} className="text-3xl font-bold mb-4">Stay Updated</h4>
          <p style={{color: '#ffffff'}} className="text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss the latest insights, tips, and updates from the world of sterile processing.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border-2 border-white bg-transparent text-white placeholder-gray-300 focus:outline-none focus:border-[#f8d171]"
            />
            <button className="bg-[#f8d171] text-[#024d94] px-6 py-3 rounded-lg font-bold hover:bg-white transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center mt-16">
          <a href="#all-posts" className="inline-block bg-[#f8d171] text-[#024d94] px-5 py-[10px] font-bold text-base leading-5 capitalize border-2 border-[#f8d171] rounded-none font-nunito hover:border-[#024d94] hover:bg-transparent hover:text-[#024d94] transition-all duration-400 mr-4">
            View All Posts <i className="icon-arrow-right ml-[10px] relative top-[1px]"></i>
          </a>
          <a href="#courses" className="inline-block bg-[#024d94] text-white px-5 py-[10px] font-bold text-base leading-5 capitalize border-2 border-[#024d94] rounded-none font-nunito hover:bg-transparent hover:text-[#024d94] transition-all duration-400">
            Explore Courses <i className="icon-arrow-right ml-[10px] relative top-[1px]"></i>
          </a>
        </div>
      </div>
    </section>
  );
}