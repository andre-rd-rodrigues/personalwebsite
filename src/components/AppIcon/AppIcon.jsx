import React from "react";
import FeatherIcon from "feather-icons-react";
import colors from "assets/styles/_mixins.scss";

const AppIcon = ({ icon, size = 20, color = "primary" }) => {
  console.log(colors[color]);
  return <FeatherIcon icon={icon} size={size} color={colors[color]} />;
};

export default AppIcon;
