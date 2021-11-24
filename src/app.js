import React from 'react';
import './style.css';

function plural(n) {
  if (n >= 12 && n <= 14) {
    return 'раз';
  }
  n %= 10;
  if (n >= 2 && n <= 4) {
    return 'раза';
  }
  return 'раз';
}

/**
 * Приложение
 * @param store {Store} Состояние с действиями
 */
function App({store}) {
  return (
    <div className='App'>
      <div className='App__head'>
        <h1>Приложение на чистом JS</h1>
      </div>
      <div className='Controls'>
        <button onClick={() => store.createItem()}> Добавить</button>
      </div>
      <div className='App__center'>
        <div className='List'>{store.getState().items.map(item =>
          <div
            key={item.code}
            className={'List__item' + (item.selected ? ' List__item_selected' : '')}
          >
            <div className='Item' onClick={() => store.selectItem(item.code)}>
              <div className='Item__number'>{item.code}</div>
              <div className='Item__title'>{`${item.title}  ${item.selectedCount ? ` | Выделяется ${item.selectedCount} ${plural(item.selectedCount)}` : '' }`}</div>
              <div className='Item__actions'>
                <button onClick={() => store.deleteItem(item.code)}>
                  Удалить
                </button>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}

export default App;