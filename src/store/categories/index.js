import StoreModule from "../module";

class CategoriesStore extends StoreModule {

  initState() {
    return {items: []}
  }

  createTree(items, idProp, parentProp) {
    const tree = Object.fromEntries(
      items.map(n => [ n[idProp], { ...n, children: [] } ])
    );

    return Object
      .values(tree)
      .filter(n => !(tree[n.parent?.[parentProp]] && tree[n.parent?.[parentProp]].children.push(n)));
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
  async fetchAll(){

    try {
      const response = await fetch(`/api/v1/categories?limit=*&fields=_id,parent,title`);
      const json = await response.json();
      if (json.error) throw new Error(json.error);

      const tree = this.createTree(json.result.items, '_id', '_id');

      const result = this.toList(tree)

      this.updateState({  items: [...this.initState().items, ...result] });

    } catch (e){
      this.updateState(this.initState());
    }
  }
}

export default CategoriesStore;