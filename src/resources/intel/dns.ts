// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { V4PagePagination, type V4PagePaginationParams } from '../../pagination';

export class DNS extends APIResource {
  /**
   * Gets a list of all the domains that have resolved to a specific IP address.
   */
  list(params: DNSListParams, options?: Core.RequestOptions): Core.PagePromise<DNSV4PagePagination, DNS> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(`/accounts/${account_id}/intel/dns`, DNSV4PagePagination, {
      query,
      ...options,
    });
  }
}

export class DNSV4PagePagination extends V4PagePagination<DNS> {}

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
    hostname?: string;

    /**
     * Last seen date of the DNS record during the time period.
     */
    last_seen?: string;
  }
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

DNS.DNSV4PagePagination = DNSV4PagePagination;

export declare namespace DNS {
  export { type DNS as DNS, DNSV4PagePagination as DNSV4PagePagination, type DNSListParams as DNSListParams };
}
