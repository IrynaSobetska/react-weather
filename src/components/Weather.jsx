import "./Weather.css";
import PropTypes from "prop-types";
import uuid from "react-uuid";

import Icon from "./Icon";

const Weather = ({ data }) => {
  const day = data.day.slice(5).replace("-", ".");
  return (
    <div>
      <h2>Date: {day}</h2>
      {data.arr.map((smallArr) => (
        <div className="hour" key={uuid()}>
          <p key={uuid()}>{smallArr[2]}</p>
          <div className="temp">
            <Icon type={smallArr[0]} />
            <p key={uuid()}>{smallArr[1]} °C</p>
          </div>
        </div>
      ))}
    </div>
  );
};

Weather.propTypes = {
  data: PropTypes.shape({
    day: PropTypes.string.isRequired,
    arr: PropTypes.array,
  }),
};

export default Weather;
