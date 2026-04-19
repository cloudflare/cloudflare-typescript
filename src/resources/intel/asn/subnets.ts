// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as Shared from '../../shared';

export class Subnets extends APIResource {
  /**
   * Get ASN Subnets.
   *
   * @example
   * ```ts
   * const subnet = await client.intel.asn.subnets.get(0, {
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  get(
    asn: Shared.ASNParam,
    params?: SubnetGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubnetGetResponse>;
  get(asn: Shared.ASNParam, options?: Core.RequestOptions): Core.APIPromise<SubnetGetResponse>;
  get(
    asn: Shared.ASNParam,
    params: SubnetGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubnetGetResponse> {
    if (isRequestOptions(params)) {
      return this.get(asn, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return this._client.get(`/accounts/${account_id}/intel/asn/${asn}/subnets`, options);
  }
}

export interface SubnetGetResponse {
  asn?: Shared.ASN;

  /**
   * Total results returned based on your search parameters.
   */
  count?: number;

  ip_count_total?: number;

  /**
   * Current page within paginated list of results.
   */
  page?: number;

  /**
   * Number of results per page of results.
   */
  per_page?: number;

  subnets?: Array<string>;
}

export interface SubnetGetParams {
  /**
   * Identifier.
   */
  account_id?: string;
}

export declare namespace Subnets {
  export { type SubnetGetResponse as SubnetGetResponse, type SubnetGetParams as SubnetGetParams };
}
