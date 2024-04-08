import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
// import Toastify from 'toastify-js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
    // Basic usage
    


    const { user, logOut } = useContext(AuthContext);
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/update-profile">Update Profile</NavLink></li>
        <li><NavLink to="/user-profile">User Profile</NavLink></li>
    </>
    //handle log out
    const handleLogOut = () => {
        logOut()
            .then((result) => {
                console.log(result.user);
                // Toastify({
                //     text: "This is a toast notification!",
                //     duration: 3000 // Duration in milliseconds
                // }).showToast();
                return toast.success('User Log Out Successfully');
            })
            .catch((error) => {
                console.log(error.message);
                return toast.success('User Log Out Successfully');
            })
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">DreamHome</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Profile" src={user?.image} />
                    </div>
                </div>
                {
                    user && <p>{user.email}</p>
                }
                {user ?
                    <button onClick={handleLogOut} className="btn bg-[#f71113]">Log Out</button>
                    :
                    <Link to="/login" className="btn bg-[#14f70c]">Login</Link>
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default Navbar;