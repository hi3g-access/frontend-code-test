'use client'
import './globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import StyledComponentsRegistry from '../components/StyledComponentsRegistry'
import Layout from '../components/Layout'

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <QueryClientProvider client={queryClient}>
          <StyledComponentsRegistry>
            <Layout>{children}</Layout>
          </StyledComponentsRegistry>
        </QueryClientProvider>
      </body>
    </html>
  )
}
