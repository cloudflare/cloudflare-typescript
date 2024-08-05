// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as IPsAPI from './ips';

export class IPs extends APIResource {
  /**
   * Get IP Overview
   */
  get(params: IPGetParams, options?: Core.RequestOptions): Core.APIPromise<IPGetResponse | null> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/intel/ip`, { query, ...options }) as Core.APIPromise<{
        result: IPGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface IP {
  /**
   * Specifies a reference to the autonomous systems (AS) that the IP address belongs
   * to.
   */
  belongs_to_ref?: IP.BelongsToRef;

  ip?: string;

  risk_types?: Array<unknown>;
}

export namespace IP {
  /**
   * Specifies a reference to the autonomous systems (AS) that the IP address belongs
   * to.
   */
  export interface BelongsToRef {
    id?: string;

    country?: string;

    description?: string;

    /**
     * Infrastructure type of this ASN.
     */
    type?: 'hosting_provider' | 'isp' | 'organization';

    value?: string;
  }
}

export type IPGetResponse = Array<IP>;

export interface IPGetParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param:
   */
  ipv4?: string;

  /**
   * Query param:
   */
  ipv6?: string;
}

export namespace IPs {
  export import IP = IPsAPI.IP;
  export import IPGetResponse = IPsAPI.IPGetResponse;
  export import IPGetParams = IPsAPI.IPGetParams;
}
