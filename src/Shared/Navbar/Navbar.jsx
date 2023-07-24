import { Link } from "react-router-dom";
import img from '../../assets/pet_logo.jpg'
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import Spinner from "../Spinner/Spinner";

const Navbar = () => {

    const { user, loading, userRole } = useContext(AuthContext);

    const handleLogOut = () => {
        localStorage.removeItem('accessToken');
        loading(true);
    }

    // const { isLoading, data } = useQuery({
    //     queryKey: [`/usersLog/driver/${user}`],
    //     queryFn: async () => {
    //         const res = await fetch(`https://car-carry-server.vercel.app/usersLog/driver/${user}`)
    //         const data = await res.json()
    //         return data
    //     }
    // });
    // console.log(data);
    if (loading) {
        return <Spinner></Spinner>;
    }

    return (

        // <div className="navbar lg:w-[1200px] md-w-full mx-auto mt-5">
        <div className="navbar lg:w-3/4 mx-auto mt-5">
            <div className="navbar-start">
                <div className="">
                    <div className="">
                        <img src={img} alt="" className="w-24" />
                    </div>
                </div>

                <div className="dropdown lg:contents hidden ">
                    <Link to='/' className='mx-7 font-bold text-blue-800'>Home</Link>
                    <Link to='/aboutUs' className='font-bold mr-7 text-blue-800'>About Us</Link>
                    <Link to='/contactUs' className='font-bold mr-7 text-blue-800'>Contact Us</Link>

                </div>
            </div>
            <div className="navbar-end ">
                <div className="dropdown lg:hidden dropdown-end">
                    <label tabIndex={0} className="">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12  text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-36">
                        <Link to='/' className='font-bold text-blue-800'>Home</Link>
                        <Link to='/aboutUs' className='font-bold mr-7 text-blue-800'>About Us</Link>
                        <Link to='/contactUs' className='font-bold mr-7 text-blue-800'>Contact Us</Link>
                        {
                            user ?
                                <Link onClick={handleLogOut} className='font-bold text-blue-800'>Log Out</Link>
                                :
                                <Link to='/login' className='font-bold text-blue-800'>Login</Link>
                        }
                        {
                            user &&
                            <Link to='/dashboard' className='font-bold text-blue-800 ml-5'>Dashboard</Link>
                        }
                    </ul>
                </div>
                <div className='lg:contents hidden'>
                    {
                        user ?
                            <Link onClick={handleLogOut} className='font-bold text-blue-800'>Log Out</Link>
                            :
                            <Link to='/login' className='font-bold text-blue-800'>Login</Link>
                    }
                    {
                        user &&
                        <Link to='/dashboard' className='font-bold text-blue-800 ml-5'>Dashboard</Link>
                    }
                </div>
            </div>
        </div>
    );
};


export default Navbar;