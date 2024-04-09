import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, Navigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const UserProfile = () => {
    const location = useLocation();
    console.log(location);
    const { user, load } = useContext(AuthContext);
    if (load) {
        return <span className="loading loading-bars loading-lg"></span>;
    }
    return (
        <div>
            <Helmet>
                <title>
                    DreamHome | User Profile
                </title>
            </Helmet>
            <form className="w-3/4 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">User Name : </span>
                    </label>
                    <input type="text" defaultValue={user.displayName} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">User Email : </span>
                    </label>
                    <input type="text" defaultValue={user.email}  className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">User photoURL : </span>
                    </label>
                    <input type="text" defaultValue={user.photoURL}  className="input input-bordered" required />
                </div>
                <div className="text-center my-5">
                    <Link to="/update-profile" className="btn bg-[#fd618d]">Edit Profile</Link>
                </div>
            </form>
            <Navigate state={location.pathname} to=""></Navigate>
        </div>
    );
};

export default UserProfile;