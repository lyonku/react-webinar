import StoreModule from "../module";
const PAGE_SIZE = 10

class CatalogStore extends StoreModule {

  /**
   * Начальное состояние
   */
  initState() {
    return {
      items: [],
      pagesCount: 0,
      page: 0
    };
  }

  /**
   * Загрузка списка товаров
   */
  async load(page = 0){
    const skip = PAGE_SIZE * page
    const limit = PAGE_SIZE
    const response = await fetch(`/api/v1/articles?limit=${limit}&skip=${skip}&fields=items(*),count`);
    const json = await response.json();
    this.setState({
      items: json.result.items,
      pagesCount: Math.ceil(json.result.count/PAGE_SIZE),
      page 
    });
  }
}

export default CatalogStore;
