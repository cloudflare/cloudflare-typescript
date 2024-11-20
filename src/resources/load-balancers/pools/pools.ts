// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as LoadBalancersAPI from '../load-balancers';
import * as HealthAPI from './health';
import {
  Health,
  HealthCreateParams,
  HealthCreateResponse,
  HealthGetParams,
  HealthGetResponse,
} from './health';
import * as ReferencesAPI from './references';
import { ReferenceGetParams, ReferenceGetResponse, References } from './references';
import { SinglePage } from '../../../pagination';

export class Pools extends APIResource {
  health: HealthAPI.Health = new HealthAPI.Health(this._client);
  references: ReferencesAPI.References = new ReferencesAPI.References(this._client);

  /**
   * Create a new pool.
   */
  create(params: PoolCreateParams, options?: Core.RequestOptions): Core.APIPromise<Pool> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/load_balancers/pools`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Pool }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Modify a configured pool.
   */
  update(poolId: string, params: PoolUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Pool> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/load_balancers/pools/${poolId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Pool }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List configured pools.
   */
  list(params: PoolListParams, options?: Core.RequestOptions): Core.PagePromise<PoolsSinglePage, Pool> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(`/accounts/${account_id}/load_balancers/pools`, PoolsSinglePage, {
      query,
      ...options,
    });
  }

  /**
   * Delete a configured pool.
   */
  delete(
    poolId: string,
    params: PoolDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PoolDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/load_balancers/pools/${poolId}`,
        options,
      ) as Core.APIPromise<{ result: PoolDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Apply changes to a number of existing pools, overwriting the supplied
   * properties. Pools are ordered by ascending `name`. Returns the list of affected
   * pools. Supports the standard pagination query parameters, either
   * `limit`/`offset` or `per_page`/`page`.
   */
  bulkEdit(params: PoolBulkEditParams, options?: Core.RequestOptions): Core.APIPromise<PoolBulkEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/load_balancers/pools`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PoolBulkEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Apply changes to an existing pool, overwriting the supplied properties.
   */
  edit(poolId: string, params: PoolEditParams, options?: Core.RequestOptions): Core.APIPromise<Pool> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/load_balancers/pools/${poolId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Pool }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a single configured pool.
   */
  get(poolId: string, params: PoolGetParams, options?: Core.RequestOptions): Core.APIPromise<Pool> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/load_balancers/pools/${poolId}`, options) as Core.APIPromise<{
        result: Pool;
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
  monitor?: string;

  /**
   * A short name (tag) for the pool. Only alphanumeric characters, hyphens, and
   * underscores are allowed.
   */
  name?: string;

  /**
   * List of networks where Load Balancer or Pool is enabled.
   */
  networks?: Array<string>;

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
  origins?: Array<LoadBalancersAPI.Origin>;
}

export interface PoolDeleteResponse {
  id?: string;
}

export type PoolBulkEditResponse = Array<Pool>;

