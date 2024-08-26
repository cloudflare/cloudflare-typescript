// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import { APIPromise } from '../core';
import * as Core from '../core';
import * as IPsAPI from './ips';

export class IPs extends APIResource {
  /**
   * Get IPs used on the Cloudflare/JD Cloud network, see
   * https://www.cloudflare.com/ips for Cloudflare IPs or
   * https://developers.cloudflare.com/china-network/reference/infrastructure/ for JD
   * Cloud IPs.
   */
  list(query?: IPListParams, options?: Core.RequestOptions): Core.APIPromise<IPListResponse>
  list(options?: Core.RequestOptions): Core.APIPromise<IPListResponse>
  list(query: IPListParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<IPListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return (this._client.get('/ips', { query, ...options }) as Core.APIPromise<{ result: IPListResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export interface IPs {
  /**
   * A digest of the IP data. Useful for determining if the data has changed.
   */
  etag?: string;

  /**
   * List of Cloudflare IPv4 CIDR addresses.
   */
  ipv4_cidrs?: Array<string>;

  /**
   * List of Cloudflare IPv6 CIDR addresses.
   */
  ipv6_cidrs?: Array<string>;
}

export interface JDCloudIPs {
  /**
   * A digest of the IP data. Useful for determining if the data has changed.
   */
  etag?: string;

  /**
   * List of Cloudflare IPv4 CIDR addresses.
   */
  ipv4_cidrs?: Array<string>;

  /**
   * List of Cloudflare IPv6 CIDR addresses.
   */
  ipv6_cidrs?: Array<string>;

  /**
   * List IPv4 and IPv6 CIDRs, only populated if `?networks=jdcloud` is used.
   */
  jdcloud_cidrs?: Array<string>;
}

export type IPListResponse = IPs | JDCloudIPs

export interface IPListParams {
  /**
   * Specified as `jdcloud` to list IPs used by JD Cloud data centers.
   */
  networks?: string;
}
