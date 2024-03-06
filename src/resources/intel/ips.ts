// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as IPsAPI from 'cloudflare/resources/intel/ips';

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

export type IPGetResponse = Array<IPGetResponse.IPGetResponseItem>;

export namespace IPGetResponse {
  export interface IPGetResponseItem {
    /**
     * Specifies a reference to the autonomous systems (AS) that the IP address belongs
     * to.
     */
    belongs_to_ref?: IPGetResponseItem.BelongsToRef;

    ip?: string | string;

    risk_types?: unknown;
  }

  export namespace IPGetResponseItem {
    /**
     * Specifies a reference to the autonomous systems (AS) that the IP address belongs
     * to.
     */
    export interface BelongsToRef {
      id?: unknown;

      country?: string;

      description?: string;

      /**
       * Infrastructure type of this ASN.
       */
      type?: 'hosting_provider' | 'isp' | 'organization';

      value?: string;
    }
  }
}

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
  export import IPGetResponse = IPsAPI.IPGetResponse;
  export import IPGetParams = IPsAPI.IPGetParams;
}
