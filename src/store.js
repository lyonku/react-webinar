class Store {
  constructor(initState) {
    // Состояние приложения (данные)
    this.state = Object.assign({
      items: [],
      basket: {
        items: [],
        sum: 0,
        amount: 0
      },
      modals: {
        name: null
      }   
    }, initState);

    this.listners = []
  }

  /**
   * Подписка на изменение state
   * @param callback {Function}
   */
  subscribe(callback) {
    this.listners.push(callback);
    // Возвращаем функцию для отписки
    return () => {
      this.listners = this.listners.filter(item => item !== callback);
    }
  }

  /**
   * Выбор state
   * @return {*}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка state
   * @param newState {*}
   */
  setState(newState) {
    this.state = newState;
    // Оповещаем всех подписчиков об изменении стейта
    for (const lister of this.listners) {
      lister(this.state);
    }
  }

  // Действия приложения.
  // @todo
  // Нужно вынести в отдельный слой, так как Store не определяет конкретную структуру состояния.
  // Может быть как модуль (расширение) для Store

  /**
   * Создание записи
   */
  createItem() {
    const code = Math.max(0, ...this.state.items.map(item => item.code)) + 1;
    this.setState({
      items: this.state.items.concat({
        code: code,
        title: 'Новая запись №'+code
      })
    });
  }

  /**
   * Удаление записи по её коду
   * @param code
   */
  deleteItem(code) {
    this.setState({
      items: this.state.items.filter(item => item.code !== code)
    });
  }

  /**
   * Выделение записи по её коду
   * @param code
   */
  selectItem(code) {
    this.setState({
      items: this.state.items.map(item => {
        if (item.code === code){
          return {
            ...item,
            selected: !item.selected
          };
        }
        return item;
      })
    });
  }

  addToBasket(code){
    let exists = false;
    const items = this.getState().basket.items.map(item => {
      // Искомый товар
      if (item.code === code) {
        exists = true;
        return {...item, amount: item.amount + 1};
      }
      return item
    });

    if (!exists) {
      // Если товар не был найден в корзине, то добавляем его из каталога
      // Поиск товара в каталоге, чтобы его в корзину добавить
      const item = this.getState().items.find(item => item.code === code);
      items.push({...item, amount: 1});
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
      ...this.state,
      basket: {
        items,
        amount,
        sum
      }
    });
  }
}

  /**
   * Добавление в корзину
   */
//    appendItem(code) {
     
//     if (this.state.basket.find(item => item.code === code)) {
//       this.setState({
//         basket: this.state.basket.map(item => item.code !== code ? item : {...item, count: item.count + 1})
//       });
//     } else {
//       this.setState({
//         basket: this.state.basket.concat({...this.state.items.filter(item => item.code === code)[0], count: 1})
//     });
//     }
    
//     this.setState({
//       totalSum:
//         {price: this.state.basket.reduce((sum, current) => sum + current.price * current.count, 0),
//         count: this.state.basket.reduce((sum, current) => sum + current.count, 0),
//         wordDeclination: plural(this.state.totalSum.count + 1, ' товар', ' товара', ' товаров'),
//       }
//     })
//   } 
// }



export default Store;