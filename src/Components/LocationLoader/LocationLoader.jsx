import { Card, Tooltip } from 'antd';
import React, { useEffect, useState } from 'react';
import "./LocationLoader.scss"
import Constants from '../../Constants';
import UIButton from '../Button/UIButton';
import BookAppointmentModal from '../BookAppointmentModal/BookAppointmentModal';
// @ts-ignore

const LocationLoader = () => {
        const [showModal, setShowModal] = useState(false);

    return (
        <><div className='location'>
            <div className="location-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.88195247545!2d80.13383177494359!3d12.979401387336683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f68f4ec92e5%3A0xb1c8dd5a4025d333!2sSHREE%20KRISHNAA%20DENTAL%20CARE!5e0!3m2!1sen!2sin!4v1731779722374!5m2!1sen!2sin" width="100%" height="400px" style={{ "border": 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='location-address'>
                <div className='location-address-header'>
                    <h3 className='location-address-header-text'>{"Contact Now"}</h3>
                    <h2 className='location-address-header-text-instruction'><span>Get Free</span> <span>Professional Consultation</span></h2>
                    <div className='location-address-header-icon'>
                        <img src={Constants.locationImg} loading='lazy'></img>
                        <span className='location-address-header-icon-text'>{"14,pozhicalur, First Main Rd, Pammal, Chennai, Tamil Nadu 600075"}</span>
                    </div>
                    <div className='location-address-header-icon'>
                        <img src={Constants.phoneIconImg} loading='lazy'></img>
                        <span className='location-address-header-icon-text'>{"(+91)90807 07866"}</span>
                    </div>
                </div>
                <div className='location-footer'>
                    <UIButton buttonName="Book Appointment"  handleClick={() => setShowModal(true)}/>
                </div>
            </div>
            <div>
                {/* <gmpx-place-overview slot="fixed" place="ChIJ5ZLs9GhfUjoRM9MlQFrdyLE" size="small" googleLogoAlreadyDisplayed={true}></gmpx-place-overview> */}
            </div>
        </div><>
                {showModal ? <BookAppointmentModal showModal={showModal} handleClose={() => setShowModal(false)} /> : ""}
            </></>

    );
}

export default LocationLoader