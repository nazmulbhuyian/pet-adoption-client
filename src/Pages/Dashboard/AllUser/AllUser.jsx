import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";


const AllUser = () => {

    const { refetch, error, data: items = [] } = useQuery({
        queryKey: ['/usersReg'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/usersReg`)
            const data = await res.json();
            return data;
        }
    })

    const handleAdmin = (item) => {
        fetch(`http://localhost:5000/usersReg`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.status == "Successfully Update") {
                    toast.success('Make Admin successfully');
                    refetch();
                } else {
                    toast.error('Something Wrong')
                }
            })
    }

    const handleDelete = (item) => {
        fetch(`http://localhost:5000/usersReg`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.status == "Successfully Deleted") {
                    toast.success('User Deleted successfully');
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
                                        <th>Name</th>
                                        <th>E-mail</th>
                                        <th>Phone</th>
                                        <th>Role</th>
                                        <th>Make Admin</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        items?.data?.map((item, i) => <tr key={item?._id}>
                                            <th>{i + 1}</th>
                                            <td>{item?.name}</td>
                                            <td>{item?.email}</td>
                                            <td>{item?.phone}</td>
                                            <td>{item?.role}</td>
                                            {
                                                item?.role == 'admin' ?
                                                    <td><button className='border-none underline rounded-full btn btn-primary bg-blue-800 text-white'>Admin Done</button></td>
                                                    :
                                                    <td><button onClick={() => handleAdmin(item)} className='border-none underline rounded-full btn btn-primary bg-blue-800 text-white'>Make Admin</button></td>
                                            }
                                            <td><button onClick={() => handleDelete(item)} className='border-none btn hover:bg-red-400 bg-red-500 text-white'>Delete</button></td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    :
                    <h1 className="text-2xl font-semibold text-blue-800 text-center mb-8">You Have No User</h1>
            }





        </div>
    );
};

export default AllUser;