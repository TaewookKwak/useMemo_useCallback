import React, { useEffect, useState } from "react";

const Box2 = ({ createBox2Style }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    setStyle(createBox2Style);
    console.log("박스색상바꾸기");
  }, [createBox2Style]);

  return <div style={style}></div>;
};

export default Box2;
