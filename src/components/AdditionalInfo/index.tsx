import { AiFillCreditCard, AiFillSafetyCertificate } from "react-icons/ai";
import { FiTruck } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";

const AdditionalInfo: React.FC = () => {
  return (
    <section className="container">
      <div className="infos-container">
        <div className="infos-container__row">
          <div className="infos-container__info">
            <FiTruck size={50} />
            <p>Envio grátis</p>
          </div>
          <div className="infos-container__info">
            <HiLocationMarker size={50} />
            <p>Entrega para Portugal</p>
          </div>
        </div>
        <div className="infos-container__row">
          <div className="infos-container__info">
            <AiFillCreditCard size={50} />
            <p>10% na primeira compra</p>
          </div>
          <div className="infos-container__info">
            <AiFillSafetyCertificate size={50} />
            <p>100% seguro</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalInfo;
