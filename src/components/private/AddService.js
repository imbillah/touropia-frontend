import axios from "axios";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
function AddService() {
    const { register, handleSubmit, reset} = useForm();
    const onSubmit = data => {
        // posting to DB with axois
        axios.post("http://localhost:7000/services", data)
        .then((res) => {
            if (res.data.insertedId) {
            swal("Processed!", "Service added successfully", "success");
            }
    }).catch((err) => console.log(err));
    reset()
};
    return (
        <div className='container text-center custom-margin' style={{marginTop:'100px'}}>
            <div className='custom-width mx-auto custom-bg p-4 rounded-3 shadow'>
                <h2 className='mb-5 text-custom'>Add a new service to the site</h2>
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
                    <input type="submit" value='Add Service' 
                    className='btn btn-warning mt-5 fw-bold py-2 text-custom' />
                </form> 
            </div>
            
        </div>
    )
}

export default AddService;
