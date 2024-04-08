import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useParams } from "react-router-dom";

const CardDetails = () => {
    const { fakeData } = useContext(AuthContext);
    const { id } = useParams();
    const data = fakeData?.find((b) => b.id === id);
    // console.log(data);

    const { image, estate_title, location, segment_name, facilities, description, price, status, area } = data;
    return (
        <div className="mx-10 my-5">
             <div>
                <img className="rounded-2xl" src={image} alt="" />
            </div>
            <div className="space-y-1">
                <p >{estate_title}</p>
                <p>{description}</p>
                <p>Location : <span className="font-bold">{location}</span></p>
                <p>Segment Name : <span className="font-bold">{segment_name}</span></p>
                <p>Area : <span className="font-bold">{area}</span></p>
                <ul>
                    <li>{facilities[0]}</li>
                    <li>{facilities[1]}</li>
                    <li>{facilities[2]}</li>
                    <li>{facilities[3]}</li>
                </ul>
                <div className="flex justify-between">
                <p>Price : $ <span className="font-bold">{price}</span></p>
                <p>Status : <span className="font-bold">{status}</span></p>
                </div>
            </div> 
        </div>
    );
};

export default CardDetails;