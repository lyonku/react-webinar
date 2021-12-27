import React, {useCallback, useMemo, useEffect} from "react";
import useSelector from "../../utils/use-selector";
import useStore from "../../utils/use-store";
import Select from "../../components/select";
import LayoutTools from "../../components/layout-tools";
import Input from "../../components/input";

function CatalogFilter() {

  const store = useStore();

  const select = useSelector(state => ({
    sort: state.catalog.params.sort,
    query: state.catalog.params.query,
    categories: state.categories.items,
    category: state.catalog.params.category
  }));

  // Опции для полей
  const options = {
    sort: useMemo(() => ([
      {value:'key', title: 'По коду'},
      {value:'title.ru', title: 'По именованию'},
      {value:'-price', title: 'Сначала дорогие'},
      {value:'edition', title: 'Древние'},
    ]), []),

    categories: useMemo((parent = null, nestDegree = 0) => [
      {value: '', title: 'Все'},
      ...select.categories.map((item) => 
        (item.parent !== null ? ( console.log(item),
        {value: item._id, title: '- '.repeat(1) + item.title}) : 
        {value: item._id, title: item.title} ))], [select.categories])
  }

  

  useEffect(async () => {
    await store.categories.fetchAll();
  }, []);

  const callbacks = {
    onSort: useCallback(sort => store.catalog.setParams({sort}), [store]),
    onSearch: useCallback(query => store.catalog.setParams({query, page: 1}), [store]),
    onReset: useCallback(() => store.catalog.resetParams(), [store]),
    onCategoryChange: useCallback((category) => store.catalog.setParams({category, page: 1}), [store])
  }

  return (
    <LayoutTools>
      <Select onChange={callbacks.onCategoryChange} value={select.category} options={options.categories}/>
      <Input onChange={callbacks.onSearch} value={select.query} placeholder={'Поиск'} theme="big"/>
      <label>Сортировка:</label>
      <Select onChange={callbacks.onSort} value={select.sort} options={options.sort}/>
      <button onClick={callbacks.onReset}>Сбросить</button>
    </LayoutTools>
  );
}

export default React.memo(CatalogFilter);
