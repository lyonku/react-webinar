import React, {useCallback, useEffect} from "react";
import BasketSimple from "../../components/basket-simple";
import Layout from "../../components/layout";
import ItemBasket from "../../components/item-basket";
import useSelector from "../../utils/use-selector";
import useStore from "../../utils/use-store";
import ItemInfo from "../../components/item-info";
import {useParams} from "react-router";


function ItemPage(){
  
  const id = useParams().itemId;

  const select = useSelector(state => ({
    item: state.catalog.item,
    items: state.basket.items,
    sum: state.basket.sum,
    amount: state.basket.amount,
  }));

  console.log(select.item)
  // Загрузка тестовых данных при первом рендере
  useEffect(async () => {
      await store.catalog.loadOne(id);
    }, []);

  const store = useStore();

  const callbacks = {
    addToBasket: useCallback(() => store.basket.add(id), [store]),
    openModal: useCallback(() => store.modals.open('basket'), [store]),
  }

  const renders = {
    itemBasket: useCallback(item => {
      return <ItemBasket item={item}/>
    }, [])
  }

  console.log(id)

  return (
    
    <Layout head={<h1>{select.item ? select.item.title : 'Загружается!!'}</h1>}>
      <BasketSimple onOpen={callbacks.openModal} amount={select.amount} sum={select.sum}/>
      <ItemInfo itemInfo={select.item}
                onAdd={callbacks.addToBasket}/>
    </Layout>
  )
}

export default React.memo(ItemPage);
