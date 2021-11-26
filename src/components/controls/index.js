import React from "react";
import propTypes from 'prop-types';
import './styles.css';

function Controls({onCreate}){
  console.log('Controls');
  return <div className='Controls'>
    <button onClick={onCreate}> Добавить</button>
  </div>
}

Controls.propTypes = {
  onCreate: propTypes.func.isRequired
}

Controls.defaultProps = {
  onCreate: () => {}
}

export default React.memo(Controls);