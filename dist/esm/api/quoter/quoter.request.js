import { Address, isValidAmount } from '@1inch/fusion-sdk';
export class QuoterRequest {
    constructor(params) {
        if (params.srcChain === params.dstChain) {
            throw new Error('srcChain and dstChain should be different');
        }
        if (!isValidAmount(params.amount)) {
            throw new Error(`${params.amount} is invalid amount`);
        }
        this.srcChain = params.srcChain;
        this.dstChain = params.dstChain;
        this.srcTokenAddress = new Address(params.srcTokenAddress);
        this.dstTokenAddress = new Address(params.dstTokenAddress);
        this.walletAddress = new Address(params.walletAddress);
        this.enableEstimate = params.enableEstimate || false;
        this.permit = params.permit;
        this.fee = params.fee;
        this.source = params.source || 'sdk';
        this.isPermit2 = params.isPermit2 ?? false;
        if (this.srcTokenAddress.isNative()) {
            throw new Error(`cannot swap ${Address.NATIVE_CURRENCY}: wrap native currency to it's wrapper fist`);
        }
        if (this.dstTokenAddress.isZero()) {
            throw new Error(`replace ${Address.ZERO_ADDRESS} with ${Address.NATIVE_CURRENCY}`);
        }
        this.amount = BigInt(params.amount);
        if (this.fee && this.source === 'sdk') {
            throw new Error('cannot use fee without source');
        }
    }
    static new(params) {
        return new QuoterRequest(params);
    }
    build() {
        return {
            srcChain: this.srcChain,
            dstChain: this.dstChain,
            srcTokenAddress: this.srcTokenAddress.toString(),
            dstTokenAddress: this.dstTokenAddress.toString(),
            amount: this.amount.toString(),
            walletAddress: this.walletAddress.toString(),
            enableEstimate: this.enableEstimate,
            permit: this.permit,
            fee: this.fee,
            source: this.source,
            isPermit2: this.isPermit2
        };
    }
}
//# sourceMappingURL=quoter.request.js.map