import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import MySingleProduct from "./MySingleProduct";


const MyProduct = () => {
    const { user } = useContext(AuthContext);

    const { refetch, error, data: items = [] } = useQuery({
        queryKey: ['/bookings/myAdd', user],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings/myAdd/${user}`)
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h1 className='text-emerald-500 text-3xl font-bold text-center mt-5 mb-8'>You Added Total {items?.data?.length} Items</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    items?.data?.map(item => <MySingleProduct key={item._id} item={item} refetch={refetch}></MySingleProduct>)
                }
            </div>
        </div>
    );
};

export default MyProduct;