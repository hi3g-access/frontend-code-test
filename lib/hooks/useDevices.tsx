import { useQuery } from '@tanstack/react-query'
import { DeviceType } from '../types'
import fetcher from '../fetcher'

type UseDevices = {
  devices?: DeviceType[]
  isLoading: boolean
  isError: Error | null
}

const getDevices = async (): Promise<DeviceType[]> => {
  const response = await fetcher<DeviceType[]>('/api/devices')
  return response
}

function useDevices(): UseDevices {
  const { data, error } = useQuery({
    queryKey: ['devices'],
    queryFn: getDevices,
  })

  return {
    devices: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useDevices
