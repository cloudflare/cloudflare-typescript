// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DNSAPI from 'cloudflare/resources/intel/dns';

export class DNS extends APIResource {
  /**
   * Get Passive DNS by IP
   */
  get(params: DNSGetParams, options?: Core.RequestOptions): Core.APIPromise<IntelPassiveDNSByIP> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/intel/dns`, { query, ...options }) as Core.APIPromise<{
        result: IntelPassiveDNSByIP;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface IntelPassiveDNSByIP {
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
  reverse_records?: Array<IntelPassiveDNSByIP.ReverseRecord>;
}

export namespace IntelPassiveDNSByIP {
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
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param:
   */
  ipv4?: string;

  /**
   * Query param: Requested page within paginated list of results.
   */
  page?: number;

  /**
   * Query param: Maximum number of results requested.
   */
  per_page?: number;

  /**
   * Query param:
   */
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
  export import IntelPassiveDNSByIP = DNSAPI.IntelPassiveDNSByIP;
  export import DNSGetParams = DNSAPI.DNSGetParams;
}
