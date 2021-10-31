import axios from "axios";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import useAuth from "../../hooks/useAuth";


function MyBooking() {
    const [myBookings, setMyBookings] = useState([])
    const {user} = useAuth()

    useEffect(()=>{
        axios(`https://protected-wave-34924.herokuapp.com/mybooking/${user.email}`)
        .then( res => setMyBookings(res.data))
    },[user])
    
    const deletHandler = id=>{
        const proceed = window.confirm("Are you sure, you want to cancel?");
        if(proceed){
            const url = `https://protected-wave-34924.herokuapp.com/booking/${id}`;
            axios.delete(url).then((res) => {
                if (res.data.deletedCount > 0) {
                swal("Processed !", "Booking canceled successfully", "success");
                const restOrders = myBookings.filter((booking) => booking._id !== id);
                setMyBookings(restOrders);
                }
            });
        }
    }
    return (
        <div className='container' style={{marginTop:"100px", marginBottom:'200px'}}>
            <h2 className='text-center text-custom'>All Your selected booking</h2>
            {
                myBookings.length === 0 ?
                <div className ='text-center mt-5'>
                    <h5 className='text-danger'>You didn't book any services yet</h5>
                </div>
            :
            <div className='row row-cols-lg-2 g-3 mt-4'>
            {
                myBookings.map(mybook =>(
                    <div>
                        <div className='d-flex p-2 shadow rounded-3 mx-lg-4 bg-custom mt-4'>
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
            }
        </div>
    )
}

export default MyBooking;