export interface PoolCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: A short name (tag) for the pool. Only alphanumeric characters,
   * hyphens, and underscores are allowed.
   */
  name: string;

  /**
   * Body param: The list of origins within this pool. Traffic directed at this pool
   * is balanced across all currently healthy origins, provided the pool itself is
   * healthy.
   */
  origins: Array<LoadBalancersAPI.OriginParam>;

  /**
   * Body param: A human-readable description of the pool.
   */
  description?: string;

  /**
   * Body param: Whether to enable (the default) or disable this pool. Disabled pools
   * will not receive traffic and are excluded from health checks. Disabling a pool
   * will cause any load balancers using it to failover to the next pool (if any).
   */
  enabled?: boolean;

  /**
   * Body param: The latitude of the data center containing the origins used in this
   * pool in decimal degrees. If this is set, longitude must also be set.
   */
  latitude?: number;

  /**
   * Body param: Configures load shedding policies and percentages for the pool.
   */
  load_shedding?: LoadBalancersAPI.LoadSheddingParam;

  /**
   * Body param: The longitude of the data center containing the origins used in this
   * pool in decimal degrees. If this is set, latitude must also be set.
   */
  longitude?: number;

  /**
   * Body param: The minimum number of origins that must be healthy for this pool to
   * serve traffic. If the number of healthy origins falls below this number, the
   * pool will be marked unhealthy and will failover to the next available pool.
   */
  minimum_origins?: number;

  /**
   * Body param: The ID of the Monitor to use for checking the health of origins
   * within this pool.
   */
  monitor?: string;

  /**
   * Body param: This field is now deprecated. It has been moved to Cloudflare's
   * Centralized Notification service
   * https://developers.cloudflare.com/fundamentals/notifications/. The email address
   * to send health status notifications to. This can be an individual mailbox or a
   * mailing list. Multiple emails can be supplied as a comma delimited list.
   */
  notification_email?: string;

  /**
   * Body param: Filter pool and origin health notifications by resource type or
   * health status. Use null to reset.
   */
  notification_filter?: LoadBalancersAPI.NotificationFilterParam | null;

  /**
   * Body param: Configures origin steering for the pool. Controls how origins are
   * selected for new sessions and traffic without session affinity.
   */
  origin_steering?: LoadBalancersAPI.OriginSteeringParam;
}

export interface PoolUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: A short name (tag) for the pool. Only alphanumeric characters,
   * hyphens, and underscores are allowed.
   */
  name: string;

  /**
   * Body param: The list of origins within this pool. Traffic directed at this pool
   * is balanced across all currently healthy origins, provided the pool itself is
   * healthy.
   */
  origins: Array<LoadBalancersAPI.OriginParam>;

  /**
   * Body param: A list of regions from which to run health checks. Null means every
   * Cloudflare data center.
   */
  check_regions?: Array<LoadBalancersAPI.CheckRegionParam> | null;

  /**
   * Body param: A human-readable description of the pool.
   */
  description?: string;

  /**
   * Body param: Whether to enable (the default) or disable this pool. Disabled pools
   * will not receive traffic and are excluded from health checks. Disabling a pool
   * will cause any load balancers using it to failover to the next pool (if any).
   */
  enabled?: boolean;

  /**
   * Body param: The latitude of the data center containing the origins used in this
   * pool in decimal degrees. If this is set, longitude must also be set.
   */
  latitude?: number;

  /**
   * Body param: Configures load shedding policies and percentages for the pool.
   */
  load_shedding?: LoadBalancersAPI.LoadSheddingParam;

  /**
   * Body param: The longitude of the data center containing the origins used in this
   * pool in decimal degrees. If this is set, latitude must also be set.
   */
  longitude?: number;

  /**
   * Body param: The minimum number of origins that must be healthy for this pool to
   * serve traffic. If the number of healthy origins falls below this number, the
   * pool will be marked unhealthy and will failover to the next available pool.
   */
  minimum_origins?: number;

  /**
   * Body param: The ID of the Monitor to use for checking the health of origins
   * within this pool.
   */
  monitor?: string;

  /**
   * Body param: This field is now deprecated. It has been moved to Cloudflare's
   * Centralized Notification service
   * https://developers.cloudflare.com/fundamentals/notifications/. The email address
   * to send health status notifications to. This can be an individual mailbox or a
   * mailing list. Multiple emails can be supplied as a comma delimited list.
   */
  notification_email?: string;

  /**
   * Body param: Filter pool and origin health notifications by resource type or
   * health status. Use null to reset.
   */
  notification_filter?: LoadBalancersAPI.NotificationFilterParam | null;

  /**
   * Body param: Configures origin steering for the pool. Controls how origins are
   * selected for new sessions and traffic without session affinity.
   */
  origin_steering?: LoadBalancersAPI.OriginSteeringParam;
}

export interface PoolListParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param: The ID of the Monitor to use for checking the health of origins
   * within this pool.
   */
  monitor?: string;
}

