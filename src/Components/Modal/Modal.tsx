import "./Modal.scss";
import { GrFormClose } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";
import { MdAddCircle } from "react-icons/md";
interface ModalProps {
  onHide: () => void;
  show: boolean;
}

const Modal: React.FC<ModalProps> = (props) => {
  return (
    <div
      onClick={props.onHide}
      className={`modal-wrapper ${props.show && " modal-wrapper__show"}`}
    >
      <section onClick={(event) => event.stopPropagation()} className="modal">
        <header className="modal__header">
          <h1>New Reservation</h1>
          <GrFormClose onClick={props.onHide} />
        </header>
        <main className="modal__main">
          <div className="modal-main__search">
            <BsSearch className="modal-main-search__svg" />
            <input
              type="text"
              placeholder="Search by Guest name or Mobile"
              className="modal-main-search__input"
            />
            <MdAddCircle className="modal-main-search__add" />
          </div>
          <section className="modal-main__details-wrapper">
            <section className="modal-main__details modal-main-details__reservation"></section>
            <section className="modal-main__details modal-main-details__table"></section>
          </section>
        </main>
        <footer className="modal__footer"></footer>
      </section>
    </div>
  );
};

export default Modal;
