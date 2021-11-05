import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useBlockNumber } from '@usedapp/core'
import { t } from '@lingui/macro'
import IndicatorItem from '@components/atoms/indicator-item'
import LinkExternal from '@components/atoms/link-external'
import useNetwork from '@hooks/use-network'
import useWallet from '@hooks/use-wallet'
import { getExplorerBlockUrl } from '@providers/explorers'

export default function BlockConnectionStatus() {
  const network = useNetwork()
  const blockNumber: number | undefined = useBlockNumber()
  const wallet = useWallet()
  const [href, setHref] = useState(null)

  console.log(wallet, href)

  useEffect(() => {
    if (!wallet.isConnected || !blockNumber) {
      return
    }

    const explorerBlockUrl = getExplorerBlockUrl(network.chainId, blockNumber)
    setHref(explorerBlockUrl)

    return () => setHref(null)
  }, [blockNumber, network.chainId])

  return (
    <div className="portal-test">
      {href ? (
        <IndicatorItem state="success" title={t`View block details`}>
          <LinkExternal href={href}>
            {blockNumber}
          </LinkExternal>
        </IndicatorItem>
      ) : (
        <IndicatorItem state="danger" title={t`Login to your wallet to see block details`}>
            {t`Disconnected`}
        </IndicatorItem>
      )}
    </div>
  )
}
