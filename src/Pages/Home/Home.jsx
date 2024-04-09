import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Card from "../../Components/Card/Card";
import Banner from "../../Components/Banner/Banner";

const Home = () => {
    const {fakeData, load} = useContext(AuthContext);
    if(load){
        return <span className="loading loading-bars loading-lg"></span>;
    }
    // console.log(fakeData);
    return (
        <div>
            <Banner />
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto md:w-full w-1/2 gap-5 my-5">
                {
                fakeData?.map(data => <Card data={data} key={data.id}></Card>)
            }
            </div>
        </div>
    );
};

export default Home;