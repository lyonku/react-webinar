import React from "react";
import propTypes from 'prop-types';
import './styles.css';
import plural from 'plural-ru';


function Controls({setActive, basket}){
  const totalPrice = basket.reduce((sum, current) => sum + current.price * current.count, 0);
  const totalCount = basket.reduce((sum, current) => sum + current.count, 0);
  const wordDeclination = plural(totalCount, ' товар', ' товара', ' товаров');

  return <div className='Controls'>
    <div className='Controls__basket'>В корзине: {totalCount == 0 ? <span>Пусто</span>: <span>{totalCount} {wordDeclination} / {new Intl.NumberFormat().format(totalPrice)} &#8381; </span>}</div>
    <button onClick={() => setActive(true) }> Перейти</button>
  </div>
  
}

Controls.propTypes = {
  setActive: propTypes.func.isRequired
}

Controls.defaultProps = {
  setActive: () => {}
}

export default React.memo(Controls);