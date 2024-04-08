import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useParams } from "react-router-dom";

const CardDetails = () => {
    const { fakeData } = useContext(AuthContext);
    console.log(fakeData);
    const { id } = useParams();
    const idInt = parseInt(id);
    const data = fakeData?.find((b) => b.id === idInt);
    console.log(data);



    // const { image, estate_title, location, segment_name, facilities, description, price, status, area } = data;
    return (
        <div className="flex ">
            {/* <div>
                <img src={image} alt="" />
            </div>
            <div>
                <p>{estate_title}</p>
                <p>{description}</p>
                <p>{location}</p>
                <p>{location}</p>
                <p>{segment_name}</p>
                <p>{price}</p>
                <p>{status}</p>
                <p>{area}</p>
            </div> */}
            <h2>hello</h2>
        </div>
    );
};

export default CardDetails;