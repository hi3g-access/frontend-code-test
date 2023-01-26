import { NextApiRequest, NextApiResponse } from 'next'
import devicesData from './devices.json'

const devices = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  return res.json(devicesData)
}

export default devices
