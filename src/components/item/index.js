import React, {useCallback, useState} from "react";
import propTypes from 'prop-types';
import './styles.css';
import numberFormat from "../../utils/number-format";

function Item({item, onAdd}){

  return (
    <div className='Item'>
      <div className='Item__number'>{item.code}</div>
      <div className='Item__title'>{item.title}</div>
      <div className='Item__price'>{numberFormat(item.price)} &#8381;</div>
      <div className='Item__actions'>
        <button onClick={() => onAdd(item.code)}>
          Добавить
        </button>
      </div>
    </div>
  )
}

Item.propTypes = {
  item: propTypes.object.isRequired,
  onAdd: propTypes.func
}

Item.defaultProps = {
  onAdd: () => {}
}

export default React.memo(Item);