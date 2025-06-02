// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';

export class IPs extends APIResource {}

/**
 * The set of IPs on the Address Map.
 */
export type IPs = Array<IPs.IPItem>;

export namespace IPs {
  export interface IPItem {
    created_at?: string;

    /**
     * An IPv4 or IPv6 address.
     */
    ip?: string;
  }
}

export declare namespace IPs {
  export { type IPs as IPs };
}
