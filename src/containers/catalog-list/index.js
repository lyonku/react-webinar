import React, {useCallback} from "react";
import useSelector from "../../utils/use-selector";
import useStore from "../../utils/use-store";
import Spinner from "../../components/spinner";
import List from "../../components/list";
import Pagination from "../../components/pagination";
import Item from "../../components/item";

function CatalogList() {

  const select = useSelector(state => ({
    items: state.catalog.items,
    page: state.catalog.params.page,
    limit: state.catalog.params.limit,
    count: state.catalog.count,
    waiting: state.catalog.waiting,
  }));

  const store = useStore();

  const callbacks = {
    addToBasket: useCallback((_id) => store.basket.add(_id), [store]),
    onPaginate: useCallback(page => store.catalog.setParams({page}), [store]),
  }

  const renders = {
    item: useCallback(item => {
      return <Item item={item} onAdd={callbacks.addToBasket} link={`/articles/${item._id}`}/>
    }, [callbacks.addToBasket]),
  }

  return (
    <>
      <Spinner active={select.waiting}>
        <List items={select.items} renderItem={renders.item}/>
      </Spinner>
      <Pagination
        count={select.count}
        page={select.page}
        limit={select.limit}
        onChange={callbacks.onPaginate}
      />
    </>
  );
}

export default React.memo(CatalogList);
