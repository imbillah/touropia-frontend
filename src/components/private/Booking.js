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
        <div className='container text-center'>
            <h2>please prcess to booking</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                    {service.name && <input readOnly={true} defaultValue={service.name} {...register("sevicename")} 
                    className="p-2 m-2 w-75" />}
                    <br />
                    {user.displayName && <input readOnly={true} defaultValue={user.displayName} {...register("name")} 
                    className="p-2 m-2 w-75" />}
                    <br />
                    {user.email && <input readOnly={true} defaultValue={user.email} {...register("email")} 
                    className="p-2 m-2 w-75"/>}
                    <br />
                    <textarea {...register("address")} className="p-2 m-2 w-75"
                    placeholder='Your address' required />
                    <br />
                    <input type='text' {...register("number")} className="p-2 m-2 w-75"
                    placeholder='Your number' required />
                    <br />
                    {service.price && <input readOnly={true} {...register("price")} defaultValue={`$${service.price}`}
                    className="p-2 m-2 w-75"/>}
                    <br />
                    <input type="submit" className='btn bg-custom' />
            </form> 
        </div>
    )
}

export default Booking;
