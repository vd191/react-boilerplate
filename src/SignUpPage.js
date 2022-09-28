import React, { useState } from "react";
import { auth, createUserWithEmailAndPassword } from "./firebase";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "./redux/features/userSlice";

function SignUpPage() {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          signIn({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
          })
        );
      })
      .catch((err) => {
        alert(err);
      });
  };

  if (user) return <Navigate to="/" />;

  return (
    <div>
      <h1> Sign Up Page</h1>
      <form>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button type="submit" onClick={handleSignUp}>
          Sign up
        </button>
      </form>
    </div>
  );
}

export default SignUpPage;
