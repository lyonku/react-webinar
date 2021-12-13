import React from 'react';
import propTypes from 'prop-types';
import numberFormat from "../../utils/number-format";
import './styles.css';

function BasketTotal(props) {
  return (
    <div className="BasketTotal">
      <span className="BasketTotal__cell">Итого</span>
      <span className="BasketTotal__cell">{numberFormat(props.sum)} ₽</span>
      <span className="BasketTotal__cell">{numberFormat(props.amount)} шт</span>
    </div>
  )
}

BasketTotal.propTypes = {
  sum: propTypes.number,
  amount: propTypes.number
}

BasketTotal.defaultProps = {
  sum: 0,
  amount: 0
}

export default React.memo(BasketTotal);