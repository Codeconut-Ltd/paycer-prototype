import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useBlockNumber } from '@usedapp/core'
import { t } from '@lingui/macro'
import IndicatorItem from '@components/atoms/indicator-item'
import LinkExternal from '@components/atoms/link-external'
import useNetwork from '@hooks/use-network'
import useWallet from '@hooks/use-wallet'
import { getExplorerBlockUrl } from '@providers/explorers'

/**
 * z-index is intentionally below any of Bootstrap's components.
 *
 * @see https://getbootstrap.com/docs/5.0/layout/z-index
 */
const StyledBlockConnectionStatus = styled.div`
    z-index: 990;
    background: rgba(0, 0, 0, 0.85);
    border-radius: 0.25rem;
    right: 1rem;
    bottom: 1rem;
    padding: 0.25rem 0.5rem;
`

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
    <StyledBlockConnectionStatus className="position-fixed">
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
    </StyledBlockConnectionStatus>
  )
}
