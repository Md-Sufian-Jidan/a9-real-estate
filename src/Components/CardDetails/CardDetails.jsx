import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useParams } from "react-router-dom";
import BannerText from "../Banner/BannerText";

const CardDetails = () => {
    const { fakeData,load } = useContext(AuthContext);
    const { id } = useParams();
    const data = fakeData?.find((b) => b.id === id);
    // console.log(data);
    if(load){
        return <span className="loading loading-bars flex justify-center items-center"></span>;
    }

    const {image, estate_title, location, segment_name, facilities, description, price, status, area } = data || {};
    return (
       <div>
        <BannerText />
         <div className="mx-10 my-5">
             <div>
                <img className="rounded-2xl" src={image} alt="property image" />
            </div>
            <div className="space-y-2">
                <p className="text-center mt-2 font-bold text-2xl">{estate_title}</p>
                <p>{description}</p>
                <div className="space-y-2 font-semibold">
                <p>Location : <span>{location}</span></p>
                <p>Segment Name : <span>{segment_name}</span></p>
                <p>Area : <span>{area}</span></p>
                </div>
                <p className="text-xl font-bold ">Facilities :</p>
                <ul >
                    {facilities?.map((fac ,idx) => <li key={idx}>{idx + 1}){ fac}</li>)}
                </ul>
                <div className="font-semibold">
                <p>Price : $ <span>{price}</span></p>
                <p>Status : <span>{status}</span></p>
                </div>
            </div> 
        </div>
       </div>
    );
};

export default CardDetails;