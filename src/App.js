import { Routes, Route } from "react-router-dom";
import NavBar from "./components/layouts/NavBar";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
