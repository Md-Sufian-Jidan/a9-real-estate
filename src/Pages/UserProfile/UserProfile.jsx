import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const UserProfile = ({ children }) => {
    const { user } = useContext(AuthContext);
    // if (user) {
    //     return children;
    // }
    return (
        <div>
            <form className="w-3/4 mx-auto">
                <div className="space-x-2">
                    <span className="label-text">User Name :</span>
                    <input type="text" value={user.displayName} className="input input-bordered" required />
                </div>
                <div className="space-x-2">
                    <span className="label-text">User email :</span>
                    <input type="text" value={user.email} className="input input-bordered" required />
                </div>
                <div className="space-x-2">
                    <span className="label-text">User Name :</span>
                    <input type="text" value={user.email} className="input input-bordered" required />
                </div>
            </form>


            <p>{ }</p>
            <p>{user.email}</p>
        </div>
    );
};

export default UserProfile;