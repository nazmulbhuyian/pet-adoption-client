import { toast } from "react-hot-toast";


const MySingleProduct = ({ item, refetch }) => {

    const handleDelete = (item) => {
        fetch(`http://localhost:5000/petsDetails`, {
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
        <div className="card bg-white shadow-xl mx-auto p-5">
            < label><figure><img src={item?.img} width='240px' alt="Shoes" /></figure></label >

            <div className="">
                <h2 className="text-xl font-bold">Name: {item?.p_name}</h2>
                <p className="font-bold">Size: {item?.size}</p>
                <p className='font-bold'>Weight: ${item?.weight}</p>
                <p className='font-bold'>Type: {item?.type}</p>
                <p className='font-bold'>Colour: {item?.colour}</p>
                <p className='font-bold'>Location: {item?.location}</p>
                <div className="flex justify-center mt-3">
                    <button onClick={() => handleDelete(item)} className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MySingleProduct;