import React from 'react';
import propTypes from 'prop-types';
import './styles.css';
import numberFormat from "../../utils/number-format";
import { Link } from 'react-router-dom';

function Item({item, onAdd}) {
  return (
    <div className='Item'>
      <div className='Item__number'>{item._key}</div>
      <Link to={`/items/${item._id}`} className='Item__title'>{item.title}</Link>
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
}

Item.defaultProps = {
  onAdd: () => {}
}

export default React.memo(Item);
