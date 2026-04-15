// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseIPs extends APIResource {
  static override readonly _key: readonly ['intel', 'ips'] = Object.freeze(['intel', 'ips'] as const);

  /**
   * Gets the geolocation, ASN, infrastructure type of the ASN, and any security
   * threat categories of an IP address. **Must provide ip query parameters.** For
   * example, `/intel/ip?ipv4=1.1.1.1` or `/intel/ip?ipv6=2001:db8::1`.
   *
   * @example
   * ```ts
   * const ips = await client.intel.ips.get({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  get(
    params: IPGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IPGetResponse | null> {
    const { account_id = this._client.accountID, ...query } = params ?? {};
    return (
      this._client.get(path`/accounts/${account_id}/intel/ip`, { query, ...options }) as APIPromise<{
        result: IPGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class IPs extends BaseIPs {}

export interface IP {
  /**
   * Specifies a reference to the autonomous systems (AS) that the IP address belongs
   * to.
   */
  belongs_to_ref?: IP.BelongsToRef;

  ip?: string;

  risk_types?: Array<IP.RiskType>;
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

  export interface RiskType {
    id?: number;

    name?: string;

    super_category_id?: number;
  }
}

export type IPGetResponse = Array<IP>;

export interface IPGetParams {
  /**
   * Path param: Identifier.
   */
  account_id?: string;

  /**
   * Query param
   */
  ipv4?: string;

  /**
   * Query param
   */
  ipv6?: string;
}

export declare namespace IPs {
  export { type IP as IP, type IPGetResponse as IPGetResponse, type IPGetParams as IPGetParams };
}
