import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";


const UserBuy = () => {
    const {user} = useContext(AuthContext)

    const { refetch, error, data: items = [] } = useQuery({
        queryKey: ['/bookings'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings/userBookMyPet/${user}`)
            const data = await res.json();
            return data;
        }
    })

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/bookings/userBookMyPet/${id}`, {
            method: 'DELETE',
            headers: {
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data?.status == "Successfully Deleted") {
                    toast.success('Request Deleted successfully');
                    refetch();
                } else {
                    toast.error('Something Wrong')
                }
            })
    }

    const handleStatus = (id) => {
        fetch(`http://localhost:5000/bookings/userBookMyPet/${id}`, {
            method: 'PATCH',
            headers: {
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data?.status == "Successfully Updated") {
                    toast.success('User Status Update successfully');
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
                        <h1 className="text-2xl font-semibold text-blue-800 text-center mb-8 underline">All Users In Your Website</h1>
                        <div className="lg:overflow-x-auto mt-12">
                            <table className="table w-full table-zebra">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Image</th>
                                        <th>pet Name</th>
                                        <th>Customer Name</th>
                                        <th>Customer Email</th>
                                        <th>Customer Phone</th>
                                        <th>Status</th>
                                        <th>Details</th>
                                        <th>Delete</th>
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
                                            <td>{item?.b_name}</td>
                                            <td>{item?.b_email}</td>
                                            <td>{item?.b_phone}</td>
                                            {
                                                item?.status == 'No' ?
                                                <td><button onClick={() => handleStatus(item?._id)} className='border-none btn hover:bg-red-400 bg-red-500 text-white'>{item?.status}</button></td>
                                                :
                                                <td><button className='border-none btn btn-primary text-white'>{item?.status}</button></td>
                                            }
                                            <td><Link to={`/petDetails/${item?.detail_id}`}><button className='border-none underline rounded-full btn btn-primary bg-blue-800 text-white'>Details</button></Link></td>
                                            <td><button onClick={() => handleDelete(item?._id)} className='border-none btn hover:bg-red-400 bg-red-500 text-white'>Delete</button></td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    :
                    <h1 className="text-2xl font-semibold text-blue-800 text-center mb-8">You Have No Product</h1>
            }


        </div>
    );
};

export default UserBuy;