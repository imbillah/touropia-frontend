
import { Link } from 'react-router-dom'

function Vision() {
    return (
        <div className="container d-lg-flex my-5">
            <div className="custom-width mt-4 ">
            <iframe width="560" height="365" src="https://www.youtube.com/embed/QKyqT-MM_ek" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="custom-width mt-3">
            <p className="fw-bold ms-1 mt-2 text-custom">
                Our Vision
            </p>
            <h1 className='text-custom fw-bold'>Get ready for real <br /> time adventure</h1>
            <p className='mt-3 lh-lg'>“Our vission is to provide travel services of International standards within the reach of every individual. We are committed to the achievement and maintenance of excellence in travel, tourism and research for the benefit of your life. Let’s start your journey with us, your dream will come true.”</p>
            <Link to ='/contact'>
                <button className="btn btn-warning mt-4 py-2 px-4 rounded-pill fw-bold">Contact Us</button>
            </Link>
            </div>
      </div>
    )
}

export default Vision
