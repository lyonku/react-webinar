import React, {useCallback} from 'react';
import propTypes from "prop-types";
import {cn} from '@bem-react/classname'
import './styles.css';

function Pagination(props) {

  // Количество станиц
  const length = Math.ceil(props.count / Math.max(1, props.limit));
  // Начальная и конечная страница последовательности, чтобы все не рендерить
  const start = Math.max(props.page - 2, 1);
  const end = Math.min(start + 4, length);

  let items = [];

  // Первая страница всегда нужна
  if (start > 1){
    items.push(1);
    if (start > 2) items.push(null); // пропуск
  }

  // Генерируем последваотельность станиц
  for (let page = start; page <= end; page++) items.push(page)

  // Последнаяя страница
  if (end < length){
    if (end < length - 1) items.push(null); // пропуск
    items.push(length);
  }

  const onClickHandler = useCallback(page => {
    // Возвращаем функцию с замыканием на номер страницы
    return (e) => props.onChange(page);
  }, [props.onChange]);

  // CSS классы по БЭМ
  const className = cn('Pagination');

  return (
    <ul className={className()}>
      {items.map((number, index) => (
        <li key={index}
            className={className('item', {active: number === props.page, split: !number})}
            onClick={onClickHandler(number)}
        >
          {number || '...'}
        </li>
      ))}
    </ul>
  )
}

Pagination.propTypes = {
  page: propTypes.number.isRequired,
  limit: propTypes.number,
  count: propTypes.number,
  onChange: propTypes.func
}

Pagination.defaultProps = {
  page: 1,
  limit: 10,
  count: 1000,
  onChange: () => {
  }
}

export default React.memo(Pagination);
