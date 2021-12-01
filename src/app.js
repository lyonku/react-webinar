import React, {useCallback, useState} from 'react';
import Controls from "./components/controls";
import List from "./components/list";
import Layout from "./components/layout";
import Modal from './components/Modal';

/**
 * Приложение
 * @param store {Store} Состояние с действиями
 */
function App({store}) {
  const [active, setActive] = useState(false)

  const callbacks = {
    onCreateItem: useCallback(() => store.createItem(), [store]),
    onSelectItem: useCallback((code) => store.selectItem(code), [store]),
    onAppendItem: useCallback((code) => store.appendItem(code), [store])
  }

  return (
    <Layout head={<h1>Магазин</h1>}>
      <Controls basket={store.getState().basket} 
                onCreate={callbacks.onCreateItem} 
                setActive={setActive}/>
      <List items={store.getState().items}
            onSelectItem={callbacks.onSelectItem}
            onAppendItem={callbacks.onAppendItem}/>
      <Modal basket={store.getState().basket}
            active={active} 
            setActive={setActive}/>
    </Layout>
  );
}

export default App;