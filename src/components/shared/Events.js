import axios from "axios"
import { useEffect, useState } from "react"

function Events() {
    const[events, setEvents] = useState([])

    useEffect(()=>{
        axios('/data/events.json')
        .then(res=> setEvents(res.data))
    },[])
    return (
        <div className='container custom-margin' style={{marginTop:'100px'}}>
            <p className='mt-5 fw-bold text-custom text-center'>Check Our Best Promotional Tour</p>
            <h1 className='mb-4 fw-bold text-custom text-center'>Upcoming Events</h1>
            <div className ='row row-cols-lg-3 g-4 mt-5'>
                {
                    events.map(event =>(
                        <article key={event.id}>
                            <div className="card h-100 shadow rounded-3 text-muted bg-custom" >
                                <img src={event.img} className="card-img-top h-75"  alt=""/>
                                <div className="card-body">
                                <h2 className="card-title my-3 ">{event.tittle}</h2>
                                <h5 className="card-title my-3 ">${event.Price}</h5>
                                <h6>{event.time}</h6>
                                <h6>{event.days} Days</h6>
                                </div>
                            </div>
                        </article>
                      ))
                }
            </div>
        </div>
    )
}

export default Events
