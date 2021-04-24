export interface HeaderProps {
  cartLength: number
  loggedin: boolean
  setLoggedin: (value: boolean) => void
  setCart: (value: Array<string>) => void
}
