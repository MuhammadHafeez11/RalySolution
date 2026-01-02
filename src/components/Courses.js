export default function Courses() {
  return (
    <section id="courses" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-[1170px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h3 className="text-5xl font-bold text-[#024d94] mb-6">Our Training Programs</h3>
          <img src="images/line.png" className="mx-auto mb-8" alt="" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Raly Solutions, we offer self-paced online courses, instructor-led webinars, and live coaching sessions designed for:
          </p>
        </div>

        {/* Target Audience Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#024d94]">
            <div className="w-12 h-12 bg-[#024d94] rounded-lg flex items-center justify-center mb-4">
              <i className="icon-user text-white text-xl"></i>
            </div>
            <h4 className="text-lg font-bold text-[#024d94] mb-2">New Students</h4>
            <p className="text-gray-600 text-sm">Entering the sterile processing field</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#f8d171]">
            <div className="w-12 h-12 bg-[#f8d171] rounded-lg flex items-center justify-center mb-4">
              <i className="icon-award text-[#024d94] text-xl"></i>
            </div>
            <h4 className="text-lg font-bold text-[#024d94] mb-2">Technicians</h4>
            <p className="text-gray-600 text-sm">Preparing for CBSPD/CRCST certification</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#024d94]">
            <div className="w-12 h-12 bg-[#024d94] rounded-lg flex items-center justify-center mb-4">
              <i className="icon-hospital text-white text-xl"></i>
            </div>
            <h4 className="text-lg font-bold text-[#024d94] mb-2">Hospital Staff</h4>
            <p className="text-gray-600 text-sm">Needing CEU training requirements</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#f8d171]">
            <div className="w-12 h-12 bg-[#f8d171] rounded-lg flex items-center justify-center mb-4">
              <i className="icon-users text-[#024d94] text-xl"></i>
            </div>
            <h4 className="text-lg font-bold text-[#024d94] mb-2">Supervisors</h4>
            <p className="text-gray-600 text-sm">Seeking comprehensive team solutions</p>
          </div>
        </div>

        {/* Featured Courses */}
        <div className="mb-16">
          <h4 className="text-2xl font-bold text-[#024d94] text-center mb-12">Featured Courses</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <h5 className="text-xl font-bold text-[#024d94] mb-3">Sterile Processing Technician Certification Prep</h5>
              <p className="text-gray-600">Complete preparation for CBSPD/CRCST certification exams</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <h5 className="text-xl font-bold text-[#024d94] mb-3">Infection Control & Prevention</h5>
              <p className="text-gray-600">Essential protocols for maintaining sterile environments</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <h5 className="text-xl font-bold text-[#024d94] mb-3">Microbiology for SPD</h5>
              <p className="text-gray-600">Understanding microorganisms in sterile processing</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <h5 className="text-xl font-bold text-[#024d94] mb-3">Surgical Instrumentation</h5>
              <p className="text-gray-600">Comprehensive guide to surgical instruments and handling</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <h5 className="text-xl font-bold text-[#024d94] mb-3">Quality Assurance & Risk Management</h5>
              <p className="text-gray-600">Best practices for maintaining quality standards</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center">
          <a href="#catalog" className="inline-block bg-[#f8d171] text-[#024d94] px-5 py-[10px] font-bold text-base leading-5 capitalize border-2 border-[#f8d171] rounded-none font-nunito hover:border-[#024d94] hover:bg-transparent hover:text-[#024d94] transition-all duration-400 mr-4">
            View Course Catalog <i className="icon-arrow-right ml-[10px] relative top-[1px]"></i>
          </a>
          <a href="#free-lesson" className="inline-block bg-[#024d94] text-white px-5 py-[10px] font-bold text-base leading-5 capitalize border-2 border-[#024d94] rounded-none font-nunito hover:bg-transparent hover:text-[#024d94] transition-all duration-400">
            Try a Free Lesson <i className="icon-arrow-right ml-[10px] relative top-[1px]"></i>
          </a>
        </div>
      </div>
    </section>
  );
}