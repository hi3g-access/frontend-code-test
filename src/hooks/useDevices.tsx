import useSWR from 'swr'
import fetcher from '../lib/fetcher'
import { DeviceType } from '../types'

type UseDevices = {
  devices?: DeviceType[]
  isLoading: boolean
  isError: Error
}

function useDevices(): UseDevices {
  const { data, error } = useSWR('/api/devices', fetcher<DeviceType[]>)

  return {
    devices: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useDevices
