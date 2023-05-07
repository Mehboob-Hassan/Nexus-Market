import React, { Component } from "react";
import { string, number } from "prop-types";

export const ExchangeIcon = ({ color }) => {
  return (
    <div>
      {/* "rgba(255,255,255,0.8)" */}
      <svg xmlns="http://www.w3.org/2000/svg" width="13.077" height="18.254" viewBox="0 0 13.077 18.254">
  <g id="Group_18" data-name="Group 18" transform="translate(0.25 0.233)">
    <path id="Shape" d="M0,0H6.323V1.04H0Z" transform="translate(3.127 6.683)" fill={color} stroke="rgba(255,255,255,0.8)" stroke-miterlimit="10" stroke-width="0.5"/>
    <path id="Shape-2" data-name="Shape" d="M0,0H8.408V1.04H0Z" transform="translate(2.085 9.113)" fill="rgba(255,255,255,0.8)" stroke="rgba(255,255,255,0.8)" stroke-miterlimit="10" stroke-width="0.5"/>
    <path id="Shape-3" data-name="Shape" d="M0,0H8.408V1.04H0Z" transform="translate(2.085 11.711)" fill="rgba(255,255,255,0.8)" stroke="rgba(255,255,255,0.8)" stroke-miterlimit="10" stroke-width="0.5"/>
    <path id="Shape-4" data-name="Shape" d="M0,0H3.162V1.04H0Z" transform="translate(2.085 14.651)" fill="rgba(255,255,255,0.8)" stroke="rgba(255,255,255,0.8)" stroke-miterlimit="10" stroke-width="0.5"/>
    <path id="Shape-5" data-name="Shape" d="M0,17.754V0H9.087l3.49,2.322V17.754Z" transform="translate(0 0.017)" fill="rgba(255,255,255,0.8)" stroke="rgba(255,255,255,0.8)" stroke-miterlimit="10" stroke-width="0.5"/>
  </g>
</svg>
    </div>
  );
};

ExchangeIcon.propTypes = {
  color: string,
};

ExchangeIcon.defaultProps = {
  color: "rgba(255,255,255,0.8)",
};









