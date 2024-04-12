import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";


const Register = () => {
    // show password
    const [show, setShow] = useState(false);
    // create user 
    const { createUser } = useContext(AuthContext);
    
    //navigate to login page 
    // let navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        const {name , email ,photo ,password} = data;

        if(password.length < 6){
           return toast.error('your password should at least 6 character long');
        }
        if(!/[A-Z]/.test(password)){
            return toast.error('Your password should contain a Capital letter')
        }
        if(!/[a-z]/.test(password)){
            return toast.error('Your password should contain a lower letter')
        }
        createUser(email, password)
        .then((result)=> {
            console.log(result.user);
            //update user profile name and photo url
            updateProfile(result.user,{
                displayName: name, photoURL:photo
            })
            .then(() => console.log('profile updated'))
            .catch((error) => {
                console.log(error);
            })
            toast.success('User Created Successfully')
        //    return toast.success('user created successfully')
        })
        .catch((error) => {
            console.log(error.message);
            return toast.error('user all ready exists. please login')
        });
      }
    
    return (
        <div className="hero min-h-screen bg-purple-200" data-aos="zoom-in" data-aos-duration="1000">
            <div className="hero-content flex-col" data-aos="zoom-out" data-aos-delay="1500">
                <div className="text-center lg:text-left" data-aos="fade-right" data-aos-delay="2000">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-yellow-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body" data-aos="fade-down" data-aos-delay="2500">
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
            <ToastContainer />
        </div>
    );
};

export default Register;