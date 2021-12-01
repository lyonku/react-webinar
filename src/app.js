import React, {useCallback, useState} from 'react';
import Controls from "./components/controls";
import List from "./components/list";
import Layout from "./components/layout";

/**
 * Приложение
 * @param store {Store} Состояние с действиями
 */
function App({store}) {

  const callbacks = {
    onCreateItem: useCallback(() => store.createItem(), [store]),
    onSelectItem: useCallback((code) => store.selectItem(code), [store]),
    onAppendItem: useCallback((code) => store.appendItem(code), [store]),
    onSumCounter: useCallback(() => store.summaryLineCounter(), [store])
  }

  return (
    <Layout head={<h1>Магазин</h1>}>
      <Controls basket={store.getState().basket} 
                onCreateItem={callbacks.onCreateItem}
                onSumCounter={callbacks.onSumCounter}/>
      <List items={store.getState().items}
            onSelectItem={callbacks.onSelectItem}
            onAppendItem={callbacks.onAppendItem}/>
      
    </Layout>
  );
}

export default App;