
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <FaArrowLeft
      className={className}
      style={{
        ...style,
        display: "block",
        color: "black",
        fontSize: "30px",
        left: "10px",
        zIndex: "1"
      }}
      onClick={onClick}
    />
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <FaArrowRight
      className={className}
      style={{
        ...style,
        display: "block",
        color: "black",
        fontSize: "30px",
        right: "10px",
        zIndex: "1"
      }}
      onClick={onClick}
    />
  );
};

export { PrevArrow, NextArrow };
