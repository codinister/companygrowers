import Servicescard from './Servicescard';

const Servicessection = () => {
  return (
    <div className="servicessection">
      <h4>Our Services</h4>

      <div className="container">
        <Servicescard name="Branding" fa="user" />
        <Servicescard name="Website Design & Development" fa="user" />
        <Servicescard name="Social Media Marketing" fa="user" />
        <Servicescard name="Social Campaigns" fa="user" />
        <Servicescard name="Graphic Designs" fa="user" />
        <Servicescard name="Content Marketing" fa="user" />
      </div>
    </div>
  );
};

export default Servicessection;
