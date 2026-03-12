import { useEffect, useState } from "react";
import { getServices } from "../services/serviceAPI";
import ServiceCard from "../components/ServiceCard";

function Services() {
    const [services, setServices] = useState([]);

    useEffect(()=> {
        getServices().then(setServices).catch(console.error);
    }, []);

    return ( 
        <div className="services">
            <h1>Our Services</h1>
            {services.map((service: any) => (
                <ServiceCard key={service.id} service={service} />
            ))}
        </div>
     );
    }

export default Services;