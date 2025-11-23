import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ServiceDetails = () => {
  const { id } = useParams();

  const [services, setServices] = useState([]);
  const [service, setService] = useState({});

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (services.length > 0) {
      const item = services.find((ser) => ser.serviceId == id);
      setService(item);
    }
  }, [id, services]);
  

  return (
    <div className="my-6 text-center">
      <h3 className="text-4xl font-bold">serviceId: {service?.serviceId}</h3>
      <h3 className="text-xl">serviceName: {service?.serviceName}</h3>
    </div>
  );
};

export default ServiceDetails;
