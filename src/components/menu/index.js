import React, {useCallback, useMemo} from 'react';
import propTypes from "prop-types";
import {cn} from '@bem-react/classname'
import './styles.css';
import {Link} from "react-router-dom";

function Menu(props) {

  // CSS классы по БЭМ
  const className = cn('Menu');

  return (
    <ul className={className()}>
      {props.items.map(item => (
        <li key={item.key} className={className('item')}>
          <Link to={item.link}>{item.title}</Link>
        </li>
      ))}
    </ul>
  )
}

Menu.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired,
  onChange: propTypes.func
}

Menu.defaultProps = {
  items: [],
  onChange: () => {
  }
}

export default React.memo(Menu);
