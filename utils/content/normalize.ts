// Fix the type of this
export default (id: string) => (items: any[]) => {
  const allIds = items.map(item => item[id])

  const byId = items.reduce((collection, item) => {
    return {
      ...collection,
      [item[id]]: item,
    }
  }, {})

  return {
    byId,
    allIds,
  }
}
