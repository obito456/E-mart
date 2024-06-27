import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./stores/pages/LandingPage";
import Mobiles from "./stores/components/Mobiles";
import MobilePage from "./stores/pages/MobilePage";
import MobileSingle from "./stores/singles/MobileSingle";
import Computers from "./stores/components/Computers";
import ComputerPage from "./stores/pages/CompPage";
import ComputerSingle from "./stores/singles/ComputerSingle";
import Mensfashion from "./stores/components/Mensfashion";
import Mensfashionpage from './stores/pages/MenPage';
import MenSingle from "./stores/singles/MenSingle";
import Womensfashion from "./stores/components/Womensfashion";
import Womensfashionpage from './stores/pages/WomanPage';
import Womensfashionsingle from './stores/singles/WomanSingle';
import AC from "./stores/components/AC";
import ACpage from "./stores/pages/AcPage";
import ACsingle from "./stores/singles/AcSingle";
import Furniture from "./stores/components/Furniture";
import Furniturepage from "./stores/pages/FurniturePage";
import FurnitureSingle from "./stores/singles/FurnitureSingle";
import Kitchen from "./stores/components/Kitchen";
import Kitchenpage from "./stores/pages/KitchenPage";
import Kitchensingle from "./stores/singles/KitchenSingle";
import Watches from "./stores/components/Watches";
import Watchespage from "./stores/pages/WatchPage";
import Watchessingle from "./stores/singles/WatchSingle";
import UserCart from "./stores/UserCart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mobile" element={<Mobiles />} />
        <Route path="/mobiles" element={<MobilePage />} />
        <Route path="/mobiles/:id" element={<MobileSingle/>}/>
        <Route path="/computer" element={<Computers />} />
        <Route path="/computers" element={<ComputerPage />} />
        <Route path="/computers/:id" element={<ComputerSingle />} />
        <Route path="/mensfashion" element={<Mensfashion />} />
        <Route path="/mensfashions" element={<Mensfashionpage />} />
        <Route path="/mensfashions/:id" element={<MenSingle />} />
        <Route path="/womensfashion" element={<Womensfashion />} />
        <Route path="/womensfashions" element={<Womensfashionpage />} />
        <Route path="/womensfashions/:id" element={<Womensfashionsingle />} />
        <Route path="/ac" element={<AC />} />
        <Route path="/acs" element={<ACpage />} />
        <Route path="/acs/:id" element={<ACsingle />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/furnitures" element={<Furniturepage />} />
        <Route path="/furnitures/:id" element={<FurnitureSingle />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/kitchens" element={<Kitchenpage />} />
        <Route path="/kitchens/:id" element={<Kitchensingle />} />
        <Route path="/watch" element={<Watches />} />
        <Route path="/watches" element={<Watchespage />} />
        <Route path="/watches/:id" element={<Watchessingle />} />
        <Route path="/cart" element={<UserCart/>}/>
      </Routes>
    </>
  );
}

export default App;
