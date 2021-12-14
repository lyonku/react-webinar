/**
 * Хранилище состояния приложения
 */
class Store {

  /**
   * @param modules {Object} Классы StoreModule для создания экземпляров модулей хранилища
   */
  constructor(modules = {}) {
    // Состояние приложения (данные всех модулей)
    this.state = {};
    // Подписчики на изменение state
    this.listners = [];

    // Модули
    this.modules = {};
    const names = Object.keys(modules);
    for (const name of names) {
      // Экземпляр модуля
      this.modules[name] = new modules[name](this, name);
      // Состояние по умочланию от модуля
      this.state[name] = this.modules[name].initState();
    }
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
   * @return {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка state
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Оповещаем всех подписчиков об изменении стейта
    for (const lister of this.listners) {
      lister(this.state);
    }
  }

  /**
   * Доступ к модулю состояния
   * @param name {String} Название модуля
   * @return {StoreModule}
   */
  get(name){
    return this.modules[name];
  }


  /**
   * @return {BasketStore}
   */
  get basket(){
    return this.get('basket');
  }

  /**
   * @return {ModalsStore}
   */
  get modals(){
    return this.get('modals');
  }

  /**
   * @return {CatalogStore}
   */
  get catalog(){
    return this.get('catalog');
  }
}

export default Store;