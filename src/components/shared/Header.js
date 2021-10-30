import { Link, NavLink } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
function Header() {
    const{user, logOut} = useAuth();
    const style ={
        color: 'black'
      }
    return (
        <div>
            <header className="">
      <div className='container'>
      <nav className="navbar navbar-expand-md navbar-light py-3">
          <h3 className="navbar-brand d-flex align-items-center">
            <NavLink
              to="/"
              activeStyle={{
                fontWeight: "bold",
                fontSize: "2rem",
                color: "black",
                textDecoration: "none",
              }}
            >
            Touropia
            </NavLink>
          </h3>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
            <span className="navbar-toggler-icon"></span>
        </button>
            <div className="collapse navbar-collapse" id="navmenu">
                <ul className="navbar-nav mx-auto">
                        <li className="nav-item"><Link to="/" className="nav-link" style={style}>Home</Link></li>
                        <li className="nav-item"><Link to="/reviews" className="nav-link" style={style}>Reviews</Link></li>
                        <li className="nav-item"><Link to="/about" className="nav-link" style={style}>About Us</Link></li>
                        <li className="nav-item"><Link to="/contact" className="nav-link" style={style}>Contact Us</Link></li>
                </ul>
                {user?.email? <ul className="navbar-nav">
                                <img src={user.photoURL} style={{width:'35ox', height:'35px'}}
                                className='rounded-circle' alt="" />
                                <li className='nav-item ms-2 mt-1 align-content-center'>{user.displayName}</li>
                                <button className="nav-item btn btn-outline-success ms-2" onClick={logOut}>Log Out</button>
                            </ul>
                :<ul className="navbar-nav">
                  <li className="nav-item  ms-lg-3 bg-custom">
                    <Link to="/login"className="nav-link " style={style}>Log In / Sign Up</Link>
                  </li> 
                </ul>
              }
            </div>
      </nav>
      </div>
    </header>
        </div>
    )
}

export default Header;
