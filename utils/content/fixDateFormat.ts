export default function fixDateFormat(item: any) {
  return item.date
    ? {
        ...item,
        date: String(item.date),
      }
    : item
}
