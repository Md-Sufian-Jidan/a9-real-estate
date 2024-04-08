
const UpdateProfile = () => {
    return (
        <div>
            <h2 className="text-xl">update profile</h2>
            <form>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="your name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">photoUrl</span>
                    </label>
                    <input type="text" placeholder="give your photo url" className="input input-bordered" required />
                </div>
            </form>
        </div>
    );
};

export default UpdateProfile;