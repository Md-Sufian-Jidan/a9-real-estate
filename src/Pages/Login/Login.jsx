import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    // show password
    const [show, setShow] = useState(false);
    // use context
    const { signInUser, googleLogin, githubLogin } = useContext(AuthContext);
    // hook-form
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        const { email, password } = data;
        console.log(email, password);
        signInUser(email, password)
            .then((result) => {
                console.log(result.user);
                return toast.success('User Login Successful');
            })
            .catch((error) => {
                console.log(error.message);
                return toast.error('User All Ready Exists');
            })
    };
    //google login
    const handleGoogle = () => {
        googleLogin()
            .then((result) => {
                console.log(result.user);
                return toast.success('User Login Successful');
            })
            .catch((error) => {
                console.log(error.message);
                return toast.error('User All Ready Exists');

            })
    };
    //github login
    const handleGithub = () => {
        githubLogin()
            .then((result) => {
                console.log(result.user);
                return toast.success('User All Ready Exists');
            })
            .catch((error) => {
                console.log(error.message);
                return toast.error('User All Ready Exists');
            })
    };

    return (
        <div className="w-1/2 mx-auto my-3">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-200 p-10  rounded-2xl">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                    {errors.email && <span className="text-red-500">This field is required</span>}

                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type={show ? 'text' : 'password'} placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                    <span className="absolute top-[52px] right-3" onClick={() => setShow(!show)}>
                        {show ?
                            <FaEye /> :
                            <FaEyeSlash />
                        }
                    </span>
                    {errors.password && <span className="text-red-500">This field is required</span>}
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control my-3">
                    <button className="btn bg-[#adf010]">Login</button>
                </div>
                <p>Do not Have An Account? <Link className="underline" to="/register">Register One</Link></p>
            </form>
            <div className="divider">Or</div>
            <div onClick={handleGoogle} className="flex items-center gap-3 btn text-xl my-2">
                <FaGoogle size={20} />
                <span>Google Login</span>
            </div>
            <div onClick={handleGithub} className="flex items-center gap-3 btn text-xl my-2">
                <FaGithub size={20} />
                <span>Github Login</span>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;