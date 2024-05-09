import { FaEuroSign } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { IoTimerOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const SpotCard = ({spot}) => {

    const {name, _id, country, visitors, cost, time, seasonality, photo} = spot;
    return (
        <div className="flex flex-col max-w-lg p-6 space-y-6 border-2 border-[#ed8d34] overflow-hidden rounded-lg shadow-xl dark:bg-gray-50 dark:text-gray-800">
	
	<div>
		<img src={photo} alt="" className="object-cover w-full mb-4 h-50 sm:h-96 dark:bg-gray-500" />
		<h2 className="mb-1 text-2xl font-bold">{name}</h2>
        <div className="mb-2">
        <p><b>Country: </b>{country}</p>
        <p><b>Seasonality: </b> {seasonality}</p>
        </div>
        {/* icons  */}
		<div className="flex justify-around">
            <div className="flex text-lg font-bold justify-center items-center">
            <FaEuroSign className="text-[#ed8d34]" />
            <h2>{cost}</h2>
            </div>
            <div className="flex text-lg font-bold justify-center items-center">
            <IoIosPeople className="text-[#ed8d34]" />
            <h2>{visitors}</h2>
            </div>
            <div className="flex text-lg font-bold justify-center items-center">
            <IoTimerOutline className="text-[#ed8d34]" />
            <h2>{time}</h2>
            </div>
        </div>
        <Link to={`/spot/${_id}`}><button className="btn w-full bg-[#3c97d0] mt-8">View Details <FaArrowRight /></button></Link>
	</div>
	
</div>
    );
};

export default SpotCard;