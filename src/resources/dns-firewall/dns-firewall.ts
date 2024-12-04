// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
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
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class DNSFirewall extends APIResource {
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
  reverseDNS: ReverseDNSAPI.ReverseDNS = new ReverseDNSAPI.ReverseDNS(this._client);

  /**
   * Create a DNS Firewall cluster
   */
  create(
    params: DNSFirewallCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DNSFirewallCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/dns_firewall`, { body, ...options }) as Core.APIPromise<{
        result: DNSFirewallCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List DNS Firewall clusters for an account
   */
  list(
    params: DNSFirewallListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DNSFirewallListResponsesV4PagePaginationArray, DNSFirewallListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/dns_firewall`,
      DNSFirewallListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Delete a DNS Firewall cluster
   */
  delete(
    dnsFirewallId: string,
    params: DNSFirewallDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DNSFirewallDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/dns_firewall/${dnsFirewallId}`,
        options,
      ) as Core.APIPromise<{ result: DNSFirewallDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Modify the configuration of a DNS Firewall cluster
   */
  edit(
    dnsFirewallId: string,
    params: DNSFirewallEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DNSFirewallEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/dns_firewall/${dnsFirewallId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DNSFirewallEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Show a single DNS Firewall cluster for an account
   */
  get(
    dnsFirewallId: string,
    params: DNSFirewallGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DNSFirewallGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/dns_firewall/${dnsFirewallId}`, options) as Core.APIPromise<{
        result: DNSFirewallGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class DNSFirewallListResponsesV4PagePaginationArray extends V4PagePaginationArray<DNSFirewallListResponse> {}

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
   * Identifier
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
   * Identifier
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
   * Identifier
   */
  id?: string;
}

export interface DNSFirewallEditResponse {
  /**
   * Identifier
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
   * Identifier
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
   * Path param: Identifier
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
   * Path param: Identifier
   */
  account_id: string;
}

export interface DNSFirewallDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface DNSFirewallEditParams {
  /**
   * Path param: Identifier
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
   * Identifier
   */
  account_id: string;
}

DNSFirewall.Analytics = Analytics;
DNSFirewall.ReverseDNS = ReverseDNS;

export declare namespace DNSFirewall {
  export { Analytics as Analytics };

  export {
    ReverseDNS as ReverseDNS,
    type ReverseDNSEditResponse as ReverseDNSEditResponse,
    type ReverseDNSGetResponse as ReverseDNSGetResponse,
    type ReverseDNSEditParams as ReverseDNSEditParams,
    type ReverseDNSGetParams as ReverseDNSGetParams,
  };
}
