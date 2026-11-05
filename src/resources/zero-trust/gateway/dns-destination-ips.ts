// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseDNSDestinationIPs extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'gateway', 'dnsDestinationIPs'] = Object.freeze([
    'zeroTrust',
    'gateway',
    'dnsDestinationIPs',
  ] as const);

  /**
   * List Zero Trust Gateway IPv4 address pairs for an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const dnsDestinationIPListResponse of client.zeroTrust.gateway.dnsDestinationIPs.list(
   *   { account_id: '699d98642c564d2e855e9661899b7252' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: DNSDestinationIPListParams,
    options?: RequestOptions,
  ): PagePromise<DNSDestinationIPListResponsesSinglePage, DNSDestinationIPListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/gateway/dns_destination_ips`,
      SinglePage<DNSDestinationIPListResponse>,
      options,
    );
  }
}
export class DNSDestinationIPs extends BaseDNSDestinationIPs {}

export type DNSDestinationIPListResponsesSinglePage = SinglePage<DNSDestinationIPListResponse>;

/**
 * Indicate the identifier of the pair of IPv4 addresses assigned to this location.
 */
export type DNSDestinationIPsID = string;

export interface DNSDestinationIPListResponse {
  id: string;

  backup_ip: string;

  /**
   * Specify whether the pair shared across multiple accounts (shared) or available
   * exclusively to this account. Non-shared pairs can contain Cloudflare-owned IPs
   * (dedicated) or customer-provided IPs (byoip).
   */
  pair_type: 'shared' | 'dedicated' | 'byoip';

  primary_ip: string;
}

export interface DNSDestinationIPListParams {
  /**
   * Specify the Cloudflare account identifier.
   */
  account_id: string;
}

export declare namespace DNSDestinationIPs {
  export {
    type DNSDestinationIPsID as DNSDestinationIPsID,
    type DNSDestinationIPListResponse as DNSDestinationIPListResponse,
    type DNSDestinationIPListResponsesSinglePage as DNSDestinationIPListResponsesSinglePage,
    type DNSDestinationIPListParams as DNSDestinationIPListParams,
  };
}
