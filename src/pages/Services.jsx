import React, { useEffect, useState } from "react";
import Service from "../components/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => console.log(error));
  }, []);
  
  return (
    <div>
      <div className="px-[140px] grid grid-cols-3 gap-5 my-10">
        {services.map((service) => (
          <Service service={service} key={service.serviceId}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
