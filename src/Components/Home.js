
import Navbar from "./Navbar";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigationbar from "./Navigationbar";
import Bannercarousel from "./Bannercarousel";
import FeaturedProducts from "./FeaturedProducts";
import Firstmain from "./Firstmain";
// import ResetPassword from "./Components/ResetPassword";
//  import Footer from "./Footer";
import Reviews from "./Reviews";
import UserProfile from ".//UserProfile";
export default function App() {
      return (
            <>
                 

                  <Bannercarousel />
                  <Firstmain />
                  {/* <ResetPassword/> */}
                  {/* <UserProfile/> */}
                  <FeaturedProducts/>
                  {/* <Reviews/> */}
                 

            </>
      );
}
