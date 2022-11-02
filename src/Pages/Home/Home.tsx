import { Outlet } from "react-router-dom";
import TableStats from "../../Components/TableStats/TableStats";
import "./Home.scss";
interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="home">
      <TableStats />
      <section className="home">
        <Outlet />
      </section>
    </div>
  );
};

export default Home;
