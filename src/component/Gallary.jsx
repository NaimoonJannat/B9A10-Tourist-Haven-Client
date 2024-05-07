const Gallary = () => {
    return (
        <div>
             <h2 className="text-4xl font-bold text-center my-8">Our Tourist&apos;s <span className="text-[#ed8d34]">Happy Memories</span></h2>
            <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
		<img src="https://i.ibb.co/rkqynXY/one.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/gRtfNWQ/two.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/NFBShPg/three.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/H2ZszLs/four.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/1XQcJ00/five.jpg" />
		
	</div>
</section>
        </div>
    );
};

export default Gallary;





