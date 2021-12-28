import StoreModule from "../module";

class CountriesStore extends StoreModule {

  /**
   * Начальное состояние
   */
   initState() {
    return {items: []}
  }

  /**
   * Загрузка стран
   */
  async load(){

    try {
      const response = await fetch(`/api/v1/countries?limit=*&fields=_id,title,code&sort=title.ru`);
      const json = await response.json();
      if (json.error) throw new Error(json.error);

      const result = json.result.items.map((country) => ({value: country._id, title: country.title}))
      this.updateState({items: result });
    } catch (e){
      this.updateState(this.initState());
    }
  }
}
export default CountriesStore;