import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";



const Login = () => {

  const{googleSignIn,user}=useContext(AuthContext);

  const handleLogin = () => {
    googleSignIn()
      .then((result) => {
        console.log("User: ", result.user);
      })
      .catch((error) => {
        console.error("Login Error:", error.message);
      });
  };
  


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        
        <div className="mt-4 text-center">
          <button onClick={handleLogin} className="w-full btn btn-neutral flex items-center justify-center gap-2 bg-base-200 text-black py-2 rounded-lg hover:bg-red-600 transition">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google Logo"
              className="w-5 h-5"
            />
            Continue  Google
          </button>
        </div>
      
      </div>
    </div>
  );
};

export default Login;
