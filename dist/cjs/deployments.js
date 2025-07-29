"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ESCROW_FACTORY = exports.ESCROW_DST_IMPLEMENTATION = exports.ESCROW_SRC_IMPLEMENTATION = exports.TRUE_ERC20 = void 0;
const fusion_sdk_1 = require("@1inch/fusion-sdk");
const TrueERC20 = new fusion_sdk_1.Address('0xda0000d4000015a526378bb6fafc650cea5966f8');
const ZKTrueERC20 = new fusion_sdk_1.Address('0xd66097c27eb8dee404bac235737932260edc6f3b');
exports.TRUE_ERC20 = {
    [fusion_sdk_1.NetworkEnum.ETHEREUM]: TrueERC20,
    [fusion_sdk_1.NetworkEnum.POLYGON]: TrueERC20,
    [fusion_sdk_1.NetworkEnum.OPTIMISM]: TrueERC20,
    [fusion_sdk_1.NetworkEnum.BINANCE]: TrueERC20,
    [fusion_sdk_1.NetworkEnum.AVALANCHE]: TrueERC20,
    [fusion_sdk_1.NetworkEnum.COINBASE]: TrueERC20,
    [fusion_sdk_1.NetworkEnum.FANTOM]: TrueERC20,
    [fusion_sdk_1.NetworkEnum.GNOSIS]: TrueERC20,
    [fusion_sdk_1.NetworkEnum.ARBITRUM]: TrueERC20,
    [fusion_sdk_1.NetworkEnum.ZKSYNC]: ZKTrueERC20,
    [fusion_sdk_1.NetworkEnum.LINEA]: TrueERC20,
    [fusion_sdk_1.NetworkEnum.SONIC]: TrueERC20,
    [fusion_sdk_1.NetworkEnum.UNICHAIN]: TrueERC20,
    [fusion_sdk_1.NetworkEnum.ETHEREUMSEPOLIA]: new fusion_sdk_1.Address(''),
    [fusion_sdk_1.NetworkEnum.BASESEPOLIA]: new fusion_sdk_1.Address('')
};
const ESCROW_FACTORY_ADDRESS = new fusion_sdk_1.Address('0xa7bcb4eac8964306f9e3764f67db6a7af6ddf99a');
const ESCROW_ZK_FACTORY_ADDRESS = new fusion_sdk_1.Address('0x584aeab186d81dbb52a8a14820c573480c3d4773');
const ESCROW_SRC_IMPLEMENTATION_ADDRESS = new fusion_sdk_1.Address('0xcd70bf33cfe59759851db21c83ea47b6b83bef6a');
const ESCROW_ZK_SRC_IMPLEMENTATION_ADDRESS = new fusion_sdk_1.Address('0xddc60c7babfc55d8030f51910b157e179f7a41fc');
const ESCROW_DST_IMPLEMENTATION_ADDRESS = new fusion_sdk_1.Address('0x9c3e06659f1c34f930ce97fcbce6e04ae88e535b');
const ESCROW_ZK_DST_IMPLEMENTATION_ADDRESS = new fusion_sdk_1.Address('0xdc4ccc2fc2475d0ed3fddd563c44f2bf6a3900c9');
exports.ESCROW_SRC_IMPLEMENTATION = {
    [fusion_sdk_1.NetworkEnum.ETHEREUM]: ESCROW_SRC_IMPLEMENTATION_ADDRESS,
    [fusion_sdk_1.NetworkEnum.POLYGON]: ESCROW_SRC_IMPLEMENTATION_ADDRESS,
    [fusion_sdk_1.NetworkEnum.OPTIMISM]: ESCROW_SRC_IMPLEMENTATION_ADDRESS,
    [fusion_sdk_1.NetworkEnum.BINANCE]: ESCROW_SRC_IMPLEMENTATION_ADDRESS,
    [fusion_sdk_1.NetworkEnum.AVALANCHE]: ESCROW_SRC_IMPLEMENTATION_ADDRESS,
    [fusion_sdk_1.NetworkEnum.COINBASE]: ESCROW_SRC_IMPLEMENTATION_ADDRESS,
    [fusion_sdk_1.NetworkEnum.FANTOM]: ESCROW_SRC_IMPLEMENTATION_ADDRESS,
    [fusion_sdk_1.NetworkEnum.GNOSIS]: ESCROW_SRC_IMPLEMENTATION_ADDRESS,
    [fusion_sdk_1.NetworkEnum.ARBITRUM]: ESCROW_SRC_IMPLEMENTATION_ADDRESS,
    [fusion_sdk_1.NetworkEnum.ZKSYNC]: ESCROW_ZK_SRC_IMPLEMENTATION_ADDRESS,
    [fusion_sdk_1.NetworkEnum.LINEA]: ESCROW_SRC_IMPLEMENTATION_ADDRESS,
    [fusion_sdk_1.NetworkEnum.SONIC]: ESCROW_SRC_IMPLEMENTATION_ADDRESS,
    [fusion_sdk_1.NetworkEnum.UNICHAIN]: ESCROW_SRC_IMPLEMENTATION_ADDRESS,
    [fusion_sdk_1.NetworkEnum.ETHEREUMSEPOLIA]: new fusion_sdk_1.Address('0xa17ddb01f03a42e0070a0e25099cf3d27b705fff'),
    [fusion_sdk_1.NetworkEnum.BASESEPOLIA]: new fusion_sdk_1.Address('0xe55061a78bf30e7f38410b90a6a167d5621cc068')
};
exports.ESCROW_DST_IMPLEMENTATION = {
    [fusion_sdk_1.NetworkEnum.ETHEREUM]: ESCROW_DST_IMPLEMENTATION_ADDRESS,
    [fusion_sdk_1.NetworkEnum.POLYGON]: ESCROW_DST_IMPLEMENTATION_ADDRESS,
    [fusion_sdk_1.NetworkEnum.OPTIMISM]: ESCROW_DST_IMPLEMENTATION_ADDRESS,
    [fusion_sdk_1.NetworkEnum.BINANCE]: ESCROW_DST_IMPLEMENTATION_ADDRESS,
    [fusion_sdk_1.NetworkEnum.AVALANCHE]: ESCROW_DST_IMPLEMENTATION_ADDRESS,
    [fusion_sdk_1.NetworkEnum.COINBASE]: ESCROW_DST_IMPLEMENTATION_ADDRESS,
    [fusion_sdk_1.NetworkEnum.FANTOM]: ESCROW_DST_IMPLEMENTATION_ADDRESS,
    [fusion_sdk_1.NetworkEnum.GNOSIS]: ESCROW_DST_IMPLEMENTATION_ADDRESS,
    [fusion_sdk_1.NetworkEnum.ARBITRUM]: ESCROW_DST_IMPLEMENTATION_ADDRESS,
    [fusion_sdk_1.NetworkEnum.ZKSYNC]: ESCROW_ZK_DST_IMPLEMENTATION_ADDRESS,
    [fusion_sdk_1.NetworkEnum.LINEA]: ESCROW_DST_IMPLEMENTATION_ADDRESS,
    [fusion_sdk_1.NetworkEnum.SONIC]: ESCROW_DST_IMPLEMENTATION_ADDRESS,
    [fusion_sdk_1.NetworkEnum.UNICHAIN]: ESCROW_DST_IMPLEMENTATION_ADDRESS,
    [fusion_sdk_1.NetworkEnum.ETHEREUMSEPOLIA]: new fusion_sdk_1.Address('0x7490329e69ab8e298a32dc59493034e4d02a5ccf '),
    [fusion_sdk_1.NetworkEnum.BASESEPOLIA]: new fusion_sdk_1.Address('0x0418b6e80a602474fbfadc3a2594413fe68496bb')
};
exports.ESCROW_FACTORY = {
    [fusion_sdk_1.NetworkEnum.ETHEREUM]: ESCROW_FACTORY_ADDRESS,
    [fusion_sdk_1.NetworkEnum.POLYGON]: ESCROW_FACTORY_ADDRESS,
    [fusion_sdk_1.NetworkEnum.OPTIMISM]: ESCROW_FACTORY_ADDRESS,
    [fusion_sdk_1.NetworkEnum.BINANCE]: ESCROW_FACTORY_ADDRESS,
    [fusion_sdk_1.NetworkEnum.AVALANCHE]: ESCROW_FACTORY_ADDRESS,
    [fusion_sdk_1.NetworkEnum.COINBASE]: ESCROW_FACTORY_ADDRESS,
    [fusion_sdk_1.NetworkEnum.FANTOM]: ESCROW_FACTORY_ADDRESS,
    [fusion_sdk_1.NetworkEnum.GNOSIS]: ESCROW_FACTORY_ADDRESS,
    [fusion_sdk_1.NetworkEnum.ARBITRUM]: ESCROW_FACTORY_ADDRESS,
    [fusion_sdk_1.NetworkEnum.ZKSYNC]: ESCROW_ZK_FACTORY_ADDRESS,
    [fusion_sdk_1.NetworkEnum.LINEA]: ESCROW_FACTORY_ADDRESS,
    [fusion_sdk_1.NetworkEnum.SONIC]: ESCROW_FACTORY_ADDRESS,
    [fusion_sdk_1.NetworkEnum.UNICHAIN]: ESCROW_FACTORY_ADDRESS,
    [fusion_sdk_1.NetworkEnum.ETHEREUMSEPOLIA]: new fusion_sdk_1.Address('0x61a32a9263c6ff568c66799a94f8fe09c1db7a66'),
    [fusion_sdk_1.NetworkEnum.BASESEPOLIA]: new fusion_sdk_1.Address('0x178ddaca4499a89e40826ec247baf608051edf9e')
};
//# sourceMappingURL=deployments.js.map