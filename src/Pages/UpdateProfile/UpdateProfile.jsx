import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateProfile = () => {
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();

    const { user, load } = useContext(AuthContext);
    // console.log(user);
    if (load) {
        return <span className="loading loading-bars loading-lg"></span>;
    }

    const handleUpdateProfile = (e) => {
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        // console.log(name, photo);

        updateProfile(user, {
            displayName: name, photoURL: photo
        })
            .then(() => {
                // console.log(result.user);
                toast.success('user Update Successfully');
                navigate(location?.state ? location.state : '/user-profile');
            })
            .catch(() => {
                toast.error('user Not Updated. Please Reload the Page and Try again');
                // console.log(error.message);
            })
    }
    return (
        <div>
            <Helmet>
                <title>
                    DreamHome | Update Profile
                </title>
            </Helmet>
            <form onSubmit={handleUpdateProfile} className="w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="your name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">photoUrl</span>
                    </label>
                    <input type="text" name="photo" placeholder="give your photo url" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">User Email</span>
                    </label>
                    <input type="email" defaultValue={user.email} className="input input-bordered" />
                </div>
                <div className="text-center">
                    <button className="btn my-5 bg-[#26b3a0]">Update Profile</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default UpdateProfile;