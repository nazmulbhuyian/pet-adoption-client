import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";


const MyBooking = () => {
    const { user } = useContext(AuthContext);

    const { refetch, error, data: items = [] } = useQuery({
        queryKey: ['/bookings', user],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings/${user}`)
            const data = await res.json();
            return data;
        }
    })

    const handleDelete = (item) => {
        fetch(`http://localhost:5000/bookings/${user}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.status == "Successfully Deleted") {
                    toast.success('Pet Deleted successfully');
                    refetch();
                } else {
                    toast.error('Something Wrong')
                }
            })
    }

    return (
        <div>
            {
                items?.data?.length >= 1 ?
                    <div>
                        <h1 className="text-2xl font-semibold text-blue-800 text-center mb-8 underline">You Booked Thoes Pet</h1>
                        <div className="lg:overflow-x-auto mt-12">
                            <table className="table w-full table-zebra">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Image</th>
                                        <th>pet Name</th>
                                        <th>Type</th>
                                        <th>Status</th>
                                        <th>Owner Name</th>
                                        <th>Owner Phone</th>
                                        <th>Details</th>
                                        <th>Cancel</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        items?.data?.map((item, i) => <tr key={item?._id}>
                                            <th>{i + 1}</th>
                                            <th><div className="avatar">
                                                <div className="w-24 rounded-full">
                                                    <img src={item?.p_img} />
                                                </div>
                                            </div></th>
                                            <td>{item?.p_name}</td>
                                            <td>{item?.type}</td>
                                            <td>{item?.status}</td>
                                            <td>{item?.o_name}</td>
                                            <td>{item?.o_phone}</td>
                                            <td><Link to={`/petDetails/${item?.detail_id}`}><button className='border-none underline rounded-full btn btn-primary bg-blue-800 text-white'>Details</button></Link></td>
                                            <td><button onClick={() => handleDelete(item)} className='border-none btn hover:bg-red-400 bg-red-500 text-white'>Cancel</button></td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    :
                    <h1 className="text-2xl font-semibold text-blue-800 text-center mb-8">You Booked Nothing please purches from <Link to='/' className="underline">Here</Link></h1>
            }





        </div>
    );
};

export default MyBooking;