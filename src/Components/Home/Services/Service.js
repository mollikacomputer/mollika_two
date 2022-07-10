import React from "react";

const Service = ({service}) => {
  return (
    <>
      <div class="card w-96 lg:max-w-lg bg-base-100 shadow-xl my-16">
        <figure>
          <img src={service.pic} alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title"> {service.name} </h2>
          <p> {service.description} </p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
