import { useState } from "react";
import Constants from "../../Constants";
import BookAppointmentModal from "../BookAppointmentModal/BookAppointmentModal";
import UIButton from "../Button/UIButton";
import "./Header.scss"

const Header = () => {
    const [showModal, setShowModal] = useState(false);
    return <><div className="header">
        <div className="header-left">
            <img src={Constants.logoImg} className="logo-image"></img>
            <h3 className="logo-text">SHREE KRISHNAA DENTAL CARE</h3>
        </div>
        <div className="header-right">
            <UIButton buttonName="Book Appointment" buttonClass="header-button" handleClick={() => setShowModal(true)} />
        </div>
    </div><>
            {showModal ? <BookAppointmentModal showModal={showModal} handleClose={() => setShowModal(false)} /> : ""}
        </></>

}

export default Header;