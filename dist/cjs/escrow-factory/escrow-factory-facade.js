"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EscrowFactoryFacade = void 0;
const chains_1 = require("../chains");
const escrow_factory_1 = require("./escrow-factory");
const escrow_factory_zksync_1 = require("./escrow-factory-zksync");
class EscrowFactoryFacade {
    constructor(chainId, factoryAddress) {
        this.factory = EscrowFactoryFacade.getFactory(chainId, factoryAddress);
    }
    get address() {
        return this.factory.address;
    }
    static getFactory(chainId, factoryAddress) {
        switch (chainId) {
            case chains_1.NetworkEnum.ZKSYNC:
                return new escrow_factory_zksync_1.EscrowFactoryZksync(factoryAddress);
            default:
                return new escrow_factory_1.EscrowFactory(factoryAddress);
        }
    }
    getEscrowAddress(
    /**
     * @see Immutables.hash
     */
    immutablesHash, 
    /**
     * Address of escrow implementation at the same chain as `this.address`
     */
    implementationAddress) {
        return this.factory.getEscrowAddress(immutablesHash, implementationAddress);
    }
    getSrcEscrowAddress(
    /**
     * From `SrcEscrowCreated` event (with correct timeLock.deployedAt)
     */
    srcImmutables, 
    /**
     * Address of escrow implementation at the same chain as `this.address`
     */
    implementationAddress) {
        return this.factory.getSrcEscrowAddress(srcImmutables, implementationAddress);
    }
    getDstEscrowAddress(
    /**
     * From `SrcEscrowCreated` event
     */
    srcImmutables, 
    /**
     * From `SrcEscrowCreated` event
     */
    complement, 
    /**
     * Block time when event `DstEscrowCreated` produced
     */
    blockTime, 
    /**
     * Taker from `DstEscrowCreated` event
     */
    taker, 
    /**
     * Address of escrow implementation at the same chain as `this.address`
     */
    implementationAddress) {
        return this.factory.getDstEscrowAddress(srcImmutables, complement, blockTime, taker, implementationAddress);
    }
    getMultipleFillInteraction(proof, idx, secretHash) {
        return this.factory.getMultipleFillInteraction(proof, idx, secretHash);
    }
}
exports.EscrowFactoryFacade = EscrowFactoryFacade;
//# sourceMappingURL=escrow-factory-facade.js.map