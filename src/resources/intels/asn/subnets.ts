// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SubnetsAPI from 'cloudflare/resources/intels/asn/subnets';

export class Subnets extends APIResource {
  /**
   * Get ASN Subnets
   */
  list(accountId: string, asn: number, options?: Core.RequestOptions): Core.APIPromise<SubnetListResponse> {
    return this._client.get(`/accounts/${accountId}/intel/asn/${asn}/subnets`, options);
  }
}

export interface SubnetListResponse {
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

export namespace Subnets {
  export import SubnetListResponse = SubnetsAPI.SubnetListResponse;
}
