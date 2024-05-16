import ContactForm from '../ContactForm';

type SocialsType = {
  fa: string;
  name: string;
  link: string;
};

const Socials = ({ fa, name, link = '' }: SocialsType) => {
  const links = link.length > 0 ? <a href={link}>{name}</a> : <div>{name}</div>;
  return (
    <div className="socials">
      <div>
        <i className={`fa ${fa}`}></i>
      </div>
      {links}
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <div>
        <ContactForm />
      </div>
      <div>
        <div>
          <h4>Connect with us</h4>

          <Socials fa="fa-phone" name="0205213590" link="" />
          <Socials fa="fa-envelope" name="info@companygrowers.com" link="" />
          <Socials
            fa="fa-facebook"
            name="Facebook"
            link="https://web.facebook.com/CompanyGrowers"
          />
          <Socials
            fa="fa-twitter"
            name="Twitter"
            link="https://twitter.com/CompanyGrowers"
          />
          <Socials
            fa="fa-instagram"
            name="Instagram"
            link="https://www.instagram.com/companygrowers/?hl=en"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
