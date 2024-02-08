import React from "react";
import "./SectionTitleContainer.css";

const SectionTitleContainer = ({ title, count }) => {
  return (
    <div className="titleArea">
      <h1>{title}</h1>
      <h1>{count}</h1>
    </div>
  );
};

export default SectionTitleContainer;
