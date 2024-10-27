import BookAppointment from "../BookAppointment/BookAppointment.component";
import "./BasicDetails.scss"
const BasicDetails = () => {
    const basicDetailTxt = "Experience Dental Excellence With a Gentle Touch";
    return <div className="basic-details">
            <div className="basic-details-container">
                <div className="basic-details-container-left">
                {basicDetailTxt.split(" ").map(word => <span className="basic-details-container-left-text">{`${word}`}</span>)}

                </div>
                <div className="basic-details-container-right">
                    <BookAppointment/>
                </div>
            </div>
            <div className="basic-details-bottom">

            </div>
    </div>

}

export default BasicDetails