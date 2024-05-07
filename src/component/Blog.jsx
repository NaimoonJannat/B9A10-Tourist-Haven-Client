import { Fade } from "react-awesome-reveal";

const Blog = () => {
    return (
        <section className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
            <h2 className="text-4xl font-bold text-center my-8">Our Tourist&apos;s <span className="text-[#3c97d0]">Experiences</span></h2>
	<div className="container mx-auto space-y-12">
		<Fade cascade>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://i.ibb.co/8gzphZv/louvre-musium-blog.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
				
				<h3 className="text-3xl font-bold">The Louvre Museum</h3>
                <span className="text-xs uppercase dark:text-gray-600">-The Editors of Encyclopedia Britannica</span>
				<p className="my-6 dark:text-gray-600">In 1546 Francis I, who was a great art collector, had this old castle razed and began to build on its site another royal residence, the Louvre, which was added to by almost every subsequent French monarch. Under Francis I, only a small portion of the present Louvre was completed, under the architect Pierre Lescot. This original section is today the southwestern part of the Cour Carrée. In the 17th century, major additions were made to the building complex by Louis XIII and Louis XIV. <a className="text-blue-500" href="https://www.britannica.com/topic/Louvre-Museum">Read More...</a></p>
				
			</div>
		</div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
			<img src="https://i.ibb.co/rcFPsxd/tower-of-london-blog.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
				<h3 className="text-3xl font-bold">The Tower of London</h3>
                <span className="text-xs uppercase dark:text-gray-600">- Metro Girl</span>
				<p className="my-6 dark:text-gray-600">The Tower of London is one of the capital&apos;s most iconic sights. It&apos;s been standing on the fringes of the City, looming over the River Thames, for over 1,000 years. With such an amazing heritage, the layers of history within the Tower walls can be overwhelming for a visitor. I previously visited the Tower of London as a teenager and didn&apos;t really absorb the stories of the complex as I knew I would as an adult. Over the Easter Weekend, I paid a long-awaited return to the Tower on a semi-private tour with Context Travel. <a className="text-blue-500" href="https://memoirsofametrogirl.com/tag/tower-of-london/">Read More...</a></p>
				
			</div>
		</div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://i.ibb.co/dbdVTbM/Stonehenge.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
				<h3 className="text-3xl font-bold">The World of Stonehenge</h3>
                <span className="text-xs uppercase dark:text-gray-600">- Mike Pitts, Archaeologist and journalist</span>
				<p className="my-6 dark:text-gray-600">We get a glimpse of The world of Stonehenge at the British Museum exhibition, a fabulous opportunity to think about the people who created this globally famous monument. We can wander through the gallery, surrounded by treasures and everyday objects of the time from across northern Europe, and feel how different things were from our own times. Knowing the exhibition was coming, I decided I should finally write the book I&apos;d been telling myself I should for nearly 40 years – ever since my first excavation at Stonehenge, and the discovery that there were so many untold stories. But what to say? <a className="text-blue-500" href="https://www.britishmuseum.org/blog/how-was-stonehenge-built">Read More...</a></p>
				
			</div>
		</div>
        </Fade>
		
		
	</div>
</section>
    );
};

export default Blog;