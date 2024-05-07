
import { Typewriter } from 'react-simple-typewriter';

const BannerTwo = () => {
  // Define the tourist spots data
  const touristSpots = [
    { id: 'slide1', title: 'Eiffel Tower', country: 'France', image: 'https://i.ibb.co/ZfCcNwL/eiffel-tower.jpg' },
    { id: 'slide2', title: 'Louvre Museum', country: 'France', image: 'https://i.ibb.co/TMB2SQB/louvre-musium.jpg' },
    { id: 'slide3', title: 'Sagrada Familia', country: 'Spain', image: 'https://i.ibb.co/kx7Gvvk/sagrada.jpg' },
    { id: 'slide4', title: 'Venice Canals', country: 'Italy', image: 'https://i.ibb.co/mJnFWBF/venice-canals.jpg' }
  ];

  return (
    <div className="carousel w-full">
      {touristSpots.map((spot, index) => (
        <div key={index} id={spot.id} className="carousel-item relative w-full">
          <img src={spot.image} className="w-full h-2/3" alt={spot.title} />
          <div className="absolute flex transform -translate-y-1/2 left-1/2 top-2/3">
            <a href={`#${touristSpots[(index - 1 + touristSpots.length) % touristSpots.length].id}`} className="btn btn-circle">❮</a> 
            <a href={`#${touristSpots[(index + 1) % touristSpots.length].id}`} className="btn btn-circle">❯</a>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <h2 className="text-black">
              Explore Us -{' '}
              <Typewriter words={[spot.title, spot.country]} loop={true} />
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BannerTwo;
