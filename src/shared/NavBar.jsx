import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
        .then(result =>{
            console.log(result.user)
        })
        .catch(error => {
            console.error(error);
        })
    }


    const links = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'btn bg-[#11e4a5] border-0 text-white ml-3 font-bold hover:bg-[#6aaf9a] btn-sm' : 'btn btn-ghost btn-sm'}>Home</NavLink></li>
        <li><NavLink to='/availableCamps' className={({ isActive }) => isActive ? 'btn bg-[#11e4a5] border-0 text-white ml-3 font-bold hover:bg-[#6aaf9a] btn-sm' : 'btn btn-ghost btn-sm'}>Available Camps</NavLink></li>
        <li><NavLink to='/contactUs' className={({ isActive }) => isActive ? 'btn bg-[#11e4a5] border-0 text-white ml-3 font-bold hover:bg-[#6aaf9a] btn-sm' : 'btn btn-ghost btn-sm'}>Contact Us</NavLink></li>
        <li><NavLink to='/dashboard' className={({ isActive }) => isActive ? 'btn bg-[#11e4a5] border-0 text-white ml-3 font-bold hover:bg-[#6aaf9a] btn-sm' : 'btn btn-ghost btn-sm'}>Dashboard</NavLink></li>
        <li><NavLink to='/login' className={({ isActive }) => isActive ? 'btn bg-[#11e4a5] border-0 text-white ml-3 font-bold hover:bg-[#6aaf9a] btn-sm' : 'btn btn-ghost btn-sm'}>Login</NavLink></li>
    </>
    return (
        <div className="navbar bg-opacity-30 bg-black text-white max-w-screen-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-black bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <img src="/src/assets/MediCamp_Care.png" className="w-24" alt="MediCamp Care logo" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?

                        <div className="dropdown dropdown-hover dropdown-end">
                            <label tabIndex={0} className="btn m-1 bg-transparent border-0 hover:bg-transparent">
                                <img className="w-12 h-12 ml-3 rounded-full mt-0 " src={user.photoURL} alt="" />
                            </label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-[#11e4a5] bg-opacity-40 rounded-box w-52">
                                <li>
                                    <div className="w-20 h-20 mx-auto">
                                        <img className="w-14 h-12 rounded-full" src={user.photoURL} alt="" />
                                    </div>
                                    <p className="text-black font-bold text-center text-2xl">{user.displayName}</p>
                                </li>
                                <li>
                                    <button onClick={handleLogOut} className="btn bg-transparent border-0 text-xl    text-center font-bold text-black">LogOut</button>
                                </li>
                            </ul>
                        </div>

                        :
                        ''
                }
            </div>
        </div>
    );
};

export default NavBar;