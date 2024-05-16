import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SpotCard from "./SpotCard";

const AllSpots = () => {
    const spotsData = useLoaderData();
    const [sortedSpots, setSortedSpots] = useState([]);
    const [sortDescending, setSortDescending] = useState(true);

    // Function to sort spots based on cost
    const sortSpotsByCost = () => {
        const sorted = [...spotsData].sort((a, b) => {
            return sortDescending ? b.cost - a.cost : a.cost - b.cost;
        });
        setSortedSpots(sorted);
    };

    // Function to handle dropdown change
    const handleSortChange = (e) => {
        const value = e.target.value;
        if (value === "cost") {
            sortSpotsByCost();
        }
    };

    // Determine which array to use for rendering
    const spotsToRender = sortedSpots.length > 0 ? sortedSpots : spotsData;

    return (
        <div className="text-center">
            <div className="flex justify-end mb-4">
                <select id="sortDropdown" onChange={handleSortChange} className="p-3 bg-[#3c97d0] rounded-md text-white">
                    <option value="">Sort by</option>
                    <option value="cost">Average Cost</option>
                </select>
            </div>
            <h2 className="text-3xl font-bold">All Spots: {spotsToRender.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {spotsToRender.map(spot => (
                    <SpotCard key={spot._id} spot={spot} />
                ))}
            </div>
        </div>
    );
};

export default AllSpots;
