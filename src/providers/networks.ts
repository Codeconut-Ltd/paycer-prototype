import { ChainId } from '@usedapp/core'
import { explorers } from './explorers'
import { rpcUrls } from './rpcs'

export interface INetworkProvider {
    [chainId: number]: {
        chainId: string
        chainName: string
        nativeCurrency: {
            name: string
            symbol: string
            decimals: number
        }
        rpcUrls: string[]
        blockExplorerUrls: string[],
    }
}

export const testNetNetworks: INetworkProvider = {
    [ChainId.Ropsten]: {
        chainId: '0x3',
        chainName: 'Ropsten',
        nativeCurrency: {
            name: 'Ethereum - Ropsten',
            symbol: 'ETH',
            decimals: 18,
        },
        rpcUrls: [rpcUrls[ChainId.Ropsten]],
        blockExplorerUrls: [explorers[ChainId.Ropsten]],
    },
    [ChainId.Kovan]: {
        chainId: '0x2A',
        chainName: 'Kovan',
        nativeCurrency: {
            name: 'Ethereum - Kovan',
            symbol: 'ETH',
            decimals: 18,
        },
        rpcUrls: [rpcUrls[ChainId.Kovan]],
        blockExplorerUrls: [explorers[ChainId.Kovan]],
    },
    [ChainId.Rinkeby]: {
        chainId: '0x4',
        chainName: 'Rinkeby',
        nativeCurrency: {
            name: 'Ethereum - Rinkeby',
            symbol: 'ETH',
            decimals: 18,
        },
        rpcUrls: [rpcUrls[ChainId.Rinkeby]],
        blockExplorerUrls: [explorers[ChainId.Rinkeby]],
    },
    [ChainId.Goerli]: {
        chainId: '0x5',
        chainName: 'Goerli',
        nativeCurrency: {
            name: 'Ethereum - Goerli',
            symbol: 'ETH',
            decimals: 18,
        },
        rpcUrls: [rpcUrls[ChainId.Goerli]],
        blockExplorerUrls: [explorers[ChainId.Goerli]],
    },
    [ChainId.Mumbai]: {
        chainId: '0x13881',
        chainName: 'Matic',
        nativeCurrency: {
            name: 'Polygon (MATIC Mumbai)',
            symbol: 'MATIC',
            decimals: 18,
        },
        rpcUrls: [rpcUrls[ChainId.Mumbai]],
        blockExplorerUrls: [explorers[ChainId.Mumbai]],
    },
}

export const mainNetProviders: INetworkProvider = {
    [ChainId.Mainnet]: {
        chainId: '0x1',
        chainName: 'Ethereum',
        nativeCurrency: {
            name: 'Ethereum',
            symbol: 'ETH',
            decimals: 18,
        },
        rpcUrls: ['https://mainnet.infura.io/v3'],
        blockExplorerUrls: [explorers[ChainId.Mainnet]],
    },
    [ChainId.BSC]: {
        chainId: '0x38',
        chainName: 'BSC',
        nativeCurrency: {
            name: 'Binance Coin',
            symbol: 'BNB',
            decimals: 18,
        },
        rpcUrls: [rpcUrls[ChainId.BSC]],
        blockExplorerUrls: [explorers[ChainId.BSC]],
    },
    [ChainId.Polygon]: {
        chainId: '0x89',
        chainName: 'Polygon (Matic)',
        nativeCurrency: {
            name: 'Matic',
            symbol: 'MATIC',
            decimals: 18,
        },
        rpcUrls: [rpcUrls[ChainId.Polygon]],
        blockExplorerUrls: [explorers[ChainId.Polygon]],
    },
}
