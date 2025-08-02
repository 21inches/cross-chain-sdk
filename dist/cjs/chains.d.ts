import { TupleToUnion } from './type-utils';
export declare enum NetworkEnum {
    ETHEREUM = 1,
    POLYGON = 137,
    ZKSYNC = 324,
    BINANCE = 56,
    ARBITRUM = 42161,
    AVALANCHE = 43114,
    OPTIMISM = 10,
    FANTOM = 250,
    GNOSIS = 100,
    COINBASE = 8453,
    LINEA = 59144,
    SONIC = 146,
    UNICHAIN = 130,
    ETHEREUMSEPOLIA = 11155111,
    BASESEPOLIA = 84532,
    NILETRON = 3448148188,
    ETHERLINKGHOSTNET = 128123,
    MONADTESTNET = 10143
}
export declare const SupportedChains: readonly [NetworkEnum.ETHEREUM, NetworkEnum.POLYGON, NetworkEnum.BINANCE, NetworkEnum.OPTIMISM, NetworkEnum.ARBITRUM, NetworkEnum.AVALANCHE, NetworkEnum.GNOSIS, NetworkEnum.COINBASE, NetworkEnum.ZKSYNC, NetworkEnum.LINEA, NetworkEnum.SONIC, NetworkEnum.UNICHAIN, NetworkEnum.ETHEREUMSEPOLIA, NetworkEnum.BASESEPOLIA, NetworkEnum.NILETRON, NetworkEnum.ETHERLINKGHOSTNET, NetworkEnum.MONADTESTNET];
type UnsupportedChain = Exclude<NetworkEnum, TupleToUnion<typeof SupportedChains>>;
export type SupportedChain = Exclude<NetworkEnum, UnsupportedChain>;
export declare const isSupportedChain: (chain: unknown) => chain is SupportedChain;
export {};
