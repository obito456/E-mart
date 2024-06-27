import React from "react";
import { furnitureData } from "../data/furniture";
import {Link} from 'react-router-dom';

const Furniture = () => {
  const firstFiveImages = furnitureData.slice(0, 5);

  return (
    <>
      <h2>Furniture</h2>
      <Link to='/furnitures'>
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

export default Furniture;
