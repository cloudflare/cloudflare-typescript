// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SubnetsAPI from 'cloudflare/resources/intel/asn/subnets';

export class Subnets extends APIResource {
  /**
   * Get ASN Subnets
   */
  get(
    asn: number,
    params: SubnetGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubnetGetResponse> {
    const { account_id } = params;
    return this._client.get(`/accounts/${account_id}/intel/asn/${asn}/subnets`, options);
  }
}

export interface SubnetGetResponse {
  asn?: number;

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

export namespace Subnets {
  export import SubnetGetResponse = SubnetsAPI.SubnetGetResponse;
  export import SubnetGetParams = SubnetsAPI.SubnetGetParams;
}
