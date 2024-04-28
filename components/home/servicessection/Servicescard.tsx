type ServicescardType = {
  name: string;
  fa: string;
};

const Servicescard = ({ fa, name }: ServicescardType) => {
  return (
    <div className="servicescard">
      <div>
        <i className={`fa fa-${fa}`}></i>
      </div>
      <div>
        <h6>{name}</h6>
      </div>
    </div>
  );
};

export default Servicescard;
