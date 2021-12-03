import React, {useCallback, useState} from 'react';
import propTypes from 'prop-types';
import './styles.css';
import plural from 'plural-ru';
import Modal from '/components/Modal';


function Controls({basket, onSumCounter}){
  const [active, setActive] = useState(false)

  const callbacks = {
    onClick: useCallback(() => {
      setActive(true) 
  }, [setActive, basket])};


  return <div className='Controls'>
    <div className='Controls__basket'>
      В корзине: {onSumCounter().totalCount == 0 ? 
      <span> Пусто</span>: 
      <span>
        {onSumCounter().totalCount} 
        {onSumCounter().wordDeclination} / {new Intl.NumberFormat().format(onSumCounter().totalPrice)} 
        &#8381; 
      </span>}
    </div>
    <button onClick={callbacks.onClick}> Перейти</button>
    <Modal basket={basket}
            active={active} 
            setActive={setActive}
            onSumCounter={onSumCounter}/>
  </div>
  
}

Controls.propTypes = {
  onSumCounter: propTypes.func.isRequired
}

Controls.defaultProps = {
  onSumCounter: () => {}
}

export default React.memo(Controls);