import React from "react"
import { Link } from "react-router-dom"
import { ScParent, ScCell, ScImageBlock } from "./Gallery.styles"
import { GalleryProps } from "./Gallery.types"

const Gallery: React.FC<GalleryProps> = ({ artifacts }) => {
  return (
    <ScParent>
      {artifacts.map(artifact => {
        let val = `${artifact.id}-cell`
        return (
          <ScCell key={val}>
            <Link to={`/art/${artifact.id}`}>
              <ScImageBlock>{artifact.id}</ScImageBlock>
            </Link>
          </ScCell>
        )
      })}
    </ScParent>
  )
}

export default Gallery
