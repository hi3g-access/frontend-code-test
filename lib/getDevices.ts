import fetcher from './fetcher'
import { DeviceType } from './types'

const getDevices = async (isSsr = false): Promise<DeviceType[]> => {
  const host = isSsr ? 'http://localhost:3000' : ''
  const response = await fetcher<DeviceType[]>(`${host}/api/devices`)
  return response
}

export default getDevices
