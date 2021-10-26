import { t } from '@lingui/macro'
import { supportedChains, supportedStakingChains } from './network'

export const routes = [
  {
    label: t`Portfolio`,
    path: '/',
    supportedChains
  },
  {
    label: t`Invest`,
    path: '/invest',
    supportedChains,
    subroutes: [
      {
        path: '/invest/create',
      }
    ]
  },
  {
    label: t`Staking`,
    path: '/staking',
    supportedChains: supportedStakingChains
  },
  {
    label: t`Swap`,
    path: '/swap',
    supportedChains
  },
  {
    label: t`Tests - DEV`,
    path: '/tests-dev',
    supportedChains
  }
]
