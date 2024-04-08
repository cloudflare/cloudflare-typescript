// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as PoolsAPI from 'cloudflare/resources/user/load-balancers/pools';
import * as Shared from 'cloudflare/resources/shared';
import * as LoadBalancersAPI from 'cloudflare/resources/load-balancers/load-balancers';
import { SinglePage } from 'cloudflare/pagination';

export class Pools extends APIResource {
  /**
   * Create a new pool.
   */
  create(body: PoolCreateParams, options?: Core.RequestOptions): Core.APIPromise<Pool> {
    return (
      this._client.post('/user/load_balancers/pools', { body, ...options }) as Core.APIPromise<{
        result: Pool;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Modify a configured pool.
   */
  update(poolId: string, body: PoolUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Pool> {
    return (
      this._client.put(`/user/load_balancers/pools/${poolId}`, { body, ...options }) as Core.APIPromise<{
        result: Pool;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List configured pools.
   */
  list(query?: PoolListParams, options?: Core.RequestOptions): Core.PagePromise<PoolsSinglePage, Pool>;
  list(options?: Core.RequestOptions): Core.PagePromise<PoolsSinglePage, Pool>;
  list(
    query: PoolListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<PoolsSinglePage, Pool> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/user/load_balancers/pools', PoolsSinglePage, { query, ...options });
  }

  /**
   * Delete a configured pool.
   */
  delete(
    poolId: string,
    body: PoolDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PoolDeleteResponse> {
    return (
      this._client.delete(`/user/load_balancers/pools/${poolId}`, { body, ...options }) as Core.APIPromise<{
        result: PoolDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Apply changes to an existing pool, overwriting the supplied properties.
   */
  edit(poolId: string, body: PoolEditParams, options?: Core.RequestOptions): Core.APIPromise<Pool> {
    return (
      this._client.patch(`/user/load_balancers/pools/${poolId}`, { body, ...options }) as Core.APIPromise<{
        result: Pool;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a single configured pool.
   */
  get(poolId: string, options?: Core.RequestOptions): Core.APIPromise<Pool> {
    return (
      this._client.get(`/user/load_balancers/pools/${poolId}`, options) as Core.APIPromise<{ result: Pool }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch the latest pool health status for a single pool.
   */
  health(poolId: string, options?: Core.RequestOptions): Core.APIPromise<PoolHealthResponse> {
    return (
      this._client.get(`/user/load_balancers/pools/${poolId}/health`, options) as Core.APIPromise<{
        result: PoolHealthResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Preview pool health using provided monitor details. The returned preview_id can
   * be used in the preview endpoint to retrieve the results.
   */
  preview(
    poolId: string,
    body: PoolPreviewParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PoolPreviewResponse> {
    return (
      this._client.post(`/user/load_balancers/pools/${poolId}/preview`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PoolPreviewResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get the list of resources that reference the provided pool.
   */
  references(poolId: string, options?: Core.RequestOptions): Core.APIPromise<PoolReferencesResponse | null> {
    return (
      this._client.get(`/user/load_balancers/pools/${poolId}/references`, options) as Core.APIPromise<{
        result: PoolReferencesResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class PoolsSinglePage extends SinglePage<Pool> {}

export interface Pool {
  id?: string;

  /**
   * A list of regions from which to run health checks. Null means every Cloudflare
   * data center.
   */
  check_regions?: Array<LoadBalancersAPI.CheckRegion> | null;

  created_on?: string;

  /**
   * A human-readable description of the pool.
   */
  description?: string;

  /**
   * This field shows up only if the pool is disabled. This field is set with the
   * time the pool was disabled at.
   */
  disabled_at?: string;

  /**
   * Whether to enable (the default) or disable this pool. Disabled pools will not
   * receive traffic and are excluded from health checks. Disabling a pool will cause
   * any load balancers using it to failover to the next pool (if any).
   */
  enabled?: boolean;

  /**
   * The latitude of the data center containing the origins used in this pool in
   * decimal degrees. If this is set, longitude must also be set.
   */
  latitude?: number;

  /**
   * Configures load shedding policies and percentages for the pool.
   */
  load_shedding?: LoadBalancersAPI.LoadShedding;

  /**
   * The longitude of the data center containing the origins used in this pool in
   * decimal degrees. If this is set, latitude must also be set.
   */
  longitude?: number;

  /**
   * The minimum number of origins that must be healthy for this pool to serve
   * traffic. If the number of healthy origins falls below this number, the pool will
   * be marked unhealthy and will failover to the next available pool.
   */
  minimum_origins?: number;

  modified_on?: string;

  /**
   * The ID of the Monitor to use for checking the health of origins within this
   * pool.
   */
  monitor?: unknown;

  /**
   * A short name (tag) for the pool. Only alphanumeric characters, hyphens, and
   * underscores are allowed.
   */
  name?: string;

  /**
   * This field is now deprecated. It has been moved to Cloudflare's Centralized
   * Notification service
   * https://developers.cloudflare.com/fundamentals/notifications/. The email address
   * to send health status notifications to. This can be an individual mailbox or a
   * mailing list. Multiple emails can be supplied as a comma delimited list.
   */
  notification_email?: string;

  /**
   * Filter pool and origin health notifications by resource type or health status.
   * Use null to reset.
   */
  notification_filter?: LoadBalancersAPI.NotificationFilter | null;

  /**
   * Configures origin steering for the pool. Controls how origins are selected for
   * new sessions and traffic without session affinity.
   */
  origin_steering?: LoadBalancersAPI.OriginSteering;

  /**
   * The list of origins within this pool. Traffic directed at this pool is balanced
   * across all currently healthy origins, provided the pool itself is healthy.
   */
  origins?: Array<LoadBalancersAPI.OriginItem>;
}

export interface PoolDeleteResponse {
  id?: string;
}

/**
 * A list of regions from which to run health checks. Null means every Cloudflare
 * data center.
 */
export type PoolHealthResponse = unknown | string | null;

export interface PoolPreviewResponse {
  /**
   * Monitored pool IDs mapped to their respective names.
   */
  pools?: Record<string, string>;

  preview_id?: string;
}

/**
 * List of resources that reference a given pool.
 */
export type PoolReferencesResponse = Array<PoolReferencesResponse.PoolReferencesResponseItem>;

export namespace PoolReferencesResponse {
  export interface PoolReferencesResponseItem {
    reference_type?: Shared.UnnamedSchemaRefD8600eb4758b3ae35607a0327bcd691b;

    resource_id?: string;

    resource_name?: string;

    resource_type?: string;
  }
}

export interface PoolCreateParams {
  /**
   * A short name (tag) for the pool. Only alphanumeric characters, hyphens, and
   * underscores are allowed.
   */
  name: string;

  /**
   * The list of origins within this pool. Traffic directed at this pool is balanced
   * across all currently healthy origins, provided the pool itself is healthy.
   */
  origins: Array<LoadBalancersAPI.OriginItem>;

  /**
   * A list of regions from which to run health checks. Null means every Cloudflare
   * data center.
   */
  check_regions?: Array<LoadBalancersAPI.CheckRegion> | null;

  /**
   * A human-readable description of the pool.
   */
  description?: string;

  /**
   * Whether to enable (the default) or disable this pool. Disabled pools will not
   * receive traffic and are excluded from health checks. Disabling a pool will cause
   * any load balancers using it to failover to the next pool (if any).
   */
  enabled?: boolean;

  /**
   * The latitude of the data center containing the origins used in this pool in
   * decimal degrees. If this is set, longitude must also be set.
   */
  latitude?: number;

  /**
   * Configures load shedding policies and percentages for the pool.
   */
  load_shedding?: LoadBalancersAPI.LoadShedding;

  /**
   * The longitude of the data center containing the origins used in this pool in
   * decimal degrees. If this is set, latitude must also be set.
   */
  longitude?: number;

  /**
   * The minimum number of origins that must be healthy for this pool to serve
   * traffic. If the number of healthy origins falls below this number, the pool will
   * be marked unhealthy and will failover to the next available pool.
   */
  minimum_origins?: number;

  /**
   * The ID of the Monitor to use for checking the health of origins within this
   * pool.
   */
  monitor?: unknown;

  /**
   * This field is now deprecated. It has been moved to Cloudflare's Centralized
   * Notification service
   * https://developers.cloudflare.com/fundamentals/notifications/. The email address
   * to send health status notifications to. This can be an individual mailbox or a
   * mailing list. Multiple emails can be supplied as a comma delimited list.
   */
  notification_email?: string;

  /**
   * Filter pool and origin health notifications by resource type or health status.
   * Use null to reset.
   */
  notification_filter?: LoadBalancersAPI.NotificationFilter | null;

  /**
   * Configures origin steering for the pool. Controls how origins are selected for
   * new sessions and traffic without session affinity.
   */
  origin_steering?: LoadBalancersAPI.OriginSteering;
}

export interface PoolUpdateParams {
  /**
   * A short name (tag) for the pool. Only alphanumeric characters, hyphens, and
   * underscores are allowed.
   */
  name: string;

  /**
   * The list of origins within this pool. Traffic directed at this pool is balanced
   * across all currently healthy origins, provided the pool itself is healthy.
   */
  origins: Array<LoadBalancersAPI.OriginItem>;

  /**
   * A list of regions from which to run health checks. Null means every Cloudflare
   * data center.
   */
  check_regions?: Array<LoadBalancersAPI.CheckRegion> | null;

  /**
   * A human-readable description of the pool.
   */
  description?: string;

  /**
   * Whether to enable (the default) or disable this pool. Disabled pools will not
   * receive traffic and are excluded from health checks. Disabling a pool will cause
   * any load balancers using it to failover to the next pool (if any).
   */
  enabled?: boolean;

  /**
   * The latitude of the data center containing the origins used in this pool in
   * decimal degrees. If this is set, longitude must also be set.
   */
  latitude?: number;

  /**
   * Configures load shedding policies and percentages for the pool.
   */
  load_shedding?: LoadBalancersAPI.LoadShedding;

  /**
   * The longitude of the data center containing the origins used in this pool in
   * decimal degrees. If this is set, latitude must also be set.
   */
  longitude?: number;

  /**
   * The minimum number of origins that must be healthy for this pool to serve
   * traffic. If the number of healthy origins falls below this number, the pool will
   * be marked unhealthy and will failover to the next available pool.
   */
  minimum_origins?: number;

  /**
   * The ID of the Monitor to use for checking the health of origins within this
   * pool.
   */
  monitor?: unknown;

  /**
   * This field is now deprecated. It has been moved to Cloudflare's Centralized
   * Notification service
   * https://developers.cloudflare.com/fundamentals/notifications/. The email address
   * to send health status notifications to. This can be an individual mailbox or a
   * mailing list. Multiple emails can be supplied as a comma delimited list.
   */
  notification_email?: string;

  /**
   * Filter pool and origin health notifications by resource type or health status.
   * Use null to reset.
   */
  notification_filter?: LoadBalancersAPI.NotificationFilter | null;

  /**
   * Configures origin steering for the pool. Controls how origins are selected for
   * new sessions and traffic without session affinity.
   */
  origin_steering?: LoadBalancersAPI.OriginSteering;
}

export interface PoolListParams {
  /**
   * The ID of the Monitor to use for checking the health of origins within this
   * pool.
   */
  monitor?: unknown;
}

export type PoolDeleteParams = unknown;

export interface PoolEditParams {
  /**
   * A list of regions from which to run health checks. Null means every Cloudflare
   * data center.
   */
  check_regions?: Array<LoadBalancersAPI.CheckRegion> | null;

  /**
   * A human-readable description of the pool.
   */
  description?: string;

  /**
   * Whether to enable (the default) or disable this pool. Disabled pools will not
   * receive traffic and are excluded from health checks. Disabling a pool will cause
   * any load balancers using it to failover to the next pool (if any).
   */
  enabled?: boolean;

  /**
   * The latitude of the data center containing the origins used in this pool in
   * decimal degrees. If this is set, longitude must also be set.
   */
  latitude?: number;

  /**
   * Configures load shedding policies and percentages for the pool.
   */
  load_shedding?: LoadBalancersAPI.LoadShedding;

  /**
   * The longitude of the data center containing the origins used in this pool in
   * decimal degrees. If this is set, latitude must also be set.
   */
  longitude?: number;

  /**
   * The minimum number of origins that must be healthy for this pool to serve
   * traffic. If the number of healthy origins falls below this number, the pool will
   * be marked unhealthy and will failover to the next available pool.
   */
  minimum_origins?: number;

  /**
   * The ID of the Monitor to use for checking the health of origins within this
   * pool.
   */
  monitor?: unknown;

  /**
   * A short name (tag) for the pool. Only alphanumeric characters, hyphens, and
   * underscores are allowed.
   */
  name?: string;

  /**
   * This field is now deprecated. It has been moved to Cloudflare's Centralized
   * Notification service
   * https://developers.cloudflare.com/fundamentals/notifications/. The email address
   * to send health status notifications to. This can be an individual mailbox or a
   * mailing list. Multiple emails can be supplied as a comma delimited list.
   */
  notification_email?: string;

  /**
   * Filter pool and origin health notifications by resource type or health status.
   * Use null to reset.
   */
  notification_filter?: LoadBalancersAPI.NotificationFilter | null;

  /**
   * Configures origin steering for the pool. Controls how origins are selected for
   * new sessions and traffic without session affinity.
   */
  origin_steering?: LoadBalancersAPI.OriginSteering;

  /**
   * The list of origins within this pool. Traffic directed at this pool is balanced
   * across all currently healthy origins, provided the pool itself is healthy.
   */
  origins?: Array<LoadBalancersAPI.OriginItem>;
}

export interface PoolPreviewParams {
  /**
   * The expected HTTP response code or code range of the health check. This
   * parameter is only valid for HTTP and HTTPS monitors.
   */
  expected_codes: string;

  /**
   * Do not validate the certificate when monitor use HTTPS. This parameter is
   * currently only valid for HTTP and HTTPS monitors.
   */
  allow_insecure?: boolean;

  /**
   * To be marked unhealthy the monitored origin must fail this healthcheck N
   * consecutive times.
   */
  consecutive_down?: number;

  /**
   * To be marked healthy the monitored origin must pass this healthcheck N
   * consecutive times.
   */
  consecutive_up?: number;

  /**
   * Object description.
   */
  description?: string;

  /**
   * A case-insensitive sub-string to look for in the response body. If this string
   * is not found, the origin will be marked as unhealthy. This parameter is only
   * valid for HTTP and HTTPS monitors.
   */
  expected_body?: string;

  /**
   * Follow redirects if returned by the origin. This parameter is only valid for
   * HTTP and HTTPS monitors.
   */
  follow_redirects?: boolean;

  /**
   * The HTTP request headers to send in the health check. It is recommended you set
   * a Host header by default. The User-Agent header cannot be overridden. This
   * parameter is only valid for HTTP and HTTPS monitors.
   */
  header?: unknown;

  /**
   * The interval between each health check. Shorter intervals may improve failover
   * time, but will increase load on the origins as we check from multiple locations.
   */
  interval?: number;

  /**
   * The method to use for the health check. This defaults to 'GET' for HTTP/HTTPS
   * based checks and 'connection_established' for TCP based health checks.
   */
  method?: string;

  /**
   * The endpoint path you want to conduct a health check against. This parameter is
   * only valid for HTTP and HTTPS monitors.
   */
  path?: string;

  /**
   * The port number to connect to for the health check. Required for TCP, UDP, and
   * SMTP checks. HTTP and HTTPS checks should only define the port when using a
   * non-standard port (HTTP: default 80, HTTPS: default 443).
   */
  port?: number;

  /**
   * Assign this monitor to emulate the specified zone while probing. This parameter
   * is only valid for HTTP and HTTPS monitors.
   */
  probe_zone?: string;

  /**
   * The number of retries to attempt in case of a timeout before marking the origin
   * as unhealthy. Retries are attempted immediately.
   */
  retries?: number;

  /**
   * The timeout (in seconds) before marking the health check as failed.
   */
  timeout?: number;

  /**
   * The protocol to use for the health check. Currently supported protocols are
   * 'HTTP','HTTPS', 'TCP', 'ICMP-PING', 'UDP-ICMP', and 'SMTP'.
   */
  type?: 'http' | 'https' | 'tcp' | 'udp_icmp' | 'icmp_ping' | 'smtp';
}

export namespace Pools {
  export import Pool = PoolsAPI.Pool;
  export import PoolDeleteResponse = PoolsAPI.PoolDeleteResponse;
  export import PoolHealthResponse = PoolsAPI.PoolHealthResponse;
  export import PoolPreviewResponse = PoolsAPI.PoolPreviewResponse;
  export import PoolReferencesResponse = PoolsAPI.PoolReferencesResponse;
  export import PoolsSinglePage = PoolsAPI.PoolsSinglePage;
  export import PoolCreateParams = PoolsAPI.PoolCreateParams;
  export import PoolUpdateParams = PoolsAPI.PoolUpdateParams;
  export import PoolListParams = PoolsAPI.PoolListParams;
  export import PoolDeleteParams = PoolsAPI.PoolDeleteParams;
  export import PoolEditParams = PoolsAPI.PoolEditParams;
  export import PoolPreviewParams = PoolsAPI.PoolPreviewParams;
}
