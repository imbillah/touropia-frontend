import { useHistory } from "react-router";
import swal from "sweetalert";
import image from "../../media/images/contact.jpg"
function ContactUs() {

    const history = useHistory();
    const submitHandler=e=>{
        e.preventDefault()
        swal("Thank You", "We will contact with you soon", "success")
        history.push('/')
    }
    return (
        <div className='custom-margin'>
            <div className='container d-lg-flex my-3'>
            <div className='custom-width mt-5'>
            <h1 className='mt-4 fw-bold text-custom'>Contact Us</h1>
            <p className='fst-italic mt-4 text-custom'>Fill out the form and we will get back to you soon</p>
            <form>
            <input type="text" className="form-control " placeholder="First Name" required/>
            <input type="text" className="form-control my-3" placeholder="Last Name"/>
            <input type="email" className="form-control" placeholder="Email" required/>
            <div className="input-group  my-3">
                <span className="input-group-text text-muted">Your Message</span>
                <textarea className="form-control" aria-label="With textarea" required></textarea>
                </div>
            <button className='btn btn-warning' onClick={submitHandler}>Submit</button>
            </form>
            
        </div>
            <div className='custom-width'>
            <img src={image} className='img-fluid ms-3 rounded-3' alt="contactus" />
            </div>
    </div>
        </div>
    )
}

export default ContactUs
