import React from "react";

const Service = ({ service }) => {
  const { serviceName, price, rating } = service;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{serviceName}</h2>
        <div className="flex justify-between">
          <p>price {price}</p>
          <p>rating {rating}</p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
