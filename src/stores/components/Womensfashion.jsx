import React from "react";
import { womanData } from "../data/woman";
import {Link} from "react-router-dom";

const Womensfashion = () => {
  const firstFiveImages = womanData.slice(0, 5);

  return (
    <>
      <h2>Womensfashion</h2>
      <Link to="/womensfashions">
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

export default Womensfashion;
