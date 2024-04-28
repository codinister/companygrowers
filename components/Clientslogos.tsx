import Image from "next/image";

type ClientslogosType = {
  img: string;
  desc: string;
  name: string;
  width: number;
  height: number;
};

const Clientslogos = ({ img, desc, name, width, height }: ClientslogosType) => {
  return (
    <div className="clientlogos">
      <div

        data-desc={desc}
      ><Image src={img} alt="" width={width} height={height} /></div>

      <h6>{name}</h6>
    </div>
  );
};

export default Clientslogos;
