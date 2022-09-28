import { useDispatch } from "react-redux";
import { signOut } from "../../redux/features/userSlice";
import { auth } from "../../firebase";

function SignedInLinks() {
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(signOut());
    auth.signOut();
  };

  return (
    <div>
      <a onClick={handleSignOut}>Sign out</a>
    </div>
  );
}

export default SignedInLinks;
