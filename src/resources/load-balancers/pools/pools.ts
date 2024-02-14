// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as PoolsAPI from 'cloudflare/resources/load-balancers/pools/pools';
import * as HealthAPI from 'cloudflare/resources/load-balancers/pools/health';
import * as PreviewsAPI from 'cloudflare/resources/load-balancers/pools/previews';
import * as ReferencesAPI from 'cloudflare/resources/load-balancers/pools/references';

export class Pools extends APIResource {
  health: HealthAPI.Health = new HealthAPI.Health(this._client);
  previews: PreviewsAPI.Previews = new PreviewsAPI.Previews(this._client);
  references: ReferencesAPI.References = new ReferencesAPI.References(this._client);

  /**
   * Fetch a single configured pool.
   */
  retrieve(
    accountIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PoolRetrieveResponse> {
    return (
      this._client.get(
        `/accounts/${accountIdentifier}/load_balancers/pools/${identifier}`,
        options,
      ) as Core.APIPromise<{ result: PoolRetrieveResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Modify a configured pool.
   */
  update(
    accountIdentifier: string,
    identifier: string,
    body: PoolUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PoolUpdateResponse> {
    return (
      this._client.put(`/accounts/${accountIdentifier}/load_balancers/pools/${identifier}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PoolUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete a configured pool.
   */
  delete(
    accountIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PoolDeleteResponse> {
    return (
      this._client.delete(
        `/accounts/${accountIdentifier}/load_balancers/pools/${identifier}`,
        options,
      ) as Core.APIPromise<{ result: PoolDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Create a new pool.
   */
  accountLoadBalancerPoolsCreatePool(
    accountIdentifier: string,
    body: PoolAccountLoadBalancerPoolsCreatePoolParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PoolAccountLoadBalancerPoolsCreatePoolResponse> {
    return (
      this._client.post(`/accounts/${accountIdentifier}/load_balancers/pools`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PoolAccountLoadBalancerPoolsCreatePoolResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List configured pools.
   */
  accountLoadBalancerPoolsListPools(
    accountIdentifier: string,
    query?: PoolAccountLoadBalancerPoolsListPoolsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PoolAccountLoadBalancerPoolsListPoolsResponse | null>;
  accountLoadBalancerPoolsListPools(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PoolAccountLoadBalancerPoolsListPoolsResponse | null>;
  accountLoadBalancerPoolsListPools(
    accountIdentifier: string,
    query: PoolAccountLoadBalancerPoolsListPoolsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PoolAccountLoadBalancerPoolsListPoolsResponse | null> {
    if (isRequestOptions(query)) {
      return this.accountLoadBalancerPoolsListPools(accountIdentifier, {}, query);
    }
    return (
      this._client.get(`/accounts/${accountIdentifier}/load_balancers/pools`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: PoolAccountLoadBalancerPoolsListPoolsResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Apply changes to a number of existing pools, overwriting the supplied
   * properties. Pools are ordered by ascending `name`. Returns the list of affected
   * pools. Supports the standard pagination query parameters, either
   * `limit`/`offset` or `per_page`/`page`.
   */
  accountLoadBalancerPoolsPatchPools(
    accountIdentifier: string,
    body: PoolAccountLoadBalancerPoolsPatchPoolsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PoolAccountLoadBalancerPoolsPatchPoolsResponse | null> {
    return (
      this._client.patch(`/accounts/${accountIdentifier}/load_balancers/pools`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PoolAccountLoadBalancerPoolsPatchPoolsResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface PoolRetrieveResponse {
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
  load_shedding?: PoolRetrieveResponse.LoadShedding;

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
  notification_filter?: PoolRetrieveResponse.NotificationFilter | null;

  /**
   * Configures origin steering for the pool. Controls how origins are selected for
   * new sessions and traffic without session affinity.
   */
  origin_steering?: PoolRetrieveResponse.OriginSteering;

  /**
   * The list of origins within this pool. Traffic directed at this pool is balanced
   * across all currently healthy origins, provided the pool itself is healthy.
   */
  origins?: Array<PoolRetrieveResponse.Origin>;
}

export namespace PoolRetrieveResponse {
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

export interface PoolDeleteResponse {
  id?: string;
}

export interface PoolAccountLoadBalancerPoolsCreatePoolResponse {
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
  load_shedding?: PoolAccountLoadBalancerPoolsCreatePoolResponse.LoadShedding;

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
  notification_filter?: PoolAccountLoadBalancerPoolsCreatePoolResponse.NotificationFilter | null;

  /**
   * Configures origin steering for the pool. Controls how origins are selected for
   * new sessions and traffic without session affinity.
   */
  origin_steering?: PoolAccountLoadBalancerPoolsCreatePoolResponse.OriginSteering;

  /**
   * The list of origins within this pool. Traffic directed at this pool is balanced
   * across all currently healthy origins, provided the pool itself is healthy.
   */
  origins?: Array<PoolAccountLoadBalancerPoolsCreatePoolResponse.Origin>;
}

export namespace PoolAccountLoadBalancerPoolsCreatePoolResponse {
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

export type PoolAccountLoadBalancerPoolsListPoolsResponse =
  Array<PoolAccountLoadBalancerPoolsListPoolsResponse.PoolAccountLoadBalancerPoolsListPoolsResponseItem>;

export namespace PoolAccountLoadBalancerPoolsListPoolsResponse {
  export interface PoolAccountLoadBalancerPoolsListPoolsResponseItem {
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
    load_shedding?: PoolAccountLoadBalancerPoolsListPoolsResponseItem.LoadShedding;

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
    notification_filter?: PoolAccountLoadBalancerPoolsListPoolsResponseItem.NotificationFilter | null;

    /**
     * Configures origin steering for the pool. Controls how origins are selected for
     * new sessions and traffic without session affinity.
     */
    origin_steering?: PoolAccountLoadBalancerPoolsListPoolsResponseItem.OriginSteering;

    /**
     * The list of origins within this pool. Traffic directed at this pool is balanced
     * across all currently healthy origins, provided the pool itself is healthy.
     */
    origins?: Array<PoolAccountLoadBalancerPoolsListPoolsResponseItem.Origin>;
  }

  export namespace PoolAccountLoadBalancerPoolsListPoolsResponseItem {
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

export type PoolAccountLoadBalancerPoolsPatchPoolsResponse =
  Array<PoolAccountLoadBalancerPoolsPatchPoolsResponse.PoolAccountLoadBalancerPoolsPatchPoolsResponseItem>;

export namespace PoolAccountLoadBalancerPoolsPatchPoolsResponse {
  export interface PoolAccountLoadBalancerPoolsPatchPoolsResponseItem {
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
    load_shedding?: PoolAccountLoadBalancerPoolsPatchPoolsResponseItem.LoadShedding;

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
    notification_filter?: PoolAccountLoadBalancerPoolsPatchPoolsResponseItem.NotificationFilter | null;

    /**
     * Configures origin steering for the pool. Controls how origins are selected for
     * new sessions and traffic without session affinity.
     */
    origin_steering?: PoolAccountLoadBalancerPoolsPatchPoolsResponseItem.OriginSteering;

    /**
     * The list of origins within this pool. Traffic directed at this pool is balanced
     * across all currently healthy origins, provided the pool itself is healthy.
     */
    origins?: Array<PoolAccountLoadBalancerPoolsPatchPoolsResponseItem.Origin>;
  }

  export namespace PoolAccountLoadBalancerPoolsPatchPoolsResponseItem {
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

export interface PoolAccountLoadBalancerPoolsCreatePoolParams {
  /**
   * A short name (tag) for the pool. Only alphanumeric characters, hyphens, and
   * underscores are allowed.
   */
  name: string;

  /**
   * The list of origins within this pool. Traffic directed at this pool is balanced
   * across all currently healthy origins, provided the pool itself is healthy.
   */
  origins: Array<PoolAccountLoadBalancerPoolsCreatePoolParams.Origin>;

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
  load_shedding?: PoolAccountLoadBalancerPoolsCreatePoolParams.LoadShedding;

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
  notification_filter?: PoolAccountLoadBalancerPoolsCreatePoolParams.NotificationFilter | null;

  /**
   * Configures origin steering for the pool. Controls how origins are selected for
   * new sessions and traffic without session affinity.
   */
  origin_steering?: PoolAccountLoadBalancerPoolsCreatePoolParams.OriginSteering;
}

export namespace PoolAccountLoadBalancerPoolsCreatePoolParams {
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

export interface PoolAccountLoadBalancerPoolsListPoolsParams {
  /**
   * The ID of the Monitor to use for checking the health of origins within this
   * pool.
   */
  monitor?: unknown;
}

export interface PoolAccountLoadBalancerPoolsPatchPoolsParams {
  /**
   * The email address to send health status notifications to. This field is now
   * deprecated in favor of Cloudflare Notifications for Load Balancing, so only
   * resetting this field with an empty string `""` is accepted.
   */
  notification_email?: '""';
}

export namespace Pools {
  export import PoolRetrieveResponse = PoolsAPI.PoolRetrieveResponse;
  export import PoolUpdateResponse = PoolsAPI.PoolUpdateResponse;
  export import PoolDeleteResponse = PoolsAPI.PoolDeleteResponse;
  export import PoolAccountLoadBalancerPoolsCreatePoolResponse = PoolsAPI.PoolAccountLoadBalancerPoolsCreatePoolResponse;
  export import PoolAccountLoadBalancerPoolsListPoolsResponse = PoolsAPI.PoolAccountLoadBalancerPoolsListPoolsResponse;
  export import PoolAccountLoadBalancerPoolsPatchPoolsResponse = PoolsAPI.PoolAccountLoadBalancerPoolsPatchPoolsResponse;
  export import PoolUpdateParams = PoolsAPI.PoolUpdateParams;
  export import PoolAccountLoadBalancerPoolsCreatePoolParams = PoolsAPI.PoolAccountLoadBalancerPoolsCreatePoolParams;
  export import PoolAccountLoadBalancerPoolsListPoolsParams = PoolsAPI.PoolAccountLoadBalancerPoolsListPoolsParams;
  export import PoolAccountLoadBalancerPoolsPatchPoolsParams = PoolsAPI.PoolAccountLoadBalancerPoolsPatchPoolsParams;
  export import Health = HealthAPI.Health;
  export import HealthAccountLoadBalancerPoolsPoolHealthDetailsResponse = HealthAPI.HealthAccountLoadBalancerPoolsPoolHealthDetailsResponse;
  export import Previews = PreviewsAPI.Previews;
  export import PreviewAccountLoadBalancerPoolsPreviewPoolResponse = PreviewsAPI.PreviewAccountLoadBalancerPoolsPreviewPoolResponse;
  export import PreviewAccountLoadBalancerPoolsPreviewPoolParams = PreviewsAPI.PreviewAccountLoadBalancerPoolsPreviewPoolParams;
  export import References = ReferencesAPI.References;
  export import ReferenceAccountLoadBalancerPoolsListPoolReferencesResponse = ReferencesAPI.ReferenceAccountLoadBalancerPoolsListPoolReferencesResponse;
}
