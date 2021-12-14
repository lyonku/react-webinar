import StoreModule from "../module";

class ModalsStore extends StoreModule {

  /**
   * Начальное состояние
   */
  initState() {
    return {
      name: false
    };
  }

  /**
   * Открытие модального окна по названию
   * @param name {String} Название модалки
   */
  open(name){
    this.setState({
      name
    });
  }

  /**
   * Закрытие модального окна
   */
  close(){
    this.setState({
      name: false
    });
  }
}

export default ModalsStore;