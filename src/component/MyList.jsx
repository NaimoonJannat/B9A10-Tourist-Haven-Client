import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { MdDelete, MdOutlineEdit } from "react-icons/md";
import Swal from "sweetalert2";

const MyList = () => {
    const { user } = useContext(AuthContext);
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetchPlaces();
    }, []); 
    
    const fetchPlaces = () => {
        fetch('http://localhost:3000/spots')
            .then(res => res.json())
            .then(data => setPlaces(data))
            .catch(error => console.log("Error fetching spots:", error));
    };

    // handle delete button 
    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/spots/${_id}`, {
                    method: 'DELETE',
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Spot has been deleted.",
                            icon: "success"
                        });

                        // Fetch the updated spots data from the server
                        fetchPlaces();
                    }
                })
                .catch(error => console.log("Error deleting spot:", error));
            }
        });
    };

    const userList = places.filter(spot => spot.email === user.email);
    if (userList.length === 0) {
        return (
            <div className="min-h-screen text-center">
                <h2 className="text-3xl font-semibold">There Is Nothing To Show! Add A Spot <Link to="/addspot"><span className="text-[#3c97d0]">Here</span></Link></h2>
            </div>
        );
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
                        {userList.map(spot => (
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
                                        <button onClick={() => handleDelete(spot._id)} className="btn btn-circle text-red-600 text-lg p-2"><MdDelete /></button>
                                        <div className="btn btn-circle text-black text-lg p-2"><MdOutlineEdit/></div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;

