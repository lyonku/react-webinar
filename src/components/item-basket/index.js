import React from 'react';
import propTypes from 'prop-types';
import numberFormat from "../../utils/number-format";
import './styles.css';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';


function ItemBasket({item, onClose}) {
  return (
    <div className='ItemBasket'>
      <div className='ItemBasket__number'>{item._key}</div>
      <Link to={`/items/${item._id}`} className='ItemBasket__title' onClick={onClose}>{item.title}</Link>
      <div className='ItemBasket__right'>
        <span className="ItemBasket__cell">{numberFormat(item.price || 0)} ₽</span>
        <span className="ItemBasket__cell">{numberFormat(item.amount || 0)} шт</span>
      </div>
    </div>
  )
}

ItemBasket.propTypes = {
  item: propTypes.object.isRequired,
  onClose: PropTypes.func,
}

ItemBasket.defaultProps = {
  onClose: () => {}
}

export default React.memo(ItemBasket);
