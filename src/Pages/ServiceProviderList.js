import ServiceProviderCard from "../Components/ServiceProviderCard";
import SearchAreaLocal from "../Components/SearchAreaLocal";
import { useEffect } from "react";

const ServiceProviderList = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex justify-center mt-20">
      <div className=" flex flex-col w-full max-w-screen-2xl items-center">
        <SearchAreaLocal
          searchName={props.searchName}
          searchLocation={props.searchLocation}
        />
        <div className="cards lg:w-2/3 mt-12 flex flex-col space-y-6">
          {props.list.map((listItem) => {
            return (
              <ServiceProviderCard
                key={listItem.id}
                imgUrl={listItem.imgUrl}
                name={listItem.name}
                exp={listItem.exp}
                specialise={listItem.specialise}
                fees={listItem.fees}
                providerType={props.providerType}
                id={listItem.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceProviderList;
