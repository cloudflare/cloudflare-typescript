// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PoolsAPI from 'cloudflare/resources/load-balancers/pools/pools';
import * as HealthAPI from 'cloudflare/resources/load-balancers/pools/health';
import * as ReferencesAPI from 'cloudflare/resources/load-balancers/pools/references';
import * as LoadBalancersPoolsAPI from 'cloudflare/resources/user/load-balancers/pools';

export class Pools extends APIResource {
  health: HealthAPI.Health = new HealthAPI.Health(this._client);
  references: ReferencesAPI.References = new ReferencesAPI.References(this._client);

  /**
   * Create a new pool.
   */
  create(
    params: PoolCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LoadBalancersPoolsAPI.LoadBalancingPool> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/load_balancers/pools`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: LoadBalancersPoolsAPI.LoadBalancingPool }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Modify a configured pool.
   */
  update(
    poolId: string,
    params: PoolUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LoadBalancersPoolsAPI.LoadBalancingPool> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/load_balancers/pools/${poolId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: LoadBalancersPoolsAPI.LoadBalancingPool }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List configured pools.
   */
  list(params: PoolListParams, options?: Core.RequestOptions): Core.APIPromise<PoolListResponse | null> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/load_balancers/pools`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: PoolListResponse | null }>
    )._thenUnwrap((obj) => obj.result);
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
   * Apply changes to an existing pool, overwriting the supplied properties.
   */
  edit(
    poolId: string,
    params: PoolEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LoadBalancersPoolsAPI.LoadBalancingPool> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/load_balancers/pools/${poolId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: LoadBalancersPoolsAPI.LoadBalancingPool }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a single configured pool.
   */
  get(
    poolId: string,
    params: PoolGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LoadBalancersPoolsAPI.LoadBalancingPool> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/load_balancers/pools/${poolId}`, options) as Core.APIPromise<{
        result: LoadBalancersPoolsAPI.LoadBalancingPool;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type PoolListResponse = Array<LoadBalancersPoolsAPI.LoadBalancingPool>;

export interface PoolDeleteResponse {
  id?: string;
}

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
  origins: Array<PoolCreateParams.Origin>;

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
  load_shedding?: PoolCreateParams.LoadShedding;

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
  monitor?: unknown;

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
  notification_filter?: PoolCreateParams.NotificationFilter | null;

  /**
   * Body param: Configures origin steering for the pool. Controls how origins are
   * selected for new sessions and traffic without session affinity.
   */
  origin_steering?: PoolCreateParams.OriginSteering;
}

export namespace PoolCreateParams {
  export interface Origin {
    /**
     * The IP address (IPv4 or IPv6) of the origin, or its publicly addressable
     * hostname. Hostnames entered here should resolve directly to the origin, and not
     * be a hostname proxied by Cloudflare. To set an internal/reserved address,
     * virtual_network_id must also be set.
     */
    address?: string;

    /**
     * Whether to enable (the default) this origin within the pool. Disabled origins
     * will not receive traffic and are excluded from health checks. The origin will
     * only be disabled for the current pool.
     */
    enabled?: boolean;

    /**
     * The request header is used to pass additional information with an HTTP request.
     * Currently supported header is 'Host'.
     */
    header?: Origin.Header;

    /**
     * A human-identifiable name for the origin.
     */
    name?: string;

    /**
     * The virtual network subnet ID the origin belongs in. Virtual network must also
     * belong to the account.
     */
    virtual_network_id?: string;

    /**
     * The weight of this origin relative to other origins in the pool. Based on the
     * configured weight the total traffic is distributed among origins within the
     * pool.
     *
     * - `origin_steering.policy="least_outstanding_requests"`: Use weight to scale the
     *   origin's outstanding requests.
     * - `origin_steering.policy="least_connections"`: Use weight to scale the origin's
     *   open connections.
     */
    weight?: number;
  }

  export namespace Origin {
    /**
     * The request header is used to pass additional information with an HTTP request.
     * Currently supported header is 'Host'.
     */
    export interface Header {
      /**
       * The 'Host' header allows to override the hostname set in the HTTP request.
       * Current support is 1 'Host' header override per origin.
       */
      Host?: Array<string>;
    }
  }

  /**
   * Configures load shedding policies and percentages for the pool.
   */
  export interface LoadShedding {
    /**
     * The percent of traffic to shed from the pool, according to the default policy.
     * Applies to new sessions and traffic without session affinity.
     */
    default_percent?: number;

    /**
     * The default policy to use when load shedding. A random policy randomly sheds a
     * given percent of requests. A hash policy computes a hash over the
     * CF-Connecting-IP address and sheds all requests originating from a percent of
     * IPs.
     */
    default_policy?: 'random' | 'hash';

    /**
     * The percent of existing sessions to shed from the pool, according to the session
     * policy.
     */
    session_percent?: number;

    /**
     * Only the hash policy is supported for existing sessions (to avoid exponential
     * decay).
     */
    session_policy?: 'hash';
  }

  /**
   * Filter pool and origin health notifications by resource type or health status.
   * Use null to reset.
   */
  export interface NotificationFilter {
    /**
     * Filter options for a particular resource type (pool or origin). Use null to
     * reset.
     */
    origin?: NotificationFilter.Origin | null;

    /**
     * Filter options for a particular resource type (pool or origin). Use null to
     * reset.
     */
    pool?: NotificationFilter.Pool | null;
  }

  export namespace NotificationFilter {
    /**
     * Filter options for a particular resource type (pool or origin). Use null to
     * reset.
     */
    export interface Origin {
      /**
       * If set true, disable notifications for this type of resource (pool or origin).
       */
      disable?: boolean;

      /**
       * If present, send notifications only for this health status (e.g. false for only
       * DOWN events). Use null to reset (all events).
       */
      healthy?: boolean | null;
    }

    /**
     * Filter options for a particular resource type (pool or origin). Use null to
     * reset.
     */
    export interface Pool {
      /**
       * If set true, disable notifications for this type of resource (pool or origin).
       */
      disable?: boolean;

      /**
       * If present, send notifications only for this health status (e.g. false for only
       * DOWN events). Use null to reset (all events).
       */
      healthy?: boolean | null;
    }
  }

  /**
   * Configures origin steering for the pool. Controls how origins are selected for
   * new sessions and traffic without session affinity.
   */
  export interface OriginSteering {
    /**
     * The type of origin steering policy to use.
     *
     * - `"random"`: Select an origin randomly.
     * - `"hash"`: Select an origin by computing a hash over the CF-Connecting-IP
     *   address.
     * - `"least_outstanding_requests"`: Select an origin by taking into consideration
     *   origin weights, as well as each origin's number of outstanding requests.
     *   Origins with more pending requests are weighted proportionately less relative
     *   to others.
     * - `"least_connections"`: Select an origin by taking into consideration origin
     *   weights, as well as each origin's number of open connections. Origins with
     *   more open connections are weighted proportionately less relative to others.
     *   Supported for HTTP/1 and HTTP/2 connections.
     */
    policy?: 'random' | 'hash' | 'least_outstanding_requests' | 'least_connections';
  }
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
  origins: Array<PoolUpdateParams.Origin>;

  /**
   * Body param: A list of regions from which to run health checks. Null means every
   * Cloudflare data center.
   */
  check_regions?: Array<
    | 'WNAM'
    | 'ENAM'
    | 'WEU'
    | 'EEU'
    | 'NSAM'
    | 'SSAM'
    | 'OC'
    | 'ME'
    | 'NAF'
    | 'SAF'
    | 'SAS'
    | 'SEAS'
    | 'NEAS'
    | 'ALL_REGIONS'
  > | null;

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
  load_shedding?: PoolUpdateParams.LoadShedding;

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
  monitor?: unknown;

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
  notification_filter?: PoolUpdateParams.NotificationFilter | null;

  /**
   * Body param: Configures origin steering for the pool. Controls how origins are
   * selected for new sessions and traffic without session affinity.
   */
  origin_steering?: PoolUpdateParams.OriginSteering;
}

export namespace PoolUpdateParams {
  export interface Origin {
    /**
     * The IP address (IPv4 or IPv6) of the origin, or its publicly addressable
     * hostname. Hostnames entered here should resolve directly to the origin, and not
     * be a hostname proxied by Cloudflare. To set an internal/reserved address,
     * virtual_network_id must also be set.
     */
    address?: string;

    /**
     * Whether to enable (the default) this origin within the pool. Disabled origins
     * will not receive traffic and are excluded from health checks. The origin will
     * only be disabled for the current pool.
     */
    enabled?: boolean;

    /**
     * The request header is used to pass additional information with an HTTP request.
     * Currently supported header is 'Host'.
     */
    header?: Origin.Header;

    /**
     * A human-identifiable name for the origin.
     */
    name?: string;

    /**
     * The virtual network subnet ID the origin belongs in. Virtual network must also
     * belong to the account.
     */
    virtual_network_id?: string;

    /**
     * The weight of this origin relative to other origins in the pool. Based on the
     * configured weight the total traffic is distributed among origins within the
     * pool.
     *
     * - `origin_steering.policy="least_outstanding_requests"`: Use weight to scale the
     *   origin's outstanding requests.
     * - `origin_steering.policy="least_connections"`: Use weight to scale the origin's
     *   open connections.
     */
    weight?: number;
  }

  export namespace Origin {
    /**
     * The request header is used to pass additional information with an HTTP request.
     * Currently supported header is 'Host'.
     */
    export interface Header {
      /**
       * The 'Host' header allows to override the hostname set in the HTTP request.
       * Current support is 1 'Host' header override per origin.
       */
      Host?: Array<string>;
    }
  }

  /**
   * Configures load shedding policies and percentages for the pool.
   */
  export interface LoadShedding {
    /**
     * The percent of traffic to shed from the pool, according to the default policy.
     * Applies to new sessions and traffic without session affinity.
     */
    default_percent?: number;

    /**
     * The default policy to use when load shedding. A random policy randomly sheds a
     * given percent of requests. A hash policy computes a hash over the
     * CF-Connecting-IP address and sheds all requests originating from a percent of
     * IPs.
     */
    default_policy?: 'random' | 'hash';

    /**
     * The percent of existing sessions to shed from the pool, according to the session
     * policy.
     */
    session_percent?: number;

    /**
     * Only the hash policy is supported for existing sessions (to avoid exponential
     * decay).
     */
    session_policy?: 'hash';
  }

  /**
   * Filter pool and origin health notifications by resource type or health status.
   * Use null to reset.
   */
  export interface NotificationFilter {
    /**
     * Filter options for a particular resource type (pool or origin). Use null to
     * reset.
     */
    origin?: NotificationFilter.Origin | null;

    /**
     * Filter options for a particular resource type (pool or origin). Use null to
     * reset.
     */
    pool?: NotificationFilter.Pool | null;
  }

  export namespace NotificationFilter {
    /**
     * Filter options for a particular resource type (pool or origin). Use null to
     * reset.
     */
    export interface Origin {
      /**
       * If set true, disable notifications for this type of resource (pool or origin).
       */
      disable?: boolean;

      /**
       * If present, send notifications only for this health status (e.g. false for only
       * DOWN events). Use null to reset (all events).
       */
      healthy?: boolean | null;
    }

    /**
     * Filter options for a particular resource type (pool or origin). Use null to
     * reset.
     */
    export interface Pool {
      /**
       * If set true, disable notifications for this type of resource (pool or origin).
       */
      disable?: boolean;

      /**
       * If present, send notifications only for this health status (e.g. false for only
       * DOWN events). Use null to reset (all events).
       */
      healthy?: boolean | null;
    }
  }

  /**
   * Configures origin steering for the pool. Controls how origins are selected for
   * new sessions and traffic without session affinity.
   */
  export interface OriginSteering {
    /**
     * The type of origin steering policy to use.
     *
     * - `"random"`: Select an origin randomly.
     * - `"hash"`: Select an origin by computing a hash over the CF-Connecting-IP
     *   address.
     * - `"least_outstanding_requests"`: Select an origin by taking into consideration
     *   origin weights, as well as each origin's number of outstanding requests.
     *   Origins with more pending requests are weighted proportionately less relative
     *   to others.
     * - `"least_connections"`: Select an origin by taking into consideration origin
     *   weights, as well as each origin's number of open connections. Origins with
     *   more open connections are weighted proportionately less relative to others.
     *   Supported for HTTP/1 and HTTP/2 connections.
     */
    policy?: 'random' | 'hash' | 'least_outstanding_requests' | 'least_connections';
  }
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
  monitor?: unknown;
}

export interface PoolDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
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
  check_regions?: Array<
    | 'WNAM'
    | 'ENAM'
    | 'WEU'
    | 'EEU'
    | 'NSAM'
    | 'SSAM'
    | 'OC'
    | 'ME'
    | 'NAF'
    | 'SAF'
    | 'SAS'
    | 'SEAS'
    | 'NEAS'
    | 'ALL_REGIONS'
  > | null;

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
  load_shedding?: PoolEditParams.LoadShedding;

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
  monitor?: unknown;

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
  notification_filter?: PoolEditParams.NotificationFilter | null;

  /**
   * Body param: Configures origin steering for the pool. Controls how origins are
   * selected for new sessions and traffic without session affinity.
   */
  origin_steering?: PoolEditParams.OriginSteering;

  /**
   * Body param: The list of origins within this pool. Traffic directed at this pool
   * is balanced across all currently healthy origins, provided the pool itself is
   * healthy.
   */
  origins?: Array<PoolEditParams.Origin>;
}

export namespace PoolEditParams {
  /**
   * Configures load shedding policies and percentages for the pool.
   */
  export interface LoadShedding {
    /**
     * The percent of traffic to shed from the pool, according to the default policy.
     * Applies to new sessions and traffic without session affinity.
     */
    default_percent?: number;

    /**
     * The default policy to use when load shedding. A random policy randomly sheds a
     * given percent of requests. A hash policy computes a hash over the
     * CF-Connecting-IP address and sheds all requests originating from a percent of
     * IPs.
     */
    default_policy?: 'random' | 'hash';

    /**
     * The percent of existing sessions to shed from the pool, according to the session
     * policy.
     */
    session_percent?: number;

    /**
     * Only the hash policy is supported for existing sessions (to avoid exponential
     * decay).
     */
    session_policy?: 'hash';
  }

  /**
   * Filter pool and origin health notifications by resource type or health status.
   * Use null to reset.
   */
  export interface NotificationFilter {
    /**
     * Filter options for a particular resource type (pool or origin). Use null to
     * reset.
     */
    origin?: NotificationFilter.Origin | null;

    /**
     * Filter options for a particular resource type (pool or origin). Use null to
     * reset.
     */
    pool?: NotificationFilter.Pool | null;
  }

  export namespace NotificationFilter {
    /**
     * Filter options for a particular resource type (pool or origin). Use null to
     * reset.
     */
    export interface Origin {
      /**
       * If set true, disable notifications for this type of resource (pool or origin).
       */
      disable?: boolean;

      /**
       * If present, send notifications only for this health status (e.g. false for only
       * DOWN events). Use null to reset (all events).
       */
      healthy?: boolean | null;
    }

    /**
     * Filter options for a particular resource type (pool or origin). Use null to
     * reset.
     */
    export interface Pool {
      /**
       * If set true, disable notifications for this type of resource (pool or origin).
       */
      disable?: boolean;

      /**
       * If present, send notifications only for this health status (e.g. false for only
       * DOWN events). Use null to reset (all events).
       */
      healthy?: boolean | null;
    }
  }

  /**
   * Configures origin steering for the pool. Controls how origins are selected for
   * new sessions and traffic without session affinity.
   */
  export interface OriginSteering {
    /**
     * The type of origin steering policy to use.
     *
     * - `"random"`: Select an origin randomly.
     * - `"hash"`: Select an origin by computing a hash over the CF-Connecting-IP
     *   address.
     * - `"least_outstanding_requests"`: Select an origin by taking into consideration
     *   origin weights, as well as each origin's number of outstanding requests.
     *   Origins with more pending requests are weighted proportionately less relative
     *   to others.
     * - `"least_connections"`: Select an origin by taking into consideration origin
     *   weights, as well as each origin's number of open connections. Origins with
     *   more open connections are weighted proportionately less relative to others.
     *   Supported for HTTP/1 and HTTP/2 connections.
     */
    policy?: 'random' | 'hash' | 'least_outstanding_requests' | 'least_connections';
  }

  export interface Origin {
    /**
     * The IP address (IPv4 or IPv6) of the origin, or its publicly addressable
     * hostname. Hostnames entered here should resolve directly to the origin, and not
     * be a hostname proxied by Cloudflare. To set an internal/reserved address,
     * virtual_network_id must also be set.
     */
    address?: string;

    /**
     * Whether to enable (the default) this origin within the pool. Disabled origins
     * will not receive traffic and are excluded from health checks. The origin will
     * only be disabled for the current pool.
     */
    enabled?: boolean;

    /**
     * The request header is used to pass additional information with an HTTP request.
     * Currently supported header is 'Host'.
     */
    header?: Origin.Header;

    /**
     * A human-identifiable name for the origin.
     */
    name?: string;

    /**
     * The virtual network subnet ID the origin belongs in. Virtual network must also
     * belong to the account.
     */
    virtual_network_id?: string;

    /**
     * The weight of this origin relative to other origins in the pool. Based on the
     * configured weight the total traffic is distributed among origins within the
     * pool.
     *
     * - `origin_steering.policy="least_outstanding_requests"`: Use weight to scale the
     *   origin's outstanding requests.
     * - `origin_steering.policy="least_connections"`: Use weight to scale the origin's
     *   open connections.
     */
    weight?: number;
  }

  export namespace Origin {
    /**
     * The request header is used to pass additional information with an HTTP request.
     * Currently supported header is 'Host'.
     */
    export interface Header {
      /**
       * The 'Host' header allows to override the hostname set in the HTTP request.
       * Current support is 1 'Host' header override per origin.
       */
      Host?: Array<string>;
    }
  }
}

export interface PoolGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Pools {
  export import PoolListResponse = PoolsAPI.PoolListResponse;
  export import PoolDeleteResponse = PoolsAPI.PoolDeleteResponse;
  export import PoolCreateParams = PoolsAPI.PoolCreateParams;
  export import PoolUpdateParams = PoolsAPI.PoolUpdateParams;
  export import PoolListParams = PoolsAPI.PoolListParams;
  export import PoolDeleteParams = PoolsAPI.PoolDeleteParams;
  export import PoolEditParams = PoolsAPI.PoolEditParams;
  export import PoolGetParams = PoolsAPI.PoolGetParams;
  export import Health = HealthAPI.Health;
  export import HealthCreateResponse = HealthAPI.HealthCreateResponse;
  export import HealthGetResponse = HealthAPI.HealthGetResponse;
  export import HealthCreateParams = HealthAPI.HealthCreateParams;
  export import HealthGetParams = HealthAPI.HealthGetParams;
  export import References = ReferencesAPI.References;
  export import ReferenceGetResponse = ReferencesAPI.ReferenceGetResponse;
  export import ReferenceGetParams = ReferencesAPI.ReferenceGetParams;
}
