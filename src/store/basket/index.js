import StoreModule from "../module";

class BasketStore extends StoreModule {

  /**
   * Начальное состояние
   */
  initState() {
    return {
      items: [],
      sum: 0,
      amount: 0,
    };
  }

  /**
   * Добавление товара в корзину по коду
   * @param id {*}
   */
  async add(id){
    // Ищем товар в корзие, чтобы увеличить его количество.
    let exists = false;

    const items = this.getState().items.map(item => {
      // Искомый товар
      if (item._id === id) {
        exists = true;
        return {...item, amount: item.amount + 1};
      }
      return item
    });

    if (!exists) {
      try {
        // Если товар не был найден в корзине, то добавляем новый
        const response = await fetch(`/api/v1/articles/${id}`);
        const json = await response.json();
        // Поиск товара в каталоге, чтобы его в корзину добавить
        const item = json.result;
        items.push({...item, amount: 1});
      } catch (e){
        console.error('товар не найден')
      }
    }

    // Считаем суммы
    let amount = 0;
    let sum = 0;
    for (const item of items){
      amount += item.amount;
      sum += item.price * item.amount;
    }

    // Установка состояние basket
    this.setState({
      items,
      amount,
      sum
    });
  }

}

export default BasketStore;
