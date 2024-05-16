import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const AddSpot = () => {
    const { user } = useContext(AuthContext);
    const handleAddSpot = event =>{
        event.preventDefault();
        const form = event.target;
        const name=form.name.value;
        const country=form.country.value;
        const location=form.location.value;
        const cost=form.cost.value;
        const seasonality=form.seasonality.value;
        const time=form.time.value;
        const visitors=form.visitors.value;
        const description=form.description.value;
        const photo=form.photo.value;
        const username=form.username.value;
        const email=form.email.value;


        const newSpot = {name, email, country, username, description, visitors, location, cost, time, seasonality, photo}
        console.log(newSpot);

        // send data to the server 
        fetch('https://b9a10-tourist-haven-server.vercel.app/spots',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newSpot)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            Swal.fire({
                    title: "Success!",
                    text: "Spot Added Successfully",
                    icon: "success",
                    confirmButtonText: 'Ok'
                  });
                  form.reset();
            
        })
    }
    // Define country options
    const countryOptions = ["France", "Italy", "Spain", "England", "Netherlands", "Switzerland"];

    return (
        <div className="p-6 text-centre bg-[#2da7f372] dark:bg-gray-100 dark:text-gray-900">
            <div className="w-11/12 mx-auto">
            <div className="space-y-2 ">
				<p className="font-bold text-2xl">Add A Spot</p>
				<p className="text-xs">Our Users can Add Spot Cards here with valid information. Please fill up the form to add the spot.</p>
			</div>
	<form onSubmit={handleAddSpot} className="container flex flex-col mx-auto space-y-12">
		<fieldset className=" grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
                    {/* first row */}
					<label className="text-base">Spot name</label>
					<input type="text" name="name" required placeholder="Spot Name" className="w-full p-3 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label className="text-base">Country</label>
                    <select name="country" required className="w-full p-3 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300">
                                    {countryOptions.map((country) => (
                                        <option key={country} value={country}>
                                            {country}
                                        </option>
                                    ))}
                                </select>
				</div>
                {/* second row  */}
				<div className="col-span-full sm:col-span-3">
					<label className="text-base">Location</label>
					<input type="text" required name="location" placeholder="Location" className="w-full p-3 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label className="text-base">Seasonality</label>
					<input type="text" required name="seasonality" placeholder="Seasonality" className="w-full p-3 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
  {/* third row  */}
				<div className="col-span-full sm:col-span-2">
					<label className="text-base">Average Cost</label>
					<input type="number" required name="cost" placeholder="Average Cost" className="w-full p-3 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label className="text-base">Travel Time</label>
					<input type="text" required name="time" placeholder="Travel Time" className="w-full p-3 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label className="text-base">Visitors Per Year</label>
					<input type="number" required name="visitors" placeholder="Visitors Per Year" className="w-full p-3 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
                {/* fourth row  */}
                <div className="col-span-full">
					<label className="text-base">Description</label>
					<input type="text" required name="description" placeholder="Description" className="w-full p-3 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"></input>
				</div>
                {/* fifth row  */}
                <div className="col-span-full">
					<label className="text-base">Photo URL</label>
					<input type="text" required name="photo" placeholder="Photo URL" className="w-full p-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"></input>
				</div>
                {/* sixth row  */}
                <div className="col-span-full sm:col-span-3">
					<label className="text-base">Username</label>
					<input type="text" required name="username" disabled value={user.displayName} placeholder="Username" className="w-full p-3 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
                <div className="col-span-full sm:col-span-3">
					<label className="text-base">Email</label>
					<input type="email" required name="email" disabled value={user.email} placeholder="Email" className="w-full p-3 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
                <div className="col-span-full">
<input type="submit" className="btn w-full bg-[#ed8d34] mt-8" value="Add"></input>
</div>
			</div>
		</fieldset>
		
	</form>
            </div>
</div>
    );
};

export default AddSpot;