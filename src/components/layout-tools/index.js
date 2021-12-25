import React from "react";
import {cn} from "@bem-react/classname";
import PropTypes from "prop-types";
import './styles.css';

function LayoutTools({children}){

  // CSS классы по БЭМ
  const className = cn('LayoutTools');

  return (
    <div className={className()}>
      {React.Children.map(children, (child) => (
        <div key={child.key} className={className('item')}>{child}</div>
      ))}
    </div>
  )
}

LayoutTools.propTypes = {
  children: PropTypes.node,
}

LayoutTools.defaultProps = {

}

export default React.memo(LayoutTools);
