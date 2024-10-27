import UIButton from "../Button/UIButton";
import "./Header.scss"

const Header = () => {
    return <div className="header">
        <div className="header-left">

        </div>
        <div className="header-right">
            <UIButton buttonName="Book Appointment"/>
        </div>
    </div>

}

export default Header;