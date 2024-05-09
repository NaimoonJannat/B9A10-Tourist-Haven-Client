import { useLoaderData } from "react-router-dom";
import SpotCard from "./SpotCard";

const AllSpots = () => {

    const spots = useLoaderData();

    return (
        <div className="text-center">
            <h2 className="text-3xl font-bold">All Spots: {spots.length}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            spots.map(spot =><SpotCard
            key={spot._id}
            spot={spot}
            >
                
            </SpotCard>)
        }
        </div>
        </div>
    );
};

export default AllSpots;