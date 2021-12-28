import StoreModule from "../module";

class ArticleStore extends StoreModule {

  /**
   * Начальное состояние
   */
  initState() {
    return {
      data: {},
      waiting: true,
      error: null
    };
  }

  /**
   * Загрузка одного товара
   */
  async load(id){

    this.updateState({
      waiting: true,
      data: {}
    });

    try {
      const response = await fetch(`/api/v1/articles/${id}?fields=*,maidIn(title,code),category(title)`);
      const json = await response.json();
      if (json.error) throw new Error(json.error);

      this.updateState({
        data: json.result,
        waiting: false
      });

    } catch (e){
      this.updateState({
        data: {},
        waiting: false
      });
    }
  }

  async update(id, data) {
    

    const response = await fetch(`/api/v1/articles/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    this.updateState({
      waiting: true,
      data
    });
    
    const json = await response.json();

    this.updateState({
      waiting: false,
      error: json.error
    });
  }
}

export default ArticleStore;
