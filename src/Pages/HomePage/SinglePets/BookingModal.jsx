import { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";


const BookingModal = ({ bookingData, refetch, setIsOpen }) => {

    const { user, userName, userPhone } = useContext(AuthContext);

    const handleBooking = () => {
        const info = {
            p_name: bookingData.p_name,
            p_img: bookingData.img,
            o_email: bookingData.e_mail,
            o_name: bookingData.o_name,
            o_phone: bookingData.phone,
            detail_id: bookingData._id,
            type: bookingData.type,
            b_name: userName,
            b_email: user,
            b_phone: userPhone,
            status: 'No'
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === "Successfully Added") {
                    toast.success(`Booking Added Successfully`)
                    setIsOpen(false);
                    refetch()
                }
            })
    }


    return (
        <div>
            <div className="modal" id="booking_modal">
                <div className="modal-box">
                    <h2 className="text-xl font-semibold mb-5 text-center">Please check your confirmation details</h2>
                    <input type="text" className="input input-bordered w-full bg-gray-300" value={bookingData?.p_name} readOnly />
                    <input type="text" className="input input-bordered w-full bg-gray-300 mt-2" value={bookingData?.type} readOnly />
                    <input type="text" className="input input-bordered w-full bg-gray-300 mt-2" value={bookingData?.location} readOnly />
                    <input type="text" className="input input-bordered w-full bg-gray-300 mt-2" value={bookingData?.e_mail} readOnly />
                    <div className="mt-3 flex justify-between items-center">
                        <button onClick={handleBooking} className="btn bg-blue-800 hover:bg-blue-600 border-0 w-40 text-white">Submit</button>
                        <a onClick={() => setIsOpen(false)} className="btn bg-red-400 hover:bg-red-600 border-0 text-white">Close</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;