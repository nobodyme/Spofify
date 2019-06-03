import React from "react";
import "../styles/components/Indicator.css";

// You can use a multi-line return by wrapping with ()
// You will want to also consider adding `prop-types` so you define your component "schema"
// https://reactjs.org/docs/typechecking-with-proptypes.html

/*
	e.g, npm install prop-types
	
	import PropTypes from 'prop-types';
	
	...component definition like below
	
	Indicator.propTypes = {
		text: PropTypes.string.isRequired
	}
 */

const Indicator = ({ text }) => (
  <div className="indicator">
    <div className="indicator__img" />
    <div className="indicator__text">{text}</div>
  </div>
);

export default Indicator;
