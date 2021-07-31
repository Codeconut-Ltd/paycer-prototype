import React from 'react'
import { Trans } from '@lingui/macro'
import Link from 'next/link'
import ProgressBar from '@components/atoms/progress-bars'
import Button from '@components/atoms/button'
import {FormattedNumber, Money, Percentage} from '@components/atoms/number'
import Card from '@components/molecules/card'
import { StrategyType } from '../../../types/investment'

interface PortfolioStrategy extends StrategyType {
  balance?: number
  tvl?: number
}

interface PortfolioProps {
  strategies: PortfolioStrategy[]
  totalBalance: number
}

export default function Portfolio(props: PortfolioProps) {
  const { strategies, totalBalance } = props

  return (
      <div className="table-responsive mb-0">
        <Card>
          <table className="table table-sm table-nowrap card-table">
            <thead>
            <tr>
              <th>
                  <span className="text-muted">
                    <Trans>Strategy</Trans>
                  </span>
              </th>
              <th>
                  <span className="text-muted">
                    <Trans>Balance</Trans>
                  </span>
              </th>
              <th>
                  <span className="text-muted">
                    <Trans>Investment ratio </Trans>
                  </span>
              </th>
              <th className="text-end">
                <a href="#" className="text-muted">
                  <Trans>Liquidity</Trans>
                </a>
              </th>
            </tr>
            </thead>
            <tbody className="list">
            {strategies.length ? strategies.map((strategy, key) => {
              const token = strategy.output
              const tokenBalance = strategy.balance

              return (
                <tr key={key}>
                  <td>
                    <span>{strategy.name}</span>
                  </td>
                  <td>
                    <FormattedNumber
                      value={tokenBalance}
                      minimumFractionDigits={2}
                      maximumFractionDigits={4}
                    />
                    &nbsp;{token.symbol}
                  </td>
                  <td className="text-end">
                    <div className="row align-items-center g-0">
                      <div className="col-auto me-3">
                        <Percentage
                          value={(tokenBalance * 100 / totalBalance) / 100}
                          className="mb-2"
                        />
                      </div>
                      <div className="col">
                        <ProgressBar
                          className="progress-sm"
                          now={tokenBalance * 100 / totalBalance}
                          min={0}
                          max={100}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="text-end">
                    <Money value={strategy.tvl} />
                  </td>
                </tr>
              )
            }) : (
              <tr>
                <td colSpan={4}>
                  <div className="text-center">
                    <h4 className="text-muted mb-4">
                      <Trans>You have no investments in your portfolio</Trans>
                    </h4>
                    <Link href="/invest">
                      <Button variant="primary">
                        <Trans>Invest now</Trans>
                      </Button>
                    </Link>
                  </div>
                </td>
              </tr>
            )}
            </tbody>
          </table>
        </Card>
      </div>
  )
}
