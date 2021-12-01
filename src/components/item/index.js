import React, {useCallback, useState} from "react";
import propTypes from 'prop-types';
import plural from 'plural-ru';
import './styles.css';

function Item({item, onSelect, onAppend}){
  console.log('Item', item.title);

  const [counter, setCounter] = useState(0);

  const callbacks = {
    onClick: useCallback(() => {
      // onSelect(item.code);
      // if (!item.selected){
        setCounter(counter + 1);
      // }
    }, [item, onSelect, counter, setCounter])
  };

  return (
    <div className={'Item'  + (item.selected ? ' Item_selected' : '')} onClick={callbacks.onClick}>
      <div className='Item__number'>{item.code}</div>
      <div className='Item__title'>{item.title}</div>
      <div className='Item__price'>{new Intl.NumberFormat().format(item.price)} &#8381;</div>
      <div className='Item__actions'>
        <button onClick={() => onAppend(item.code)}>
          Добавить
        </button>
      </div>
    </div>
  )
}

Item.propTypes = {
  item: propTypes.object.isRequired,
  onSelect: propTypes.func.isRequired,
  onAppend: propTypes.func.isRequired
}

Item.defaultProps = {
  onSelect: () => {},
  onAppend: () => {}
}

export default React.memo(Item);