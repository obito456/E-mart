import React from "react";
import { watchData } from "../data/watch";
import {Link} from "react-router-dom";

const Mobiles = () => {
  const firstFiveImages =watchData.slice(0, 5);

  return (
    <>
      <h2>Watches</h2>
      <Link to="/watches">
      <div className="proSection">
        {firstFiveImages.map((item) => {
          return (
            <div className="imgBox">
              <img className="proImage" src={item.image} alt="" />
            </div>
          );
        })}
      </div>
      </Link>
    </>
  );
};

export default Mobiles;
