import React, {useCallback, useState} from 'react';
import List from "./components/list";
import Layout from "./components/layout";
import LayoutModal from './components/layout-modal';
import Item from './components/item';
import ItemBasket from './components/item-basket';
import BasketTotal from './components/basket-total';
import BasketSimple from './components/basket-simple';

/**
 * Приложение
 * @param store {Store} Состояние с действиями
 */
function App({store}) {
  const [modalVisible, setModalVisible] = useState(false)

  const callbacks = {
    openModal: useCallback(()=> setModalVisible(true), [setModalVisible]),
    closeModal: useCallback(() => setModalVisible(false), [setModalVisible]),
    addToBasket: useCallback((code) => store.addToBasket(code), [store])
  }

  const renders = {
    item: useCallback(item => {
      return <Item item={item} onAdd={callbacks.addToBasket}/>
    }, [callbacks.addToBasket]),

    itemBasket: useCallback(item => {
      return <ItemBasket item={item}/>
    }, [])
  }

  const state = store.getState();

  return (
    <>
      <Layout head={<h1>Магазин</h1>}>
        <BasketSimple onOpen={callbacks.openModal} amount={state.basket.amount} sum={state.basket.sum}/>
        <List items={state.items}
              renderItem={renders.item}/>
      </Layout>
      {modalVisible &&
        <LayoutModal title={'Корзина'} onClose={callbacks.closeModal}>
          <List items={state.basket.items}
                renderItem={renders.itemBasket}/>
          <BasketTotal amount={state.basket.amount} sum={state.basket.sum}/>
        </LayoutModal>
      }
    </>
  );
}

export default App;