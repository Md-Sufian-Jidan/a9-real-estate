import { NavLink,useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const errorPage = useRouteError();
    // console.error(error)
    const {data, status , error, statusText} = errorPage;
    const {message } = error || {};
    return (
        <div className="text-center my-10">
            <img src="https://i.ibb.co/4JzxbFw/2704133.jpg" alt="" />
            <h2 className="text-3xl font-bold">{statusText}</h2>
            <h2 className="text-2xl font-semibold my-5">{data}</h2>
            <h2 className="text-3xl font-semibold">{status}</h2>
            <p className="my-5">{message}</p>
            <NavLink to={'/'}> <button className="btn bg-[#adf999]">Go Back to Home</button> </NavLink>
        </div>
    );
};

export default ErrorPage;