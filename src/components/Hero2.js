export default function Hero2() {
  return (
    <div id="hero" className="intro hero2">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-md-offset-1 text-center">
            <h3>Empowering Sterile Processing<br />Professionals Worldwide</h3>
            <p>Your gateway to high-quality online training, coaching, webinars, ebooks, and certification programs in the healthcare industry's most essential department—Sterile Processing.</p>
            <div className="space40"></div>
            <div className="dual-btn">
              <a href="#courses" className="inline-block text-[#024d94] bg-[#f8d171] border-2 border-[#f8d171] px-6 py-3 text-sm font-bold font-nunito hover:bg-transparent hover:text-[#f8d171] hover:border-[#f8d171] transition-all duration-400 mr-4">
                Browse Courses
              </a>
              <a href="#ebook" className="inline-block text-white bg-transparent border-2 border-white px-6 py-3 text-sm font-bold font-nunito hover:bg-white hover:text-[#024d94] transition-all duration-400">
                Get Free eBook
              </a>
            </div>

            <div className="intro-form2-dark">
              <h4>Start Your Journey Today</h4>
              <form>
                <input name="form-type" value="enrollment" type="hidden" />
                <fieldset>
                  <div className="row">
                    <div className="col-md-4 col-sm-4">
                      <input placeholder="Full Name" type="text" required />
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <input placeholder="Email Address" type="email" required />
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <button className="inline-block text-[#024d94] bg-[#f8d171] border-2 border-[#f8d171] px-6 py-3 text-sm font-bold font-nunito hover:bg-transparent hover:text-[#f8d171] hover:border-[#f8d171] transition-all duration-400 w-full" type="submit">
                        Apply for Enrollment
                      </button>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}