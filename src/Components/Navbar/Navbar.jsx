import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import { Tooltip as ReactTooltip } from 'react-tooltip'


const Navbar = () => {
    // Basic usage
    const { user, logOut } = useContext(AuthContext);

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/user-profile">user Profile</NavLink></li>
        <li><NavLink to="/update-profile">Update Profile</NavLink></li>
        {user &&
            <li><NavLink to="/about-us">About Us</NavLink></li>
        }
    </>
    //handle log out
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('User Log Out Successfully');
                // console.log(result.user);
            })
            .catch(() => {
                toast.error('oops! Something wrong. please reload the page');
                // console.log(error.message);
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
                        <div className="cursor-pointer">
                            <img data-tooltip-id="my-tooltip" data-tooltip-content={user?.email} alt="photo url is not right" src={user ? user?.photoURL
                                : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                            <ReactTooltip id="my-tooltip" />
                        </div>
                    </div>

                </div>
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