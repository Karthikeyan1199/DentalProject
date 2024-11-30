import Constants from "../../Constants";
import BookAppointment from "../BookAppointment/BookAppointment.component";
import UIButton from "../Button/UIButton";
import LocationLoader from "../LocationLoader/LocationLoader";
import ReviewCarousel from "../ReviewCarousel/ReviewCarousel";
import OurServices from "../Services/Services";
import "./BasicDetails.scss"
const BasicDetails = () => {
  const basicDetailTxt = "Experience Dental Excellence With a Gentle Touch";
  return <div className="basic-details">
    <div className="basic-details-container" style={{ backgroundImage: `url(${Constants.backgroundImg})` }} >


      <div className="basic-details-container-left">
        {basicDetailTxt.split(" ").map(word => <span className="basic-details-container-left-text">{`${word}`}</span>)}
        <hr />
      </div>
      <div className="basic-details-container-right">
        <BookAppointment />
      </div>
    </div>
    <div className="basic-details-bottom">
      <div className="basic-details-bottom-content">
        <div className="basic-details-bottom-content-icon">
          <img src={Constants.phoneImg}></img>
        </div>
        <div className="basic-details-bottom-content-details">
          <span>{"Need Dental Services ?"}</span>
          <span className="basic-details-bottom-content-details-content">{"Call on: (+91)90807 07866"}</span>
        </div>
      </div>
      <div className="basic-details-bottom-content">
        <div className="basic-details-bottom-content-icon">
          <img src={Constants.clockImg}></img>
        </div>
        <div className="basic-details-bottom-content-details">
          <span>{"Opening Hours"}</span>
          <span className="basic-details-bottom-content-details-content">{"Mon to Sat 9:00AM to 9:00PM"}</span>
        </div>
      </div>
      <div className="basic-details-bottom-button">
        <UIButton buttonName="Book Appointment" />
      </div>
    </div>
    <div className="services">
      <OurServices />
    </div>
    <div className="review">
      <ReviewCarousel />
    </div>
    <div className="contact-info">
      <LocationLoader />
    </div>
  </div>

}

export default BasicDetails