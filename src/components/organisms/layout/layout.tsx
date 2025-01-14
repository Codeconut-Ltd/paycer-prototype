import React from 'react'
import Header from '@components/organisms/header'
import Network from '@components/organisms/web3/network'
import useNetwork from '@hooks/use-network'
import { Trans } from '@lingui/macro'
import styled from 'styled-components'

export interface LayoutProps {
  children: any
}

const Layout = (props: LayoutProps) => {
  const { children } = props
  const network = useNetwork()

  if (network.supportedChain) {
    return (
      <>
        <Header />
        <main role="main">
          {children}
        </main>
      </>
    )
  }

  return (
    <>
      <Header />
      <main role="main">
        <div className="d-flex flex-column align-items-center justify-content-center mt-8">
          <h1><Trans>Network not supported</Trans></h1>
          <Network>
            <Trans>Change network</Trans>
          </Network>
        </div>
      </main>
    </>
  )

}

export default Layout
