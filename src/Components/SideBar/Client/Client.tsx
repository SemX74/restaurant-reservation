import { AiFillStar } from "react-icons/ai";
import Star from "../../Icons/Star";
import "./Client.scss";

interface ClientProps {}

const Client: React.FC<ClientProps> = () => {
  return (
    <div className="client">
      <p className="client__time">
        6:00
        <span> PM </span>
      </p>
      <section className="client__info">
        <h1 className="client-info__name">John Doe</h1>
        <h3 className="client-info__phone">0190241024</h3>
        <h5 className="client-info__guests">3 guests / main room</h5>
      </section>
      <section className="client__additional">
        <span className="client-additional__table">T1</span>
        <span className="client-additional__perks">
          <Star />
        </span>
      </section>
    </div>
  );
};

export default Client;
