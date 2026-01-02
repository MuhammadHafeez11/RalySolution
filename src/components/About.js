export default function About() {
  return (
    <div id="about" className="container">
      <div className="space100"></div>
      {/* INFO CONTENT */}
      <div className="info-content">
        <div className="container">
          <div className="row center-content">
            <div className="col-md-6">
              <h3>The Story Behind Raly Solutions</h3>
              <img src="/images/line.png" className="img-responsive" alt="" /><br />
              <p>
                Founded by a passionate healthcare instructor with years of experience in sterile processing and surgical services, Raly Solutions was created to fill a gap in high-quality SPD training. Our platform is committed to raising the standard of infection control through knowledge, mentorship, and innovation.
              </p>
              <p>
                We believe the sterile processing department is the heart of patient safety — yet it's one of the most overlooked areas in healthcare. Our mission is to educate, empower, and elevate professionals in this critical field.
              </p>
              <ul className="list">
                <li><i className="icon-check">✓</i> Excellence in Education</li>
                <li><i className="icon-check">✓</i> Integrity & Compliance</li>
                <li><i className="icon-check">✓</i> Student-Centered Approach</li>
                <li><i className="icon-check">✓</i> Innovation & Technology</li>
                <li><i className="icon-check">✓</i> Empowering Healthcare Workers</li>
              </ul>
              <div className="space30"></div>
              <a href="#courses" className="inline-block text-[#024d94] bg-[#f8d171] border-2 border-[#f8d171] px-6 py-3 text-sm font-bold font-nunito hover:bg-transparent hover:text-[#024d94] hover:border-[#024d94] transition-all duration-400">
                Explore Our Courses <i className="ml-[10px] relative top-[1px]">→</i>
              </a>
            </div>
            <div className="col-md-6 text-center">
              <div className="bg-[#f8f8f8] p-8 rounded-lg">
                <div className="w-32 h-32 bg-[#024d94] rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">RS</span>
                </div>
                <h4 className="text-[#024d94] font-bold text-xl mb-4">Meet Our Founder</h4>
                <p className="text-gray-600 italic text-lg leading-relaxed">
                  "Training students is not just about sharing knowledge — it's about changing lives and making hospitals safer."
                </p>
                <div className="mt-6">
                  <p className="text-sm text-gray-500">Healthcare Instructor & SPD Expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br />
    </div>
  );
}