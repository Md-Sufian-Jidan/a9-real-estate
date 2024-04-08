import { Link } from "react-router-dom";

const Card = ({ data }) => {
    const { id ,estate_title, image, location, segment_name, facilities } = data;
    // console.log(data);
    return (
        <div>
            <div className="card card-compact h-[700px] w-96 bg-base-100 shadow-xl">
                <figure><img className="h-[50vh]" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{estate_title}</h2>
                    <p className="font-bold text-lg">{location}</p>
                    <p className="font-semibold">{segment_name}</p>
                    <p className="text-xl font-bold">Facilities :</p>
                    <ul className="grid grid-cols-2 gap-3 font-bold">
                        <li>{facilities[0]}</li>
                        <li>{facilities[1]}</li>
                        <li>{facilities[2]}</li>
                        <li>{facilities[3]}</li>
                    </ul>
                    <div className="card-actions justify-center my-3">
                        <Link to={`/card/${id}`} className="btn bg-[#3195e7]">Buy Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;