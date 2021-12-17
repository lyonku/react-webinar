import StoreModule from "../module";

class ItemCard extends StoreModule {

  /**
   * Начальное состояние
   */
  initState() {
    return {
      item: null
    };
  }

  /**
   * Загрузка карточки товаров
   */

  async loadOne(id){
    const response = await fetch(`/api/v1/articles/${id}?fields=*,maidIn(title,code),category(title)`);
    const json = await response.json();
    this.setState({
      item: json.result
    });
  }

}

export default ItemCard;