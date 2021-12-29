import StoreModule from "../module";
import createTree from "../../utils/create-tree";

class CategoriesStore extends StoreModule {

  initState() {
    return {items: []}
  }

  toList (element, prefix=''){
    if (element.title === undefined){
      return element.map((value) => this.toList(value)).flat()
    }
    const value = element._id
    const title = `${prefix}${prefix ? ' ' : ''}${element.title}`
    const result = {value, title}
    return [result, ...element.children.map((v) => this.toList(v, prefix+' -')).flat()]
  }

  /**
   * Загрузка категории товаров
   */
  async load(){

    try {
      const response = await fetch(`/api/v1/categories?limit=*&fields=_id,parent,title`);
      const json = await response.json();
      if (json.error) throw new Error(json.error);

      const tree = createTree(json.result.items, '_id', '_id');

      const result = this.toList(tree)

      this.updateState({items: [...this.initState().items, ...result] });

    } catch (e){
      this.updateState(this.initState());
    }
  }
}

export default CategoriesStore;