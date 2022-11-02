import { FaRegCalendarAlt } from "react-icons/fa";
import { RiGroupLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import {
  BsArrowLeftShort,
  BsArrowDownShort,
  BsArrowRightShort,
} from "react-icons/bs";
import "./Header.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { Dispatch, SetStateAction } from "react";

interface HeaderProps {
  modalIsOpen: boolean;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ modalIsOpen, setModalIsOpen }) => {
  return (
    <header className="header">
      <section className="header__selectors-wrapper">
        <div className="header__selector header__date-selector">
          <BsArrowLeftShort /> Thu, Jan 19 <BsArrowRightShort />
        </div>
        <div className="header__selector header__room-selector">
          Dinner <BsArrowDownShort />
        </div>
      </section>
      <section className="header__buttons-wrapper">
        <button className="header__button">
          <FaRegCalendarAlt />
        </button>
        <button className="header__button">
          <RiGroupLine />
        </button>
        <button className="header__button">
          <BiCog />
        </button>
        <button
          onClick={() => setModalIsOpen(true)}
          className="header__button header__button__new-reservation"
        >
          <AiOutlinePlus />
          New Reservation
        </button>
      </section>
    </header>
  );
};

export default Header;
