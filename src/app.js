import React, {useCallback} from 'react';
import Controls from "./components/controls";
import List from "./components/list";
import Layout from "./components/layout";

/**
 * Приложение
 * @param store {Store} Состояние с действиями
 */
function App({store}) {
  console.log('App');

  const callbacks = {
    onCreateItem: useCallback(() => store.createItem(), [store]),
    onSelectItem: useCallback((code) => store.selectItem(code), [store]),
    onDeleteItem: useCallback((code) => store.deleteItem(code), [store])
  }

  return (
    <Layout head={<h1>Приложение на чистом JS</h1>}>
      <Controls onCreate={callbacks.onCreateItem}/>
      <List items={store.getState().items}
            onSelectItem={callbacks.onSelectItem}
            onDeleteItem={callbacks.onDeleteItem}/>
    </Layout>
  );
}

export default App;