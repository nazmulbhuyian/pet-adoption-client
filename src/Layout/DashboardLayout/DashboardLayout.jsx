import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";


const DashboardLayout = () => {
    const { userRole } = useContext(AuthContext);
    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col lg:ml-24">
                    <Outlet></Outlet>
                    {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-60 h-full bg-base-300 text-center text-blue-800 text-xl font-bold">
                        <Link to='/dashboard' className="mt-6">My Profile</Link>
                        <Link to='/dashboard/myBooking' className="mt-6">My Booking</Link>
                        {
                            userRole == 'seller' ?
                                <>
                                    <Link to='/dashboard/myProduct' className="mt-6">My Product</Link>
                                    <Link to='/dashboard/addProduct' className="mt-6">Add Product</Link>
                                    <Link to='/dashboard/userBuy' className="mt-6">User Buy My Product</Link>
                                </>
                                :
                                ''
                        }
                        {
                            userRole == 'admin' ?
                                <>
                                    <Link to='/dashboard/allUser' className="mt-6">All User</Link>
                                    <Link to='/dashboard/allProduct' className="mt-6">All Product</Link>
                                </>
                                :
                                ''
                        }
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;