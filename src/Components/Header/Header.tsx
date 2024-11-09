import UIButton from "../Button/UIButton";
import "./Header.scss"

const Header = () => {
    return <div className="header">
        <div className="header-left">
            <h3 className="logo-text">SHREE KRISHNAA DENTAL CARE</h3>
        </div>
        <div className="header-right">
            <UIButton buttonName="Book Appointment" buttonClass="header-button"/>
        </div>
    </div>

}

export default Header;