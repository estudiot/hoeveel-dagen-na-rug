export default interface Store<Datatype> {
  allIds: string[]
  byId: {
    [key: string]: Datatype
  }
}
