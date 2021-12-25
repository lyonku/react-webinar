import React from 'react';
import propTypes from 'prop-types';
import './styles.css';
import numberFormat from "../../utils/number-format";
import {Link} from "react-router-dom";

function Item({item, onAdd, link}) {
  return (
    <div className='Item'>
      <div className='Item__number'>{item._key}</div>
      <div className='Item__title'><Link to={link}>{item.title}</Link></div>
      <div className='Item__right'>
        <div className='Item__price'>{numberFormat(item.price)} ₽</div>
        <button onClick={() => onAdd(item._id)}>Добавить</button>
      </div>
    </div>
  )
}

Item.propTypes = {
  item: propTypes.object.isRequired,
  onAdd: propTypes.func,
  link: propTypes.string,
}

Item.defaultProps = {
  onAdd: () => {},
  link: ''
}

export default React.memo(Item);
