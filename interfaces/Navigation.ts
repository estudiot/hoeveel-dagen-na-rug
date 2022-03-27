interface NavigationItem {
  label: string
  pageLink: string
}

export default interface Navigation {
  items: NavigationItem[]
}
