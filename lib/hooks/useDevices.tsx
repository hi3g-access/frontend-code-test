import { useQuery } from '@tanstack/react-query'
import { DeviceType } from '../types'

import getDevices from '../getDevices'

type UseDevices = {
  devices?: DeviceType[]
  isLoading: boolean
  isError: Error | null
}

function useDevices(): UseDevices {
  const { data, error } = useQuery({
    queryKey: ['devices'],
    queryFn: () => getDevices(),
  })

  return {
    devices: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useDevices
