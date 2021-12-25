import React from 'react';
import propTypes from "prop-types";
import './styles.css';
import PropTypes from "prop-types";

function Spinner(props) {

  if (props.active){
    return (
      <div className="Spinner">
        {props.children}
      </div>
    )
  } else {
    return props.children;
  }
}

Spinner.propTypes = {
  active: propTypes.bool.isRequired,
  children: PropTypes.node,
}

export default React.memo(Spinner);
