export interface LoginProps {
  loggedin: boolean
  setLoggedin: (value: boolean) => void
  setCart: (value: Array<string>) => void
  next: string
  setNext: (value: string) => void
}
