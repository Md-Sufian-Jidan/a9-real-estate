
const Card = ({data}) => {
    const {estate_title , image, location,segment_name
    } = data;
    console.log(data);
    return (
        <div>
            <div className="card card-compact w-96 h-[400px] bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{estate_title}</h2>
                    <p>{location}</p>
                    <p>{segment_name}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;