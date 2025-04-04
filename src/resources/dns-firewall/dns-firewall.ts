// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ReverseDNSAPI from './reverse-dns';
import {
  ReverseDNS,
  ReverseDNSEditParams,
  ReverseDNSEditResponse,
  ReverseDNSGetParams,
  ReverseDNSGetResponse,
} from './reverse-dns';
import * as AnalyticsAPI from './analytics/analytics';
import { Analytics } from './analytics/analytics';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class DNSFirewall extends APIResource {
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
  reverseDNS: ReverseDNSAPI.ReverseDNS = new ReverseDNSAPI.ReverseDNS(this._client);

  /**
   * Create a DNS Firewall cluster
   */
  create(params: DNSFirewallCreateParams, options?: RequestOptions): APIPromise<DNSFirewallCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/dns_firewall`, { body, ...options }) as APIPromise<{
        result: DNSFirewallCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List DNS Firewall clusters for an account
   */
  list(
    params: DNSFirewallListParams,
    options?: RequestOptions,
  ): PagePromise<DNSFirewallListResponsesV4PagePaginationArray, DNSFirewallListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/dns_firewall`,
      V4PagePaginationArray<DNSFirewallListResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete a DNS Firewall cluster
   */
  delete(
    dnsFirewallID: string,
    params: DNSFirewallDeleteParams,
    options?: RequestOptions,
  ): APIPromise<DNSFirewallDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/dns_firewall/${dnsFirewallID}`,
        options,
      ) as APIPromise<{ result: DNSFirewallDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Modify the configuration of a DNS Firewall cluster
   */
  edit(
    dnsFirewallID: string,
    params: DNSFirewallEditParams,
    options?: RequestOptions,
  ): APIPromise<DNSFirewallEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/dns_firewall/${dnsFirewallID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: DNSFirewallEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Show a single DNS Firewall cluster for an account
   */
  get(
    dnsFirewallID: string,
    params: DNSFirewallGetParams,
    options?: RequestOptions,
  ): APIPromise<DNSFirewallGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/dns_firewall/${dnsFirewallID}`, options) as APIPromise<{
        result: DNSFirewallGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type DNSFirewallListResponsesV4PagePaginationArray = V4PagePaginationArray<DNSFirewallListResponse>;

/**
 * Attack mitigation settings
 */
export interface AttackMitigation {
  /**
   * When enabled, automatically mitigate random-prefix attacks to protect upstream
   * DNS servers
   */
  enabled?: boolean;

  /**
   * Only mitigate attacks when upstream servers seem unhealthy
   */
  only_when_upstream_unhealthy?: boolean;
}

/**
 * Attack mitigation settings
 */
export interface AttackMitigationParam {
  /**
   * When enabled, automatically mitigate random-prefix attacks to protect upstream
   * DNS servers
   */
  enabled?: boolean;

  /**
   * Only mitigate attacks when upstream servers seem unhealthy
   */
  only_when_upstream_unhealthy?: boolean;
}

/**
 * Cloudflare-assigned DNS IPv4 address
 */
export type FirewallIPs = string;

/**
 * Upstream DNS Server IPv4 address
 */
export type UpstreamIPs = string;

/**
 * Upstream DNS Server IPv4 address
 */
export type UpstreamIPsParam = string;

export interface DNSFirewallCreateResponse {
  /**
   * Identifier.
   */
  id: string;

  /**
   * Whether to refuse to answer queries for the ANY type
   */
  deprecate_any_requests: boolean;

  dns_firewall_ips: Array<FirewallIPs>;

  /**
   * Whether to forward client IP (resolver) subnet if no EDNS Client Subnet is sent
   */
  ecs_fallback: boolean;

  /**
   * Maximum DNS cache TTL This setting sets an upper bound on DNS TTLs for purposes
   * of caching between DNS Firewall and the upstream servers. Higher TTLs will be
   * decreased to the maximum defined here for caching purposes.
   */
  maximum_cache_ttl: number;

  /**
   * Minimum DNS cache TTL This setting sets a lower bound on DNS TTLs for purposes
   * of caching between DNS Firewall and the upstream servers. Lower TTLs will be
   * increased to the minimum defined here for caching purposes.
   */
  minimum_cache_ttl: number;

  /**
   * Last modification of DNS Firewall cluster
   */
  modified_on: string;

  /**
   * DNS Firewall cluster name
   */
  name: string;

  /**
   * Negative DNS cache TTL This setting controls how long DNS Firewall should cache
   * negative responses (e.g., NXDOMAIN) from the upstream servers.
   */
  negative_cache_ttl: number | null;

  /**
   * Ratelimit in queries per second per datacenter (applies to DNS queries sent to
   * the upstream nameservers configured on the cluster)
   */
  ratelimit: number | null;

  /**
   * Number of retries for fetching DNS responses from upstream nameservers (not
   * counting the initial attempt)
   */
  retries: number;

  upstream_ips: Array<UpstreamIPs>;

  /**
   * Attack mitigation settings
   */
  attack_mitigation?: AttackMitigation | null;
}

export interface DNSFirewallListResponse {
  /**
   * Identifier.
   */
  id: string;

  /**
   * Whether to refuse to answer queries for the ANY type
   */
  deprecate_any_requests: boolean;

  dns_firewall_ips: Array<FirewallIPs>;

  /**
   * Whether to forward client IP (resolver) subnet if no EDNS Client Subnet is sent
   */
  ecs_fallback: boolean;

  /**
   * Maximum DNS cache TTL This setting sets an upper bound on DNS TTLs for purposes
   * of caching between DNS Firewall and the upstream servers. Higher TTLs will be
   * decreased to the maximum defined here for caching purposes.
   */
  maximum_cache_ttl: number;

  /**
   * Minimum DNS cache TTL This setting sets a lower bound on DNS TTLs for purposes
   * of caching between DNS Firewall and the upstream servers. Lower TTLs will be
   * increased to the minimum defined here for caching purposes.
   */
  minimum_cache_ttl: number;

  /**
   * Last modification of DNS Firewall cluster
   */
  modified_on: string;

  /**
   * DNS Firewall cluster name
   */
  name: string;

  /**
   * Negative DNS cache TTL This setting controls how long DNS Firewall should cache
   * negative responses (e.g., NXDOMAIN) from the upstream servers.
   */
  negative_cache_ttl: number | null;

  /**
   * Ratelimit in queries per second per datacenter (applies to DNS queries sent to
   * the upstream nameservers configured on the cluster)
   */
  ratelimit: number | null;

  /**
   * Number of retries for fetching DNS responses from upstream nameservers (not
   * counting the initial attempt)
   */
  retries: number;

  upstream_ips: Array<UpstreamIPs>;

  /**
   * Attack mitigation settings
   */
  attack_mitigation?: AttackMitigation | null;
}

export interface DNSFirewallDeleteResponse {
  /**
   * Identifier.
   */
  id?: string;
}

export interface DNSFirewallEditResponse {
  /**
   * Identifier.
   */
  id: string;

  /**
   * Whether to refuse to answer queries for the ANY type
   */
  deprecate_any_requests: boolean;

  dns_firewall_ips: Array<FirewallIPs>;

  /**
   * Whether to forward client IP (resolver) subnet if no EDNS Client Subnet is sent
   */
  ecs_fallback: boolean;

  /**
   * Maximum DNS cache TTL This setting sets an upper bound on DNS TTLs for purposes
   * of caching between DNS Firewall and the upstream servers. Higher TTLs will be
   * decreased to the maximum defined here for caching purposes.
   */
  maximum_cache_ttl: number;

  /**
   * Minimum DNS cache TTL This setting sets a lower bound on DNS TTLs for purposes
   * of caching between DNS Firewall and the upstream servers. Lower TTLs will be
   * increased to the minimum defined here for caching purposes.
   */
  minimum_cache_ttl: number;

  /**
   * Last modification of DNS Firewall cluster
   */
  modified_on: string;

  /**
   * DNS Firewall cluster name
   */
  name: string;

  /**
   * Negative DNS cache TTL This setting controls how long DNS Firewall should cache
   * negative responses (e.g., NXDOMAIN) from the upstream servers.
   */
  negative_cache_ttl: number | null;

  /**
   * Ratelimit in queries per second per datacenter (applies to DNS queries sent to
   * the upstream nameservers configured on the cluster)
   */
  ratelimit: number | null;

  /**
   * Number of retries for fetching DNS responses from upstream nameservers (not
   * counting the initial attempt)
   */
  retries: number;

  upstream_ips: Array<UpstreamIPs>;

  /**
   * Attack mitigation settings
   */
  attack_mitigation?: AttackMitigation | null;
}

export interface DNSFirewallGetResponse {
  /**
   * Identifier.
   */
  id: string;

  /**
   * Whether to refuse to answer queries for the ANY type
   */
  deprecate_any_requests: boolean;

  dns_firewall_ips: Array<FirewallIPs>;

  /**
   * Whether to forward client IP (resolver) subnet if no EDNS Client Subnet is sent
   */
  ecs_fallback: boolean;

  /**
   * Maximum DNS cache TTL This setting sets an upper bound on DNS TTLs for purposes
   * of caching between DNS Firewall and the upstream servers. Higher TTLs will be
   * decreased to the maximum defined here for caching purposes.
   */
  maximum_cache_ttl: number;

  /**
   * Minimum DNS cache TTL This setting sets a lower bound on DNS TTLs for purposes
   * of caching between DNS Firewall and the upstream servers. Lower TTLs will be
   * increased to the minimum defined here for caching purposes.
   */
  minimum_cache_ttl: number;

  /**
   * Last modification of DNS Firewall cluster
   */
  modified_on: string;

  /**
   * DNS Firewall cluster name
   */
  name: string;

  /**
   * Negative DNS cache TTL This setting controls how long DNS Firewall should cache
   * negative responses (e.g., NXDOMAIN) from the upstream servers.
   */
  negative_cache_ttl: number | null;

  /**
   * Ratelimit in queries per second per datacenter (applies to DNS queries sent to
   * the upstream nameservers configured on the cluster)
   */
  ratelimit: number | null;

  /**
   * Number of retries for fetching DNS responses from upstream nameservers (not
   * counting the initial attempt)
   */
  retries: number;

  upstream_ips: Array<UpstreamIPs>;

  /**
   * Attack mitigation settings
   */
  attack_mitigation?: AttackMitigation | null;
}

export interface DNSFirewallCreateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: DNS Firewall cluster name
   */
  name: string;

  /**
   * Body param:
   */
  upstream_ips: Array<UpstreamIPsParam>;

  /**
   * Body param: Attack mitigation settings
   */
  attack_mitigation?: AttackMitigationParam | null;

  /**
   * Body param: Whether to refuse to answer queries for the ANY type
   */
  deprecate_any_requests?: boolean;

  /**
   * Body param: Whether to forward client IP (resolver) subnet if no EDNS Client
   * Subnet is sent
   */
  ecs_fallback?: boolean;

  /**
   * Body param: Maximum DNS cache TTL This setting sets an upper bound on DNS TTLs
   * for purposes of caching between DNS Firewall and the upstream servers. Higher
   * TTLs will be decreased to the maximum defined here for caching purposes.
   */
  maximum_cache_ttl?: number;

  /**
   * Body param: Minimum DNS cache TTL This setting sets a lower bound on DNS TTLs
   * for purposes of caching between DNS Firewall and the upstream servers. Lower
   * TTLs will be increased to the minimum defined here for caching purposes.
   */
  minimum_cache_ttl?: number;

  /**
   * Body param: Negative DNS cache TTL This setting controls how long DNS Firewall
   * should cache negative responses (e.g., NXDOMAIN) from the upstream servers.
   */
  negative_cache_ttl?: number | null;

  /**
   * Body param: Ratelimit in queries per second per datacenter (applies to DNS
   * queries sent to the upstream nameservers configured on the cluster)
   */
  ratelimit?: number | null;

  /**
   * Body param: Number of retries for fetching DNS responses from upstream
   * nameservers (not counting the initial attempt)
   */
  retries?: number;
}

