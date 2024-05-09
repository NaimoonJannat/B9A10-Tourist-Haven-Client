import { useLoaderData, useParams } from "react-router-dom";

const SpotDetails = () => {

    const spots = useLoaderData();
    const {id} = useParams();
    console.log(id, spots);
    const spot = spots.find((spot) => spot._id === id);
    
    return (
        <div className="card lg:p-8">
            <div className="w-full bg-[#1313130D] rounded-2xl  flex justify-center items-center">
                <img className="w-full" src={spot.photo} />
            </div>
            <div>
                <h2 className="text-4xl font-bold">{spot.name}</h2>
                <p className="text-[#131313CC] text-base">Posted By : {spot.username}</p>
                <div className="divider"></div>
                <p>Country: {spot.country}</p>
                <div className="divider"></div>
                <div>
                    <p className=" text-base">
                        <span className="text-black font-semibold">Description:</span>{" "}
                        {spot.description}
                    </p>
                </div>
                <div className="divider"></div>
                <div className="flex gap-4">
                    <div>
                        <p className="text-[#131313B2] text-base">Location: </p>
                        <p className="text-[#131313B2] text-base">Seasonality: </p>
                        <p className="text-[#131313B2] text-base">Average Cost: </p>
                        <p className="text-[#131313B2] text-base">Visitors per year: </p>
                    </div>
                    <div>
                        <p className="text-black font-bold">{spot.location}</p>
                        <p className="text-black font-bold">{spot.seasonality}</p>
                        <p className="text-black font-bold">£ {spot.cost}</p>
                        <p className="text-black font-bold">{spot.visitors}</p>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
};

export default SpotDetails;