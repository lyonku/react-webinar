import React from "react";
import propTypes from 'prop-types';
import Item from "../item";
import './styles.css';

function List({items, renderItem}){
  
  return (
    <div className='List'>{items.map(item =>
      <div className='List__item' key={item.code}>
        {renderItem(item)}
      </div>
    )}
    </div>
  )
}

List.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired,
  renderItem: propTypes.func
}

List.defaultProps = {
  items: [],
  renderItem: (item) => {
    renderItem.toString()
  }
}

export default React.memo(List);