import styled from 'styled-components'

const Wrapper = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`

type Props = {
  src: string
  alt: string
}

const Image: React.FC<Props> = ({ src, alt }) => <Wrapper alt={alt} src={src} />

export default Image
