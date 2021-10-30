import axios from "axios"
import { useEffect, useState } from "react"


function ManageBooking() {
    const [bookings, setBookings] = useState([])

    useEffect(()=>{
        axios('https://protected-wave-34924.herokuapp.com/booking')
        .then(res => setBookings(res.data))
    },[])
    return (
        <div className='text-center'>
            <h2>Manage user booking</h2>
            {
                bookings.map(booking =>(
                    <div>
                        <h3>{booking.servicename}</h3>
                        <p>Name: {booking.name}</p>
                        <p>Email : {booking.email}</p>
                        <button>Remove</button>
                    </div>
                ))
            }

        </div>
    )
}

export default ManageBooking;
