import { useQuery } from "@tanstack/react-query";
import Spinner from '../../../Shared/Spinner/Spinner';
import { Link } from "react-router-dom";
import AllPetsDetail from "./AllPetsDetail";
const AllPets = () => {
    const { isLoading, data: pets = [] } = useQuery({
        queryKey: ['/petsDetails'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/petsDetails')
            const data = await res.json()
            return data
        }
    })

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div className="mt-8 mb-16">
            <h1 className="lg:text-4xl font-semibold text-center text-blue-800">Pets Available for Adoption Nearby</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 mt-16 lg:mx-40 md:mx-28">
                {
                    pets?.data?.map(pet => <AllPetsDetail key={pet._id} pet={pet}></AllPetsDetail>)
                }
            </div>
        </div>
    );
};

export default AllPets;