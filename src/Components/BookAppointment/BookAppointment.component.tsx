import { Card, DatePicker, Form, Input, Row } from "antd";
import React from "react";
import "./BookAppointment.scss"
import UIButton from "../Button/UIButton";

const cardStyle: React.CSSProperties = {
    minHeight: 200
};



const BookAppointment = () => {
    return <Card hoverable style={cardStyle} styles={{ body: { padding: 0, overflow: 'hidden' } }} className="book-appointment-card-container">
        <Row style={{width:"100%",justifyItems:"center"}}>
            <Form
                name="basic"
                labelCol={{ span: 20 }}
                wrapperCol={{ span: 20 }}
                style={{ width: "100%"}}
                initialValues={{ remember: true }}
                className="book-appointment-card-container-start"
                //onFinish={onFinish}
                //onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <div className="book-appointment-card-container-inner">
                    <span>{"Book"}</span>
                    <span>{"Appointment"}</span>
                </div>
                <div className="book-appointment-card-container-inner-instruction">
                    <span>{"Please complete the form and our dental expert will be in touch with you."}</span>
                </div>
                <div className="book-appointment-card-container-contents">
                <Row style={{ width: "100%" ,justifyContent:"center"}}>
                <Form.Item
                            rules={[{ required: true, message: 'Please input your name!' }]}
                            className="form-input"
                        >
                            <Input required placeholder="Enter Name *" className="form-input" />
                        </Form.Item>
                    </Row>
                    <Row style={{ width: "100%" ,justifyContent:"center"}}>
                        <Form.Item
                            rules={[{ required: false, message: 'Please input your email!' }]}
                            className="form-input"

                        >
                            <Input placeholder="Enter Email" className="form-input" />
                        </Form.Item>
                    </Row>
                    <Row style={{ width: "100%" ,justifyContent:"center"}}>
                        <Form.Item
                            rules={[{ required: true, message: 'Please input your PhoneNumber!' }]}
                            className="form-input"
                        >
                            <Input required placeholder="Enter PhoneNumber *" className="form-input" />
                        </Form.Item>
                    </Row>
                    <Row style={{ width: "100%" ,justifyContent:"center"}}>
                        <Form.Item
                            rules={[{ required: true, message: 'Please select date!' }]}
                            className="form-input"
                        >
                            <DatePicker className="form-input" needConfirm placeholder="Select Date *" />
                        </Form.Item>
                    </Row>
                </div>
                <div className="book-appointment-card-container-footer">
                    <Row style={{ width: "100%",justifyContent:"center" }}>
                        <UIButton buttonName="Book Appointment" />
                    </Row>
                </div>
            </Form>

        </Row>


    </Card>

}

export default BookAppointment