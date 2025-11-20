import React, { useEffect, useState } from "react";
import Service from "./Service";

const PopularSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1 className="text-5xl font-bold text-center my-8 my-20">
        Popular Pet Section
      </h1>

      <div className="px-[140px] grid grid-cols-3 gap-5">
        {services.slice(0,6).map((service) => (
          <Service service={service} key={service.serviceId}></Service>
        ))}
      </div>
    </div>
  );
};

export default PopularSection;
