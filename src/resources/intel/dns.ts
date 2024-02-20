// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as DNSAPI from 'cloudflare/resources/intel/dns';

export class DNS extends APIResource {
  /**
   * Get Passive DNS by IP
   */
  get(
    accountId: string,
    query?: DNSGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DNSGetResponse>;
  get(accountId: string, options?: Core.RequestOptions): Core.APIPromise<DNSGetResponse>;
  get(
    accountId: string,
    query: DNSGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DNSGetResponse> {
    if (isRequestOptions(query)) {
      return this.get(accountId, {}, query);
    }
    return (
      this._client.get(`/accounts/${accountId}/intel/dns`, { query, ...options }) as Core.APIPromise<{
        result: DNSGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface DNSGetResponse {
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
  reverse_records?: Array<DNSGetResponse.ReverseRecord>;
}

export namespace DNSGetResponse {
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

export interface DNSGetParams {
  ipv4?: string;

  /**
   * Requested page within paginated list of results.
   */
  page?: number;

  /**
   * Maximum number of results requested.
   */
  per_page?: number;

  start_end_params?: DNSGetParams.StartEndParams;
}

export namespace DNSGetParams {
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
  export import DNSGetResponse = DNSAPI.DNSGetResponse;
  export import DNSGetParams = DNSAPI.DNSGetParams;
}
