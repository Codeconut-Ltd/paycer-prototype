import React from 'react'
import {Trans} from '@lingui/macro'
import PageHeader from '@components/molecules/page-header'
import DashCards from './components/dash-cards'
import Portfolio from './components/portfolio'

export default function Home() {
  return (
    <div className="container mt-3">
      <PageHeader>
        <div className="row align-items-center">
          <div className="col">
            <PageHeader.Subtitle>
              <Trans>Overview</Trans>
            </PageHeader.Subtitle>
            <PageHeader.Title>
              <Trans>Portfolio</Trans>
            </PageHeader.Title>
          </div>
        </div>
      </PageHeader>
      <DashCards />
      <div className="row position-relatives">
        <div className="col-12">
          <div className="blur-background">
            <Portfolio />
          </div>
        </div>
      </div>
    </div>
  )
}

