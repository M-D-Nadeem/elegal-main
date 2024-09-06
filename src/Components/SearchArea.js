import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchArea = () => {
  const [city, setCity] = useState("");

  const [cityList, setCityList] = useState([]);

  const [serviceProviderType, setServiceProviderType] = useState("");

  const navigate = useNavigate();

  const handleCityInput = (e) => {
    let searchQuery = e.charAt(0).toUpperCase() + e.slice(1);
    setCity(searchQuery);
    global.UserSearchLocation = searchQuery;
    console.log(city);
    let citySearchUrl = `https://geocode.maps.co/search?q=${searchQuery}&api_key=66d8b7272b345308597195fuha31bc3`;
    axios
      .get(citySearchUrl)
      .then((res) => {
        let cityData = res.data.slice(0, 10);
        let cityDataIndia = cityData.filter((cityItem) => {
          return cityItem.display_name.includes("India");
        });
        let cityListIndia = cityDataIndia.map((cityItem) =>
          cityItem.display_name.substring(0, cityItem.display_name.indexOf(","))
        );
        let cityListFiltered = cityListIndia.filter((listItem) => {
          return listItem.includes(e);
        });
        setCityList(cityListFiltered);
        console.log(cityListFiltered);
      })
      .catch((err) => {
        console.log(err);
        setCityList([]);
      });
  };

  useEffect(() => {
    const success = (pos) => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      let finalEndPoint = `https://geocode.maps.co/reverse?lat=${lat}&lon=${lon}&api_key=66d8b7272b345308597195fuha31bc3`;
      console.log(finalEndPoint);
       try{
      axios.get(finalEndPoint).then((res) => {
        setCity(res.data.address.city);
        global.UserSearchLocation = res.data.address.city;
        console.log(res.data);
      });
    }catch(err){
      console.log(err);
      
    }
    };

    const err = () => {
      console.log("Unable to retrieve location");
    };

    navigator.geolocation.getCurrentPosition(success, err);
  }, []);

  return (
    <div className="flex flex-col w-full max-w-screen-3xl mt-16 self-center  text-white items-center">
      <div className="flex w-full  lg:w-4/5 justify-center px-3 py-4 mt-8">
        <span className="text-3xl font-bold text-center lg:text-5xl">
          Finding legal solutions has never been easier
        </span>
      </div>
      <div className="flex w-full lg:w-3/5 h-auto mt-6 text-center">
        <span className="px-8 text-xl lg:text-2xl font-semibold">
          Find Lawyers, Law-firms, Notaries, Document writers and other{" "}
          <span className="text-lsp">legal service providers</span> near you!
        </span>
      </div>
      <div className="searchbox flex w-4/5 lg:w-3/5 text-black mt-8 md:h-40 rounded-xl bg-white px-8 py-6">
        <div className="content flex flex-col lg:flex-row w-full justify-evenly">
          <div className="w-full lg:w-1/3 h-32  flex flex-col">
            <label className="text-lg font-semibold" htmlFor="serviceInput">
              Select a service:
            </label>
            <div>
              <select
                id="serviceInput"
                type="text"
                className="w-full bg-slate-200 h-16 px-2 rounded-xl mt-2"
                placeholder="Select a service"
                onChange={(e) => setServiceProviderType(e.target.value)}
              >
                <option>Select a service</option>
                <option value="advocates">Advocates</option>
                <option value="arbitrators">Arbitrators</option>
                <option value="deed-writers">Deed Writer</option>
                <option value="law-firms">Law Firms</option>
                <option value="mediators">Mediators</option>
                <option value="notaries">Notaries</option>
                <option value="tax-consultants">Tax Consultants</option>
              </select>
            </div>
          </div>
          <div className="w-full lg:w-1/3 h-32  flex flex-col">
            <label className="text-lg font-semibold" htmlFor="cityInput">
              Location:
            </label>
            <div>
              <input
                id="cityInput"
                autoCapitalize="true"
                type="text"
                className="w-full bg-slate-200 h-16 px-2 rounded-xl mt-2"
                placeholder={`${city === "" ? "Fetching Location" : city} `}
                value={city}
                onChange={(e) => handleCityInput(e.target.value)}
              />
            </div>
            {cityList.length === 0 ? (
              ""
            ) : (
              <div className="bg-slate-300 text-black w-full relative z-50">
                {cityList.map((cityName) => {
                  return (
                    <div
                      className="hover:cursor-pointer hover:bg-slate-400 px-2 py-2 my-2 "
                      onClick={() => {
                        setCity(cityName);
                        global.UserSearchLocation = cityName;
                        setCityList([]);
                      }}
                    >
                      {cityName}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div
            className="w-40 lg:w-48 h-16 bg-navbar flex justify-center items-center self-center rounded-xl text-white text-xl lg:mt-5 hover:cursor-pointer hover:shadow-xl"
            onClick={() => navigate(`/${serviceProviderType}`)}
          >
            Find
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchArea;
