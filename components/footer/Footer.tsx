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
                <i className="fa fa-envelope"></i>
              </span>
              <span>0205213590</span>
            </div>

            <div>
              <span>
                <i className="fa fa-facebook"></i>
              </span>
              <span>Facebook</span>
            </div>

            <div>
              <span>
                <i className="fa fa-twitter"></i>
              </span>
              <span>Twitter</span>
            </div>

            <div>
              <span>
                <i className="fa fa-instagram"></i>
              </span>
              <span>Instagram</span>
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
