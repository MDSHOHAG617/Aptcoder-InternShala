import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

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
    navigate("/");
    // return (
    //   <div>
    //     <p>Registered User: {user.email}</p>
    //   </div>
    // );
  }
  return (
    <div className=" mt-12 mb-8">
      <h2 className="text-2xl font-bold">please Register</h2>
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
          All ready register?{" "}
          <Link className="text-blue-500 font-mono" to="/login">
            Login
          </Link>
        </p>
        <button
          className="btn btn-md "
          onClick={() => createUserWithEmailAndPassword(email, password)}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Registration;
