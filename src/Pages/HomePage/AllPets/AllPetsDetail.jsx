import { Link } from "react-router-dom";


const AllPetsDetail = ({ pet }) => {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <Link to={`/petDetails/${pet?._id}`}>
                <figure><img src={pet?.img} alt="Shoes" className="rounded-xl w-96 lg:hover:scale-110 hover:scale-105" /></figure>
            </Link>
            <div className="card-body">
                <h2 className="card-title">{pet?.p_name}</h2>
                <div className="card-actions justify-center">
                    <Link to={`/petDetails/${pet?._id}`}><button className="btn bg-blue-800 hover:bg-blue-600 text-white">Details</button></Link>
                </div>
            </div>
        </div>

    );
};

export default AllPetsDetail;