import Servicescard from './Servicescard';

const Servicessection = () => {
  return (
    <div className="servicessection">
      <h4>Our Services</h4>

      <div className="container">
        <Servicescard name="Branding" fa="address-card" />
        <Servicescard name="Website Design & Development" fa="globe" />
        <Servicescard name="Social Media Marketing" fa="facebook" />
        <Servicescard name="Social Campaigns" fa="bullhorn" />
        <Servicescard name="Graphic Designs" fa="laptop" />
        <Servicescard name="Content Marketing" fa="desktop" />
      </div>
    </div>
  );
};

export default Servicessection;
