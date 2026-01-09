export default function FreeEbook() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1170px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-lg font-semibold text-[#f8d171] mb-2">FREE eBOOK</div>
          <h2 className="text-5xl font-bold text-[#024d94] mb-6">"Sterile Processing Essentials"</h2>
          <img src="/images/line.png" className="mx-auto mb-8" alt="" />
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Unlock Your Future in Healthcare—Start with This Free eBook!</h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Learn the foundations of sterile processing, infection control, and how to build a rewarding career in one of the most in-demand healthcare roles.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - What You'll Discover */}
          <div>
            <h4 className="text-3xl font-bold text-[#024d94]" style={{ marginBottom: '20px' }}>What You'll Discover:</h4>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#f8d171] rounded-full flex items-center justify-center mr-5 flex-shrink-0">
                  <img src="/icons/read, book, media, ebook, keyboard, mouse, education, school@1x.png" alt="What is SPD" style={{ width: '20px', height: '20px' }} />
                </div>
                <p className="text-lg text-gray-700">What sterile processing is and why it matters</p>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#f8d171] rounded-full flex items-center justify-center mr-5 flex-shrink-0">
                  <img src="/icons/graduate, graduation, girl, woman, laptop, education, school@1x.png" alt="Career Paths" style={{ width: '20px', height: '20px' }} />
                </div>
                <p className="text-lg text-gray-700">Career pathways and job outlook</p>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#f8d171] rounded-full flex items-center justify-center mr-5 flex-shrink-0">
                  <img src="/icons/man, office, desk, computer, monitor, workspace@1x.png" alt="Daily Tools" style={{ width: '20px', height: '20px' }} />
                </div>
                <p className="text-lg text-gray-700">Key responsibilities and tools used daily</p>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#f8d171] rounded-full flex items-center justify-center mr-5 flex-shrink-0">
                  <img src="/icons/user, account, book, ebook, graduation, options, preferences@1x.png" alt="Certification" style={{ width: '20px', height: '20px' }} />
                </div>
                <p className="text-lg text-gray-700">How to become certified</p>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#f8d171] rounded-full flex items-center justify-center mr-5 flex-shrink-0">
                  <img src="/icons/lightbulb, light, education, innovation, thought, idea@1x.png" alt="Pro Tips" style={{ width: '20px', height: '20px' }} />
                </div>
                <p className="text-lg text-gray-700 font-semibold">BONUS: Pro tips from the instructor</p>
              </div>
            </div>

            {/* Trust Section */}
            <div className="mt-12 p-6 bg-white rounded-lg shadow-sm">
              <div className="text-center mb-4">
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="icon-star text-[#f8d171] text-lg mr-1"></i>
                  ))}
                </div>
                <p className="text-lg italic text-gray-700 mb-3">"This ebook changed how I viewed my role in healthcare!"</p>
                <p className="text-sm font-semibold text-[#024d94]">– T. Morgan</p>
              </div>
              <div className="text-center text-sm text-gray-500">
                <i className="icon-shield text-[#024d94] mr-2"></i>
                We respect your privacy. No spam, ever.
              </div>
            </div>
          </div>

          {/* Right Column - Lead Capture Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-[#024d94]">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-[#f8d171] rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/icons/ebook, book, read, education, school, media, multimedia@1x.png" alt="Download" style={{ width: '40px', height: '40px' }} />
                </div>
                <h4 className="text-2xl font-bold text-[#024d94] mb-2">Get Your Free eBook</h4>
                <p className="text-gray-600">Download instantly - no waiting!</p>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#024d94] focus:outline-none transition-colors duration-300"
                    placeholder="Enter your first name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#024d94] focus:outline-none transition-colors duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="flex items-start">
                  <input 
                    type="checkbox" 
                    id="subscribe"
                    className="mt-1 mr-3 w-4 h-4 text-[#024d94] border-2 border-gray-300 rounded focus:ring-[#024d94]"
                  />
                  <label htmlFor="subscribe" className="text-sm text-gray-600">
                    Subscribe me to Raly Solutions tips & webinar invites
                  </label>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#f8d171] text-[#024d94] px-8 py-4 font-bold text-lg capitalize border-2 border-[#f8d171] rounded-lg font-nunito hover:border-[#024d94] hover:bg-transparent hover:text-[#024d94] transition-all duration-400"
                >
                  Download Now <i className="icon-download ml-2"></i>
                </button>
              </form>

              <div className="text-center mt-6 text-xs text-gray-500">
                By downloading, you agree to receive helpful emails from Raly Solutions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}