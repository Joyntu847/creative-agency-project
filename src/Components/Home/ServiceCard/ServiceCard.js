import React from 'react';
import './ServiceCard.css'
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';
import service1 from '../../../images/icons/service1.png';
const ServiceCard = ({service}) => {
    return (
        <div className='col-md-4'>
                <Link to={`/serviceOrder/${service.title}`} className='orderService'>
                    <Card className='text-center cardContent' style={{padding:'20px' , border: 'none'}}>
                        <Card.Img style={{width:'74px', height : '74px', margin: 'auto' }}
                         variant="top" src={service1} />
                        <Card.Body>
                            <Card.Title>{service.title}</Card.Title>
                            <Card.Text>
                            {service.designation}.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
            </div>
    );
};

export default ServiceCard;