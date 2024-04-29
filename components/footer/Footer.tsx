import Image from 'next/image';

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <div>
            <Image src="/logo.jpg" width="120" height="80" alt="Logo" />
            <h4>Company Growers</h4>
            <p>Using Digital Tools Form Modern Marketing Advantages</p>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div>
            <div>
              <span>
                <i className="fa fa-envelope"></i>
              </span>
              <span>info@companygrowers.com</span>
            </div>
            <div>
              <span>
                <i className="fa fa-phone"></i>
              </span>
              <span>0205213590</span>
            </div>

            <div>
              <a href="https://web.facebook.com/CompanyGrowers" target="_blank">
                <span>
                  <i className="fa fa-facebook"></i>
                </span>
                <span>Facebook</span>
              </a>
            </div>

            <div>
              <a
                href="https://www.instagram.com/companygrowers/?hl=en"
                target="_blank"
              >
                <span>
                  <i className="fa fa-twitter"></i>
                </span>
                <span>Twitter</span>
              </a>
            </div>

            <div>
              <a href="https://twitter.com/CompanyGrowers" target="_blank">
                <span>
                  <i className="fa fa-instagram"></i>
                </span>
                <span>Instagram</span>
              </a>
            </div>
          </div>

          <div className="copyright">
            All rights reserved &copy; 2024 www.companygrowers.com
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
