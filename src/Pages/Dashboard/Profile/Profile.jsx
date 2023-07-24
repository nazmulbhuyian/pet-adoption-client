import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";


const Profile = () => {

    const { user, userName, userRole, userPhone } = useContext(AuthContext)

    return (
        <div className="mt-12">
            <h3 className="text-xl text-blue-600 mb-2">Your Name: {userName}</h3>
            <h3 className="text-xl text-blue-600 mb-2">Your E-mail: {user}</h3>
            <h3 className="text-xl text-blue-600 mb-2">Your Role: {userRole}</h3>
            <h3 className="text-xl text-blue-600 mb-2">Your Contact Number: {userPhone}</h3>
            <h3 className="text-3xl font-bold text-center text-blue-800 mt-8">Update Comming Soooooooon.....</h3>
        </div>
    );
};

export default Profile;