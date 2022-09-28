import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "./firebase";
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "./redux/features/userSlice";

function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          signIn({
            email: userAuth.user.email,
            uid: userAuth.uid,
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
        <button type="submit" onClick={handleSignIn}>
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignInPage;
