import React from 'react';
import propTypes from 'prop-types';
import './styles.css';

function List({items, renderItem}) {
  return (
    <div className='List'>
      {items.map(item =>
        <div key={item._id} className='List__item'>
          {renderItem(item)}
        </div>
      )}
    </div>
  );
}

List.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired,
  renderItem: propTypes.func
}

List.defaultProps = {
  items: [],
  renderItem: (item) => {
    return item.toString()
  }
}

export default React.memo(List);
