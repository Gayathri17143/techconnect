
 
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigationbar from "./Components/Navigationbar";
import Bannercarousel from "./Components/Bannercarousel";
import FeaturedProducts from "./Components/FeaturedProducts";
import Firstmain from "./Components/Firstmain";
// import ResetPassword from "./Components/ResetPassword";
 import Footer from "./Components/Footer";
// import Reviews from "./Components/Reviews";
import UserProfile from "./Components/UserProfile";
import Home from "./Components/Home";
import Categories from "./Components/Categories";
export default function App() {
      return (
            <Router>
                  <Navbar />
                  <Navigationbar />
                  {/* <Router> */}
                        <Routes>

                              <Route exact path="/" element={<Home />} ></Route>
                              <Route exact path="/profile" element={<UserProfile />} ></Route>
                              <Route exact path="/categories" element={<Categories/>} ></Route>
                        </Routes>
                  {/* </Router> */}

                 
                  {/* <Bannercarousel /> */}
                  {/* <Firstmain /> */}
                  {/* <ResetPassword/> */}
                 
                  {/* <FeaturedProducts/> */}
                  {/* <Reviews/> */}
                  <Footer/>

            </Router>
      );
}
