// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as DNSAPI from './dns';
import * as Shared from '../shared';
import { V4PagePagination, type V4PagePaginationParams } from '../../pagination';

export class DNS extends APIResource {
  /**
   * Get Passive DNS by IP
   */
  list(
    params: DNSListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DNSListResponsesV4PagePagination, DNSListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(`/accounts/${account_id}/intel/dns`, DNSListResponsesV4PagePagination, {
      query,
      ...options,
    });
  }
}

export class DNSListResponsesV4PagePagination extends V4PagePagination<DNSListResponse> {}

export interface DNS {
  /**
   * Total results returned based on your search parameters.
   */
  count?: number;

  /**
   * Current page within paginated list of results.
   */
  page?: number;

  /**
   * Number of results per page of results.
   */
  per_page?: number;

  /**
   * Reverse DNS look-ups observed during the time period.
   */
  reverse_records?: Array<DNS.ReverseRecord>;
}

export namespace DNS {
  export interface ReverseRecord {
    /**
     * First seen date of the DNS record during the time period.
     */
    first_seen?: string;

    /**
     * Hostname that the IP was observed resolving to.
     */
    hostname?: unknown;

    /**
     * Last seen date of the DNS record during the time period.
     */
    last_seen?: string;
  }
}

export interface DNSListResponse {
  errors: Array<Shared.ResponseInfo>;

  messages: Array<Shared.ResponseInfo>;

  /**
   * Whether the API call was successful
   */
  success: true;

  result?: DNS;
}

export interface DNSListParams extends V4PagePaginationParams {
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
  start_end_params?: DNSListParams.StartEndParams;
}

export namespace DNSListParams {
  export interface StartEndParams {
    /**
     * Defaults to the current date.
     */
    end?: string;

    /**
     * Defaults to 30 days before the end parameter value.
     */
    start?: string;
  }
}

export namespace DNS {
  export import DNS = DNSAPI.DNS;
  export import DNSListResponse = DNSAPI.DNSListResponse;
  export import DNSListResponsesV4PagePagination = DNSAPI.DNSListResponsesV4PagePagination;
  export import DNSListParams = DNSAPI.DNSListParams;
}
