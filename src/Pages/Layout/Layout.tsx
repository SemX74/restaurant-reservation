import "./Layout.scss";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/SideBar/Sidebar";
import Header from "../../Components/Header/Header";
import { useState } from "react";
import ModalComponent from "../../Components/Modal/Modal";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="layout">
      <Sidebar />
      <ModalComponent onHide={() => setModalIsOpen(false)} show={modalIsOpen} />
      <div className="layout__content">
        <Header setModalIsOpen={setModalIsOpen} modalIsOpen={modalIsOpen} />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
