type Service = {
    id : number;  // Assuming each service has a unique ID
    title : string;
    description : string;
    category : string;
}

function ServiceCard({ service }: { service: Service }) {
    return ( 
        <div className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <small>{service.category}</small>
        </div>
     );
}

export default ServiceCard;