import { NextResponse } from 'next/server'
import devicesData from './devices.json'

export async function GET() {
  return NextResponse.json(devicesData)
}
