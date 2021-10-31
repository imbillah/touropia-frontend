import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
function Booking() {
    const[service, setService] = useState([])
    const {user} = useAuth();
    const { id } = useParams();
    const { register, handleSubmit, reset} = useForm();

    useEffect(()=>{
        axios(`http://localhost:7000/services/${id}`)
        .then(res => setService(res.data))
    },[])


    const onSubmit = data=>{
        data.status = 'Pending'
        data.image = `${service.image}`
        // posting to DB with axois
            axios.post("http://localhost:7000/booking", data)
            .then((res) => {
                if (res.data.insertedId) {
                alert('Service Added')
                }
        }).catch((err) => console.log(err));
        reset()
    }
    return (
        <div className='container text-center mt-5'>
            <div className='shadow custom-width mx-auto p-3'>
            <h1 className='text-custom fw-bold'>Finalize Booking</h1>
            <p className='text-custom fs-5 fst-italic'>Fill out the necessary fields to confirm booking</p>
            <form onSubmit={handleSubmit(onSubmit)} >
                    {service.name && <input readOnly={true} defaultValue={service.name} {...register("sevicename")} 
                    className="p-2 m-2 w-75" />}
                    <br />
                    {user.displayName && <input readOnly={true} defaultValue={user.displayName} {...register("name")} 
                    className="p-2 m-2 w-75" />}
                    <br />
                    {user.email && <input readOnly={true} defaultValue={user.email} {...register("email")} 
                    className="p-2 m-2 w-75"/>}
                    <br />
                    <input readOnly={true} defaultValue={new Date().toDateString()} {...register("date")} 
                    className="p-2 m-2 w-75" />
                    <br />
                    <textarea {...register("address")} className="p-2 m-2 w-75"
                    placeholder='Your address' required />
                    <br />
                    <input type='text' {...register("country")} className="p-2 m-2 w-75"
                    placeholder='Country' required />
                    <br />
                    <input type='text' {...register("number")} className="p-2 m-2 w-75"
                    placeholder='Phone number' required />
                    <br />
                    {service.price && <input readOnly={true} {...register("price")} defaultValue={`$${service.price}`}
                    className="p-2 m-2 w-75"/>}
                    <br />
                    <input type="submit" value='Confirm Booking' 
                    className='btn btn-warning mt-3 py-2 fw-bold rounded-pill'/>
            </form>
            </div> 
        </div>
    )
}

export default Booking;
