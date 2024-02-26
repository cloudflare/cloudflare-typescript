// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as PoolsAPI from 'cloudflare/resources/load-balancers/pools/pools';
import * as HealthAPI from 'cloudflare/resources/load-balancers/pools/health';
import * as ReferencesAPI from 'cloudflare/resources/load-balancers/pools/references';

export class Pools extends APIResource {
  health: HealthAPI.Health = new HealthAPI.Health(this._client);
  references: ReferencesAPI.References = new ReferencesAPI.References(this._client);

  /**
   * Create a new pool.
   */
  create(
    accountId: string,
    body: PoolCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PoolCreateResponse> {
    return (
      this._client.post(`/accounts/${accountId}/load_balancers/pools`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PoolCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Modify a configured pool.
   */
  update(
    accountId: string,
    poolId: string,
    body: PoolUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PoolUpdateResponse> {
    return (
      this._client.put(`/accounts/${accountId}/load_balancers/pools/${poolId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PoolUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List configured pools.
   */
  list(
    accountId: string,
    query?: PoolListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PoolListResponse | null>;
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<PoolListResponse | null>;
  list(
    accountId: string,
    query: PoolListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PoolListResponse | null> {
    if (isRequestOptions(query)) {
      return this.list(accountId, {}, query);
    }
    return (
      this._client.get(`/accounts/${accountId}/load_balancers/pools`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: PoolListResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete a configured pool.
   */
  delete(
    accountId: string,
    poolId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PoolDeleteResponse> {
    return (
      this._client.delete(
        `/accounts/${accountId}/load_balancers/pools/${poolId}`,
        options,
      ) as Core.APIPromise<{ result: PoolDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Apply changes to an existing pool, overwriting the supplied properties.
   */
  edit(
    accountId: string,
    poolId: string,
    body: PoolEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PoolEditResponse> {
    return (
      this._client.patch(`/accounts/${accountId}/load_balancers/pools/${poolId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PoolEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a single configured pool.
   */
  get(accountId: string, poolId: string, options?: Core.RequestOptions): Core.APIPromise<PoolGetResponse> {
    return (
      this._client.get(`/accounts/${accountId}/load_balancers/pools/${poolId}`, options) as Core.APIPromise<{
        result: PoolGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface PoolCreateResponse {
  id?: string;

  /**
   * A list of regions from which to run health checks. Null means every Cloudflare
   * data center.
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
  load_shedding?: PoolCreateResponse.LoadShedding;

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
  notification_filter?: PoolCreateResponse.NotificationFilter | null;

  /**
   * Configures origin steering for the pool. Controls how origins are selected for
   * new sessions and traffic without session affinity.
   */
  origin_steering?: PoolCreateResponse.OriginSteering;

  /**
   * The list of origins within this pool. Traffic directed at this pool is balanced
   * across all currently healthy origins, provided the pool itself is healthy.
   */
  origins?: Array<PoolCreateResponse.Origin>;
}

export namespace PoolCreateResponse {
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
     * This field shows up only if the origin is disabled. This field is set with the
     * time the origin was disabled.
     */
    disabled_at?: string;

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

export interface PoolUpdateResponse {
  id?: string;

  /**
   * A list of regions from which to run health checks. Null means every Cloudflare
   * data center.
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
  load_shedding?: PoolUpdateResponse.LoadShedding;

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
  notification_filter?: PoolUpdateResponse.NotificationFilter | null;

  /**
   * Configures origin steering for the pool. Controls how origins are selected for
   * new sessions and traffic without session affinity.
   */
  origin_steering?: PoolUpdateResponse.OriginSteering;

  /**
   * The list of origins within this pool. Traffic directed at this pool is balanced
   * across all currently healthy origins, provided the pool itself is healthy.
   */
  origins?: Array<PoolUpdateResponse.Origin>;
}

export namespace PoolUpdateResponse {
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
     * This field shows up only if the origin is disabled. This field is set with the
     * time the origin was disabled.
     */
    disabled_at?: string;

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

export type PoolListResponse = Array<PoolListResponse.PoolListResponseItem>;

export namespace PoolListResponse {
  export interface PoolListResponseItem {
    id?: string;

    /**
     * A list of regions from which to run health checks. Null means every Cloudflare
     * data center.
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
    load_shedding?: PoolListResponseItem.LoadShedding;

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
    notification_filter?: PoolListResponseItem.NotificationFilter | null;

    /**
     * Configures origin steering for the pool. Controls how origins are selected for
     * new sessions and traffic without session affinity.
     */
    origin_steering?: PoolListResponseItem.OriginSteering;

    /**
     * The list of origins within this pool. Traffic directed at this pool is balanced
     * across all currently healthy origins, provided the pool itself is healthy.
     */
    origins?: Array<PoolListResponseItem.Origin>;
  }

  export namespace PoolListResponseItem {
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
       * This field shows up only if the origin is disabled. This field is set with the
       * time the origin was disabled.
       */
      disabled_at?: string;

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
}

export interface PoolDeleteResponse {
  id?: string;
}

export interface PoolEditResponse {
  id?: string;

  /**
   * A list of regions from which to run health checks. Null means every Cloudflare
   * data center.
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
  load_shedding?: PoolEditResponse.LoadShedding;

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
  notification_filter?: PoolEditResponse.NotificationFilter | null;

  /**
   * Configures origin steering for the pool. Controls how origins are selected for
   * new sessions and traffic without session affinity.
   */
  origin_steering?: PoolEditResponse.OriginSteering;

  /**
   * The list of origins within this pool. Traffic directed at this pool is balanced
   * across all currently healthy origins, provided the pool itself is healthy.
   */
  origins?: Array<PoolEditResponse.Origin>;
}

export namespace PoolEditResponse {
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
     * This field shows up only if the origin is disabled. This field is set with the
     * time the origin was disabled.
     */
    disabled_at?: string;

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

export interface PoolGetResponse {
  id?: string;

  /**
   * A list of regions from which to run health checks. Null means every Cloudflare
   * data center.
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
  load_shedding?: PoolGetResponse.LoadShedding;

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
  notification_filter?: PoolGetResponse.NotificationFilter | null;

  /**
   * Configures origin steering for the pool. Controls how origins are selected for
   * new sessions and traffic without session affinity.
   */
  origin_steering?: PoolGetResponse.OriginSteering;

  /**
   * The list of origins within this pool. Traffic directed at this pool is balanced
   * across all currently healthy origins, provided the pool itself is healthy.
   */
  origins?: Array<PoolGetResponse.Origin>;
}

export namespace PoolGetResponse {
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
     * This field shows up only if the origin is disabled. This field is set with the
     * time the origin was disabled.
     */
    disabled_at?: string;

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
  origins: Array<PoolCreateParams.Origin>;

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
  load_shedding?: PoolCreateParams.LoadShedding;

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
  notification_filter?: PoolCreateParams.NotificationFilter | null;

  /**
   * Configures origin steering for the pool. Controls how origins are selected for
   * new sessions and traffic without session affinity.
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
   * A short name (tag) for the pool. Only alphanumeric characters, hyphens, and
   * underscores are allowed.
   */
  name: string;

  /**
   * The list of origins within this pool. Traffic directed at this pool is balanced
   * across all currently healthy origins, provided the pool itself is healthy.
   */
  origins: Array<PoolUpdateParams.Origin>;

  /**
   * A list of regions from which to run health checks. Null means every Cloudflare
   * data center.
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
  load_shedding?: PoolUpdateParams.LoadShedding;

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
  notification_filter?: PoolUpdateParams.NotificationFilter | null;

  /**
   * Configures origin steering for the pool. Controls how origins are selected for
   * new sessions and traffic without session affinity.
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
   * The ID of the Monitor to use for checking the health of origins within this
   * pool.
   */
  monitor?: unknown;
}

export interface PoolEditParams {
  /**
   * A list of regions from which to run health checks. Null means every Cloudflare
   * data center.
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
  load_shedding?: PoolEditParams.LoadShedding;

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
  notification_filter?: PoolEditParams.NotificationFilter | null;

  /**
   * Configures origin steering for the pool. Controls how origins are selected for
   * new sessions and traffic without session affinity.
   */
  origin_steering?: PoolEditParams.OriginSteering;

  /**
   * The list of origins within this pool. Traffic directed at this pool is balanced
   * across all currently healthy origins, provided the pool itself is healthy.
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

export namespace Pools {
  export import PoolCreateResponse = PoolsAPI.PoolCreateResponse;
  export import PoolUpdateResponse = PoolsAPI.PoolUpdateResponse;
  export import PoolListResponse = PoolsAPI.PoolListResponse;
  export import PoolDeleteResponse = PoolsAPI.PoolDeleteResponse;
  export import PoolEditResponse = PoolsAPI.PoolEditResponse;
  export import PoolGetResponse = PoolsAPI.PoolGetResponse;
  export import PoolCreateParams = PoolsAPI.PoolCreateParams;
  export import PoolUpdateParams = PoolsAPI.PoolUpdateParams;
  export import PoolListParams = PoolsAPI.PoolListParams;
  export import PoolEditParams = PoolsAPI.PoolEditParams;
  export import Health = HealthAPI.Health;
  export import HealthCreateResponse = HealthAPI.HealthCreateResponse;
  export import HealthGetResponse = HealthAPI.HealthGetResponse;
  export import HealthCreateParams = HealthAPI.HealthCreateParams;
  export import References = ReferencesAPI.References;
  export import ReferenceListResponse = ReferencesAPI.ReferenceListResponse;
}
