export default function Community() {
  return (
    <section id="community" className="py-20 bg-white">
      <div className="max-w-[1170px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-[#024d94] mb-6">Raly Student Community</h3>
          <img src="images/line.png" className="mx-auto mb-8" alt="" />
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Connect with fellow learners, ask questions, share wins, and grow together. Our community platform helps students support each other through challenges and milestones.
          </p>
        </div>

        {/* Community Features */}
        <div className="mb-16">
          <h4 className="text-3xl font-bold text-[#024d94] text-center mb-12">Community Features</h4>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-[#024d94] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="icon-users text-white text-2xl"></i>
              </div>
              <h5 className="text-xl font-bold text-[#024d94] mb-4">Study Groups by Course</h5>
              <p className="text-gray-600">Join course-specific study groups to collaborate with peers taking the same classes</p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-[#f8d171] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="icon-chat text-[#024d94] text-2xl"></i>
              </div>
              <h5 className="text-xl font-bold text-[#024d94] mb-4">Discussion Boards & Forums</h5>
              <p className="text-gray-600">Ask questions, share insights, and get help from instructors and fellow students</p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-[#024d94] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="icon-share text-white text-2xl"></i>
              </div>
              <h5 className="text-xl font-bold text-[#024d94] mb-4">Resource Sharing</h5>
              <p className="text-gray-600">Share and access PDFs, notes, videos, and study materials with the community</p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-[#f8d171] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="icon-trophy text-[#024d94] text-2xl"></i>
              </div>
              <h5 className="text-xl font-bold text-[#024d94] mb-4">Weekly Leaderboard</h5>
              <p className="text-gray-600">Track top students weekly and celebrate achievements within the community</p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-[#024d94] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="icon-calendar text-white text-2xl"></i>
              </div>
              <h5 className="text-xl font-bold text-[#024d94] mb-4">Challenges & Events</h5>
              <p className="text-gray-600">Participate in group challenges and community events to enhance your learning</p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-[#f8d171] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="icon-heart text-[#024d94] text-2xl"></i>
              </div>
              <h5 className="text-xl font-bold text-[#024d94] mb-4">Supportive Environment</h5>
              <p className="text-gray-600">A safe space where everyone helps each other succeed in their healthcare careers</p>
            </div>
          </div>
        </div>

        {/* Community Stats */}
        <div className="bg-[#f8d171] rounded-2xl p-12 mb-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#024d94] mb-2">500+</div>
              <div className="text-[#024d94] font-semibold">Active Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#024d94] mb-2">50+</div>
              <div className="text-[#024d94] font-semibold">Study Groups</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#024d94] mb-2">1000+</div>
              <div className="text-[#024d94] font-semibold">Resources Shared</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#024d94] mb-2">24/7</div>
              <div className="text-[#024d94] font-semibold">Community Support</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#application" 
              className="inline-block bg-[#f8d171] text-[#024d94] px-8 py-4 font-bold text-lg capitalize border-2 border-[#f8d171] rounded-none font-nunito hover:border-[#024d94] hover:bg-transparent hover:text-[#024d94] transition-all duration-400"
            >
              Join the Community Hub <i className="icon-arrow-right ml-[10px] relative top-[1px]"></i>
            </a>
            
            <a 
              href="#contact" 
              className="inline-block bg-transparent text-[#024d94] px-8 py-4 font-bold text-lg capitalize border-2 border-[#024d94] rounded-none font-nunito hover:bg-[#024d94] hover:text-white transition-all duration-400"
            >
              Introduce Yourself <i className="icon-user ml-[10px] relative top-[1px]"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}