export interface DNSFirewallListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;
}

export interface DNSFirewallDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface DNSFirewallEditParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: Attack mitigation settings
   */
  attack_mitigation?: AttackMitigationParam | null;

  /**
   * Body param: Whether to refuse to answer queries for the ANY type
   */
  deprecate_any_requests?: boolean;

  /**
   * Body param: Whether to forward client IP (resolver) subnet if no EDNS Client
   * Subnet is sent
   */
  ecs_fallback?: boolean;

  /**
   * Body param: Maximum DNS cache TTL This setting sets an upper bound on DNS TTLs
   * for purposes of caching between DNS Firewall and the upstream servers. Higher
   * TTLs will be decreased to the maximum defined here for caching purposes.
   */
  maximum_cache_ttl?: number;

  /**
   * Body param: Minimum DNS cache TTL This setting sets a lower bound on DNS TTLs
   * for purposes of caching between DNS Firewall and the upstream servers. Lower
   * TTLs will be increased to the minimum defined here for caching purposes.
   */
  minimum_cache_ttl?: number;

  /**
   * Body param: DNS Firewall cluster name
   */
  name?: string;

  /**
   * Body param: Negative DNS cache TTL This setting controls how long DNS Firewall
   * should cache negative responses (e.g., NXDOMAIN) from the upstream servers.
   */
  negative_cache_ttl?: number | null;

  /**
   * Body param: Ratelimit in queries per second per datacenter (applies to DNS
   * queries sent to the upstream nameservers configured on the cluster)
   */
  ratelimit?: number | null;

  /**
   * Body param: Number of retries for fetching DNS responses from upstream
   * nameservers (not counting the initial attempt)
   */
  retries?: number;

  /**
   * Body param:
   */
  upstream_ips?: Array<UpstreamIPsParam>;
}

