import React from 'react';
import propTypes from "prop-types";

/**
 * Контекст для Store
 * @type {React.Context<{}>}
 */
export const StoreContext = React.createContext({});

/**
 * Провайдер store.
 * Подключает контекст к приложение для доступа к хранилищу store.
 * Провайдер не обрабатывает изменения в store.
 * Тот кто использует состояние из store долежн сам подписаться на их изменения.
 * напрямую store используется, чтобы вызвать его методы изменения состояния.
 */
function StoreProvider({store, children}) {
  // В провайдер передатся объект хранилища store,
  // после чего store можно получиь через useContext(StoreContext) в любом компоненте
  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
}

StoreProvider.propTypes = {
  store: propTypes.object.isRequired,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node
  ]).isRequired,
}

export default React.memo(StoreProvider);