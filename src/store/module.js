/**
 * Базовый класс модуля хранилища
 */
class StoreModule {

  /**
   * @param store {Store} Ссылка на хранилище
   * @param name {String} Навзание модуля (ключ данных в state)
   */
  constructor(store, name) {
    this.store = store;
    this.name = name;
  }

  /**
   * Начальное состояние
   * @return {Object}
   */
  initState() {
    return {};
  }

  /**
   * Текущее своё состояние
   * @return {*}
   */
  getState() {
    return this.store.getState()[this.name];
  }

  /**
   * Установка своего состояния
   * @param state {*}
   */
  setState(state) {
    this.store.setState({
      ...this.store.getState(),
      [this.name]: state,
    });
  }
}

export default StoreModule;