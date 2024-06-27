import React from "react";
import { computerData } from "../data/computers";
import {Link} from 'react-router-dom';

const Computers = () => {
  const firstFiveImages = computerData.slice(0, 5);

  return (
    <>
      <h2>Computers</h2>
      <Link to='/computers'>
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

export default Computers;
