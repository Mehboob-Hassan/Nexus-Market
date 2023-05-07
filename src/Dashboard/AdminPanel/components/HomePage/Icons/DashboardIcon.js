import React, { Component } from "react";
import { string, number } from "prop-types";

export const DashboardIcon = ({ color }) => {
  return (
    <div>
      {/* "rgba(255,255,255,0.8)" */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
      >
        <path
          id="DashboardIcons"
          data-name="DashboardIcons"
          d="M2.25,18H1.125A1.125,1.125,0,0,1,0,16.875V0H2.25V15.75H18V18Zm12.938-4.5a.563.563,0,0,1-.562-.562V5.063a.563.563,0,0,1,.563-.562h1.125a.563.563,0,0,1,.563.563v7.875a.563.563,0,0,1-.562.563Zm-3.375,0a.563.563,0,0,1-.562-.562V9.563A.563.563,0,0,1,11.813,9h1.125a.563.563,0,0,1,.563.563v3.375a.563.563,0,0,1-.562.563Zm-3.375,0a.563.563,0,0,1-.562-.562V2.813a.563.563,0,0,1,.563-.562H9.563a.563.563,0,0,1,.563.563V12.938a.563.563,0,0,1-.562.563Zm-3.375,0a.563.563,0,0,1-.562-.562V7.313a.563.563,0,0,1,.563-.562H6.188a.563.563,0,0,1,.563.563v5.625a.563.563,0,0,1-.562.563Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

DashboardIcon.propTypes = {
  color: string,
};

DashboardIcon.defaultProps = {
  color: "rgba(255,255,255,0.8)",
};
