import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Blog from "./Blog";
import Gallary from "./Gallary";
import Review from "./Review";
import SpotCard from "./SpotCard";
import CountryCard from "./CountryCard";

const Home = () => {
  // const navigate = useNavigate();
  const combinedData = useLoaderData(); 
    const { spots, countries } = combinedData;

    // const handleCountryCardClick = (countryName) => {
    //   console.log(`Navigating to: /all-spots?country=${encodeURIComponent(countryName)}`);
    //   navigate(`/allspots?country=${encodeURIComponent(countryName)}`);
    // };

    return (
        <div>
          <Banner></Banner> 
          {/* Spot cards section  */}
          <div className="text-center">
          <h2 className="text-4xl font-bold text-center my-8"><span className="text-[#3c97d0]">Favourite</span> Tourist Spots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            spots.slice(0, 6).map(spot =><SpotCard
            key={spot._id}
            spot={spot}
            >
                
            </SpotCard>)
        }
        </div>
          </div>
          <Blog></Blog>
          {/* Countries section  */}
          <div className="text-center">
          <h2 className="text-4xl font-bold text-center my-8"><span className="text-[#3c97d0]">Countries</span> To Visit</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            countries.map(country =><CountryCard
            key={country._id}
            country={country}
            // onClick={() => handleCountryCardClick(country.name)}
            >
            </CountryCard>)
        }
        </div>
          </div>
          
          <Gallary></Gallary>
          <Review></Review>
          
        </div>
    );
};

export default Home;