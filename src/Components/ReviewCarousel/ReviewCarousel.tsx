
import { Image } from "antd";
import "./ReviewCarousel.scss"
import Constants from "../../Constants";
import { StarFilled } from "@ant-design/icons";
const ReviewCarousel = () => {

    return <div className="review-carousel">
        <div className="review-carousel-left">
            <Image loading="lazy" src={Constants.ReviewImg} className="review-carousel-left-image" preview={false} />
            <div className="review-carousel-left-contents">
            <div className="review-carousel-left-content">
                <div className="review-carousel-left-content-top">
                    <div className="review-carousel-left-content-top-left">
                        <span>
                            4.9/5
                        </span>
                    </div>
                    <div className="review-carousel-left-content-top-right">
                        <span>This rate is given by users after visiting our location</span>
                    </div>

                </div>
                <div className="review-carousel-left-content-bottom">
                    <div>
                    <StarFilled className="icon" />
                    <StarFilled className="icon" />
                    <StarFilled className="icon" />
                    <StarFilled className="icon" />
                    <StarFilled className="icon" />
                    </div>
                    <div>
                    <span>For Excellence Services</span>
                    </div>
                </div>

            </div>
            </div>
        </div>
        <div className="review-carousel-right">
            <h1>About Us</h1>
            <span>
            "Shree Krishnaa Dental Care in pammal provides exceptional dental care services with a team of experienced and skilled dentists dedicated to providing personalized treatment. We are committed to providing the highest quality of clinical care and personalized service in a warm and compassionate atmosphere.Our philosophy is to provide excellent service in a timely manner, and to create relationships that last as long as our smiles. Our services include Tooth coloured fillings, root canal treatment,Pain less Laser Treatments, dental implants, braces, smile makeovers, gum treatment, Crowns and Bridges, Aligners, Complete Dentures,Pit and Fissure sealants, full mouth rehabilitation ,oral medicine, and oral and maxillofacial surgery, among others."
            </span>
        </div>

    </div>

}

export default ReviewCarousel;