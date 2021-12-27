import StoreModule from "../module";

class CategoriesStore extends StoreModule {

  initState() {
    return {
      items: [],
    }
  }

  async fetchAll() {
    const response = await fetch(`/api/v1/categories?limit=*&fields=_id,parent,title`);
    const json = await response.json();

    this.setState({
      items: json.result.items,
    })

  }
}

export default CategoriesStore;