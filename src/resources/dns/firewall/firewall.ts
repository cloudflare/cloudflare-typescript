// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as FirewallAPI from 'cloudflare/resources/dns/firewall/firewall';
import * as AnalyticsAPI from 'cloudflare/resources/dns/firewall/analytics/analytics';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class Firewall extends APIResource {
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);

  /**
   * Create a configured DNS Firewall Cluster.
   */
  create(
    params: FirewallCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FirewallCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/dns_firewall`, { body, ...options }) as Core.APIPromise<{
        result: FirewallCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List configured DNS Firewall clusters for an account.
   */
  list(
    params: FirewallListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<FirewallListResponsesV4PagePaginationArray, FirewallListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/dns_firewall`,
      FirewallListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Delete a configured DNS Firewall Cluster.
   */
  delete(
    dnsFirewallId: string,
    params: FirewallDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FirewallDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/dns_firewall/${dnsFirewallId}`,
        options,
      ) as Core.APIPromise<{ result: FirewallDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Modify a DNS Firewall Cluster configuration.
   */
  edit(
    dnsFirewallId: string,
    params: FirewallEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FirewallEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/dns_firewall/${dnsFirewallId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: FirewallEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Show a single configured DNS Firewall cluster for an account.
   */
  get(
    dnsFirewallId: string,
    params: FirewallGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FirewallGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/dns_firewall/${dnsFirewallId}`, options) as Core.APIPromise<{
        result: FirewallGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class FirewallListResponsesV4PagePaginationArray extends V4PagePaginationArray<FirewallListResponse> {}

export interface FirewallCreateResponse {
  /**
   * Identifier
   */
  id: string;

  /**
   * Deprecate the response to ANY requests.
   */
  deprecate_any_requests: boolean;

  dns_firewall_ips: Array<string | string>;

  /**
   * Forward client IP (resolver) subnet if no EDNS Client Subnet is sent.
   */
  ecs_fallback: boolean;

  /**
   * Maximum DNS Cache TTL.
   */
  maximum_cache_ttl: number;

  /**
   * Minimum DNS Cache TTL.
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

  upstream_ips: Array<string | string>;

  /**
   * Attack mitigation settings.
   */
  attack_mitigation?: FirewallCreateResponse.AttackMitigation | null;

  /**
   * Negative DNS Cache TTL.
   */
  negative_cache_ttl?: number | null;

  /**
   * Deprecated alias for "upstream_ips".
   */
  origin_ips?: unknown;

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

export namespace FirewallCreateResponse {
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
     * Deprecated alias for "only_when_upstream_unhealthy".
     */
    only_when_origin_unhealthy?: unknown;

    /**
     * Only mitigate attacks when upstream servers seem unhealthy.
     */
    only_when_upstream_unhealthy?: boolean;
  }
}

export interface FirewallListResponse {
  /**
   * Identifier
   */
  id: string;

  /**
   * Deprecate the response to ANY requests.
   */
  deprecate_any_requests: boolean;

  dns_firewall_ips: Array<string | string>;

  /**
   * Forward client IP (resolver) subnet if no EDNS Client Subnet is sent.
   */
  ecs_fallback: boolean;

  /**
   * Maximum DNS Cache TTL.
   */
  maximum_cache_ttl: number;

  /**
   * Minimum DNS Cache TTL.
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

  upstream_ips: Array<string | string>;

  /**
   * Attack mitigation settings.
   */
  attack_mitigation?: FirewallListResponse.AttackMitigation | null;

  /**
   * Negative DNS Cache TTL.
   */
  negative_cache_ttl?: number | null;

  /**
   * Deprecated alias for "upstream_ips".
   */
  origin_ips?: unknown;

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

export namespace FirewallListResponse {
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
     * Deprecated alias for "only_when_upstream_unhealthy".
     */
    only_when_origin_unhealthy?: unknown;

    /**
     * Only mitigate attacks when upstream servers seem unhealthy.
     */
    only_when_upstream_unhealthy?: boolean;
  }
}

export interface FirewallDeleteResponse {
  /**
   * Identifier
   */
  id?: string;
}

export interface FirewallEditResponse {
  /**
   * Identifier
   */
  id: string;

  /**
   * Deprecate the response to ANY requests.
   */
  deprecate_any_requests: boolean;

  dns_firewall_ips: Array<string | string>;

  /**
   * Forward client IP (resolver) subnet if no EDNS Client Subnet is sent.
   */
  ecs_fallback: boolean;

  /**
   * Maximum DNS Cache TTL.
   */
  maximum_cache_ttl: number;

  /**
   * Minimum DNS Cache TTL.
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

  upstream_ips: Array<string | string>;

  /**
   * Attack mitigation settings.
   */
  attack_mitigation?: FirewallEditResponse.AttackMitigation | null;

  /**
   * Negative DNS Cache TTL.
   */
  negative_cache_ttl?: number | null;

  /**
   * Deprecated alias for "upstream_ips".
   */
  origin_ips?: unknown;

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

export namespace FirewallEditResponse {
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
     * Deprecated alias for "only_when_upstream_unhealthy".
     */
    only_when_origin_unhealthy?: unknown;

    /**
     * Only mitigate attacks when upstream servers seem unhealthy.
     */
    only_when_upstream_unhealthy?: boolean;
  }
}

export interface FirewallGetResponse {
  /**
   * Identifier
   */
  id: string;

  /**
   * Deprecate the response to ANY requests.
   */
  deprecate_any_requests: boolean;

  dns_firewall_ips: Array<string | string>;

  /**
   * Forward client IP (resolver) subnet if no EDNS Client Subnet is sent.
   */
  ecs_fallback: boolean;

  /**
   * Maximum DNS Cache TTL.
   */
  maximum_cache_ttl: number;

  /**
   * Minimum DNS Cache TTL.
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

  upstream_ips: Array<string | string>;

  /**
   * Attack mitigation settings.
   */
  attack_mitigation?: FirewallGetResponse.AttackMitigation | null;

  /**
   * Negative DNS Cache TTL.
   */
  negative_cache_ttl?: number | null;

  /**
   * Deprecated alias for "upstream_ips".
   */
  origin_ips?: unknown;

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

export namespace FirewallGetResponse {
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
     * Deprecated alias for "only_when_upstream_unhealthy".
     */
    only_when_origin_unhealthy?: unknown;

    /**
     * Only mitigate attacks when upstream servers seem unhealthy.
     */
    only_when_upstream_unhealthy?: boolean;
  }
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
  upstream_ips: Array<string | string>;

  /**
   * Body param: Attack mitigation settings.
   */
  attack_mitigation?: FirewallCreateParams.AttackMitigation | null;

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
   * Body param: Maximum DNS Cache TTL.
   */
  maximum_cache_ttl?: number;

  /**
   * Body param: Minimum DNS Cache TTL.
   */
  minimum_cache_ttl?: number;

  /**
   * Body param: Negative DNS Cache TTL.
   */
  negative_cache_ttl?: number | null;

  /**
   * Body param: Deprecated alias for "upstream_ips".
   */
  origin_ips?: unknown;

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

export namespace FirewallCreateParams {
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
     * Deprecated alias for "only_when_upstream_unhealthy".
     */
    only_when_origin_unhealthy?: unknown;

    /**
     * Only mitigate attacks when upstream servers seem unhealthy.
     */
    only_when_upstream_unhealthy?: boolean;
  }
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
   * Body param: Deprecate the response to ANY requests.
   */
  deprecate_any_requests: boolean;

  /**
   * Body param:
   */
  dns_firewall_ips: Array<string | string>;

  /**
   * Body param: Forward client IP (resolver) subnet if no EDNS Client Subnet is
   * sent.
   */
  ecs_fallback: boolean;

  /**
   * Body param: Maximum DNS Cache TTL.
   */
  maximum_cache_ttl: number;

  /**
   * Body param: Minimum DNS Cache TTL.
   */
  minimum_cache_ttl: number;

  /**
   * Body param: DNS Firewall Cluster Name.
   */
  name: string;

  /**
   * Body param:
   */
  upstream_ips: Array<string | string>;

  /**
   * Body param: Attack mitigation settings.
   */
  attack_mitigation?: FirewallEditParams.AttackMitigation | null;

  /**
   * Body param: Negative DNS Cache TTL.
   */
  negative_cache_ttl?: number | null;

  /**
   * Body param: Deprecated alias for "upstream_ips".
   */
  origin_ips?: unknown;

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

export namespace FirewallEditParams {
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
     * Deprecated alias for "only_when_upstream_unhealthy".
     */
    only_when_origin_unhealthy?: unknown;

    /**
     * Only mitigate attacks when upstream servers seem unhealthy.
     */
    only_when_upstream_unhealthy?: boolean;
  }
}

export interface FirewallGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Firewall {
  export import FirewallCreateResponse = FirewallAPI.FirewallCreateResponse;
  export import FirewallListResponse = FirewallAPI.FirewallListResponse;
  export import FirewallDeleteResponse = FirewallAPI.FirewallDeleteResponse;
  export import FirewallEditResponse = FirewallAPI.FirewallEditResponse;
  export import FirewallGetResponse = FirewallAPI.FirewallGetResponse;
  export import FirewallListResponsesV4PagePaginationArray = FirewallAPI.FirewallListResponsesV4PagePaginationArray;
  export import FirewallCreateParams = FirewallAPI.FirewallCreateParams;
  export import FirewallListParams = FirewallAPI.FirewallListParams;
  export import FirewallDeleteParams = FirewallAPI.FirewallDeleteParams;
  export import FirewallEditParams = FirewallAPI.FirewallEditParams;
  export import FirewallGetParams = FirewallAPI.FirewallGetParams;
  export import Analytics = AnalyticsAPI.Analytics;
}
