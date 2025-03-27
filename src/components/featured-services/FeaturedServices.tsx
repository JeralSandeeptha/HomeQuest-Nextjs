'use client';
import React, { useEffect, useState } from "react";
import "./FeaturedServices.scss";
import Heading from "../heading_one/Heading";
import { IService } from "@/types/interfaces.types";
import getAllServices from "@/services/services-service/getAllServices/getAllServices";
import Service from "../service/Service";

const FeaturedServices = () => {
  const [services, setServices] = useState<IService[]>([]);
  const [filterServices, setFilterServices] = useState<IService[]>([]);

  const filteringServices = () => {
    const filteredServices = services.slice(0,3);
    setFilterServices(filteredServices);
    console.log(filterServices);
  }

  useEffect(() => {
    getAllServices({
        setServices: setServices
    });
  }, []);

  useEffect(() => {
    filteringServices();
}, [services]);

  return (
    <div className="featured-services">
      <div className="featured-services-inner">
        <div className="fs-upper">
          <Heading
            color="black"
            text="Your trusted real estate partner"
            type="h2"
          />
        </div>
        <div className="fs-lower">
            {
                filterServices.map((service: IService) => {
                    return (
                        <Service
                          __v={service.__v}
                          _id={service._id}
                          createdAt={service.createdAt}
                          service_description={service.service_description}
                          service_image={service.service_image}
                          service_name={service.service_name}
                          service_start_price={service.service_start_price}
                          updatedAt={service.updatedAt}
                          key={service._id}
                        />
                    )
                })
            }
        </div>
      </div>
    </div>
  );
  
};

export default FeaturedServices;
