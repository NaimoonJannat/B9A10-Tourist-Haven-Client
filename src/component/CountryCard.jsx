

const CountryCard = ({country}) => {
	const {photo, name, description } = country;
    return (
		<div className="max-w-lg p-4 shadow-md border-4 border-[#3c97d0] bg-gray-900 text-gray-100">
		<div className="space-y-4">
			<div className="space-y-2 border-2 rounded-md border-[#3c97d0]">
				<img src={photo} alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
			</div>
			<div className="space-y-2">
				<a rel="noopener noreferrer" href="#" className="block">
					<h3 className="text-xl font-bold text-[#ed8d34]">{name}</h3>
				</a>
				<p className="leading-snug text-gray-400">{description}</p>
			</div>
		</div>
	</div>
    );
};

export default CountryCard;