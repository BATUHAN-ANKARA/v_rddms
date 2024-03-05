"use client";

import React from "react";

const Box = (props) => {
  return (
    <div className="box1">
      <span>{props.title}</span>
      <div className="dashflex">
      
        <h5 className="">{props.counter}</h5>
        
        <img src={props.img} />
      </div>
    </div>
  );
};

export default Box;
