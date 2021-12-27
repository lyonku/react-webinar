import StoreModule from "../module";

class CountriesStore extends StoreModule {

  initState() {
    return {
      items: [],
    }
  }

  async fetchAll() {
    const response = await fetch(`/api/v1/countries?limit=*&fields=_id,title,code&sort=title.ru`);
    const json = await response.json();

    this.setState({
      items: json.result.items,
    })

  }
}

export default CountriesStore;