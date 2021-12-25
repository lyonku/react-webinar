import React from "react";
import {cn} from "@bem-react/classname";
import PropTypes from "prop-types";
import './styles.css';

function LayoutSides({left, right, children}){

  // CSS классы по БЭМ
  const className = cn('LayoutSides');

  return (
    <div className={className()}>
      <div className={className('left')}>{left}</div>
      <div className={className('center')}>{children}</div>
      <div className={className('right')}>{right}</div>
    </div>
  )
}

LayoutSides.propTypes = {
  children: PropTypes.node,
  left: PropTypes.node,
  right: PropTypes.node,
}

LayoutSides.defaultProps = {

}

export default React.memo(LayoutSides);
