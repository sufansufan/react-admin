export function idToLevel(tree, id, childName = 'children') {
  const level = [];
  (function idToLevel(data, id, parent){
    Array.isArray(data) &&
      data.forEach((item, index) => {
        if(item.id !== id){
          item[childName] && idToLevel(item[childName], id, [data, index])
        } else {
          parent && idToLevel(tree, parent[0][parent[1]].id)
          level.push(
            {
              id: String(item.id),
              name: item.name
            }
          )
        }
      })
  })(tree, id)
  return level
}
