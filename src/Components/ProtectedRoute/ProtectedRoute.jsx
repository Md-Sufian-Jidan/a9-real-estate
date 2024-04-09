// import PropTypes from 'prop-types';

import { useContext } from "react";
import { Navigate ,useLocation } from 'react-router-dom'
import { AuthContext } from "../../AuthProvider/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user , load} = useContext(AuthContext);
    let location = useLocation();
    console.log(location);

    if(load){
        return <span className="loading loading-bars loading-2xl flex justify-center items-center"></span>;
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

// PrivateRoute.propTypes = {
//     children: PropTypes.node.isRequired
// }
export default PrivateRoute;