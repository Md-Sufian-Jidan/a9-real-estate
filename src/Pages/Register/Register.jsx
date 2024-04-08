import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link ,useNavigate} from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
    // show password
    const [show, setShow] = useState(false);
    // create user 
    const { createUser } = useContext(AuthContext);
    //navigate to login page 
    let navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        const {name , email,photo,password} = data;
        createUser(email, password)
        .then((result)=> {
            console.log(result.user);
            // navigate ="/login"
            console.log(navigate)
        })
        .catch((error) => {
            console.log(error.message);
        });
      }
    
    return (
        <div className="hero min-h-screen bg-purple-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-yellow-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" {...register("name", { required: true })} />
                            {errors.name && <span className="text-red-500">This field is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" placeholder="Photo Url" className="input input-bordered" {...register("photo", { required: true })} />
                            {errors.photo && <span className="text-red-500">This field is required</span>}

                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={show ? 'text' : 'password'} placeholder="password" className="input input-bordered" {...register("password", { required: true })}/>
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
                        <div className="form-control mt-6">
                            <button className="btn bg-[#50fafa]">Register</button>
                        </div>
                        <p>All Ready Have An Account? <Link
                         className="underline" to="/login">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;