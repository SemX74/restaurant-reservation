import Client from "./Client/Client";
import { BsPerson } from "react-icons/bs";
import "./Sidebar.scss";
import ClientsCategory from "./ClientsCategory/ClientsCategory";
interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <div className="sidebar">
      <section className="sidebar__top-wrapper">
        <div className="sidebar__buttons">
          <button className="sidebar-buttons__button">Reservation</button>
          <button className="sidebar-buttons__button">Waiting</button>
        </div>
        <input
          className="sidebar-input"
          placeholder="Search Guest"
          type="text"
        />
      </section>
      <section className="sidebar__clients">
        <ClientsCategory name="Seated" amount={18} />
        <Client />
        <Client />
        <Client />
        <Client />
        <Client />
        <Client />
        <Client />
        <Client />
        <ClientsCategory name="Upcoming" amount={5} />
        <Client />
        <Client />
        <Client />
        <Client />
      </section>
    </div>
  );
};

export default Sidebar;
