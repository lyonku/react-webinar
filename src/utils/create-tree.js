export default function createTree(data, idProp, parentProp) {
  const tree = Object.fromEntries(
    data.map(n => [ n[idProp], { ...n, children: [] } ])
  );

  return Object
    .values(tree)
    .filter(n => !(tree[n.parent?.[parentProp]] && tree[n.parent?.[parentProp]].children.push(n)));
}