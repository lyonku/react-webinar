import React, {useCallback, useState} from 'react';
import propTypes from 'prop-types';
import './styles.css';
import plural from 'plural-ru';
import Modal from '/components/Modal';


function Controls({basket}){
  const [active, setActive] = useState(false)

  const totalPrice = basket.reduce((sum, current) => sum + current.price * current.count, 0);
  const totalCount = basket.reduce((sum, current) => sum + current.count, 0);
  const wordDeclination = plural(totalCount, ' товар', ' товара', ' товаров');

  const callbacks = {
    onClick: useCallback(() => {
      setActive(true) 
  }, [setActive, basket])};

  return <div className='Controls'>
    <div className='Controls__basket'>В корзине: {totalCount == 0 ? <span>Пусто</span>: <span>{totalCount} {wordDeclination} / {new Intl.NumberFormat().format(totalPrice)} &#8381; </span>}</div>
    <button onClick={callbacks.onClick}> Перейти</button>
    <Modal basket={basket}
            active={active} 
            setActive={setActive}/>
  </div>
  
}

Controls.propTypes = {
  setActive: propTypes.func.isRequired
}

Controls.defaultProps = {
  setActive: () => {}
}

export default React.memo(Controls);