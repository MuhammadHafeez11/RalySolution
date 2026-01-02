export default function Footer() {
  return (
    <>
      <footer className="footer2" id="footer2">
        <div className="container">
          <div className="row">
            <div className="col-md-3 footerP">
              <a href="index.html" className="footer-logo">
                <img src="/images/logo-footer.png" alt="logo" />
              </a>
            </div>
            <div className="col-md-2 footerP">
              <a href="#">
                <p>Cookies</p>
              </a>
            </div>
            <div className="col-md-2 footerP">
              <a href="#">
                <p>Privacy Policy</p>
              </a>
            </div>
            <div className="col-md-2 footerP">
              <a href="#">
                <p>Blog</p>
              </a>
            </div>
            <div className="col-md-3 footerP">
              <div className="footer-social pull-right">
                <a href="#" className="fa fa-facebook"></a>
                <a href="#" className="fa fa-twitter"></a>
                <a href="#" className="fa fa-dribbble"></a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer-copy">
        <div className="container">
          &copy; 2020. Protem. All rights reserved.
        </div>
      </div>
    </>
  );
}