export interface PoolDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface PoolBulkEditParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: The email address to send health status notifications to. This field
   * is now deprecated in favor of Cloudflare Notifications for Load Balancing, so
   * only resetting this field with an empty string `""` is accepted.
   */
  notification_email?: '';
}

export interface PoolEditParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: A list of regions from which to run health checks. Null means every
   * Cloudflare data center.
   */
  check_regions?: Array<LoadBalancersAPI.CheckRegionParam> | null;

  /**
   * Body param: A human-readable description of the pool.
   */
  description?: string;

  /**
   * Body param: Whether to enable (the default) or disable this pool. Disabled pools
   * will not receive traffic and are excluded from health checks. Disabling a pool
   * will cause any load balancers using it to failover to the next pool (if any).
   */
  enabled?: boolean;

  /**
   * Body param: The latitude of the data center containing the origins used in this
   * pool in decimal degrees. If this is set, longitude must also be set.
   */
  latitude?: number;

  /**
   * Body param: Configures load shedding policies and percentages for the pool.
   */
  load_shedding?: LoadBalancersAPI.LoadSheddingParam;

  /**
   * Body param: The longitude of the data center containing the origins used in this
   * pool in decimal degrees. If this is set, latitude must also be set.
   */
  longitude?: number;

  /**
   * Body param: The minimum number of origins that must be healthy for this pool to
   * serve traffic. If the number of healthy origins falls below this number, the
   * pool will be marked unhealthy and will failover to the next available pool.
   */
  minimum_origins?: number;

  /**
   * Body param: The ID of the Monitor to use for checking the health of origins
   * within this pool.
   */
  monitor?: string;

  /**
   * Body param: A short name (tag) for the pool. Only alphanumeric characters,
   * hyphens, and underscores are allowed.
   */
  name?: string;

  /**
   * Body param: This field is now deprecated. It has been moved to Cloudflare's
   * Centralized Notification service
   * https://developers.cloudflare.com/fundamentals/notifications/. The email address
   * to send health status notifications to. This can be an individual mailbox or a
   * mailing list. Multiple emails can be supplied as a comma delimited list.
   */
  notification_email?: string;

  /**
   * Body param: Filter pool and origin health notifications by resource type or
   * health status. Use null to reset.
   */
  notification_filter?: LoadBalancersAPI.NotificationFilterParam | null;

  /**
   * Body param: Configures origin steering for the pool. Controls how origins are
   * selected for new sessions and traffic without session affinity.
   */
  origin_steering?: LoadBalancersAPI.OriginSteeringParam;

  /**
   * Body param: The list of origins within this pool. Traffic directed at this pool
   * is balanced across all currently healthy origins, provided the pool itself is
   * healthy.
   */
  origins?: Array<LoadBalancersAPI.OriginParam>;
}

export interface PoolGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

Pools.PoolsSinglePage = PoolsSinglePage;
Pools.Health = Health;
Pools.References = References;

export declare namespace Pools {
  export {
    type Pool as Pool,
    type PoolDeleteResponse as PoolDeleteResponse,
    type PoolBulkEditResponse as PoolBulkEditResponse,
    PoolsSinglePage as PoolsSinglePage,
    type PoolCreateParams as PoolCreateParams,
    type PoolUpdateParams as PoolUpdateParams,
    type PoolListParams as PoolListParams,
    type PoolDeleteParams as PoolDeleteParams,
    type PoolBulkEditParams as PoolBulkEditParams,
    type PoolEditParams as PoolEditParams,
    type PoolGetParams as PoolGetParams,
  };

  export {
    Health as Health,
    type HealthCreateResponse as HealthCreateResponse,
    type HealthGetResponse as HealthGetResponse,
    type HealthCreateParams as HealthCreateParams,
    type HealthGetParams as HealthGetParams,
  };

  export {
    References as References,
    type ReferenceGetResponse as ReferenceGetResponse,
    type ReferenceGetParams as ReferenceGetParams,
  };
}
