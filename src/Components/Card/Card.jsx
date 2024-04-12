import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import PropTypes from 'prop-types';


const Card = ({ data }) => {
    const {load} = useContext(AuthContext);
    if(load){
        return <span className="loading loading-bars loading-lg"></span>;
    }
    const { id ,estate_title, image, location, segment_name, facilities } = data || {};
    // console.log(data);
    return (
        <div>
            <div className="card card-compact h-[650px] w-96 bg-base-100 shadow-xl">
                <figure><img className="h-[70vh]" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{estate_title}</h2>
                    <p className="font-bold text-lg">Location : {location}</p>
                    <p className="font-bold">Segment Name : {segment_name}</p>
                    <p className="text-xl font-bold">Facilities :</p>
                    <ul className="grid grid-cols-2 gap-3 font-bold">
                        {
                            facilities?.map((fac, idx) => <li key={idx}>{idx+1}) {fac}</li>)
                        }
                    </ul>
                    <div className="card-actions justify-center my-3">
                        <Link to={`/card/${id}`} className="btn bg-[#c7bb19]">View Property</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    data: PropTypes.object.isRequired
}
export default Card;