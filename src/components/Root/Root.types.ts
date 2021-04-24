import { ArtifactType } from "~/App/App.types"

export interface RootProps {
  cart: Array<string>
  setCart: (value: Array<string>) => void
  artifacts: Array<ArtifactType>
  setLoggedin: (value: boolean) => void
  loggedin: boolean
  next: string
  setNext: (value: string) => void
}
