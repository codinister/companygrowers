import Clientslogos from '@/components/Clientslogos';

const Successsection = () => {
  return (
    <div className="successsection">
      <h2>Clientele</h2>
      <div className="container">
        <Clientslogos
          name="GSSTI"
          img="/clients/img1.png"
          desc="Job: Digital marketing"
          width={140}
          height={140}
        />
        <Clientslogos
          name="Belshaw"
          img="/clients/img2.png"
          desc="Job: Website design"
          width={140}
          height={50}
        />
        <Clientslogos   
          name="Rubygarnet"
          img="/clients/img3.png"
          desc="Job: Digital marketing"
          width={120}
          height={50}
        />
        <Clientslogos
          name="Graid Up"
          img="/clients/img4.png"
          desc="Job: Digital marketing"
          width={140}
          height={50}
        />
        <Clientslogos
          name="Saka Homes"
          img="/clients/img5.png"
          desc="Job: Digital marketing"
          width={100}
          height={100}
        />
        <Clientslogos
          name="Crownhouse"
          img="/clients/img6.png"
          desc="Job: Digital marketing"
          width={100}
          height={100}
        />
        <Clientslogos  
          name="Accorntooaks"
          img="/clients/img7.jpg"
          desc="Job: Digital marketing"
          width={100}
          height={100}
        />
        <Clientslogos
          name="Indulge Accra"
          img="/clients/img8.jpg"
          desc="Job: Digital marketing"
          width={100}
          height={100}
        />
        <Clientslogos
          name="805 Restaurant"
          img="/clients/img9.jpg"
          desc="Job: Digital marketing"
          width={100}
          height={100}
        />
        <Clientslogos  
          name=" ACE Konceptz"
          img="/clients/img10.png"
          desc="Job: Digital marketing"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default Successsection;
