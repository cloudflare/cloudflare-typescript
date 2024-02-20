// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as DNSFirewallAPI from 'cloudflare/resources/dns-firewall/dns-firewall';
import * as DNSAnalyticsAPI from 'cloudflare/resources/dns-firewall/dns-analytics/dns-analytics';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class DNSFirewall extends APIResource {
  dnsAnalytics: DNSAnalyticsAPI.DNSAnalytics = new DNSAnalyticsAPI.DNSAnalytics(this._client);

  /**
   * Create a configured DNS Firewall Cluster.
   */
  create(
    accountId: string,
    body: DNSFirewallCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DNSFirewallCreateResponse> {
    return (
      this._client.post(`/accounts/${accountId}/dns_firewall`, { body, ...options }) as Core.APIPromise<{
        result: DNSFirewallCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List configured DNS Firewall clusters for an account.
   */
  list(
    accountId: string,
    query?: DNSFirewallListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DNSFirewallListResponsesV4PagePaginationArray, DNSFirewallListResponse>;
  list(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DNSFirewallListResponsesV4PagePaginationArray, DNSFirewallListResponse>;
  list(
    accountId: string,
    query: DNSFirewallListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<DNSFirewallListResponsesV4PagePaginationArray, DNSFirewallListResponse> {
    if (isRequestOptions(query)) {
      return this.list(accountId, {}, query);
    }
    return this._client.getAPIList(
      `/accounts/${accountId}/dns_firewall`,
      DNSFirewallListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Delete a configured DNS Firewall Cluster.
   */
  delete(
    accountId: string,
    dnsFirewallId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DNSFirewallDeleteResponse> {
    return (
      this._client.delete(
        `/accounts/${accountId}/dns_firewall/${dnsFirewallId}`,
        options,
      ) as Core.APIPromise<{ result: DNSFirewallDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Modify a DNS Firewall Cluster configuration.
   */
  edit(
    accountId: string,
    dnsFirewallId: string,
    body: DNSFirewallEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DNSFirewallEditResponse> {
    return (
      this._client.patch(`/accounts/${accountId}/dns_firewall/${dnsFirewallId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DNSFirewallEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Show a single configured DNS Firewall cluster for an account.
   */
  get(
    accountId: string,
    dnsFirewallId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DNSFirewallGetResponse> {
    return (
      this._client.get(`/accounts/${accountId}/dns_firewall/${dnsFirewallId}`, options) as Core.APIPromise<{
        result: DNSFirewallGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class DNSFirewallListResponsesV4PagePaginationArray extends V4PagePaginationArray<DNSFirewallListResponse> {}

export interface DNSFirewallCreateResponse {
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
  attack_mitigation?: DNSFirewallCreateResponse.AttackMitigation | null;

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

export namespace DNSFirewallCreateResponse {
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

export interface DNSFirewallListResponse {
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
  attack_mitigation?: DNSFirewallListResponse.AttackMitigation | null;

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

export namespace DNSFirewallListResponse {
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
  attack_mitigation?: DNSFirewallEditResponse.AttackMitigation | null;

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

export namespace DNSFirewallEditResponse {
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

export interface DNSFirewallGetResponse {
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
  attack_mitigation?: DNSFirewallGetResponse.AttackMitigation | null;

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

export namespace DNSFirewallGetResponse {
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

export interface DNSFirewallCreateParams {
  /**
   * DNS Firewall Cluster Name.
   */
  name: string;

  upstream_ips: Array<string | string>;

  /**
   * Attack mitigation settings.
   */
  attack_mitigation?: DNSFirewallCreateParams.AttackMitigation | null;

  /**
   * Deprecate the response to ANY requests.
   */
  deprecate_any_requests?: boolean;

  /**
   * Forward client IP (resolver) subnet if no EDNS Client Subnet is sent.
   */
  ecs_fallback?: boolean;

  /**
   * Maximum DNS Cache TTL.
   */
  maximum_cache_ttl?: number;

  /**
   * Minimum DNS Cache TTL.
   */
  minimum_cache_ttl?: number;

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

export namespace DNSFirewallCreateParams {
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

export interface DNSFirewallListParams extends V4PagePaginationArrayParams {}

export interface DNSFirewallEditParams {
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
   * DNS Firewall Cluster Name.
   */
  name: string;

  upstream_ips: Array<string | string>;

  /**
   * Attack mitigation settings.
   */
  attack_mitigation?: DNSFirewallEditParams.AttackMitigation | null;

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

export namespace DNSFirewallEditParams {
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

export namespace DNSFirewall {
  export import DNSFirewallCreateResponse = DNSFirewallAPI.DNSFirewallCreateResponse;
  export import DNSFirewallListResponse = DNSFirewallAPI.DNSFirewallListResponse;
  export import DNSFirewallDeleteResponse = DNSFirewallAPI.DNSFirewallDeleteResponse;
  export import DNSFirewallEditResponse = DNSFirewallAPI.DNSFirewallEditResponse;
  export import DNSFirewallGetResponse = DNSFirewallAPI.DNSFirewallGetResponse;
  export import DNSFirewallListResponsesV4PagePaginationArray = DNSFirewallAPI.DNSFirewallListResponsesV4PagePaginationArray;
  export import DNSFirewallCreateParams = DNSFirewallAPI.DNSFirewallCreateParams;
  export import DNSFirewallListParams = DNSFirewallAPI.DNSFirewallListParams;
  export import DNSFirewallEditParams = DNSFirewallAPI.DNSFirewallEditParams;
  export import DNSAnalytics = DNSAnalyticsAPI.DNSAnalytics;
}
