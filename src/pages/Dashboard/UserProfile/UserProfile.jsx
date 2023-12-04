import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
// import useAdmin from "../../../hooks/useAdmin";

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    // const [isAdmin] = useAdmin();
    return (
        <div className="md:w-96 h-72 bg-[#11e4a5] bg-opacity-10 border-b-4  border-b-[#11e4a5] shadow-xl flex flex-col items-center justify-center mx-auto">
        <div className="flex justify-center">
            {
                user ? <img className="h-20 w-20 rounded-full" src={user.photoURL} alt="" /> : ''
            }
        </div>
        <div className="flex justify-center mt-3 text-3xl font-bold">
            {
                user ? user.displayName : ''
            }
        </div>
        <div className="flex justify-center mt-3">
            {
                user ? <h2>Email: {user.email}</h2>
                : ''
            }
        </div>
        <div className="mt-3">
            <h2>Role: user</h2>
        </div>
        
        
    </div>
    );
};

export default UserProfile;