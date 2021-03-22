import * as React from 'react'
import styled from 'styled-components'

const StyledImage = styled.img`
  width: 100px;
  height: 100px;
`

type Props = {
  src: string
  alt: string
}

const Image: React.FC<Props> = ({ src, alt }) => {
  return <StyledImage alt={alt} src={src} />
}

export default Image
