import { Button, Card, DatePicker, Form, Input, Modal, Row } from "antd";
import React, { useState } from "react";
import "./BookAppointment.scss"
import UIButton from "../Button/UIButton";
import emailjs from '@emailjs/browser';

const cardStyle: React.CSSProperties = {
    minHeight: 200
};



const BookAppointment = () => {
    const [form] = Form.useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const onFinish = (values: any) => {
        emailjs.send("service_be7q01j", "template_y4vch3u", {
            patient_name: values.name,
            date: new Date(values.date["$d"]).toDateString(),
            patient_contact_number: values?.phone,
            denatal_contact_number: "09080707866",
            dental_contact_email: "krishnaadentalcare@gmail.com",
            bcc_to: values?.email
        }, {
            publicKey: 'yJRJ8MxgHq68GP-nK',
        }).then(
            () => {
                form.resetFields();
                showModal()
            },
            (error) => {
                console.log(error)
                form.resetFields();
                showModal()
            },
        );

    }


    return <Card hoverable style={cardStyle} styles={{ body: { padding: 0, overflow: 'hidden' } }} className="book-appointment-card-container">
        <Row style={{ width: "100%", justifyItems: "center" }}>
            <Form
                name="basic"
                labelCol={{ span: 20 }}
                wrapperCol={{ span: 20 }}
                style={{ width: "100%" }}
                form={form}
                initialValues={{ remember: false }}
                className="book-appointment-card-container-start"
                onFinish={onFinish}
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
                    <Row style={{ width: "100%", justifyContent: "center" }}>
                        <Form.Item
                            rules={[{ required: true, message: 'Please input your name!' }]}
                            className="form-input"
                            name={"name"}
                        >
                            <Input required placeholder="Enter Name *" className="form-input" />
                        </Form.Item>
                    </Row>
                    <Row style={{ width: "100%", justifyContent: "center" }}>
                        <Form.Item
                            rules={[{ required: false, message: 'Please input your email!' }]}
                            className="form-input"
                            name={"email"}

                        >
                            <Input placeholder="Enter Email" className="form-input" />
                        </Form.Item>
                    </Row>
                    <Row style={{ width: "100%", justifyContent: "center" }}>
                        <Form.Item
                            rules={[{ required: true, message: 'Please input your PhoneNumber!' }]}
                            className="form-input"
                            name={"phone"}
                        >
                            <Input required placeholder="Enter PhoneNumber *" className="form-input" />
                        </Form.Item>
                    </Row>
                    <Row style={{ width: "100%", justifyContent: "center" }}>
                        <Form.Item
                            rules={[{ required: true, message: 'Please select date!' }]}
                            className="form-input"
                            name={"date"}
                        >
                            <DatePicker className="form-input" needConfirm placeholder="Select Date *" />
                        </Form.Item>
                    </Row>
                </div>
                <div className="book-appointment-card-container-footer">
                    <Row style={{ width: "100%", justifyContent: "center" }}>
                        <UIButton buttonName="Book Appointment" />
                    </Row>
                </div>
            </Form>

        </Row>

        <Modal title="Confirmation" open={isModalOpen} onOk={handleOk} footer={[<Button key="Ok" onClick={handleOk}>
            Ok
        </Button>,]}>
            <p>Thank you for connecting, our team will reach out to you soon</p>
        </Modal>

    </Card>

}

export default BookAppointment