import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Spinner from "../../../Shared/Spinner/Spinner";
import { useState } from "react";
import BookingModal from "./BookingModal";


const SinglePet = () => {

    const { id } = useParams();

    const [bookingData, setBookingData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const { isLoading, refetch, data = [] } = useQuery({
        queryKey: [`/carsDetails/${id}`],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/petsDetails/${id}`)
            const data = await res.json()
            return data
        }
    })
    const detail = data?.data;

    if (isLoading) {
        return <Spinner></Spinner>;
    }

    const handleBooking = (detail) =>{
        setBookingData(detail);
        setIsOpen(true);
    }

    return (
        <div className="mt-12">
            <div className="lg:flex mx-auto w-9/12 justify-between">
                <div className="lg:w-7/12">
                    <img src={detail?.img} alt="" className="w-full" />
                    <h3 className="text-3xl font-semibold text-indigo-800 mt-12">Description:</h3>
                    <p className="mt-6 text-gray-600">{detail?.details}</p>
                </div>
                <div className="ml-4 lg:mt-0 mt-6">
                    <h2 className="text-3xl font-bold text-blue-800">Pet Name: {detail?.p_name}</h2>
                    <div className="grid grid-cols-2 mt-4">
                        <p className="bg-blue-800 text-xl text-white p-3">Colour</p>
                        <p className="bg-blue-800 text-xl text-white p-3">{detail?.colour}</p>
                        <p className="bg-blue-400 text-xl text-white p-3">Age</p>
                        <p className="bg-blue-400 text-xl text-white p-3">{detail?.age} years old</p>
                        <p className="bg-blue-800 text-xl text-white p-3">Size</p>
                        <p className="bg-blue-800 text-xl text-white p-3">{detail?.size}</p>
                        <p className="bg-blue-400 text-xl text-white p-3">Weight</p>
                        <p className="bg-blue-400 text-xl text-white p-3">{detail?.weight} kg</p>
                        <p className="bg-blue-800 text-xl text-white p-3">Location</p>
                        <p className="bg-blue-800 text-xl text-white p-3">{detail?.location}</p>
                        <p className="bg-blue-400 text-xl text-white p-3">Type</p>
                        <p className="bg-blue-400 text-xl text-white p-3">{detail?.type}</p>
                    </div>
                    <div className="flex justify-center mt-8">
                    <a href="#booking_modal"><button onClick={() => handleBooking(detail)} className="btn bg-indigo-800 text-white hover:bg-indigo-600 rounded-full px-8">Apply To Addopt</button></a>
                    </div>
                    <h2 className="text-2xl font-bold mt-12 text-indigo-800">Owner Information:</h2>
                    <h4 className="text-xl font-semibold mt-6 text-indigo-800">Owner Name: {detail?.o_name}</h4>
                    <h4 className="text-xl font-semibold mt-2 text-indigo-800">Owner Phone: {detail?.phone}</h4>
                    <h4 className="text-xl font-semibold mt-2 text-indigo-800">Owner E-mail: {detail?.e_mail}</h4>
                    
                </div>
            </div>
            {
                isOpen &&
                <BookingModal bookingData={bookingData} setIsOpen={setIsOpen} refetch={refetch}></BookingModal>
            }
        </div>
    );
};

export default SinglePet;