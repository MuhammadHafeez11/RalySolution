export default function Mission() {
  return (
    <section id="mission" className="py-20 bg-gray-50">
      <div className="max-w-[1170px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-[#024d94] mb-4">Our Mission: Sterile Processing. Safe Patients.</h3>
          <img src="images/line.png" className="mx-auto mb-6" alt="" />
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            To equip aspiring and working sterile processing professionals with the tools, training, and mentorship they need to ensure surgical safety, reduce infection rates, and create lasting impact in healthcare environments.
          </p>
        </div>
        
        {/* Vision & Tagline */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h4 className="text-2xl font-bold text-[#024d94] mb-4">Our Vision</h4>
            <p className="text-xl text-gray-700">To be the #1 online platform for sterile processing education globally.</p>
          </div>
          
          <div className="text-center mb-12">
            <h2 className="text-[#024d94] font-bold text-3xl mb-3">Clean Instruments Save Lives.</h2>
            <h3 className="text-[#f8d171] text-2xl font-semibold">Raly Trains the Hands Behind Them.</h3>
          </div>
          
          <div className="text-center">
            <a href="#courses" className="inline-block border border-[#024d94] bg-[#024d94] text-white px-8 py-3 font-bold hover:bg-black hover:border-black transition-all duration-400">
              Explore Our Courses <i className="icon-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}