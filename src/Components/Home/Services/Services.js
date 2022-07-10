import React from "react";
import Service from "./Service";
const Services = () => {
  const services = [
    {_id:1, name: 'Nationl id card currection', description:'NID currection Description', pic:`http://4.bp.blogspot.com/-C5zNejn4C4g/Vmx5z3zbnRI/AAAAAAAABeI/bOim-XjySlo/s1600/Page1.1.jpg`  },
    {_id:1, name: 'Online Mutation Application', description:'Mutation Description', pic:`https://mutation.land.gov.bd/land-portal-assets/images/online_info_img.png`  },
    {_id:1, name: 'Lamilation Remove', description:'Lamination desDescription', pic:`https://www.urogulf.com/new_ver/img/lamination-removal.jpg`  }
  ]
  return (
    <div className="my-16">
    <div className="my-16">
      <h3 className="text-3xl text-primary uppercase"> services</h3>
      <h2 className="text-5xl uppercase "> Services We Provide </h2>
    </div>
    <div className="grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 my-16" >
      {/* <Service/> */}
        {
          services.map( service => <Service
          key={service._id}
          service={service}
          > </Service>)
        } 
    </div>
  </div>
  );
};

export default Services;
