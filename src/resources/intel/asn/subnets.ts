// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Subnets extends APIResource {
  /**
   * Get ASN Subnets
   */
  get(
    asn: Shared.ASNParam,
    params: SubnetGetParams,
    options?: RequestOptions,
  ): APIPromise<SubnetGetResponse> {
    const { account_id } = params;
    return this._client.get(path`/accounts/${account_id}/intel/asn/${asn}/subnets`, options);
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
   * Identifier
   */
  account_id: string;
}

export declare namespace Subnets {
  export { type SubnetGetResponse as SubnetGetResponse, type SubnetGetParams as SubnetGetParams };
}
