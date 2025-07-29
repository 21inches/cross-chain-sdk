"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSupportedChain = exports.SupportedChains = void 0;
exports.SupportedChains = [
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
    NetworkEnum.BASESEPOLIA
];
const isSupportedChain = (chain) => exports.SupportedChains.includes(chain);
exports.isSupportedChain = isSupportedChain;
//# sourceMappingURL=chains.js.map