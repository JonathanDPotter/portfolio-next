import React from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PulseDownStyles from "../styles/components/PulseDown.module.scss";

const PulseDown = () => {
  return (
    <div className={PulseDownStyles["pulse-down"]}>
      <FontAwesomeIcon icon={faChevronDown} />
    </div>
  );
};

export default PulseDown;
