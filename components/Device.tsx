import { DeviceType } from '../lib/types'
import Image from 'next/image'

type Props = {
  device: DeviceType
}

const Device: React.FC<Props> = ({ device }) => {
  const { brand, model } = device

  return (
    <div>
      <Image
        alt={device.model}
        src={device.image}
        width={100}
        height={100}
        className="h-[100px] w-[100px] object-contain"
      />
      <div>
        {brand} - {model}
      </div>
    </div>
  )
}

export default Device
