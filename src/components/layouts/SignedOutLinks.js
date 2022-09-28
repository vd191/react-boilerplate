import { signIn } from "../../redux/features/userSlice";
import { useDispatch } from "react-redux";

function SignedOutLinks() {
  const dispatch = useDispatch();
  return (
    <div>
      <a href="/signin" onClick={() => dispatch(signIn())}>
        Sign in
      </a>
      <a href="/signup">Sign up</a>
    </div>
  );
}

export default SignedOutLinks;
