import React from "react";
import FeatherIcon from "feather-icons-react";
import colors from "assets/styles/_mixins.scss";

const AppIcon = ({ icon, size = 20, color = "primary", onClick }) => {
  if (onClick)
    return (
      <div style={{ cursor: "pointer", display: "inline" }} onClick={onClick}>
        <FeatherIcon icon={icon} size={size} color={colors[color]} />
      </div>
    );
  return <FeatherIcon icon={icon} size={size} color={colors[color]} />;
};

export default AppIcon;
