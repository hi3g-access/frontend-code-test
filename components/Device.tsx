import styled from 'styled-components'
import { DeviceType } from '../types'
import Image from './Image'

type Props = {
  device: DeviceType
}

const DeviceImage = styled(Image)``

const Wrapper = styled.div``

const StyledCardTitle = styled.div``

const Device: React.FC<Props> = ({ device }) => {
  const { brand, model } = device

  return (
    <Wrapper>
      <DeviceImage alt={device.model} src={device.image} />
      <StyledCardTitle>
        {brand} - {model}
      </StyledCardTitle>
    </Wrapper>
  )
}

export default Device
