export default function Testimonials() {
  return (
    <>
      <div className="space100"></div>
      <div className="review">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <i className="icon-quote-left"></i>
              <div className="flex gap-5 justify-center items-center w-full max-w-4xl mx-auto">
                <div className="bg-[#024d94] p-6 w-[341px]">
                  <p className="!text-white text-xl leading-8 italic mb-5">"Raly Solutions helped me land a job in sterile processing right after I completed the course!"</p>
                  <img src="./images/bg/five-star.png" alt="img" className="max-w-[120px] mb-4" />
                  <span className="text-[#f8d171] font-bold text-base capitalize block">
                    Jessica A. <br /> <small className="!text-white font-light text-sm"> SPD Technician </small>
                  </span>
                </div>
                <div className="bg-[#024d94] p-6 w-[341px]">
                  <p className="!text-white text-xl leading-8 italic mb-5">"The ebook was a game-changer. It opened my eyes to the importance of SPD in patient care."</p>
                  <img src="./images/bg/five-star.png" alt="img" className="max-w-[120px] mb-4" />
                  <span className="text-[#f8d171] font-bold text-base capitalize block">
                    Samuel R. <br /> <small className="!text-white font-light text-sm"> Healthcare Professional </small>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="review-title col-md-12">
            <h1>REVIEW</h1>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
      <div className="space100"></div>
    </>
  );
}