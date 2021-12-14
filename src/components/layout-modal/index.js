import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function LayoutModal(props) {
  return (
    <div className="LayoutModal">
      <div className="LayoutModal__frame">
        <div className="LayoutModal__head">
          <h1 className="LayoutModal__title">
            {props.title}
          </h1>
          <button className="LayoutModal__close" onClick={props.onClose}>Закрыть</button>
        </div>
        <div className="LayoutModal__content">
          {props.children}
        </div>
      </div>
    </div>
  );
}

LayoutModal.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
  children: PropTypes.node,
};

LayoutModal.defaultProps = {
  title: 'Модалка',
  onClose: () => {}
};

export default React.memo(LayoutModal);
