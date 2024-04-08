import { Link } from "react-router-dom";

const Card = ({ data }) => {
    const { id ,estate_title, image, location, segment_name, facilities } = data;
    // console.log(data);
    return (
        <div>
            <div className="card card-compact w-96 h-[400px] bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
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
                    <div className="card-actions justify-end">
                        <Link to={`/card/${id}`} className="btn bg-[#a12fd6]">Buy Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;