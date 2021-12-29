import React, {useCallback, useEffect, useState} from 'react';
import propTypes from "prop-types";
import {cn} from '@bem-react/classname'
import './styles.css';

function Textarea(props) {


  const onChange = useCallback(event => {
    props.onChange(event.target.value);
  }, [props.onChange]);


  // CSS классы по БЭМ
  const className = cn('Input');

  return (
    <textarea
      className={className({theme: props.theme})}
      value={props.value}
      onChange={onChange}
    />
  )
}

Textarea.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
}

Textarea.defaultProps = {
  onChange: () => {},
  value: ''
}

export default React.memo(Textarea);
