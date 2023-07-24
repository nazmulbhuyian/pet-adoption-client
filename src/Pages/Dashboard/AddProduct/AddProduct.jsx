import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";


const AddProduct = () => {
    const { user, userName, userPhone } = useContext(AuthContext);

    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm();

    const imageHostKey = import.meta.env.VITE_ImageBBHostKey;
    const onSubmit = data => {
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData) {
                    const addPet = {
                        img: imgData.data.url,
                        p_name: data.pet,
                        colour: data.colour,
                        age: data.age,
                        sex: data.sex,
                        size: data.size,
                        type: data.type,
                        weight: data.weight,
                        location: data.location,
                        details: data.details,
                        o_name: userName,
                        phone: userPhone,
                        e_mail: user
                    }
                    fetch('http://localhost:5000/petsDetails', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(addPet)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.status === 'Successfully') {
                                toast.success('Pet added successfully')
                                navigate('/dashboard/myProduct')
                            }
                        })
                }
            })
    };

    return (
        <div className='flex w-80 mx-auto'>

            <div>
                <h1 className='text-blue-800 text-3xl font-bold'>Please Add A Pet</h1>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div>
                        <label className="label">
                            <span className="label-text text-bold text-2xl text-blue-800">Pet Name</span>
                        </label>
                        <input {...register("pet", { required: true })} type="text" className="input input-bordered input-lg w-full max-w" />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-bold text-2xl text-blue-800">Colour Name</span>
                        </label>
                        <input {...register("colour", { required: true })} type="text" className="input input-bordered input-lg w-full max-w" />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-bold text-2xl text-blue-800">Sex</span>
                        </label>
                        <input {...register("sex", { required: true })} type="text" className="input input-bordered input-lg w-full max-w" />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-bold text-2xl text-blue-800">Age</span>
                        </label>
                        <input {...register("age", { required: true })} type="text" className="input input-bordered input-lg w-full max-w" />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-bold text-2xl text-blue-800">Size</span>
                        </label>
                        <input {...register("size", { required: true })} type="text" className="input input-bordered input-lg w-full max-w" />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-bold text-2xl text-blue-800">Type</span>
                        </label>
                        <input {...register("type", { required: true })} type="text" className="input input-bordered input-lg w-full max-w" />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-bold text-2xl text-blue-800">Weight</span>
                        </label>
                        <input {...register("weight", { required: true })} type="text" className="input input-bordered input-lg w-full max-w" />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-bold text-2xl text-blue-800">Location</span>
                        </label>
                        <input {...register("location", { required: true })} type="text" className="input input-bordered input-lg w-full max-w" />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-bold text-2xl text-blue-800">About Pet</span>
                        </label>
                        <textarea {...register("details", { required: true })} className="textarea textarea-accent w-full" placeholder="About Product"></textarea>
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-bold text-2xl text-blue-800">Image</span>
                        </label>
                        <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered file-input-success w-full" />
                    </div>

                    <input className='text-2xl btn btn-accent w-full mt-5 text-white bg-blue-800' value='Add Product' type="submit" />
                </form>
            </div>

        </div>
    );
};

export default AddProduct;