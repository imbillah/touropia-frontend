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
    
    const deletHandler = id=>{
        const proceed = window.confirm("Are you sure, you want to cancel?");
        if(proceed){
            const url = `http://localhost:7000/booking/${id}`;
            axios.delete(url).then((res) => {
                if (res.data.deletedCount > 0) {
                alert('Delete Success')
                const restOrders = myBookings.filter((booking) => booking._id !== id);
                setMyBookings(restOrders);
                }
            });
        }
    }
    return (
        <div className='container custom-margin'>
            <h2 className='text-center text-custom'>Here is you all booking</h2>
            <div className='row row-cols-lg-2 g-3 mt-4'>
            {
                myBookings.map(mybook =>(
                    <div>
                        <div className='d-flex p-2 shadow rounded-3 mx-lg-4'>
                            <img src={mybook.image} className='w-25 me-3 rounded-3' alt="" />
                            <div>
                                <h4>{mybook.sevicename}</h4>
                                <h5>{mybook.date}</h5>
                                <h6>Status: {mybook.status}</h6>
                                <button className='btn btn-outline-danger mt-3' 
                                onClick={()=>deletHandler(mybook._id)}>Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default MyBooking;
