import React from "react";
import useAuth from "../../hooks/useAuth";

function LogIn() {
  const { googleSignInHandler } = useAuth();

  // google signin
  const handleGoogleSignIn = () => {
    googleSignInHandler().then((res) => {
      console.log("signin success");
    });
  };
  return (
    <div className="container text-center mt-5  shadow p-4">
      <h2 className="fw-bold mb-5">Log in to your account</h2>
      <button
        className="btn btn-success my-3 px-4 py-2"
        onClick={handleGoogleSignIn}
      >
        Log In with Google
      </button>
    </div>
  );
}

export default LogIn;
