import "./App.css";
import { Routes, Route } from "react-router-dom";
import Counter from "./assets/components/Counter";

import SignInPage from "./assets/pages/SignInPage";
import SignUpPage from "./assets/pages/SignUpPage";
import { ToastContainer} from "react-toastify";
import Products from "./assets/pages/Products";
import SecureRoute from "./assets/routes/SecureRoute"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="" element={<SecureRoute />}>
        <Route path="/products" element={<Products />} />
        <Route path="/counter" element={<Counter />} />
        </Route>

        
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
