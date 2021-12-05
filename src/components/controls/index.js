import React, {useCallback, useState} from 'react';
import './styles.css';


function Controls({basket, setActive, totalSum}){

  const callbacks = {
    onClick: useCallback(() => {
      setActive(true) 
  }, [setActive, basket])};

  return <div className='Controls'>
    <div className='Controls__basket'>
      
      В корзине: {totalSum.count == 0 ? 
      <span> Пусто</span>: 
      <span>
        {totalSum.count} 
        {totalSum.wordDeclination} / {new Intl.NumberFormat().format(totalSum.price)} 
        &#8381; 
      </span>}
    </div>
    <button onClick={callbacks.onClick}> Перейти</button>
  </div>
  
}

export default React.memo(Controls);