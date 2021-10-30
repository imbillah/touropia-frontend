import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";


function MyBooking() {
    const [myBookings, setMyBookings] = useState([])
    const {user} = useAuth()

    useEffect(()=>{
        axios(`http://localhost:7000/mybooking/${user.email}`)
        .then( res => setMyBookings(res.data))
    },[user])
    console.log(myBookings);
    return (
        <div className='text-center'>
            <h2>Here is you all booking</h2>
            {
                myBookings.map(mybook =>(
                    <p>Name: {mybook.sevicename}</p>
                ))
            }
        </div>
    )
}

export default MyBooking;
