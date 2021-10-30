
function Footer() {
    return (
        <footer className='mt-auto bg-custom'>
      <div className='container py-3 mt-5' >
      <div className='row  row-cols-lg-3'>
        <div>
           <h4 className='mb-3'>Medi<span className='text-success'>Care</span></h4>
           <p>Better Healthcare | Better Life</p>
           <i className="bi bi-geo-alt-fill text-success"> 17004 W Marshall Ln</i>
           <br />
            <i className="bi bi-telephone-fill text-success"> +1-614-368-7964</i>
            <br />
            <i className="bi bi-envelope-fill text-success"> contact@medicare.org</i>
            
        </div>
        <div>
          <div>
          <i className="bi bi-facebook me-3 fs-4"></i>
          <i className="bi bi-twitter me-3 fs-4"></i>
          <i className="bi bi-linkedin me-3 fs-4"></i>
          <i className="bi bi-youtube fs-4"></i>
          <p className='my-4'> Copyright &copy; medicare 2022</p>
          </div>
        </div>
        <div>
          <h4>News Latter</h4>
          <p>Wanna get update about our heath related services? Sign up for our news latter</p>
          <input type="text" className="form-control" placeholder="Enter your email"/>
          <button className='btn btn-success mt-3'>Submit</button>
        </div>
      </div>
      </div>
    </footer>
    )
}

export default Footer
