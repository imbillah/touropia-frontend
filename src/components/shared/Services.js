import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Services() {
    const [services, setServices] = useState([])
    useEffect(()=>{
        axios('https://protected-wave-34924.herokuapp.com/services')
        .then(res => setServices(res.data))
    },[])
    return (
        <div className='container text-center custom-margin' style={{marginTop:'100px'}}>
        <h1 className='my-5 fw-bold text-custom'>Travel services we are offering</h1>
        {
          services.length === 0 ?
            <div className ='container text-center'>
                <div class="spinner-border text-warning" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        :
        <div className='row row-cols-lg-3 g-3'>
          {
            services.map(service => (
              <article key={service._id}>
                  <div className="card h-100 shadow rounded-3 bg-custom" >
                <img src={service.image} className="card-img-top" alt="service-img"/>
                <div className="card-body">
                <h2 className="card-title my-3 text-custom">{service.name}</h2>
                <p className="card-text mb-3">{service.description}</p>
                <p className='fw-bold'>Booking start from : ${service.price}</p>
                <Link to={`/booking/${service._id}`} className='text-decoration-none fw-bold'>
                  <button className ='btn btn-warning fw-bold text-custom'>Book Now</button>
                </Link>
                </div>
              </div>
              </article>
            ))
          }
        </div>
        }
      </div>
    )
}

export default Services;
