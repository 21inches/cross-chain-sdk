import { NetworkEnum as MainnetNetworkEnum } from '@1inch/fusion-sdk'
import { TupleToUnion } from './type-utils'

export enum NetworkEnum {
    // Original networks from @1inch/fusion-sdk
    ETHEREUM = MainnetNetworkEnum.ETHEREUM,
    POLYGON = MainnetNetworkEnum.POLYGON,
    ZKSYNC = MainnetNetworkEnum.ZKSYNC,
    BINANCE = MainnetNetworkEnum.BINANCE,
    ARBITRUM = MainnetNetworkEnum.ARBITRUM,
    AVALANCHE = MainnetNetworkEnum.AVALANCHE,
    OPTIMISM = MainnetNetworkEnum.OPTIMISM,
    FANTOM = MainnetNetworkEnum.FANTOM,
    GNOSIS = MainnetNetworkEnum.GNOSIS,
    COINBASE = MainnetNetworkEnum.COINBASE,
    LINEA = MainnetNetworkEnum.LINEA,
    SONIC = MainnetNetworkEnum.SONIC,
    UNICHAIN = MainnetNetworkEnum.UNICHAIN,
    
    // Additional testnet chains
    ETHEREUMSEPOLIA = 11155111,
    BASESEPOLIA = 84532,
    NILETRON = 1001
}

export const SupportedChains = [
    NetworkEnum.ETHEREUM,
    NetworkEnum.POLYGON,
    NetworkEnum.BINANCE,
    NetworkEnum.OPTIMISM,
    NetworkEnum.ARBITRUM,
    NetworkEnum.AVALANCHE,
    NetworkEnum.GNOSIS,
    NetworkEnum.COINBASE,
    NetworkEnum.ZKSYNC,
    NetworkEnum.LINEA,
    NetworkEnum.SONIC,
    NetworkEnum.UNICHAIN,
    NetworkEnum.ETHEREUMSEPOLIA,
    NetworkEnum.BASESEPOLIA,
    NetworkEnum.NILETRON
] as const

type UnsupportedChain = Exclude<
    NetworkEnum,
    TupleToUnion<typeof SupportedChains>
>

export type SupportedChain = Exclude<NetworkEnum, UnsupportedChain>

export const isSupportedChain = (chain: unknown): chain is SupportedChain =>
    SupportedChains.includes(chain as number)
