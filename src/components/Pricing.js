export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-[1170px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-[#024d94] mb-6">Pricing Plans & Course Subscriptions</h3>
          <img src="images/line.png" className="mx-auto mb-8" alt="" />
          <h4 className="text-3xl font-bold text-gray-800 mb-6">Flexible Pricing for Every Learner</h4>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Choose a plan that fits your goals. All plans include access to your private student dashboard, course modules, quizzes, certificates, and community features.
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Sterile Processing Course */}
          <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#024d94] hover:shadow-lg transition-all duration-300 flex flex-col">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-[#024d94] mb-2">Sterile Processing Course</h4>
              <p className="text-gray-600 mb-6">Online (Self-Paced)</p>
              <div className="text-4xl font-bold text-[#024d94] mb-2">$149</div>
              <p className="text-sm text-gray-500">(one-time)</p>
            </div>

            <div className="mb-8 flex-grow">
              <h5 className="text-lg font-bold text-[#024d94] mb-4">What You Get:</h5>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="icon-check text-[#024d94] text-sm mr-3 mt-1"></i>
                  <span className="text-gray-700">Full course access (all modules)</span>
                </li>
                <li className="flex items-start">
                  <i className="icon-check text-[#024d94] text-sm mr-3 mt-1"></i>
                  <span className="text-gray-700">Certification guidance</span>
                </li>
                <li className="flex items-start">
                  <i className="icon-check text-[#024d94] text-sm mr-3 mt-1"></i>
                  <span className="text-gray-700">Downloadable resources</span>
                </li>
                <li className="flex items-start">
                  <i className="icon-check text-[#024d94] text-sm mr-3 mt-1"></i>
                  <span className="text-gray-700">Quizzes & final assessment</span>
                </li>
                <li className="flex items-start">
                  <i className="icon-check text-[#024d94] text-sm mr-3 mt-1"></i>
                  <span className="text-gray-700">Certificate of completion</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <p className="text-sm font-semibold text-[#024d94] mb-2">Best For:</p>
              <p className="text-gray-600">Students seeking certification</p>
            </div>

            <button className="w-full bg-[#f8d171] text-[#024d94] px-6 py-3 font-bold border-2 border-[#f8d171] rounded-lg hover:border-[#024d94] hover:bg-transparent hover:text-[#024d94] transition-all duration-300 mt-auto">
              Enroll Now
            </button>
          </div>

          {/* One-on-One Consultation */}
          <div className="bg-white border-2 border-[#024d94] rounded-xl p-8 shadow-lg relative flex flex-col">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-[#024d94] text-white px-4 py-2 rounded-full text-sm font-bold">POPULAR</span>
            </div>
            
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-[#024d94] mb-2">One-on-One Consultation</h4>
              <p className="text-gray-600 mb-6">45–60 min Zoom Call</p>
              <div className="text-4xl font-bold text-[#024d94] mb-2">$59</div>
              <p className="text-sm text-gray-500">per session</p>
            </div>

            <div className="mb-8 flex-grow">
              <h5 className="text-lg font-bold text-[#024d94] mb-4">What You Get:</h5>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="icon-check text-[#024d94] text-sm mr-3 mt-1"></i>
                  <span className="text-gray-700">1-on-1 career or training consult</span>
                </li>
                <li className="flex items-start">
                  <i className="icon-check text-[#024d94] text-sm mr-3 mt-1"></i>
                  <span className="text-gray-700">Personalized roadmap</span>
                </li>
                <li className="flex items-start">
                  <i className="icon-check text-[#024d94] text-sm mr-3 mt-1"></i>
                  <span className="text-gray-700">Resume/interview tips</span>
                </li>
                <li className="flex items-start">
                  <i className="icon-check text-[#024d94] text-sm mr-3 mt-1"></i>
                  <span className="text-gray-700">Ask course-related questions</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <p className="text-sm font-semibold text-[#024d94] mb-2">Best For:</p>
              <p className="text-gray-600">Career changers, job seekers</p>
            </div>

            <button className="w-full bg-[#024d94] text-white px-6 py-3 font-bold border-2 border-[#024d94] rounded-lg hover:bg-transparent hover:text-[#024d94] transition-all duration-300 mt-auto">
              Book a Session
            </button>
          </div>

          {/* Instructor Booking (Live) */}
          <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#024d94] hover:shadow-lg transition-all duration-300 flex flex-col">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-[#024d94] mb-2">Instructor Booking (Live)</h4>
              <p className="text-gray-600 mb-6">30–60 min via Zoom/Live Portal</p>
              <div className="text-4xl font-bold text-[#024d94] mb-2">$79</div>
              <p className="text-sm text-gray-500">per session</p>
            </div>

            <div className="mb-8 flex-grow">
              <h5 className="text-lg font-bold text-[#024d94] mb-4">What You Get:</h5>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="icon-check text-[#024d94] text-sm mr-3 mt-1"></i>
                  <span className="text-gray-700">Book live session via calendar</span>
                </li>
                <li className="flex items-start">
                  <i className="icon-check text-[#024d94] text-sm mr-3 mt-1"></i>
                  <span className="text-gray-700">Real-time Q&A & coaching</span>
                </li>
                <li className="flex items-start">
                  <i className="icon-check text-[#024d94] text-sm mr-3 mt-1"></i>
                  <span className="text-gray-700">Live instructor walkthrough</span>
                </li>
                <li className="flex items-start">
                  <i className="icon-check text-[#024d94] text-sm mr-3 mt-1"></i>
                  <span className="text-gray-700">Can be group or individual</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <p className="text-sm font-semibold text-[#024d94] mb-2">Best For:</p>
              <p className="text-gray-600">Active students needing live help</p>
            </div>

            <button className="w-full bg-[#f8d171] text-[#024d94] px-6 py-3 font-bold border-2 border-[#f8d171] rounded-lg hover:border-[#024d94] hover:bg-transparent hover:text-[#024d94] transition-all duration-300 mt-auto">
              Schedule with Instructor
            </button>
          </div>
        </div>

        {/* Additional Notes */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h5 className="text-xl font-bold text-[#024d94] mb-4">Additional Notes:</h5>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <i className="icon-info text-[#024d94] text-sm mr-3 mt-1"></i>
              <span>Bundle deals and seasonal offers available.</span>
            </li>
            <li className="flex items-start">
              <i className="icon-info text-[#024d94] text-sm mr-3 mt-1"></i>
              <span>Payment plans available for full course on request.</span>
            </li>
            <li className="flex items-start">
              <i className="icon-info text-[#024d94] text-sm mr-3 mt-1"></i>
              <span>All sessions are conducted via secured Zoom or integrated portal.</span>
            </li>
          </ul>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <a href="#enroll" className="inline-block bg-[#f8d171] text-[#024d94] px-10 py-4 font-bold text-xl capitalize border-2 border-[#f8d171] rounded-none font-nunito hover:border-[#024d94] hover:bg-transparent hover:text-[#024d94] transition-all duration-400">
            Enroll Now <i className="icon-arrow-right ml-[10px] relative top-[1px]"></i>
          </a>
        </div>
      </div>
    </section>
  );
}