// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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

export interface IntelSchemasIP {
  /**
   * Specifies a reference to the autonomous systems (AS) that the IP address belongs
   * to.
   */
  belongs_to_ref?: IntelSchemasIP.BelongsToRef;

  ip?: string | string;

  risk_types?: Array<unknown>;
}

export namespace IntelSchemasIP {
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

export type IPGetResponse = Array<IntelSchemasIP>;

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
  export import IntelSchemasIP = IPsAPI.IntelSchemasIP;
  export import IPGetResponse = IPsAPI.IPGetResponse;
  export import IPGetParams = IPsAPI.IPGetParams;
}
