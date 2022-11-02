import { BsPerson } from "react-icons/bs";
import "./ClientsCategory.scss";
interface ClientsCategoryProps {
  name: string;
  amount: number;
}

const ClientsCategory: React.FC<ClientsCategoryProps> = ({ name, amount }) => {
  return (
    <div className="clients-category">
      <p>{name}</p>
      <div className="clients-category__client-amount">
        <BsPerson />
        {amount}
      </div>
    </div>
  );
};

export default ClientsCategory;
