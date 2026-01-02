export default function CourseApplication() {
  return (
    <section id="application" className="py-20 bg-gray-50">
      <div className="max-w-[1170px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-[#024d94] mb-6">Apply to Enroll in Raly Solutions Courses</h3>
          <img src="images/line.png" className="mx-auto mb-8" alt="" />
          <h4 className="text-3xl font-bold text-gray-800 mb-6">Start Your Journey to Becoming a Certified Sterile Processing Tech</h4>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Whether you're just starting or looking to upgrade your skills, Raly Solutions has a place for you. To enroll in our flagship courses, complete the form below. Our team will review and respond within 48 hours.
          </p>
        </div>

        {/* Application Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-12 border-t-4 border-[#024d94]">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-[#f8d171] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="icon-edit text-[#024d94] text-3xl"></i>
              </div>
              <h4 className="text-2xl font-bold text-[#024d94] mb-2">Course Application</h4>
              <p className="text-gray-600">Complete all fields to submit your application</p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#024d94] focus:outline-none transition-colors duration-300"
                    placeholder="Enter your full name"
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
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#024d94] focus:outline-none transition-colors duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Country *</label>
                  <select 
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#024d94] focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Select your country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="UK">United Kingdom</option>
                    <option value="AU">Australia</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Healthcare/Science Background *</label>
                <div className="flex space-x-6">
                  <label className="flex items-center">
                    <input type="radio" name="background" value="yes" className="mr-2 text-[#024d94]" required />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="background" value="no" className="mr-2 text-[#024d94]" required />
                    <span>No</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Interested Courses *</label>
                <select 
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#024d94] focus:outline-none transition-colors duration-300"
                >
                  <option value="">Select a course</option>
                  <option value="certification-prep">Sterile Processing Technician Certification Prep</option>
                  <option value="infection-control">Infection Control & Prevention</option>
                  <option value="microbiology">Microbiology for SPD</option>
                  <option value="surgical-instrumentation">Surgical Instrumentation</option>
                  <option value="quality-assurance">Quality Assurance & Risk Management</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Start Date *</label>
                <input 
                  type="date" 
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#024d94] focus:outline-none transition-colors duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">How Did You Hear About Us? *</label>
                <select 
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#024d94] focus:outline-none transition-colors duration-300"
                >
                  <option value="">Select an option</option>
                  <option value="google">Google Search</option>
                  <option value="social-media">Social Media</option>
                  <option value="referral">Friend/Colleague Referral</option>
                  <option value="webinar">Webinar/Masterclass</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#f8d171] text-[#024d94] px-8 py-4 font-bold text-lg capitalize border-2 border-[#f8d171] rounded-lg font-nunito hover:border-[#024d94] hover:bg-transparent hover:text-[#024d94] transition-all duration-400"
              >
                Submit Application <i className="icon-arrow-right ml-2"></i>
              </button>
            </form>

            <div className="text-center mt-6 text-sm text-gray-500">
              Thank you! Your application has been received. We'll contact you with next steps.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}