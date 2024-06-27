import React from "react";
import { mobileData } from "../data/mobiles";
import {Link} from 'react-router-dom';

const Mobiles = () => {
  const firstFiveImages = mobileData.slice(0, 5);

  return (
    <>
      <h2>Mobiles</h2>
      <Link to="/mobiles">
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
