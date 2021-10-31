import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import swal from "sweetalert";
import image from '../../media/images/login.png';
function LogIn() {
  const location = useLocation();
  const history = useHistory();
  const redirectUrl = location.state?.from || "/";
  const { googleSignInHandler } = useAuth();

  // google signin
  const handleGoogleSignIn = () => {
    googleSignInHandler().then((res) => {
      swal("Sign in Successful!", "Welcome!", "success");
      history.push(redirectUrl);
    });
  };
  return (
    <div className="container text-center mt-5 shadow p-4 login-div">
      <h2 className="fw-bold mb-5 text-custom">Login / Signup to your account</h2>
      <img src={image} className='img-fluid w-50 mx-auto d-block mb-5' alt="" />
      <button
        className="btn btn-warning my-3 px-4 py-3 rounded-pill fw-bold text-custom"
        onClick={handleGoogleSignIn}
      >
        Login / Signup with Google
      </button>
    </div>
  );
}

export default LogIn;
