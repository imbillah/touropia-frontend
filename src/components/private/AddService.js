import axios from "axios";
import { useForm } from "react-hook-form";
function AddService() {
    const { register, handleSubmit, reset} = useForm();
    const onSubmit = data => {
        // posting to DB with axois
        axios.post("http://localhost:7000/services", data)
        .then((res) => {
            if (res.data.insertedId) {
            alert('Service Added')
            }
    }).catch((err) => console.log(err));
    reset()
};
    return (
        <div className='container text-center'>
            <div className='custom-width  mx-auto'>
                <h2>Add a new service to the site</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input  {...register("name")}  className="p-2 m-2 w-75"
                    placeholder='Service name' required />
                    <br />
                    <textarea {...register("description")} className="p-2 m-2 w-75"
                    placeholder='Service description' required />
                    <br />
                    <input {...register("image")} className="p-2 m-2 w-75"
                    placeholder='Image url' required />
                    <br />
                    <input type='number' {...register("price")} className="p-2 m-2 w-75"
                    placeholder='Service cost' required />
                    <br />
                    <input type="submit" className='btn bg-custom' />
                </form> 
            </div>
            
        </div>
    )
}

export default AddService;
