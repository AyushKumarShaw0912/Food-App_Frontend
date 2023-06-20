import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyOrder from "./pages/MyOrder";
import Header from "./components/Header"
import Footer from "./components/Footer"
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'  //npm i bootstrap-dark-5 boostrap
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Signup from "./pages/Signup";
import { CartProvider } from './components/ContextReducer';


function App() {
  return (
    <div>
<CartProvider>
      <Router>
        <Header/>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/myorder" element={<MyOrder />} />
          </Routes>
        </div>
        <Footer/>
      </Router>
    </CartProvider>

    </div>
  );
}

export default App;
