import React from "react";
import "./SectionTitleContainer.css";

const SectionTitleContainer = ({ title }) => {
  return (
    <div className="titleArea">
      <h1>{title}</h1>
    </div>
  );
};

export default SectionTitleContainer;
