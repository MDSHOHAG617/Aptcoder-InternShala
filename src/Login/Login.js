import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    navigate("/dashboard");
    // return (
    //   <div>
    //     <p>Signed In User: {user.email}</p>
    //   </div>
    // );
  }
  return (
    <div className=" mt-12 mb-8">
      <h2 className="text-2xl font-bold">please Login</h2>
      <div className=" p-4 rounded shadow-xl max-h-72 max-w-3xl mx-auto">
        <input
          className="input input-bordered w-full max-w-xs m-4"
          placeholder="Email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          className="input input-bordered w-full max-w-xs mb-4"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <p className="mb-2">
          New to APTCODER?{" "}
          <Link className="text-blue-500 font-mono" to="/registration">
            Register
          </Link>
        </p>
        <button
          className="btn btn-md "
          onClick={() => signInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
