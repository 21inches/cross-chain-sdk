import { HttpProviderConnector } from '@1inch/fusion-sdk';
export type FusionApiConfig = {
    url: string;
    authKey?: string;
    httpProvider?: HttpProviderConnector;
};
export type PaginationMeta = {
    totalItems: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
};
export type PaginationOutput<T extends Record<string, any> = Record<string, any>> = {
    meta: PaginationMeta;
    items: T[];
};
