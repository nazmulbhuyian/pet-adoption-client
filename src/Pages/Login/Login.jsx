import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from './loginImage.jpg'


const Login = () => {
    
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleSignIn = (data) => {
        const userData = {
            email: data.email,
            password: data.password
        }
        fetch(`http://localhost:5000/usersLog`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.accessToken) {
                    localStorage.setItem('accessToken', data.accessToken);
                    toast.success('User Login Successfully')
                    // navigate('/')
                    navigate(from, { replace: true })
                    window.location.reload(true);
                } else {
                    toast.error(data.message);
                }
            })
    }

    return (
        <div className='flex justify-center items-center'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='w-96 p-7'>
                {/* <div className="flex items-center justify-between text-red-500">
                    <p>User: nafiz@gmail.com</p>
                    <p>PassWord: 123456</p>
                </div>
                <div className="flex items-center justify-between text-red-500 mb-4">
                    <p>Driver: nazmul@gmail.com</p>
                    <p>PassWord: 123456</p>
                </div> */}
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleSignIn)}>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">E-mail</span>
                        </label>
                        <input type="email" {...register("email", { required: 'Email Address is required' })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password",
                            {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password must be 6 caracter or longer' },
                                // pattern:{value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[$@])/, message: 'Passwor should be strong'}
                            })
                        }
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <button type="submit" className='btn btn-accent w-full mt-5 hover:bg-emerald-500 p-2'>
                        Submit
                    </button>

                    {/* {
                        signUpError && <p className='text-red-600'>{signUpError}</p>
                    } */}
                </form>
                <p>New to Pet Adoption <Link className='text-red-400' to='/register'>Please Sign Up</Link></p>
            </div>
            {/* <SocialLogin></SocialLogin> */}
        </div>
    );
};

export default Login;