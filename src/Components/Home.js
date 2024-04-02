

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Bannercarousel from "./Bannercarousel";
import FeaturedProducts from "./FeaturedProducts";
import Firstmain from "./Firstmain";
// import ResetPassword from "./Components/ResetPassword";
import Shopbyprice from "./Shopbyprice"
import TrendingProducts from "./TrendingProducts";
import Reviews from "./Reviews";
import Brandlogos from "./Brandlogos";
import React from 'react';
import ImageGrid from "./ImageGrid";
 

export default function App() {

      
      return (
            <>

                  
                  <Bannercarousel />
                  <ImageGrid />
                  {/* <Firstmain /> */}
                  {/* <Brandlogos/> */}
                  {/* <ResetPassword/> */}
                  <TrendingProducts />
                  {/* <Shopbyprice/> */}
                  {/* <FeaturedProducts/> */}
                  {/* <Reviews/> */}


            </>
      );
}
