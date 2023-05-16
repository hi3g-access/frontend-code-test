'use client'
import './globals.css'
import StyledComponentsRegistry from '../components/StyledComponentsRegistry'
import Layout from '../components/Layout'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <Layout>{children}</Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
