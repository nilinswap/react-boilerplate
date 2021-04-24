export interface ArtBlockProps {
  id: string
  cart: Array<string>
  setCart: (value: Array<string>) => void
  loggedin: boolean
}
