import React from "react";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { useSelector } from "react-redux";

function NavBar() {
  const user = useSelector((state) => state.user.value);
  return <nav>{user ? <SignedInLinks /> : <SignedOutLinks />}</nav>;
}

export default NavBar;
