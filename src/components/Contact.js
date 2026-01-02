export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-[1170px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-[#024d94] mb-6">Let's Connect</h3>
          <img src="images/line.png" className="mx-auto mb-8" alt="" />
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Have questions? Need help with enrollment or want to talk to a career advisor? Our support team is ready to assist you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h4 className="text-3xl font-bold text-[#024d94] mb-8">Contact Options</h4>
            
            <div className="space-y-6">
              <div className="flex items-start p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#024d94] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="icon-envelope text-white text-xl"></i>
                </div>
                <div>
                  <h5 className="text-xl font-bold text-[#024d94] mb-2">Email</h5>
                  <p className="text-gray-600">support@ralysolutions.com</p>
                </div>
              </div>

              <div className="flex items-start p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#f8d171] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="icon-phone text-[#024d94] text-xl"></i>
                </div>
                <div>
                  <h5 className="text-xl font-bold text-[#024d94] mb-2">Phone</h5>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#024d94] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="icon-chat text-white text-xl"></i>
                </div>
                <div>
                  <h5 className="text-xl font-bold text-[#024d94] mb-2">Live Chat</h5>
                  <p className="text-gray-600">Available Mon–Fri, 9AM–6PM EST</p>
                </div>
              </div>

              <div className="flex items-start p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#f8d171] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="icon-location text-[#024d94] text-xl"></i>
                </div>
                <div>
                  <h5 className="text-xl font-bold text-[#024d94] mb-2">Address</h5>
                  <p className="text-gray-600">Raly Solutions HQ, Atlanta, GA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h4 className="text-2xl font-bold text-[#024d94] mb-6">Send us a Message</h4>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[#024d94] mb-2">Name *</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-none focus:border-[#024d94] focus:outline-none transition-colors duration-300"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#024d94] mb-2">Email *</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-none focus:border-[#024d94] focus:outline-none transition-colors duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#024d94] mb-2">Preferred Contact Method</label>
                <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-none focus:border-[#024d94] focus:outline-none transition-colors duration-300">
                  <option value="">Select preferred method</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="chat">Live Chat</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#024d94] mb-2">Message *</label>
                <textarea 
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-none focus:border-[#024d94] focus:outline-none transition-colors duration-300 resize-vertical"
                  placeholder="Tell us how we can help you..."
                  required
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#024d94] mb-2">File Upload (Optional)</label>
                <input 
                  type="file" 
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-none focus:border-[#024d94] focus:outline-none transition-colors duration-300"
                />
                <p className="text-sm text-gray-500 mt-1">Upload any relevant documents or files</p>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#f8d171] text-[#024d94] px-8 py-4 font-bold text-lg capitalize border-2 border-[#f8d171] rounded-none font-nunito hover:border-[#024d94] hover:bg-transparent hover:text-[#024d94] transition-all duration-400"
              >
                Send Message <i className="icon-arrow-right ml-[10px] relative top-[1px]"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}