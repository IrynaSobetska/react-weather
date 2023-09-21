import "./Icon.css";
import PropTypes from "prop-types";

import {
  FaTemperatureArrowUp,
  FaGripLines,
  FaTemperatureArrowDown,
} from "react-icons/fa6";

const Icon = ({ type }) => {
  console.log(type);
  let icon;
  if (type === "more") {
    icon = <FaTemperatureArrowUp />;
  } else if (type === "same") {
    icon = <FaGripLines />;
  } else if (type === "less") {
    icon = <FaTemperatureArrowDown />;
  } else {
    icon = undefined;
  }
  return <p className={type}>{icon}</p>;
};

Icon.propTypes = {
  type: PropTypes.string,
};

export default Icon;
