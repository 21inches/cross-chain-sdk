export var NetworkEnum;
(function (NetworkEnum) {
    // Original networks from @1inch/fusion-sdk
    NetworkEnum[NetworkEnum["ETHEREUM"] = 1] = "ETHEREUM";
    NetworkEnum[NetworkEnum["POLYGON"] = 137] = "POLYGON";
    NetworkEnum[NetworkEnum["ZKSYNC"] = 324] = "ZKSYNC";
    NetworkEnum[NetworkEnum["BINANCE"] = 56] = "BINANCE";
    NetworkEnum[NetworkEnum["ARBITRUM"] = 42161] = "ARBITRUM";
    NetworkEnum[NetworkEnum["AVALANCHE"] = 43114] = "AVALANCHE";
    NetworkEnum[NetworkEnum["OPTIMISM"] = 10] = "OPTIMISM";
    NetworkEnum[NetworkEnum["FANTOM"] = 250] = "FANTOM";
    NetworkEnum[NetworkEnum["GNOSIS"] = 100] = "GNOSIS";
    NetworkEnum[NetworkEnum["COINBASE"] = 8453] = "COINBASE";
    NetworkEnum[NetworkEnum["LINEA"] = 59144] = "LINEA";
    NetworkEnum[NetworkEnum["SONIC"] = 146] = "SONIC";
    NetworkEnum[NetworkEnum["UNICHAIN"] = 130] = "UNICHAIN";
    // Additional testnet chains
    NetworkEnum[NetworkEnum["ETHEREUMSEPOLIA"] = 11155111] = "ETHEREUMSEPOLIA";
    NetworkEnum[NetworkEnum["BASESEPOLIA"] = 84532] = "BASESEPOLIA";
    NetworkEnum[NetworkEnum["NILETRON"] = 1001] = "NILETRON";
    NetworkEnum[NetworkEnum["ETHERLINKGHOSTNET"] = 128123] = "ETHERLINKGHOSTNET";
    NetworkEnum[NetworkEnum["MONADTESTNET"] = 10143] = "MONADTESTNET";
})(NetworkEnum || (NetworkEnum = {}));
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
    NetworkEnum.NILETRON,
    NetworkEnum.ETHERLINKGHOSTNET,
    NetworkEnum.MONADTESTNET,
];
export const isSupportedChain = (chain) => SupportedChains.includes(chain);
//# sourceMappingURL=chains.js.map