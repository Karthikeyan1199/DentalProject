import { Modal } from "antd";
import BookAppointment from "../BookAppointment/BookAppointment.component";
import "./BookAppointmentModal.scss"

const BookAppointmentModal = (props: any) => {
    const { showModal = false,handleClose } = props;

    return <Modal title="" open={showModal} footer={null} style={{ top: 40, height:"100%" }} className="book-appointment-modal" destroyOnClose={true} onClose={handleClose} onCancel={handleClose}>
        <BookAppointment />
    </Modal>

}

export default BookAppointmentModal;