import React, {useCallback, useEffect} from "react";
import BasketSimple from "../../components/basket-simple";
import Layout from "../../components/layout";
import useSelector from "../../utils/use-selector";
import useStore from "../../utils/use-store";
import ItemInfo from "../../components/item-info";
import {useParams} from "react-router";


function ItemPage(){
  
  const id = useParams().itemId;

  const store = useStore();

  const select = useSelector(state => ({
    item: state.catalog.item,
    items: state.basket.items,
    sum: state.basket.sum,
    amount: state.basket.amount
  }));

  // Загрузка тестовых данных при первом рендере
  useEffect(async () => {
      await store.catalog.loadOne(id);
  }, [id]);

  const callbacks = {
    addToBasket: useCallback(() => store.basket.add(id), [store]),
    openModal: useCallback(() => store.modals.open('basket'), [store]),
  }

  return (
    <Layout head={<h1>{select.item ? select.item.title : ''}</h1>}>
      <BasketSimple onOpen={callbacks.openModal} amount={select.amount} sum={select.sum}/>
      <ItemInfo itemInfo={select.item}
                onAdd={callbacks.addToBasket}/>
    </Layout>
  )
}

export default React.memo(ItemPage);
