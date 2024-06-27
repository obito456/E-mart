import React from "react";
import { menData } from "../data/men";
import {Link} from 'react-router-dom';

const Mensfashion = () => {
  const firstFiveImages = menData.slice(0, 5);

  return (
    <>
      <h2>Mensfashion</h2>
      <Link to="/mensfashions">
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

export default Mensfashion;
