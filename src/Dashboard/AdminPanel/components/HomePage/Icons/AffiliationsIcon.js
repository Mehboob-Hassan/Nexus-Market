import React, { Component } from "react";
import { string, number } from "prop-types";

export const AffiliationsIcon = ({ color }) => {
  return (
    <div>
      {/* "rgba(255,255,255,0.8)" */}
      <svg xmlns="http://www.w3.org/2000/svg" width="26.4" height="12" viewBox="0 0 26.4 12">
  <path id="Shape" d="M9.6,12V4.8H12V9.6h8.4a3.6,3.6,0,1,0,0-7.2H19.2V0h1.2a6,6,0,0,1,0,12ZM6,12A6,6,0,1,1,6,0H16.8V7.2H14.4V2.4H6A3.6,3.6,0,0,0,6,9.6H7.2V12Z" fill={color}/>
</svg>

    </div>
  );
};

AffiliationsIcon.propTypes = {
  color: string,
};

AffiliationsIcon.defaultProps = {
  color: "rgba(255,255,255,0.8)",
};









