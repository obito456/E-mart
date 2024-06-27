import React from "react";
import Mobiles from "./Mobiles";
import Computers from "./Computers";
import Watches from "./Watches";
import Mensfashion from "./Mensfashion";
import Womensfashion from "./Womensfashion";
import Furniture from "./Furniture";
import AC from "./AC";
import Kitchen from "./Kitchen";

const Products=()=>{
    return(
        <div>
            <Mobiles/>
            <Computers/>
            <Watches/>
            <Mensfashion/>
            <Womensfashion/>
            <Furniture/>
            <AC/>
            <Kitchen/>
        </div>
    )
}

export default Products