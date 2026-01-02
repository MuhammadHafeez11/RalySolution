export default function Masterclass() {
  return (
    <section id="masterclass" className="py-20 bg-white">
      <div className="max-w-[1170px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#024d94] mb-6">Live Masterclasses & Webinars</h2>
          <img src="images/line.png" className="mx-auto mb-8" alt="" />
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Real-Time Learning from Real Experts</h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Join our monthly webinars and seasonal masterclasses where top industry professionals break down the most important topics in sterile processing.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Column - What You'll Gain */}
          <div>
            <h4 className="text-3xl font-bold text-[#024d94] mb-8">What You'll Gain:</h4>
            <div className="space-y-6">
              <div className="flex items-start p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-[#024d94] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="icon-layers text-white text-xl"></i>
                </div>
                <div>
                  <h5 className="text-xl font-bold text-[#024d94] mb-2">Deep Dives into Core SPD Modules</h5>
                  <p className="text-gray-600">Comprehensive coverage of essential sterile processing topics</p>
                </div>
              </div>
              
              <div className="flex items-start p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-[#f8d171] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="icon-video text-[#024d94] text-xl"></i>
                </div>
                <div>
                  <h5 className="text-xl font-bold text-[#024d94] mb-2">Live Demonstrations and Q&A</h5>
                  <p className="text-gray-600">Interactive sessions with real-time expert guidance</p>
                </div>
              </div>
              
              <div className="flex items-start p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-[#024d94] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="icon-certificate text-white text-xl"></i>
                </div>
                <div>
                  <h5 className="text-xl font-bold text-[#024d94] mb-2">Certification Prep Sessions</h5>
                  <p className="text-gray-600">Focused training to help you pass your certification exams</p>
                </div>
              </div>
              
              <div className="flex items-start p-6 bg-gradient-to-r from-[#f8d171] to-[#fbbf24] rounded-lg">
                <div className="w-12 h-12 bg-[#024d94] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="icon-award text-white text-xl"></i>
                </div>
                <div>
                  <h5 className="text-xl font-bold text-[#024d94] mb-2">CEU-Eligible Training</h5>
                  <p className="text-[#024d94] font-semibold">(Coming Soon)</p>
                  <p className="text-gray-700">Earn continuing education units for your professional development</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Live Learning Visual */}
          <div className="relative">
            <div className="bg-[#024d94] rounded-2xl p-8 text-white text-center">
              <div className="w-20 h-20 bg-[#f8d171] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="icon-users text-[#024d94] text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 !text-white">Join Live Sessions</h3>
              <p className="text-lg mb-8 !text-white">Connect with industry experts and fellow professionals in real-time</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-[#f8d171]">500+</div>
                  <div className="text-sm">Students Joined</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-[#f8d171]">Live</div>
                  <div className="text-sm">Interactive Q&A</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div className="mb-16">
          <h4 className="text-3xl font-bold text-[#024d94] text-center mb-12">Upcoming Events</h4>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Event 1 */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#024d94] hover:shadow-lg transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-[#024d94] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="icon-calendar text-white text-2xl"></i>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#f8d171] bg-[#024d94] px-3 py-1 rounded-full inline-block mb-2">MASTERCLASS</div>
                  <h5 className="text-xl font-bold text-[#024d94] mb-2">Microbiology & Infection Control</h5>
                  <div className="text-gray-600">
                    <div className="flex items-center mb-1">
                      <i className="icon-calendar text-[#024d94] mr-2"></i>
                      <span>January 25, 2024</span>
                    </div>
                    <div className="flex items-center">
                      <i className="icon-clock text-[#024d94] mr-2"></i>
                      <span>2:00 PM - 4:00 PM EST</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-6">Deep dive into microorganisms, contamination control, and infection prevention protocols in sterile processing.</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-[#024d94]">Free</span>
                <a href="#register" className="bg-[#f8d171] text-[#024d94] px-6 py-2 font-bold border-2 border-[#f8d171] rounded-lg hover:border-[#024d94] hover:bg-transparent hover:text-[#024d94] transition-all duration-300">
                  Reserve Spot
                </a>
              </div>
            </div>

            {/* Event 2 */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#024d94] hover:shadow-lg transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-[#f8d171] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="icon-video text-[#024d94] text-2xl"></i>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#024d94] bg-[#f8d171] px-3 py-1 rounded-full inline-block mb-2">WEBINAR</div>
                  <h5 className="text-xl font-bold text-[#024d94] mb-2">How to Pass the CRCST Exam</h5>
                  <div className="text-gray-600">
                    <div className="flex items-center mb-1">
                      <i className="icon-calendar text-[#024d94] mr-2"></i>
                      <span>February 8, 2024</span>
                    </div>
                    <div className="flex items-center">
                      <i className="icon-clock text-[#024d94] mr-2"></i>
                      <span>7:00 PM - 8:30 PM EST</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-6">Essential strategies, study tips, and practice questions to help you successfully pass your CRCST certification exam.</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-[#024d94]">Free</span>
                <a href="#register" className="bg-[#f8d171] text-[#024d94] px-6 py-2 font-bold border-2 border-[#f8d171] rounded-lg hover:border-[#024d94] hover:bg-transparent hover:text-[#024d94] transition-all duration-300">
                  Reserve Spot
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <a href="#register" className="inline-block bg-[#f8d171] text-[#024d94] px-10 py-4 font-bold text-xl capitalize border-2 border-[#f8d171] rounded-none font-nunito hover:border-[#024d94] hover:bg-transparent hover:text-[#024d94] transition-all duration-400">
            Reserve My Spot <i className="icon-arrow-right ml-[10px] relative top-[1px]"></i>
          </a>
        </div>
      </div>
    </section>
  );
}