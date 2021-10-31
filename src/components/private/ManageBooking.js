import axios from "axios"
import { useEffect, useState } from "react"
import swal from "sweetalert"


function ManageBooking() {
    const [bookings, setBookings] = useState([])
    useEffect(()=>{
        axios('https://protected-wave-34924.herokuapp.com/booking')
        .then(res => setBookings(res.data))
    },[])
    
    const deleteHandler = id =>{
        const proceed = window.confirm("Are you sure, you want to delete?");
        if(proceed){
            const url = `https://protected-wave-34924.herokuapp.com/booking/${id}`;
            axios.delete(url).then((res) => {
                if (res.data.deletedCount > 0) {
                swal("Processed !", "Booking deleted successfully", "success");
                const restServices = bookings.filter((booking) => booking._id !== id);
                setBookings(restServices);
                }
            });
        }
    }
    return (
        <div className=' text-center container mt-5' style={{marginBottom:'200px'}}>
            <h2 className='text-custom mb-4 fw-bold'>Manage all users booking</h2>
            <table className='table table-dark table-striped'>
                <thead>
                    <tr>
                    <th scope="col">SL</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Service Name</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                {
                bookings.map((booking, index) =>(
                <tbody>
                    <tr>
                        <th scope="row">{index}</th>
                        <td>{booking.name}</td>
                        <td>{booking.sevicename}</td>
                        <td>{booking.status}</td>
                        <td><button onClick={()=> deleteHandler(booking._id)} 
                        className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                </tbody>
                ))
            }
            </table>
        </div>
    )
}

export default ManageBooking;
