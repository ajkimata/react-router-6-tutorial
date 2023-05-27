import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import SingleProduct from "./pages/SingleProduct";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";
import SharedProductLayout from "./pages/SharedProductLayout";

function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="About"
            element={
              //check if user exists before opening the protected route
              <ProtectedRoute user={user}>
                <About user={user} />
              </ProtectedRoute>
            }
          />

          <Route path="products" element={<SharedProductLayout/>}>
            <Route index element={<Products />} />
            <Route path=":productId" element={< SingleProduct/>} />
          </Route>
         

          <Route path="Login" element={<Login setUser={setUser}></Login>} />
          <Route
            path="Dashboard"
            element={
              //check if user exists before opening the protected route
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <footer>Our Footer</footer>
    </BrowserRouter>
  );
}

export default App;
