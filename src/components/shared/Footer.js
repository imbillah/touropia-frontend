
function Footer() {
    return (
        <footer className='bg-custom'>
      <div className='container py-3 mt-5' >
      <div className='row  row-cols-lg-3'>
        <div>
           <h4 className='mb-3'>Touropia</h4>
           <br />
           <i className="bi bi-geo-alt-fill text-dark"> 17004 W Marshall Ln</i>
           <br />
            <i className="bi bi-telephone-fill text-dark"> +1-614-368-7964</i>
            <br />
            <i className="bi bi-envelope-fill text-dark"> contact@touropia.org</i>
            
        </div>
        <div>
          <div>
          <i className="bi bi-facebook me-3 fs-4"></i>
          <i className="bi bi-twitter me-3 fs-4"></i>
          <i className="bi bi-linkedin me-3 fs-4"></i>
          <i className="bi bi-youtube fs-4"></i>
          <p className='my-4'> Copyright &copy; touropia 2022</p>
          </div>
        </div>
        <div>
          <h4>News Latter</h4>
          <p>Wanna get update about our travel related services? Sign up for our news latter</p>
          <input type="text" className="form-control" placeholder="Enter your email"/>
          <button className='btn btn-secondary mt-3'>Submit</button>
        </div>
      </div>
      </div>
    </footer>
    )
}

export default Footer
