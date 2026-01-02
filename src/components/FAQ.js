export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-[1170px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-[#024d94] mb-6">Frequently Asked Questions</h3>
          <img src="images/line.png" className="mx-auto mb-8" alt="" />
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {/* Q1 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#024d94] mb-3">Q1. How do I register for a course?</h4>
                <p className="text-gray-700 leading-relaxed">A1. Simply click "Enroll" on the course listing page and follow the guided sign-up process.</p>
              </div>
            </div>

            {/* Q2 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#024d94] mb-3">Q2. Do I get a certificate?</h4>
                <p className="text-gray-700 leading-relaxed">A2. Yes, you'll receive a verifiable certificate upon completion of each course.</p>
              </div>
            </div>

            {/* Q3 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#024d94] mb-3">Q3. Can I join a live class or book an instructor?</h4>
                <p className="text-gray-700 leading-relaxed">A3. Yes! Visit our "Instructor Booking" page to view availability and book sessions.</p>
              </div>
            </div>

            {/* Q4 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#024d94] mb-3">Q4. Are your courses mobile-friendly?</h4>
                <p className="text-gray-700 leading-relaxed">A4. Absolutely. Access all content on any device, anytime.</p>
              </div>
            </div>

            {/* Q5 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#024d94] mb-3">Q5. Do you offer refunds?</h4>
                <p className="text-gray-700 leading-relaxed">A5. Yes, within 7 days if the course has not been fully accessed or completed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}