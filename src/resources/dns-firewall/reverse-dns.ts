// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ReverseDNS extends APIResource {
  /**
   * Update reverse DNS configuration (PTR records) for a DNS Firewall cluster
   */
  edit(
    dnsFirewallID: string,
    params: ReverseDNSEditParams,
    options?: RequestOptions,
  ): APIPromise<ReverseDNSEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/dns_firewall/${dnsFirewallID}/reverse_dns`, {
        body,
        ...options,
      }) as APIPromise<{ result: ReverseDNSEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Show reverse DNS configuration (PTR records) for a DNS Firewall cluster
   */
  get(
    dnsFirewallID: string,
    params: ReverseDNSGetParams,
    options?: RequestOptions,
  ): APIPromise<ReverseDNSGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/dns_firewall/${dnsFirewallID}/reverse_dns`,
        options,
      ) as APIPromise<{ result: ReverseDNSGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ReverseDNSEditResponse {
  /**
   * Map of cluster IP addresses to PTR record contents
   */
  ptr: Record<string, string>;
}

export interface ReverseDNSGetResponse {
  /**
   * Map of cluster IP addresses to PTR record contents
   */
  ptr: Record<string, string>;
}

export interface ReverseDNSEditParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: Map of cluster IP addresses to PTR record contents
   */
  ptr?: Record<string, string>;
}

export interface ReverseDNSGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export declare namespace ReverseDNS {
  export {
    type ReverseDNSEditResponse as ReverseDNSEditResponse,
    type ReverseDNSGetResponse as ReverseDNSGetResponse,
    type ReverseDNSEditParams as ReverseDNSEditParams,
    type ReverseDNSGetParams as ReverseDNSGetParams,
  };
}
