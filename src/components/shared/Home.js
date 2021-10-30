import { Link } from 'react-router-dom';
import image from '../../media/images/header.png'
import Services from './Services';
function Home() {
    return (
        <>
          <div className="container d-lg-flex">
          <div className="mt-5 custom-width">
            <p className="text-custom">10 YEARS OF CUSTOMER SATISFACTION</p>
            <h1 className="fw-bold display-5 mt-2 text-custom">
              Travel More To <br />Discover Yourself
            </h1>
            <p className='mt-3 lh-lg'>Air seed winged lights saw kind whales in sixth dont seas dron image so fish all tree meat dont there is seed winged lights saw kind whales in sixth dont seas dron image so fish all tree meat dont there</p>
            <Link to ='/about'>
              <button className="btn bg-warning mt-4 py-2 px-4 rounded-pill fw-bold">ABOUT US</button>
            </Link>
          </div>
          <div className="ms-3 custom-width">
            <img src={image} className='img-fluid mt-5' alt="" />
          </div>
        </div>
        <Services/>
      </>
    )
}

export default Home
