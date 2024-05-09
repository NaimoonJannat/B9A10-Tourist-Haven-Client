import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { MdDelete } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
const MyList = () => {
    const {user} = useContext(AuthContext);
    const spots = useLoaderData();

    const userList = spots.filter(spot =>spot.email === user.email)
    if(userList.length === 0){
        return <div className="min-h-screen text-center"><h2 className="text-3xl font-semibold">There Is Nothing To Show! Add A Spot <Link to="/addspot"><span className="text-[#3c97d0]">Here</span></Link></h2></div>
    }

    return (
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
	<h2 className="mb-4 text-2xl font-semibold leading-tight">Cart Items of <span className="text-[#3c97d0]">{user.displayName}</span></h2>
	<div className="overflow-x-auto">
		<table className="w-full text-base">
			
			<thead className="dark:bg-gray-300">
				<tr className="text-left">
					<th className="p-3">Spot Name</th>
					<th className="p-3">Country</th>
					<th className="p-3">Travel Time</th>
					<th className="p-3 text-right">Average Cost</th>
					<th className="p-3">Actions</th>
				</tr>
			</thead>
			<tbody>
				{
                    userList.map(spot => (
                        <tr key={spot._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
					<td className="p-3">
						<p>{spot.name}</p>
					</td>
					<td className="p-3">
						<p>{spot.country}</p>
					</td>
					<td className="p-3">
						<p>{spot.cost}</p>
					</td>
					<td className="p-3 text-right">
						<p>{spot.time}</p>
					</td>
					<td className="p-3 text-right">
						<div className="px-3 flex flex-col md:flex-row gap-2 py-1 font-semibold">
						<div className="btn btn-circle text-red-600 text-lg p-2"><MdDelete /></div>
						<div className="btn btn-circle text-black text-lg p-2"><MdOutlineEdit/></div>
                        
						</div>
					</td>
				</tr>
                    ))
                }
				
				
				
			</tbody>
		</table>
	</div>
</div>

    //     <div>
    //     <h2>Spots added by {user.displayName}:</h2>
    //     <table border="2">
    //         <thead>
    //             <tr>
    //                 <th>Name</th>
    //                 <th>Country</th>
    //                 <th>Average Cost</th>
    //                 <th>Travel Time</th>
    //                 <th>Actions</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //             {userList.map(spot => (
    //                 <tr key={spot._id}>
    //                     <td>{spot.name}</td>
    //                     <td>{spot.country}</td>
    //                     <td>{spot.cost}</td>
    //                     <td>{spot.time}</td>
    //                     <td></td>
    //                     {/* Add more table cells for additional information */}
    //                 </tr>
    //             ))}
    //         </tbody>
    //     </table>
    // </div>
    
);
};

export default MyList;