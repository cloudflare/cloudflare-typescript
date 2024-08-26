// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import { Analytics } from './analytics/analytics';
import * as FirewallAPI from './firewall';
import * as AnalyticsAPI from './analytics/analytics';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';

export class FirewallResource extends APIResource {
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);

  /**
   * Create a configured DNS Firewall Cluster.
   */
  create(params: FirewallCreateParams, options?: Core.RequestOptions): Core.APIPromise<Firewall> {
    const { account_id, ...body } = params;
    return (this._client.post(`/accounts/${account_id}/dns_firewall`, { body, ...options }) as Core.APIPromise<{ result: Firewall }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * List configured DNS Firewall clusters for an account.
   */
  list(params: FirewallListParams, options?: Core.RequestOptions): Core.PagePromise<FirewallsV4PagePaginationArray, Firewall> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(`/accounts/${account_id}/dns_firewall`, FirewallsV4PagePaginationArray, { query, ...options });
  }

  /**
   * Delete a configured DNS Firewall Cluster.
   */
  delete(dnsFirewallId: string, params: FirewallDeleteParams, options?: Core.RequestOptions): Core.APIPromise<FirewallDeleteResponse> {
    const { account_id } = params;
    return (this._client.delete(`/accounts/${account_id}/dns_firewall/${dnsFirewallId}`, options) as Core.APIPromise<{ result: FirewallDeleteResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Modify a DNS Firewall Cluster configuration.
   */
  edit(dnsFirewallId: string, params: FirewallEditParams, options?: Core.RequestOptions): Core.APIPromise<Firewall> {
    const { account_id, ...body } = params;
    return (this._client.patch(`/accounts/${account_id}/dns_firewall/${dnsFirewallId}`, { body, ...options }) as Core.APIPromise<{ result: Firewall }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Show a single configured DNS Firewall cluster for an account.
   */
  get(dnsFirewallId: string, params: FirewallGetParams, options?: Core.RequestOptions): Core.APIPromise<Firewall> {
    const { account_id } = params;
    return (this._client.get(`/accounts/${account_id}/dns_firewall/${dnsFirewallId}`, options) as Core.APIPromise<{ result: Firewall }>)._thenUnwrap((obj) => obj.result);
  }
}

export class FirewallsV4PagePaginationArray extends V4PagePaginationArray<Firewall> {
}

/**
 * Attack mitigation settings.
 */
export interface AttackMitigation {
  /**
   * When enabled, random-prefix attacks are automatically mitigated and the upstream
   * DNS servers protected.
   */
  enabled?: boolean;

  /**
   * Only mitigate attacks when upstream servers seem unhealthy.
   */
  only_when_upstream_unhealthy?: boolean;
}

/**
 * Attack mitigation settings.
 */
export interface AttackMitigationParam {
  /**
   * When enabled, random-prefix attacks are automatically mitigated and the upstream
   * DNS servers protected.
   */
  enabled?: boolean;

  /**
   * Only mitigate attacks when upstream servers seem unhealthy.
   */
  only_when_upstream_unhealthy?: boolean;
}

export interface Firewall {
  /**
   * Identifier
   */
  id: string;

  /**
   * Deprecate the response to ANY requests.
   */
  deprecate_any_requests: boolean;

  dns_firewall_ips: Array<FirewallIPs>;

  /**
   * Forward client IP (resolver) subnet if no EDNS Client Subnet is sent.
   */
  ecs_fallback: boolean;

  /**
   * Maximum DNS cache TTL. This setting sets an upper bound on DNS TTLs for purposes
   * of caching between DNS Firewall and the upstream servers. Higher TTLs will be
   * decreased to the maximum defined here for caching purposes.
   */
  maximum_cache_ttl: number;

  /**
   * Minimum DNS cache TTL. This setting sets a lower bound on DNS TTLs for purposes
   * of caching between DNS Firewall and the upstream servers. Lower TTLs will be
   * increased to the minimum defined here for caching purposes.
   */
  minimum_cache_ttl: number;

  /**
   * Last modification of DNS Firewall cluster.
   */
  modified_on: string;

  /**
   * DNS Firewall Cluster Name.
   */
  name: string;

  upstream_ips: Array<UpstreamIPs>;

  /**
   * Attack mitigation settings.
   */
  attack_mitigation?: AttackMitigation | null;

  /**
   * Negative DNS cache TTL. This setting controls how long DNS Firewall should cache
   * negative responses (e.g., NXDOMAIN) from the upstream servers.
   */
  negative_cache_ttl?: number | null;

  /**
   * Ratelimit in queries per second per datacenter (applies to DNS queries sent to
   * the upstream nameservers configured on the cluster).
   */
  ratelimit?: number | null;

  /**
   * Number of retries for fetching DNS responses from upstream nameservers (not
   * counting the initial attempt).
   */
  retries?: number;
}

/**
 * Cloudflare-assigned DNS IPv4 Address.
 */
export type FirewallIPs = string

/**
 * Cloudflare-assigned DNS IPv4 Address.
 */
export type FirewallIPsParam = string

/**
 * Upstream DNS Server IPv4 Address.
 */
export type UpstreamIPs = string

/**
 * Upstream DNS Server IPv4 Address.
 */
export type UpstreamIPsParam = string

export interface FirewallDeleteResponse {
  /**
   * Identifier
   */
  id?: string;
}

export interface FirewallCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: DNS Firewall Cluster Name.
   */
  name: string;

  /**
   * Body param:
   */
  upstream_ips: Array<UpstreamIPsParam>;

  /**
   * Body param: Attack mitigation settings.
   */
  attack_mitigation?: AttackMitigationParam | null;

  /**
   * Body param: Deprecate the response to ANY requests.
   */
  deprecate_any_requests?: boolean;

  /**
   * Body param: Forward client IP (resolver) subnet if no EDNS Client Subnet is
   * sent.
   */
  ecs_fallback?: boolean;

  /**
   * Body param: Maximum DNS cache TTL. This setting sets an upper bound on DNS TTLs
   * for purposes of caching between DNS Firewall and the upstream servers. Higher
   * TTLs will be decreased to the maximum defined here for caching purposes.
   */
  maximum_cache_ttl?: number;

  /**
   * Body param: Minimum DNS cache TTL. This setting sets a lower bound on DNS TTLs
   * for purposes of caching between DNS Firewall and the upstream servers. Lower
   * TTLs will be increased to the minimum defined here for caching purposes.
   */
  minimum_cache_ttl?: number;

  /**
   * Body param: Negative DNS cache TTL. This setting controls how long DNS Firewall
   * should cache negative responses (e.g., NXDOMAIN) from the upstream servers.
   */
  negative_cache_ttl?: number | null;

  /**
   * Body param: Ratelimit in queries per second per datacenter (applies to DNS
   * queries sent to the upstream nameservers configured on the cluster).
   */
  ratelimit?: number | null;

  /**
   * Body param: Number of retries for fetching DNS responses from upstream
   * nameservers (not counting the initial attempt).
   */
  retries?: number;
}

export interface FirewallListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier
   */
  account_id: string;
}

export interface FirewallDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface FirewallEditParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: Identifier
   */
  id: string;

  /**
   * Body param: Deprecate the response to ANY requests.
   */
  deprecate_any_requests: boolean;

  /**
   * Body param:
   */
  dns_firewall_ips: Array<FirewallIPsParam>;

  /**
   * Body param: Forward client IP (resolver) subnet if no EDNS Client Subnet is
   * sent.
   */
  ecs_fallback: boolean;

  /**
   * Body param: Maximum DNS cache TTL. This setting sets an upper bound on DNS TTLs
   * for purposes of caching between DNS Firewall and the upstream servers. Higher
   * TTLs will be decreased to the maximum defined here for caching purposes.
   */
  maximum_cache_ttl: number;

  /**
   * Body param: Minimum DNS cache TTL. This setting sets a lower bound on DNS TTLs
   * for purposes of caching between DNS Firewall and the upstream servers. Lower
   * TTLs will be increased to the minimum defined here for caching purposes.
   */
  minimum_cache_ttl: number;

  /**
   * Body param: DNS Firewall Cluster Name.
   */
  name: string;

  /**
   * Body param:
   */
  upstream_ips: Array<UpstreamIPsParam>;

  /**
   * Body param: Attack mitigation settings.
   */
  attack_mitigation?: AttackMitigationParam | null;

  /**
   * Body param: Negative DNS cache TTL. This setting controls how long DNS Firewall
   * should cache negative responses (e.g., NXDOMAIN) from the upstream servers.
   */
  negative_cache_ttl?: number | null;

  /**
   * Body param: Ratelimit in queries per second per datacenter (applies to DNS
   * queries sent to the upstream nameservers configured on the cluster).
   */
  ratelimit?: number | null;

  /**
   * Body param: Number of retries for fetching DNS responses from upstream
   * nameservers (not counting the initial attempt).
   */
  retries?: number;
}

export interface FirewallGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace FirewallResource {
  export import AttackMitigation = FirewallAPI.AttackMitigation;
  export import Firewall = FirewallAPI.Firewall;
  export import FirewallIPs = FirewallAPI.FirewallIPs;
  export import UpstreamIPs = FirewallAPI.UpstreamIPs;
  export import FirewallDeleteResponse = FirewallAPI.FirewallDeleteResponse;
  export import FirewallsV4PagePaginationArray = FirewallAPI.FirewallsV4PagePaginationArray;
  export import FirewallCreateParams = FirewallAPI.FirewallCreateParams;
  export import FirewallListParams = FirewallAPI.FirewallListParams;
  export import FirewallDeleteParams = FirewallAPI.FirewallDeleteParams;
  export import FirewallEditParams = FirewallAPI.FirewallEditParams;
  export import FirewallGetParams = FirewallAPI.FirewallGetParams;
  export import Analytics = AnalyticsAPI.Analytics;
  export import Delta = AnalyticsAPI.Delta;
}
