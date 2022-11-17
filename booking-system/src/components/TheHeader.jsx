import BookingForm from "./BookingForm.jsx";
import Modal from "react-modal";
import { useState } from "react";
import logo from "./../logocph.png"
import SingleBooking from "./SingleBooking.jsx";
import MainContent from "./MainContent.jsx";

function TheHeader() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
   
    <header className="App-header">
      

        <Modal
         isOpen={modalIsOpen}
         onRequestClose={closeModal}
         contentLabel="Create booking form"
        >
          <BookingForm />
        </Modal>
     
      <container className="Head"> 

          <div><img className="logocph" src={logo} alt="Logo" /></div>   
          <div className="button-et"><button className="Header-knap" onClick={openModal}>Oversigt</button></div>
          <a className="header-link" href="./SingleBooking.jsx" activepage>
            <div className="button-to"><button className="Header-knap-to" >Mine bookinger</button></div>
          </a>
      </container>
    </header>
  );
}

export default TheHeader;
