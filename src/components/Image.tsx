import * as React from 'react'
import styled from 'styled-components'

const StyledImage = styled.img`
  /* height: 100%;
  width: 400px; */
  object-fit: contain;
  overflow: hidden;
`

type Props = {
  src: string
  alt: string
}

const Image: React.FC<Props> = ({ src, alt }) => {
  return <StyledImage alt={alt} src={src} />
}

export default Image
