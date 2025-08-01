"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoterCustomPresetRequest = void 0;
const fusion_sdk_1 = require("@1inch/fusion-sdk");
class QuoterCustomPresetRequest {
    constructor(params) {
        this.customPreset = params.customPreset;
    }
    static new(params) {
        return new QuoterCustomPresetRequest(params);
    }
    build() {
        return {
            auctionDuration: this.customPreset.auctionDuration,
            auctionEndAmount: this.customPreset.auctionEndAmount,
            auctionStartAmount: this.customPreset.auctionStartAmount,
            points: this.customPreset.points
        };
    }
    validate() {
        if (!(0, fusion_sdk_1.isValidAmount)(this.customPreset.auctionStartAmount)) {
            return 'Invalid auctionStartAmount';
        }
        if (!(0, fusion_sdk_1.isValidAmount)(this.customPreset.auctionEndAmount)) {
            return 'Invalid auctionEndAmount';
        }
        const durationErr = this.validateAuctionDuration(this.customPreset.auctionDuration);
        if (durationErr) {
            return durationErr;
        }
        const pointsErr = this.validatePoints(this.customPreset.points, this.customPreset.auctionStartAmount, this.customPreset.auctionEndAmount);
        if (pointsErr) {
            return pointsErr;
        }
        return null;
    }
    validateAuctionDuration(duration) {
        if (typeof duration !== 'number' || isNaN(duration)) {
            return 'auctionDuration should be integer';
        }
        if (!Number.isInteger(duration)) {
            return 'auctionDuration should be integer (not float)';
        }
        return null;
    }
    validatePoints(points = [], auctionStartAmount, auctionEndAmount) {
        if (!points) {
            return null;
        }
        try {
            const toTokenAmounts = points.map((p) => BigInt(p.toTokenAmount));
            const isValid = toTokenAmounts.every((amount) => amount <= BigInt(auctionStartAmount) &&
                amount >= BigInt(auctionEndAmount));
            if (!isValid) {
                return 'points should be in range of auction';
            }
        }
        catch (e) {
            return `points should be an array of valid amounts`;
        }
        return null;
    }
}
exports.QuoterCustomPresetRequest = QuoterCustomPresetRequest;
//# sourceMappingURL=quoter-custom-preset.request.js.map