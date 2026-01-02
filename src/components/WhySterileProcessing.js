export default function WhySterileProcessing() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1170px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-[#024d94] mb-6">Why Choose a Career in Sterile Processing?</h3>
          <img src="images/line.png" className="mx-auto mb-8" alt="" />
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Sterile Processing Technicians are unsung heroes in every hospital. Their work directly impacts patient safety, infection prevention, and the success of surgeries.
          </p>
        </div>

        {/* Did You Know Section */}
        <div className="mb-20">
          <h4 className="text-2xl font-bold text-[#024d94] text-center mb-12">Did You Know?</h4>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-[#024d94] rounded-xl text-white">
              <div className="text-5xl font-bold text-[#f8d171] mb-4">1 in 20</div>
              <p className="text-lg text-white">Hospital infections is linked to improper instrument sterilization</p>
            </div>
            <div className="text-center p-8 bg-[#f8d171] rounded-xl">
              <div className="text-5xl font-bold text-[#024d94] mb-4">High</div>
              <div className="text-lg font-semibold text-[#024d94]">Demand</div>
              <p className="text-[#024d94] mt-2">SPD professionals are in high demand across North America</p>
            </div>
            <div className="text-center p-8 bg-[#024d94] rounded-xl text-white">
              <div className="text-4xl font-bold text-[#f8d171] mb-4">Career</div>
              <div className="text-lg font-semibold mb-2 text-[#f8d171]">Growth</div>
              <p className="text-white">Certification leads to job security, advancement, and higher pay</p>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Who Should Consider */}
          <div>
            <h4 className="text-3xl font-bold text-[#024d94] mb-8">Who Should Consider This Field?</h4>
            <div className="space-y-6">
              <div className="flex items-start p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <div className="w-12 h-12 bg-[#024d94] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="icon-refresh text-white text-xl"></i>
                </div>
                <div>
                  <h5 className="text-xl font-bold text-[#024d94] mb-2">Career Changers</h5>
                  <p className="text-gray-600">Looking for a stable healthcare path with growth potential</p>
                </div>
              </div>
              
              <div className="flex items-start p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <div className="w-12 h-12 bg-[#f8d171] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="icon-graduation text-[#024d94] text-xl"></i>
                </div>
                <div>
                  <h5 className="text-xl font-bold text-[#024d94] mb-2">High School Graduates</h5>
                  <p className="text-gray-600">Ready to start a meaningful career in healthcare</p>
                </div>
              </div>
              
              <div className="flex items-start p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <div className="w-12 h-12 bg-[#024d94] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="icon-hospital text-white text-xl"></i>
                </div>
                <div>
                  <h5 className="text-xl font-bold text-[#024d94] mb-2">Entry-Level Hospital Employees</h5>
                  <p className="text-gray-600">Seeking advancement within the healthcare system</p>
                </div>
              </div>
              
              <div className="flex items-start p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <div className="w-12 h-12 bg-[#f8d171] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="icon-arrow-up text-[#024d94] text-xl"></i>
                </div>
                <div>
                  <h5 className="text-xl font-bold text-[#024d94] mb-2">Medical Assistants & Nursing Aides</h5>
                  <p className="text-gray-600">Looking to upskill and expand career opportunities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative">
            <div className="bg-[#024d94] rounded-2xl p-12 text-white text-center">
              <div className="mb-8">
                <div className="w-24 h-24 bg-[#f8d171] rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="icon-heart text-[#024d94] text-4xl"></i>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">Make a Difference</h3>
                <p className="text-xl text-white mb-8">Every instrument you process saves lives and prevents infections</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-[#f8d171] rounded-lg p-4">
                  <div className="text-2xl font-bold text-[#024d94]">$45K+</div>
                  <div className="text-sm text-[#024d94] font-semibold">Starting Salary</div>
                </div>
                <div className="bg-[#f8d171] rounded-lg p-4">
                  <div className="text-2xl font-bold text-[#024d94]">6-12</div>
                  <div className="text-sm text-[#024d94] font-semibold">Months Training</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <a href="#courses" className="inline-block bg-[#f8d171] text-[#024d94] px-8 py-4 font-bold text-lg capitalize border-2 border-[#f8d171] rounded-none font-nunito hover:border-[#024d94] hover:bg-transparent hover:text-[#024d94] transition-all duration-400">
            Start Your Journey Today <i className="icon-arrow-right ml-[10px] relative top-[1px]"></i>
          </a>
        </div>
      </div>
    </section>
  );
}