export interface DNSFirewallGetParams {
  /**
   * Identifier.
   */
  account_id: string;
}

DNSFirewall.Analytics = Analytics;
DNSFirewall.ReverseDNS = ReverseDNS;

export declare namespace DNSFirewall {
  export {
    type AttackMitigation as AttackMitigation,
    type FirewallIPs as FirewallIPs,
    type UpstreamIPs as UpstreamIPs,
    type DNSFirewallCreateResponse as DNSFirewallCreateResponse,
    type DNSFirewallListResponse as DNSFirewallListResponse,
    type DNSFirewallDeleteResponse as DNSFirewallDeleteResponse,
    type DNSFirewallEditResponse as DNSFirewallEditResponse,
    type DNSFirewallGetResponse as DNSFirewallGetResponse,
    type DNSFirewallListResponsesV4PagePaginationArray as DNSFirewallListResponsesV4PagePaginationArray,
    type DNSFirewallCreateParams as DNSFirewallCreateParams,
    type DNSFirewallListParams as DNSFirewallListParams,
    type DNSFirewallDeleteParams as DNSFirewallDeleteParams,
    type DNSFirewallEditParams as DNSFirewallEditParams,
    type DNSFirewallGetParams as DNSFirewallGetParams,
  };

  export { Analytics as Analytics };

  export {
    ReverseDNS as ReverseDNS,
    type ReverseDNSEditResponse as ReverseDNSEditResponse,
    type ReverseDNSGetResponse as ReverseDNSGetResponse,
    type ReverseDNSEditParams as ReverseDNSEditParams,
    type ReverseDNSGetParams as ReverseDNSGetParams,
  };
}
