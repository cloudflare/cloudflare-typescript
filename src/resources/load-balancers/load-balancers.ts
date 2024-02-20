// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as LoadBalancersAPI from 'cloudflare/resources/load-balancers/load-balancers';
import * as PreviewsAPI from 'cloudflare/resources/load-balancers/previews';
import * as RegionsAPI from 'cloudflare/resources/load-balancers/regions';
import * as SearchesAPI from 'cloudflare/resources/load-balancers/searches';
import * as MonitorsAPI from 'cloudflare/resources/load-balancers/monitors/monitors';
import * as PoolsAPI from 'cloudflare/resources/load-balancers/pools/pools';

export class LoadBalancers extends APIResource {
  monitors: MonitorsAPI.Monitors = new MonitorsAPI.Monitors(this._client);
  pools: PoolsAPI.Pools = new PoolsAPI.Pools(this._client);
  previews: PreviewsAPI.Previews = new PreviewsAPI.Previews(this._client);
  regions: RegionsAPI.Regions = new RegionsAPI.Regions(this._client);
  searches: SearchesAPI.Searches = new SearchesAPI.Searches(this._client);

  /**
   * Create a new load balancer.
   */
  create(
    zoneId: string,
    body: LoadBalancerCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LoadBalancerCreateResponse> {
    return (
      this._client.post(`/zones/${zoneId}/load_balancers`, { body, ...options }) as Core.APIPromise<{
        result: LoadBalancerCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List configured load balancers.
   */
  list(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<LoadBalancerListResponse | null> {
    return (
      this._client.get(`/zones/${zoneId}/load_balancers`, options) as Core.APIPromise<{
        result: LoadBalancerListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete a configured load balancer.
   */
  delete(
    zoneId: string,
    loadBalancerId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LoadBalancerDeleteResponse> {
    return (
      this._client.delete(`/zones/${zoneId}/load_balancers/${loadBalancerId}`, options) as Core.APIPromise<{
        result: LoadBalancerDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Apply changes to an existing load balancer, overwriting the supplied properties.
   */
  edit(
    zoneId: string,
    loadBalancerId: string,
    body: LoadBalancerEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LoadBalancerEditResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/load_balancers/${loadBalancerId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: LoadBalancerEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a single configured load balancer.
   */
  get(
    zoneId: string,
    loadBalancerId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LoadBalancerGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/load_balancers/${loadBalancerId}`, options) as Core.APIPromise<{
        result: LoadBalancerGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface LoadBalancerCreateResponse {
  id?: string;

  /**
   * Controls features that modify the routing of requests to pools and origins in
   * response to dynamic conditions, such as during the interval between active
   * health monitoring requests. For example, zero-downtime failover occurs
   * immediately when an origin becomes unavailable due to HTTP 521, 522, or 523
   * response codes. If there is another healthy origin in the same pool, the request
   * is retried once against this alternate origin.
   */
  adaptive_routing?: LoadBalancerCreateResponse.AdaptiveRouting;

  /**
   * A mapping of country codes to a list of pool IDs (ordered by their failover
   * priority) for the given country. Any country not explicitly defined will fall
   * back to using the corresponding region_pool mapping if it exists else to
   * default_pools.
   */
  country_pools?: unknown;

  created_on?: string;

  /**
   * A list of pool IDs ordered by their failover priority. Pools defined here are
   * used by default, or when region_pools are not configured for a given region.
   */
  default_pools?: Array<string>;

  /**
   * Object description.
   */
  description?: string;

  /**
   * Whether to enable (the default) this load balancer.
   */
  enabled?: boolean;

  /**
   * The pool ID to use when all other pools are detected as unhealthy.
   */
  fallback_pool?: unknown;

  /**
   * Controls location-based steering for non-proxied requests. See `steering_policy`
   * to learn how steering is affected.
   */
  location_strategy?: LoadBalancerCreateResponse.LocationStrategy;

  modified_on?: string;

  /**
   * The DNS hostname to associate with your Load Balancer. If this hostname already
   * exists as a DNS record in Cloudflare's DNS, the Load Balancer will take
   * precedence and the DNS record will not be used.
   */
  name?: string;

  /**
   * (Enterprise only): A mapping of Cloudflare PoP identifiers to a list of pool IDs
   * (ordered by their failover priority) for the PoP (datacenter). Any PoPs not
   * explicitly defined will fall back to using the corresponding country_pool, then
   * region_pool mapping if it exists else to default_pools.
   */
  pop_pools?: unknown;

  /**
   * Whether the hostname should be gray clouded (false) or orange clouded (true).
   */
  proxied?: boolean;

  /**
   * Configures pool weights.
   *
   * - `steering_policy="random"`: A random pool is selected with probability
   *   proportional to pool weights.
   * - `steering_policy="least_outstanding_requests"`: Use pool weights to scale each
   *   pool's outstanding requests.
   * - `steering_policy="least_connections"`: Use pool weights to scale each pool's
   *   open connections.
   */
  random_steering?: LoadBalancerCreateResponse.RandomSteering;

  /**
   * A mapping of region codes to a list of pool IDs (ordered by their failover
   * priority) for the given region. Any regions not explicitly defined will fall
   * back to using default_pools.
   */
  region_pools?: unknown;

  /**
   * BETA Field Not General Access: A list of rules for this load balancer to
   * execute.
   */
  rules?: Array<LoadBalancerCreateResponse.Rule>;

  /**
   * Specifies the type of session affinity the load balancer should use unless
   * specified as `"none"` or "" (default). The supported types are:
   *
   * - `"cookie"`: On the first request to a proxied load balancer, a cookie is
   *   generated, encoding information of which origin the request will be forwarded
   *   to. Subsequent requests, by the same client to the same load balancer, will be
   *   sent to the origin server the cookie encodes, for the duration of the cookie
   *   and as long as the origin server remains healthy. If the cookie has expired or
   *   the origin server is unhealthy, then a new origin server is calculated and
   *   used.
   * - `"ip_cookie"`: Behaves the same as `"cookie"` except the initial origin
   *   selection is stable and based on the client's ip address.
   * - `"header"`: On the first request to a proxied load balancer, a session key
   *   based on the configured HTTP headers (see
   *   `session_affinity_attributes.headers`) is generated, encoding the request
   *   headers used for storing in the load balancer session state which origin the
   *   request will be forwarded to. Subsequent requests to the load balancer with
   *   the same headers will be sent to the same origin server, for the duration of
   *   the session and as long as the origin server remains healthy. If the session
   *   has been idle for the duration of `session_affinity_ttl` seconds or the origin
   *   server is unhealthy, then a new origin server is calculated and used. See
   *   `headers` in `session_affinity_attributes` for additional required
   *   configuration.
   */
  session_affinity?: 'none' | 'cookie' | 'ip_cookie' | 'header' | '""';

  /**
   * Configures attributes for session affinity.
   */
  session_affinity_attributes?: LoadBalancerCreateResponse.SessionAffinityAttributes;

  /**
   * Time, in seconds, until a client's session expires after being created. Once the
   * expiry time has been reached, subsequent requests may get sent to a different
   * origin server. The accepted ranges per `session_affinity` policy are:
   *
   * - `"cookie"` / `"ip_cookie"`: The current default of 23 hours will be used
   *   unless explicitly set. The accepted range of values is between [1800, 604800].
   * - `"header"`: The current default of 1800 seconds will be used unless explicitly
   *   set. The accepted range of values is between [30, 3600]. Note: With session
   *   affinity by header, sessions only expire after they haven't been used for the
   *   number of seconds specified.
   */
  session_affinity_ttl?: number;

  /**
   * Steering Policy for this load balancer.
   *
   * - `"off"`: Use `default_pools`.
   * - `"geo"`: Use `region_pools`/`country_pools`/`pop_pools`. For non-proxied
   *   requests, the country for `country_pools` is determined by
   *   `location_strategy`.
   * - `"random"`: Select a pool randomly.
   * - `"dynamic_latency"`: Use round trip time to select the closest pool in
   *   default_pools (requires pool health checks).
   * - `"proximity"`: Use the pools' latitude and longitude to select the closest
   *   pool using the Cloudflare PoP location for proxied requests or the location
   *   determined by `location_strategy` for non-proxied requests.
   * - `"least_outstanding_requests"`: Select a pool by taking into consideration
   *   `random_steering` weights, as well as each pool's number of outstanding
   *   requests. Pools with more pending requests are weighted proportionately less
   *   relative to others.
   * - `"least_connections"`: Select a pool by taking into consideration
   *   `random_steering` weights, as well as each pool's number of open connections.
   *   Pools with more open connections are weighted proportionately less relative to
   *   others. Supported for HTTP/1 and HTTP/2 connections.
   * - `""`: Will map to `"geo"` if you use
   *   `region_pools`/`country_pools`/`pop_pools` otherwise `"off"`.
   */
  steering_policy?:
    | 'off'
    | 'geo'
    | 'random'
    | 'dynamic_latency'
    | 'proximity'
    | 'least_outstanding_requests'
    | 'least_connections'
    | '""';

  /**
   * Time to live (TTL) of the DNS entry for the IP address returned by this load
   * balancer. This only applies to gray-clouded (unproxied) load balancers.
   */
  ttl?: number;
}

export namespace LoadBalancerCreateResponse {
  /**
   * Controls features that modify the routing of requests to pools and origins in
   * response to dynamic conditions, such as during the interval between active
   * health monitoring requests. For example, zero-downtime failover occurs
   * immediately when an origin becomes unavailable due to HTTP 521, 522, or 523
   * response codes. If there is another healthy origin in the same pool, the request
   * is retried once against this alternate origin.
   */
  export interface AdaptiveRouting {
    /**
     * Extends zero-downtime failover of requests to healthy origins from alternate
     * pools, when no healthy alternate exists in the same pool, according to the
     * failover order defined by traffic and origin steering. When set false (the
     * default) zero-downtime failover will only occur between origins within the same
     * pool. See `session_affinity_attributes` for control over when sessions are
     * broken or reassigned.
     */
    failover_across_pools?: boolean;
  }

  /**
   * Controls location-based steering for non-proxied requests. See `steering_policy`
   * to learn how steering is affected.
   */
  export interface LocationStrategy {
    /**
     * Determines the authoritative location when ECS is not preferred, does not exist
     * in the request, or its GeoIP lookup is unsuccessful.
     *
     * - `"pop"`: Use the Cloudflare PoP location.
     * - `"resolver_ip"`: Use the DNS resolver GeoIP location. If the GeoIP lookup is
     *   unsuccessful, use the Cloudflare PoP location.
     */
    mode?: 'pop' | 'resolver_ip';

    /**
     * Whether the EDNS Client Subnet (ECS) GeoIP should be preferred as the
     * authoritative location.
     *
     * - `"always"`: Always prefer ECS.
     * - `"never"`: Never prefer ECS.
     * - `"proximity"`: Prefer ECS only when `steering_policy="proximity"`.
     * - `"geo"`: Prefer ECS only when `steering_policy="geo"`.
     */
    prefer_ecs?: 'always' | 'never' | 'proximity' | 'geo';
  }

  /**
   * Configures pool weights.
   *
   * - `steering_policy="random"`: A random pool is selected with probability
   *   proportional to pool weights.
   * - `steering_policy="least_outstanding_requests"`: Use pool weights to scale each
   *   pool's outstanding requests.
   * - `steering_policy="least_connections"`: Use pool weights to scale each pool's
   *   open connections.
   */
  export interface RandomSteering {
    /**
     * The default weight for pools in the load balancer that are not specified in the
     * pool_weights map.
     */
    default_weight?: number;

    /**
     * A mapping of pool IDs to custom weights. The weight is relative to other pools
     * in the load balancer.
     */
    pool_weights?: unknown;
  }

  /**
   * A rule object containing conditions and overrides for this load balancer to
   * evaluate.
   */
  export interface Rule {
    /**
     * The condition expressions to evaluate. If the condition evaluates to true, the
     * overrides or fixed_response in this rule will be applied. An empty condition is
     * always true. For more details on condition expressions, please see
     * https://developers.cloudflare.com/load-balancing/understand-basics/load-balancing-rules/expressions.
     */
    condition?: string;

    /**
     * Disable this specific rule. It will no longer be evaluated by this load
     * balancer.
     */
    disabled?: boolean;

    /**
     * A collection of fields used to directly respond to the eyeball instead of
     * routing to a pool. If a fixed_response is supplied the rule will be marked as
     * terminates.
     */
    fixed_response?: Rule.FixedResponse;

    /**
     * Name of this rule. Only used for human readability.
     */
    name?: string;

    /**
     * A collection of overrides to apply to the load balancer when this rule's
     * condition is true. All fields are optional.
     */
    overrides?: Rule.Overrides;

    /**
     * The order in which rules should be executed in relation to each other. Lower
     * values are executed first. Values do not need to be sequential. If no value is
     * provided for any rule the array order of the rules field will be used to assign
     * a priority.
     */
    priority?: number;

    /**
     * If this rule's condition is true, this causes rule evaluation to stop after
     * processing this rule.
     */
    terminates?: boolean;
  }

  export namespace Rule {
    /**
     * A collection of fields used to directly respond to the eyeball instead of
     * routing to a pool. If a fixed_response is supplied the rule will be marked as
     * terminates.
     */
    export interface FixedResponse {
      /**
       * The http 'Content-Type' header to include in the response.
       */
      content_type?: string;

      /**
       * The http 'Location' header to include in the response.
       */
      location?: string;

      /**
       * Text to include as the http body.
       */
      message_body?: string;

      /**
       * The http status code to respond with.
       */
      status_code?: number;
    }

    /**
     * A collection of overrides to apply to the load balancer when this rule's
     * condition is true. All fields are optional.
     */
    export interface Overrides {
      /**
       * Controls features that modify the routing of requests to pools and origins in
       * response to dynamic conditions, such as during the interval between active
       * health monitoring requests. For example, zero-downtime failover occurs
       * immediately when an origin becomes unavailable due to HTTP 521, 522, or 523
       * response codes. If there is another healthy origin in the same pool, the request
       * is retried once against this alternate origin.
       */
      adaptive_routing?: Overrides.AdaptiveRouting;

      /**
       * A mapping of country codes to a list of pool IDs (ordered by their failover
       * priority) for the given country. Any country not explicitly defined will fall
       * back to using the corresponding region_pool mapping if it exists else to
       * default_pools.
       */
      country_pools?: unknown;

      /**
       * A list of pool IDs ordered by their failover priority. Pools defined here are
       * used by default, or when region_pools are not configured for a given region.
       */
      default_pools?: Array<string>;

      /**
       * The pool ID to use when all other pools are detected as unhealthy.
       */
      fallback_pool?: unknown;

      /**
       * Controls location-based steering for non-proxied requests. See `steering_policy`
       * to learn how steering is affected.
       */
      location_strategy?: Overrides.LocationStrategy;

      /**
       * (Enterprise only): A mapping of Cloudflare PoP identifiers to a list of pool IDs
       * (ordered by their failover priority) for the PoP (datacenter). Any PoPs not
       * explicitly defined will fall back to using the corresponding country_pool, then
       * region_pool mapping if it exists else to default_pools.
       */
      pop_pools?: unknown;

      /**
       * Configures pool weights.
       *
       * - `steering_policy="random"`: A random pool is selected with probability
       *   proportional to pool weights.
       * - `steering_policy="least_outstanding_requests"`: Use pool weights to scale each
       *   pool's outstanding requests.
       * - `steering_policy="least_connections"`: Use pool weights to scale each pool's
       *   open connections.
       */
      random_steering?: Overrides.RandomSteering;

      /**
       * A mapping of region codes to a list of pool IDs (ordered by their failover
       * priority) for the given region. Any regions not explicitly defined will fall
       * back to using default_pools.
       */
      region_pools?: unknown;

      /**
       * Specifies the type of session affinity the load balancer should use unless
       * specified as `"none"` or "" (default). The supported types are:
       *
       * - `"cookie"`: On the first request to a proxied load balancer, a cookie is
       *   generated, encoding information of which origin the request will be forwarded
       *   to. Subsequent requests, by the same client to the same load balancer, will be
       *   sent to the origin server the cookie encodes, for the duration of the cookie
       *   and as long as the origin server remains healthy. If the cookie has expired or
       *   the origin server is unhealthy, then a new origin server is calculated and
       *   used.
       * - `"ip_cookie"`: Behaves the same as `"cookie"` except the initial origin
       *   selection is stable and based on the client's ip address.
       * - `"header"`: On the first request to a proxied load balancer, a session key
       *   based on the configured HTTP headers (see
       *   `session_affinity_attributes.headers`) is generated, encoding the request
       *   headers used for storing in the load balancer session state which origin the
       *   request will be forwarded to. Subsequent requests to the load balancer with
       *   the same headers will be sent to the same origin server, for the duration of
       *   the session and as long as the origin server remains healthy. If the session
       *   has been idle for the duration of `session_affinity_ttl` seconds or the origin
       *   server is unhealthy, then a new origin server is calculated and used. See
       *   `headers` in `session_affinity_attributes` for additional required
       *   configuration.
       */
      session_affinity?: 'none' | 'cookie' | 'ip_cookie' | 'header' | '""';

      /**
       * Configures attributes for session affinity.
       */
      session_affinity_attributes?: Overrides.SessionAffinityAttributes;

      /**
       * Time, in seconds, until a client's session expires after being created. Once the
       * expiry time has been reached, subsequent requests may get sent to a different
       * origin server. The accepted ranges per `session_affinity` policy are:
       *
       * - `"cookie"` / `"ip_cookie"`: The current default of 23 hours will be used
       *   unless explicitly set. The accepted range of values is between [1800, 604800].
       * - `"header"`: The current default of 1800 seconds will be used unless explicitly
       *   set. The accepted range of values is between [30, 3600]. Note: With session
       *   affinity by header, sessions only expire after they haven't been used for the
       *   number of seconds specified.
       */
      session_affinity_ttl?: number;

      /**
       * Steering Policy for this load balancer.
       *
       * - `"off"`: Use `default_pools`.
       * - `"geo"`: Use `region_pools`/`country_pools`/`pop_pools`. For non-proxied
       *   requests, the country for `country_pools` is determined by
       *   `location_strategy`.
       * - `"random"`: Select a pool randomly.
       * - `"dynamic_latency"`: Use round trip time to select the closest pool in
       *   default_pools (requires pool health checks).
       * - `"proximity"`: Use the pools' latitude and longitude to select the closest
       *   pool using the Cloudflare PoP location for proxied requests or the location
       *   determined by `location_strategy` for non-proxied requests.
       * - `"least_outstanding_requests"`: Select a pool by taking into consideration
       *   `random_steering` weights, as well as each pool's number of outstanding
       *   requests. Pools with more pending requests are weighted proportionately less
       *   relative to others.
       * - `"least_connections"`: Select a pool by taking into consideration
       *   `random_steering` weights, as well as each pool's number of open connections.
       *   Pools with more open connections are weighted proportionately less relative to
       *   others. Supported for HTTP/1 and HTTP/2 connections.
       * - `""`: Will map to `"geo"` if you use
       *   `region_pools`/`country_pools`/`pop_pools` otherwise `"off"`.
       */
      steering_policy?:
        | 'off'
        | 'geo'
        | 'random'
        | 'dynamic_latency'
        | 'proximity'
        | 'least_outstanding_requests'
        | 'least_connections'
        | '""';

      /**
       * Time to live (TTL) of the DNS entry for the IP address returned by this load
       * balancer. This only applies to gray-clouded (unproxied) load balancers.
       */
      ttl?: number;
    }

    export namespace Overrides {
      /**
       * Controls features that modify the routing of requests to pools and origins in
       * response to dynamic conditions, such as during the interval between active
       * health monitoring requests. For example, zero-downtime failover occurs
       * immediately when an origin becomes unavailable due to HTTP 521, 522, or 523
       * response codes. If there is another healthy origin in the same pool, the request
       * is retried once against this alternate origin.
       */
      export interface AdaptiveRouting {
        /**
         * Extends zero-downtime failover of requests to healthy origins from alternate
         * pools, when no healthy alternate exists in the same pool, according to the
         * failover order defined by traffic and origin steering. When set false (the
         * default) zero-downtime failover will only occur between origins within the same
         * pool. See `session_affinity_attributes` for control over when sessions are
         * broken or reassigned.
         */
        failover_across_pools?: boolean;
      }

      /**
       * Controls location-based steering for non-proxied requests. See `steering_policy`
       * to learn how steering is affected.
       */
      export interface LocationStrategy {
        /**
         * Determines the authoritative location when ECS is not preferred, does not exist
         * in the request, or its GeoIP lookup is unsuccessful.
         *
         * - `"pop"`: Use the Cloudflare PoP location.
         * - `"resolver_ip"`: Use the DNS resolver GeoIP location. If the GeoIP lookup is
         *   unsuccessful, use the Cloudflare PoP location.
         */
        mode?: 'pop' | 'resolver_ip';

        /**
         * Whether the EDNS Client Subnet (ECS) GeoIP should be preferred as the
         * authoritative location.
         *
         * - `"always"`: Always prefer ECS.
         * - `"never"`: Never prefer ECS.
         * - `"proximity"`: Prefer ECS only when `steering_policy="proximity"`.
         * - `"geo"`: Prefer ECS only when `steering_policy="geo"`.
         */
        prefer_ecs?: 'always' | 'never' | 'proximity' | 'geo';
      }

      /**
       * Configures pool weights.
       *
       * - `steering_policy="random"`: A random pool is selected with probability
       *   proportional to pool weights.
       * - `steering_policy="least_outstanding_requests"`: Use pool weights to scale each
       *   pool's outstanding requests.
       * - `steering_policy="least_connections"`: Use pool weights to scale each pool's
       *   open connections.
       */
      export interface RandomSteering {
        /**
         * The default weight for pools in the load balancer that are not specified in the
         * pool_weights map.
         */
        default_weight?: number;

        /**
         * A mapping of pool IDs to custom weights. The weight is relative to other pools
         * in the load balancer.
         */
        pool_weights?: unknown;
      }

      /**
       * Configures attributes for session affinity.
       */
      export interface SessionAffinityAttributes {
        /**
         * Configures the drain duration in seconds. This field is only used when session
         * affinity is enabled on the load balancer.
         */
        drain_duration?: number;

        /**
         * Configures the names of HTTP headers to base session affinity on when header
         * `session_affinity` is enabled. At least one HTTP header name must be provided.
         * To specify the exact cookies to be used, include an item in the following
         * format: `"cookie:<cookie-name-1>,<cookie-name-2>"` (example) where everything
         * after the colon is a comma-separated list of cookie names. Providing only
         * `"cookie"` will result in all cookies being used. The default max number of HTTP
         * header names that can be provided depends on your plan: 5 for Enterprise, 1 for
         * all other plans.
         */
        headers?: Array<string>;

        /**
         * When header `session_affinity` is enabled, this option can be used to specify
         * how HTTP headers on load balancing requests will be used. The supported values
         * are:
         *
         * - `"true"`: Load balancing requests must contain _all_ of the HTTP headers
         *   specified by the `headers` session affinity attribute, otherwise sessions
         *   aren't created.
         * - `"false"`: Load balancing requests must contain _at least one_ of the HTTP
         *   headers specified by the `headers` session affinity attribute, otherwise
         *   sessions aren't created.
         */
        require_all_headers?: boolean;

        /**
         * Configures the SameSite attribute on session affinity cookie. Value "Auto" will
         * be translated to "Lax" or "None" depending if Always Use HTTPS is enabled. Note:
         * when using value "None", the secure attribute can not be set to "Never".
         */
        samesite?: 'Auto' | 'Lax' | 'None' | 'Strict';

        /**
         * Configures the Secure attribute on session affinity cookie. Value "Always"
         * indicates the Secure attribute will be set in the Set-Cookie header, "Never"
         * indicates the Secure attribute will not be set, and "Auto" will set the Secure
         * attribute depending if Always Use HTTPS is enabled.
         */
        secure?: 'Auto' | 'Always' | 'Never';

        /**
         * Configures the zero-downtime failover between origins within a pool when session
         * affinity is enabled. This feature is currently incompatible with Argo, Tiered
         * Cache, and Bandwidth Alliance. The supported values are:
         *
         * - `"none"`: No failover takes place for sessions pinned to the origin (default).
         * - `"temporary"`: Traffic will be sent to another other healthy origin until the
         *   originally pinned origin is available; note that this can potentially result
         *   in heavy origin flapping.
         * - `"sticky"`: The session affinity cookie is updated and subsequent requests are
         *   sent to the new origin. Note: Zero-downtime failover with sticky sessions is
         *   currently not supported for session affinity by header.
         */
        zero_downtime_failover?: 'none' | 'temporary' | 'sticky';
      }
    }
  }

  /**
   * Configures attributes for session affinity.
   */
  export interface SessionAffinityAttributes {
    /**
     * Configures the drain duration in seconds. This field is only used when session
     * affinity is enabled on the load balancer.
     */
    drain_duration?: number;

    /**
     * Configures the names of HTTP headers to base session affinity on when header
     * `session_affinity` is enabled. At least one HTTP header name must be provided.
     * To specify the exact cookies to be used, include an item in the following
     * format: `"cookie:<cookie-name-1>,<cookie-name-2>"` (example) where everything
     * after the colon is a comma-separated list of cookie names. Providing only
     * `"cookie"` will result in all cookies being used. The default max number of HTTP
     * header names that can be provided depends on your plan: 5 for Enterprise, 1 for
     * all other plans.
     */
    headers?: Array<string>;

    /**
     * When header `session_affinity` is enabled, this option can be used to specify
     * how HTTP headers on load balancing requests will be used. The supported values
     * are:
     *
     * - `"true"`: Load balancing requests must contain _all_ of the HTTP headers
     *   specified by the `headers` session affinity attribute, otherwise sessions
     *   aren't created.
     * - `"false"`: Load balancing requests must contain _at least one_ of the HTTP
     *   headers specified by the `headers` session affinity attribute, otherwise
     *   sessions aren't created.
     */
    require_all_headers?: boolean;

    /**
     * Configures the SameSite attribute on session affinity cookie. Value "Auto" will
     * be translated to "Lax" or "None" depending if Always Use HTTPS is enabled. Note:
     * when using value "None", the secure attribute can not be set to "Never".
     */
    samesite?: 'Auto' | 'Lax' | 'None' | 'Strict';

    /**
     * Configures the Secure attribute on session affinity cookie. Value "Always"
     * indicates the Secure attribute will be set in the Set-Cookie header, "Never"
     * indicates the Secure attribute will not be set, and "Auto" will set the Secure
     * attribute depending if Always Use HTTPS is enabled.
     */
    secure?: 'Auto' | 'Always' | 'Never';

    /**
     * Configures the zero-downtime failover between origins within a pool when session
     * affinity is enabled. This feature is currently incompatible with Argo, Tiered
     * Cache, and Bandwidth Alliance. The supported values are:
     *
     * - `"none"`: No failover takes place for sessions pinned to the origin (default).
     * - `"temporary"`: Traffic will be sent to another other healthy origin until the
     *   originally pinned origin is available; note that this can potentially result
     *   in heavy origin flapping.
     * - `"sticky"`: The session affinity cookie is updated and subsequent requests are
     *   sent to the new origin. Note: Zero-downtime failover with sticky sessions is
     *   currently not supported for session affinity by header.
     */
    zero_downtime_failover?: 'none' | 'temporary' | 'sticky';
  }
}

export type LoadBalancerListResponse = Array<LoadBalancerListResponse.LoadBalancerListResponseItem>;

export namespace LoadBalancerListResponse {
  export interface LoadBalancerListResponseItem {
    id?: string;

    /**
     * Controls features that modify the routing of requests to pools and origins in
     * response to dynamic conditions, such as during the interval between active
     * health monitoring requests. For example, zero-downtime failover occurs
     * immediately when an origin becomes unavailable due to HTTP 521, 522, or 523
     * response codes. If there is another healthy origin in the same pool, the request
     * is retried once against this alternate origin.
     */
    adaptive_routing?: LoadBalancerListResponseItem.AdaptiveRouting;

    /**
     * A mapping of country codes to a list of pool IDs (ordered by their failover
     * priority) for the given country. Any country not explicitly defined will fall
     * back to using the corresponding region_pool mapping if it exists else to
     * default_pools.
     */
    country_pools?: unknown;

    created_on?: string;

    /**
     * A list of pool IDs ordered by their failover priority. Pools defined here are
     * used by default, or when region_pools are not configured for a given region.
     */
    default_pools?: Array<string>;

    /**
     * Object description.
     */
    description?: string;

    /**
     * Whether to enable (the default) this load balancer.
     */
    enabled?: boolean;

    /**
     * The pool ID to use when all other pools are detected as unhealthy.
     */
    fallback_pool?: unknown;

    /**
     * Controls location-based steering for non-proxied requests. See `steering_policy`
     * to learn how steering is affected.
     */
    location_strategy?: LoadBalancerListResponseItem.LocationStrategy;

    modified_on?: string;

    /**
     * The DNS hostname to associate with your Load Balancer. If this hostname already
     * exists as a DNS record in Cloudflare's DNS, the Load Balancer will take
     * precedence and the DNS record will not be used.
     */
    name?: string;

    /**
     * (Enterprise only): A mapping of Cloudflare PoP identifiers to a list of pool IDs
     * (ordered by their failover priority) for the PoP (datacenter). Any PoPs not
     * explicitly defined will fall back to using the corresponding country_pool, then
     * region_pool mapping if it exists else to default_pools.
     */
    pop_pools?: unknown;

    /**
     * Whether the hostname should be gray clouded (false) or orange clouded (true).
     */
    proxied?: boolean;

    /**
     * Configures pool weights.
     *
     * - `steering_policy="random"`: A random pool is selected with probability
     *   proportional to pool weights.
     * - `steering_policy="least_outstanding_requests"`: Use pool weights to scale each
     *   pool's outstanding requests.
     * - `steering_policy="least_connections"`: Use pool weights to scale each pool's
     *   open connections.
     */
    random_steering?: LoadBalancerListResponseItem.RandomSteering;

    /**
     * A mapping of region codes to a list of pool IDs (ordered by their failover
     * priority) for the given region. Any regions not explicitly defined will fall
     * back to using default_pools.
     */
    region_pools?: unknown;

    /**
     * BETA Field Not General Access: A list of rules for this load balancer to
     * execute.
     */
    rules?: Array<LoadBalancerListResponseItem.Rule>;

    /**
     * Specifies the type of session affinity the load balancer should use unless
     * specified as `"none"` or "" (default). The supported types are:
     *
     * - `"cookie"`: On the first request to a proxied load balancer, a cookie is
     *   generated, encoding information of which origin the request will be forwarded
     *   to. Subsequent requests, by the same client to the same load balancer, will be
     *   sent to the origin server the cookie encodes, for the duration of the cookie
     *   and as long as the origin server remains healthy. If the cookie has expired or
     *   the origin server is unhealthy, then a new origin server is calculated and
     *   used.
     * - `"ip_cookie"`: Behaves the same as `"cookie"` except the initial origin
     *   selection is stable and based on the client's ip address.
     * - `"header"`: On the first request to a proxied load balancer, a session key
     *   based on the configured HTTP headers (see
     *   `session_affinity_attributes.headers`) is generated, encoding the request
     *   headers used for storing in the load balancer session state which origin the
     *   request will be forwarded to. Subsequent requests to the load balancer with
     *   the same headers will be sent to the same origin server, for the duration of
     *   the session and as long as the origin server remains healthy. If the session
     *   has been idle for the duration of `session_affinity_ttl` seconds or the origin
     *   server is unhealthy, then a new origin server is calculated and used. See
     *   `headers` in `session_affinity_attributes` for additional required
     *   configuration.
     */
    session_affinity?: 'none' | 'cookie' | 'ip_cookie' | 'header' | '""';

    /**
     * Configures attributes for session affinity.
     */
    session_affinity_attributes?: LoadBalancerListResponseItem.SessionAffinityAttributes;

    /**
     * Time, in seconds, until a client's session expires after being created. Once the
     * expiry time has been reached, subsequent requests may get sent to a different
     * origin server. The accepted ranges per `session_affinity` policy are:
     *
     * - `"cookie"` / `"ip_cookie"`: The current default of 23 hours will be used
     *   unless explicitly set. The accepted range of values is between [1800, 604800].
     * - `"header"`: The current default of 1800 seconds will be used unless explicitly
     *   set. The accepted range of values is between [30, 3600]. Note: With session
     *   affinity by header, sessions only expire after they haven't been used for the
     *   number of seconds specified.
     */
    session_affinity_ttl?: number;

    /**
     * Steering Policy for this load balancer.
     *
     * - `"off"`: Use `default_pools`.
     * - `"geo"`: Use `region_pools`/`country_pools`/`pop_pools`. For non-proxied
     *   requests, the country for `country_pools` is determined by
     *   `location_strategy`.
     * - `"random"`: Select a pool randomly.
     * - `"dynamic_latency"`: Use round trip time to select the closest pool in
     *   default_pools (requires pool health checks).
     * - `"proximity"`: Use the pools' latitude and longitude to select the closest
     *   pool using the Cloudflare PoP location for proxied requests or the location
     *   determined by `location_strategy` for non-proxied requests.
     * - `"least_outstanding_requests"`: Select a pool by taking into consideration
     *   `random_steering` weights, as well as each pool's number of outstanding
     *   requests. Pools with more pending requests are weighted proportionately less
     *   relative to others.
     * - `"least_connections"`: Select a pool by taking into consideration
     *   `random_steering` weights, as well as each pool's number of open connections.
     *   Pools with more open connections are weighted proportionately less relative to
     *   others. Supported for HTTP/1 and HTTP/2 connections.
     * - `""`: Will map to `"geo"` if you use
     *   `region_pools`/`country_pools`/`pop_pools` otherwise `"off"`.
     */
    steering_policy?:
      | 'off'
      | 'geo'
      | 'random'
      | 'dynamic_latency'
      | 'proximity'
      | 'least_outstanding_requests'
      | 'least_connections'
      | '""';

    /**
     * Time to live (TTL) of the DNS entry for the IP address returned by this load
     * balancer. This only applies to gray-clouded (unproxied) load balancers.
     */
    ttl?: number;
  }

  export namespace LoadBalancerListResponseItem {
    /**
     * Controls features that modify the routing of requests to pools and origins in
     * response to dynamic conditions, such as during the interval between active
     * health monitoring requests. For example, zero-downtime failover occurs
     * immediately when an origin becomes unavailable due to HTTP 521, 522, or 523
     * response codes. If there is another healthy origin in the same pool, the request
     * is retried once against this alternate origin.
     */
    export interface AdaptiveRouting {
      /**
       * Extends zero-downtime failover of requests to healthy origins from alternate
       * pools, when no healthy alternate exists in the same pool, according to the
       * failover order defined by traffic and origin steering. When set false (the
       * default) zero-downtime failover will only occur between origins within the same
       * pool. See `session_affinity_attributes` for control over when sessions are
       * broken or reassigned.
       */
      failover_across_pools?: boolean;
    }

    /**
     * Controls location-based steering for non-proxied requests. See `steering_policy`
     * to learn how steering is affected.
     */
    export interface LocationStrategy {
      /**
       * Determines the authoritative location when ECS is not preferred, does not exist
       * in the request, or its GeoIP lookup is unsuccessful.
       *
       * - `"pop"`: Use the Cloudflare PoP location.
       * - `"resolver_ip"`: Use the DNS resolver GeoIP location. If the GeoIP lookup is
       *   unsuccessful, use the Cloudflare PoP location.
       */
      mode?: 'pop' | 'resolver_ip';

      /**
       * Whether the EDNS Client Subnet (ECS) GeoIP should be preferred as the
       * authoritative location.
       *
       * - `"always"`: Always prefer ECS.
       * - `"never"`: Never prefer ECS.
       * - `"proximity"`: Prefer ECS only when `steering_policy="proximity"`.
       * - `"geo"`: Prefer ECS only when `steering_policy="geo"`.
       */
      prefer_ecs?: 'always' | 'never' | 'proximity' | 'geo';
    }

    /**
     * Configures pool weights.
     *
     * - `steering_policy="random"`: A random pool is selected with probability
     *   proportional to pool weights.
     * - `steering_policy="least_outstanding_requests"`: Use pool weights to scale each
     *   pool's outstanding requests.
     * - `steering_policy="least_connections"`: Use pool weights to scale each pool's
     *   open connections.
     */
    export interface RandomSteering {
      /**
       * The default weight for pools in the load balancer that are not specified in the
       * pool_weights map.
       */
      default_weight?: number;

      /**
       * A mapping of pool IDs to custom weights. The weight is relative to other pools
       * in the load balancer.
       */
      pool_weights?: unknown;
    }

    /**
     * A rule object containing conditions and overrides for this load balancer to
     * evaluate.
     */
    export interface Rule {
      /**
       * The condition expressions to evaluate. If the condition evaluates to true, the
       * overrides or fixed_response in this rule will be applied. An empty condition is
       * always true. For more details on condition expressions, please see
       * https://developers.cloudflare.com/load-balancing/understand-basics/load-balancing-rules/expressions.
       */
      condition?: string;

      /**
       * Disable this specific rule. It will no longer be evaluated by this load
       * balancer.
       */
      disabled?: boolean;

      /**
       * A collection of fields used to directly respond to the eyeball instead of
       * routing to a pool. If a fixed_response is supplied the rule will be marked as
       * terminates.
       */
      fixed_response?: Rule.FixedResponse;

      /**
       * Name of this rule. Only used for human readability.
       */
      name?: string;

      /**
       * A collection of overrides to apply to the load balancer when this rule's
       * condition is true. All fields are optional.
       */
      overrides?: Rule.Overrides;

      /**
       * The order in which rules should be executed in relation to each other. Lower
       * values are executed first. Values do not need to be sequential. If no value is
       * provided for any rule the array order of the rules field will be used to assign
       * a priority.
       */
      priority?: number;

      /**
       * If this rule's condition is true, this causes rule evaluation to stop after
       * processing this rule.
       */
      terminates?: boolean;
    }

    export namespace Rule {
      /**
       * A collection of fields used to directly respond to the eyeball instead of
       * routing to a pool. If a fixed_response is supplied the rule will be marked as
       * terminates.
       */
      export interface FixedResponse {
        /**
         * The http 'Content-Type' header to include in the response.
         */
        content_type?: string;

        /**
         * The http 'Location' header to include in the response.
         */
        location?: string;

        /**
         * Text to include as the http body.
         */
        message_body?: string;

        /**
         * The http status code to respond with.
         */
        status_code?: number;
      }

      /**
       * A collection of overrides to apply to the load balancer when this rule's
       * condition is true. All fields are optional.
       */
      export interface Overrides {
        /**
         * Controls features that modify the routing of requests to pools and origins in
         * response to dynamic conditions, such as during the interval between active
         * health monitoring requests. For example, zero-downtime failover occurs
         * immediately when an origin becomes unavailable due to HTTP 521, 522, or 523
         * response codes. If there is another healthy origin in the same pool, the request
         * is retried once against this alternate origin.
         */
        adaptive_routing?: Overrides.AdaptiveRouting;

        /**
         * A mapping of country codes to a list of pool IDs (ordered by their failover
         * priority) for the given country. Any country not explicitly defined will fall
         * back to using the corresponding region_pool mapping if it exists else to
         * default_pools.
         */
        country_pools?: unknown;

        /**
         * A list of pool IDs ordered by their failover priority. Pools defined here are
         * used by default, or when region_pools are not configured for a given region.
         */
        default_pools?: Array<string>;

        /**
         * The pool ID to use when all other pools are detected as unhealthy.
         */
        fallback_pool?: unknown;

        /**
         * Controls location-based steering for non-proxied requests. See `steering_policy`
         * to learn how steering is affected.
         */
        location_strategy?: Overrides.LocationStrategy;

        /**
         * (Enterprise only): A mapping of Cloudflare PoP identifiers to a list of pool IDs
         * (ordered by their failover priority) for the PoP (datacenter). Any PoPs not
         * explicitly defined will fall back to using the corresponding country_pool, then
         * region_pool mapping if it exists else to default_pools.
         */
        pop_pools?: unknown;

        /**
         * Configures pool weights.
         *
         * - `steering_policy="random"`: A random pool is selected with probability
         *   proportional to pool weights.
         * - `steering_policy="least_outstanding_requests"`: Use pool weights to scale each
         *   pool's outstanding requests.
         * - `steering_policy="least_connections"`: Use pool weights to scale each pool's
         *   open connections.
         */
        random_steering?: Overrides.RandomSteering;

        /**
         * A mapping of region codes to a list of pool IDs (ordered by their failover
         * priority) for the given region. Any regions not explicitly defined will fall
         * back to using default_pools.
         */
        region_pools?: unknown;

        /**
         * Specifies the type of session affinity the load balancer should use unless
         * specified as `"none"` or "" (default). The supported types are:
         *
         * - `"cookie"`: On the first request to a proxied load balancer, a cookie is
         *   generated, encoding information of which origin the request will be forwarded
         *   to. Subsequent requests, by the same client to the same load balancer, will be
         *   sent to the origin server the cookie encodes, for the duration of the cookie
         *   and as long as the origin server remains healthy. If the cookie has expired or
         *   the origin server is unhealthy, then a new origin server is calculated and
         *   used.
         * - `"ip_cookie"`: Behaves the same as `"cookie"` except the initial origin
         *   selection is stable and based on the client's ip address.
         * - `"header"`: On the first request to a proxied load balancer, a session key
         *   based on the configured HTTP headers (see
         *   `session_affinity_attributes.headers`) is generated, encoding the request
         *   headers used for storing in the load balancer session state which origin the
         *   request will be forwarded to. Subsequent requests to the load balancer with
         *   the same headers will be sent to the same origin server, for the duration of
         *   the session and as long as the origin server remains healthy. If the session
         *   has been idle for the duration of `session_affinity_ttl` seconds or the origin
         *   server is unhealthy, then a new origin server is calculated and used. See
         *   `headers` in `session_affinity_attributes` for additional required
         *   configuration.
         */
        session_affinity?: 'none' | 'cookie' | 'ip_cookie' | 'header' | '""';

        /**
         * Configures attributes for session affinity.
         */
        session_affinity_attributes?: Overrides.SessionAffinityAttributes;

        /**
         * Time, in seconds, until a client's session expires after being created. Once the
         * expiry time has been reached, subsequent requests may get sent to a different
         * origin server. The accepted ranges per `session_affinity` policy are:
         *
         * - `"cookie"` / `"ip_cookie"`: The current default of 23 hours will be used
         *   unless explicitly set. The accepted range of values is between [1800, 604800].
         * - `"header"`: The current default of 1800 seconds will be used unless explicitly
         *   set. The accepted range of values is between [30, 3600]. Note: With session
         *   affinity by header, sessions only expire after they haven't been used for the
         *   number of seconds specified.
         */
        session_affinity_ttl?: number;

        /**
         * Steering Policy for this load balancer.
         *
         * - `"off"`: Use `default_pools`.
         * - `"geo"`: Use `region_pools`/`country_pools`/`pop_pools`. For non-proxied
         *   requests, the country for `country_pools` is determined by
         *   `location_strategy`.
         * - `"random"`: Select a pool randomly.
         * - `"dynamic_latency"`: Use round trip time to select the closest pool in
         *   default_pools (requires pool health checks).
         * - `"proximity"`: Use the pools' latitude and longitude to select the closest
         *   pool using the Cloudflare PoP location for proxied requests or the location
         *   determined by `location_strategy` for non-proxied requests.
         * - `"least_outstanding_requests"`: Select a pool by taking into consideration
         *   `random_steering` weights, as well as each pool's number of outstanding
         *   requests. Pools with more pending requests are weighted proportionately less
         *   relative to others.
         * - `"least_connections"`: Select a pool by taking into consideration
         *   `random_steering` weights, as well as each pool's number of open connections.
         *   Pools with more open connections are weighted proportionately less relative to
         *   others. Supported for HTTP/1 and HTTP/2 connections.
         * - `""`: Will map to `"geo"` if you use
         *   `region_pools`/`country_pools`/`pop_pools` otherwise `"off"`.
         */
        steering_policy?:
          | 'off'
          | 'geo'
          | 'random'
          | 'dynamic_latency'
          | 'proximity'
          | 'least_outstanding_requests'
          | 'least_connections'
          | '""';

        /**
         * Time to live (TTL) of the DNS entry for the IP address returned by this load
         * balancer. This only applies to gray-clouded (unproxied) load balancers.
         */
        ttl?: number;
      }

      export namespace Overrides {
        /**
         * Controls features that modify the routing of requests to pools and origins in
         * response to dynamic conditions, such as during the interval between active
         * health monitoring requests. For example, zero-downtime failover occurs
         * immediately when an origin becomes unavailable due to HTTP 521, 522, or 523
         * response codes. If there is another healthy origin in the same pool, the request
         * is retried once against this alternate origin.
         */
        export interface AdaptiveRouting {
          /**
           * Extends zero-downtime failover of requests to healthy origins from alternate
           * pools, when no healthy alternate exists in the same pool, according to the
           * failover order defined by traffic and origin steering. When set false (the
           * default) zero-downtime failover will only occur between origins within the same
           * pool. See `session_affinity_attributes` for control over when sessions are
           * broken or reassigned.
           */
          failover_across_pools?: boolean;
        }

        /**
         * Controls location-based steering for non-proxied requests. See `steering_policy`
         * to learn how steering is affected.
         */
        export interface LocationStrategy {
          /**
           * Determines the authoritative location when ECS is not preferred, does not exist
           * in the request, or its GeoIP lookup is unsuccessful.
           *
           * - `"pop"`: Use the Cloudflare PoP location.
           * - `"resolver_ip"`: Use the DNS resolver GeoIP location. If the GeoIP lookup is
           *   unsuccessful, use the Cloudflare PoP location.
           */
          mode?: 'pop' | 'resolver_ip';

          /**
           * Whether the EDNS Client Subnet (ECS) GeoIP should be preferred as the
           * authoritative location.
           *
           * - `"always"`: Always prefer ECS.
           * - `"never"`: Never prefer ECS.
           * - `"proximity"`: Prefer ECS only when `steering_policy="proximity"`.
           * - `"geo"`: Prefer ECS only when `steering_policy="geo"`.
           */
          prefer_ecs?: 'always' | 'never' | 'proximity' | 'geo';
        }

        /**
         * Configures pool weights.
         *
         * - `steering_policy="random"`: A random pool is selected with probability
         *   proportional to pool weights.
         * - `steering_policy="least_outstanding_requests"`: Use pool weights to scale each
         *   pool's outstanding requests.
         * - `steering_policy="least_connections"`: Use pool weights to scale each pool's
         *   open connections.
         */
        export interface RandomSteering {
          /**
           * The default weight for pools in the load balancer that are not specified in the
           * pool_weights map.
           */
          default_weight?: number;

          /**
           * A mapping of pool IDs to custom weights. The weight is relative to other pools
           * in the load balancer.
           */
          pool_weights?: unknown;
        }

        /**
         * Configures attributes for session affinity.
         */
        export interface SessionAffinityAttributes {
          /**
           * Configures the drain duration in seconds. This field is only used when session
           * affinity is enabled on the load balancer.
           */
          drain_duration?: number;

          /**
           * Configures the names of HTTP headers to base session affinity on when header
           * `session_affinity` is enabled. At least one HTTP header name must be provided.
           * To specify the exact cookies to be used, include an item in the following
           * format: `"cookie:<cookie-name-1>,<cookie-name-2>"` (example) where everything
           * after the colon is a comma-separated list of cookie names. Providing only
           * `"cookie"` will result in all cookies being used. The default max number of HTTP
           * header names that can be provided depends on your plan: 5 for Enterprise, 1 for
           * all other plans.
           */
          headers?: Array<string>;

          /**
           * When header `session_affinity` is enabled, this option can be used to specify
           * how HTTP headers on load balancing requests will be used. The supported values
           * are:
           *
           * - `"true"`: Load balancing requests must contain _all_ of the HTTP headers
           *   specified by the `headers` session affinity attribute, otherwise sessions
           *   aren't created.
           * - `"false"`: Load balancing requests must contain _at least one_ of the HTTP
           *   headers specified by the `headers` session affinity attribute, otherwise
           *   sessions aren't created.
           */
          require_all_headers?: boolean;

          /**
           * Configures the SameSite attribute on session affinity cookie. Value "Auto" will
           * be translated to "Lax" or "None" depending if Always Use HTTPS is enabled. Note:
           * when using value "None", the secure attribute can not be set to "Never".
           */
          samesite?: 'Auto' | 'Lax' | 'None' | 'Strict';

          /**
           * Configures the Secure attribute on session affinity cookie. Value "Always"
           * indicates the Secure attribute will be set in the Set-Cookie header, "Never"
           * indicates the Secure attribute will not be set, and "Auto" will set the Secure
           * attribute depending if Always Use HTTPS is enabled.
           */
          secure?: 'Auto' | 'Always' | 'Never';

          /**
           * Configures the zero-downtime failover between origins within a pool when session
           * affinity is enabled. This feature is currently incompatible with Argo, Tiered
           * Cache, and Bandwidth Alliance. The supported values are:
           *
           * - `"none"`: No failover takes place for sessions pinned to the origin (default).
           * - `"temporary"`: Traffic will be sent to another other healthy origin until the
           *   originally pinned origin is available; note that this can potentially result
           *   in heavy origin flapping.
           * - `"sticky"`: The session affinity cookie is updated and subsequent requests are
           *   sent to the new origin. Note: Zero-downtime failover with sticky sessions is
           *   currently not supported for session affinity by header.
           */
          zero_downtime_failover?: 'none' | 'temporary' | 'sticky';
        }
      }
    }

    /**
     * Configures attributes for session affinity.
     */
    export interface SessionAffinityAttributes {
      /**
       * Configures the drain duration in seconds. This field is only used when session
       * affinity is enabled on the load balancer.
       */
      drain_duration?: number;

      /**
       * Configures the names of HTTP headers to base session affinity on when header
       * `session_affinity` is enabled. At least one HTTP header name must be provided.
       * To specify the exact cookies to be used, include an item in the following
       * format: `"cookie:<cookie-name-1>,<cookie-name-2>"` (example) where everything
       * after the colon is a comma-separated list of cookie names. Providing only
       * `"cookie"` will result in all cookies being used. The default max number of HTTP
       * header names that can be provided depends on your plan: 5 for Enterprise, 1 for
       * all other plans.
       */
      headers?: Array<string>;

      /**
       * When header `session_affinity` is enabled, this option can be used to specify
       * how HTTP headers on load balancing requests will be used. The supported values
       * are:
       *
       * - `"true"`: Load balancing requests must contain _all_ of the HTTP headers
       *   specified by the `headers` session affinity attribute, otherwise sessions
       *   aren't created.
       * - `"false"`: Load balancing requests must contain _at least one_ of the HTTP
       *   headers specified by the `headers` session affinity attribute, otherwise
       *   sessions aren't created.
       */
      require_all_headers?: boolean;

      /**
       * Configures the SameSite attribute on session affinity cookie. Value "Auto" will
       * be translated to "Lax" or "None" depending if Always Use HTTPS is enabled. Note:
       * when using value "None", the secure attribute can not be set to "Never".
       */
      samesite?: 'Auto' | 'Lax' | 'None' | 'Strict';

      /**
       * Configures the Secure attribute on session affinity cookie. Value "Always"
       * indicates the Secure attribute will be set in the Set-Cookie header, "Never"
       * indicates the Secure attribute will not be set, and "Auto" will set the Secure
       * attribute depending if Always Use HTTPS is enabled.
       */
      secure?: 'Auto' | 'Always' | 'Never';

      /**
       * Configures the zero-downtime failover between origins within a pool when session
       * affinity is enabled. This feature is currently incompatible with Argo, Tiered
       * Cache, and Bandwidth Alliance. The supported values are:
       *
       * - `"none"`: No failover takes place for sessions pinned to the origin (default).
       * - `"temporary"`: Traffic will be sent to another other healthy origin until the
       *   originally pinned origin is available; note that this can potentially result
       *   in heavy origin flapping.
       * - `"sticky"`: The session affinity cookie is updated and subsequent requests are
       *   sent to the new origin. Note: Zero-downtime failover with sticky sessions is
       *   currently not supported for session affinity by header.
       */
      zero_downtime_failover?: 'none' | 'temporary' | 'sticky';
    }
  }
}

export interface LoadBalancerDeleteResponse {
  id?: string;
}

export interface LoadBalancerEditResponse {
  id?: string;

  /**
   * Controls features that modify the routing of requests to pools and origins in
   * response to dynamic conditions, such as during the interval between active
   * health monitoring requests. For example, zero-downtime failover occurs
   * immediately when an origin becomes unavailable due to HTTP 521, 522, or 523
   * response codes. If there is another healthy origin in the same pool, the request
   * is retried once against this alternate origin.
   */
  adaptive_routing?: LoadBalancerEditResponse.AdaptiveRouting;

  /**
   * A mapping of country codes to a list of pool IDs (ordered by their failover
   * priority) for the given country. Any country not explicitly defined will fall
   * back to using the corresponding region_pool mapping if it exists else to
   * default_pools.
   */
  country_pools?: unknown;

  created_on?: string;

  /**
   * A list of pool IDs ordered by their failover priority. Pools defined here are
   * used by default, or when region_pools are not configured for a given region.
   */
  default_pools?: Array<string>;

  /**
   * Object description.
   */
  description?: string;

  /**
   * Whether to enable (the default) this load balancer.
   */
  enabled?: boolean;

  /**
   * The pool ID to use when all other pools are detected as unhealthy.
   */
  fallback_pool?: unknown;

  /**
   * Controls location-based steering for non-proxied requests. See `steering_policy`
   * to learn how steering is affected.
   */
  location_strategy?: LoadBalancerEditResponse.LocationStrategy;

  modified_on?: string;

  /**
   * The DNS hostname to associate with your Load Balancer. If this hostname already
   * exists as a DNS record in Cloudflare's DNS, the Load Balancer will take
   * precedence and the DNS record will not be used.
   */
  name?: string;

  /**
   * (Enterprise only): A mapping of Cloudflare PoP identifiers to a list of pool IDs
   * (ordered by their failover priority) for the PoP (datacenter). Any PoPs not
   * explicitly defined will fall back to using the corresponding country_pool, then
   * region_pool mapping if it exists else to default_pools.
   */
  pop_pools?: unknown;

  /**
   * Whether the hostname should be gray clouded (false) or orange clouded (true).
   */
  proxied?: boolean;

  /**
   * Configures pool weights.
   *
   * - `steering_policy="random"`: A random pool is selected with probability
   *   proportional to pool weights.
   * - `steering_policy="least_outstanding_requests"`: Use pool weights to scale each
   *   pool's outstanding requests.
   * - `steering_policy="least_connections"`: Use pool weights to scale each pool's
   *   open connections.
   */
  random_steering?: LoadBalancerEditResponse.RandomSteering;

  /**
   * A mapping of region codes to a list of pool IDs (ordered by their failover
   * priority) for the given region. Any regions not explicitly defined will fall
   * back to using default_pools.
   */
  region_pools?: unknown;

  /**
   * BETA Field Not General Access: A list of rules for this load balancer to
   * execute.
   */
  rules?: Array<LoadBalancerEditResponse.Rule>;

  /**
   * Specifies the type of session affinity the load balancer should use unless
   * specified as `"none"` or "" (default). The supported types are:
   *
   * - `"cookie"`: On the first request to a proxied load balancer, a cookie is
   *   generated, encoding information of which origin the request will be forwarded
   *   to. Subsequent requests, by the same client to the same load balancer, will be
   *   sent to the origin server the cookie encodes, for the duration of the cookie
   *   and as long as the origin server remains healthy. If the cookie has expired or
   *   the origin server is unhealthy, then a new origin server is calculated and
   *   used.
   * - `"ip_cookie"`: Behaves the same as `"cookie"` except the initial origin
   *   selection is stable and based on the client's ip address.
   * - `"header"`: On the first request to a proxied load balancer, a session key
   *   based on the configured HTTP headers (see
   *   `session_affinity_attributes.headers`) is generated, encoding the request
   *   headers used for storing in the load balancer session state which origin the
   *   request will be forwarded to. Subsequent requests to the load balancer with
   *   the same headers will be sent to the same origin server, for the duration of
   *   the session and as long as the origin server remains healthy. If the session
   *   has been idle for the duration of `session_affinity_ttl` seconds or the origin
   *   server is unhealthy, then a new origin server is calculated and used. See
   *   `headers` in `session_affinity_attributes` for additional required
   *   configuration.
   */
  session_affinity?: 'none' | 'cookie' | 'ip_cookie' | 'header' | '""';

  /**
   * Configures attributes for session affinity.
   */
  session_affinity_attributes?: LoadBalancerEditResponse.SessionAffinityAttributes;

  /**
   * Time, in seconds, until a client's session expires after being created. Once the
   * expiry time has been reached, subsequent requests may get sent to a different
   * origin server. The accepted ranges per `session_affinity` policy are:
   *
   * - `"cookie"` / `"ip_cookie"`: The current default of 23 hours will be used
   *   unless explicitly set. The accepted range of values is between [1800, 604800].
   * - `"header"`: The current default of 1800 seconds will be used unless explicitly
   *   set. The accepted range of values is between [30, 3600]. Note: With session
   *   affinity by header, sessions only expire after they haven't been used for the
   *   number of seconds specified.
   */
  session_affinity_ttl?: number;

  /**
   * Steering Policy for this load balancer.
   *
   * - `"off"`: Use `default_pools`.
   * - `"geo"`: Use `region_pools`/`country_pools`/`pop_pools`. For non-proxied
   *   requests, the country for `country_pools` is determined by
   *   `location_strategy`.
   * - `"random"`: Select a pool randomly.
   * - `"dynamic_latency"`: Use round trip time to select the closest pool in
   *   default_pools (requires pool health checks).
   * - `"proximity"`: Use the pools' latitude and longitude to select the closest
   *   pool using the Cloudflare PoP location for proxied requests or the location
   *   determined by `location_strategy` for non-proxied requests.
   * - `"least_outstanding_requests"`: Select a pool by taking into consideration
   *   `random_steering` weights, as well as each pool's number of outstanding
   *   requests. Pools with more pending requests are weighted proportionately less
   *   relative to others.
   * - `"least_connections"`: Select a pool by taking into consideration
   *   `random_steering` weights, as well as each pool's number of open connections.
   *   Pools with more open connections are weighted proportionately less relative to
   *   others. Supported for HTTP/1 and HTTP/2 connections.
   * - `""`: Will map to `"geo"` if you use
   *   `region_pools`/`country_pools`/`pop_pools` otherwise `"off"`.
   */
  steering_policy?:
    | 'off'
    | 'geo'
    | 'random'
    | 'dynamic_latency'
    | 'proximity'
    | 'least_outstanding_requests'
    | 'least_connections'
    | '""';

  /**
   * Time to live (TTL) of the DNS entry for the IP address returned by this load
   * balancer. This only applies to gray-clouded (unproxied) load balancers.
   */
  ttl?: number;
}

export namespace LoadBalancerEditResponse {
  /**
   * Controls features that modify the routing of requests to pools and origins in
   * response to dynamic conditions, such as during the interval between active
   * health monitoring requests. For example, zero-downtime failover occurs
   * immediately when an origin becomes unavailable due to HTTP 521, 522, or 523
   * response codes. If there is another healthy origin in the same pool, the request
   * is retried once against this alternate origin.
   */
  export interface AdaptiveRouting {
    /**
     * Extends zero-downtime failover of requests to healthy origins from alternate
     * pools, when no healthy alternate exists in the same pool, according to the
     * failover order defined by traffic and origin steering. When set false (the
     * default) zero-downtime failover will only occur between origins within the same
     * pool. See `session_affinity_attributes` for control over when sessions are
     * broken or reassigned.
     */
    failover_across_pools?: boolean;
  }

  /**
   * Controls location-based steering for non-proxied requests. See `steering_policy`
   * to learn how steering is affected.
   */
  export interface LocationStrategy {
    /**
     * Determines the authoritative location when ECS is not preferred, does not exist
     * in the request, or its GeoIP lookup is unsuccessful.
     *
     * - `"pop"`: Use the Cloudflare PoP location.
     * - `"resolver_ip"`: Use the DNS resolver GeoIP location. If the GeoIP lookup is
     *   unsuccessful, use the Cloudflare PoP location.
     */
    mode?: 'pop' | 'resolver_ip';

    /**
     * Whether the EDNS Client Subnet (ECS) GeoIP should be preferred as the
     * authoritative location.
     *
     * - `"always"`: Always prefer ECS.
     * - `"never"`: Never prefer ECS.
     * - `"proximity"`: Prefer ECS only when `steering_policy="proximity"`.
     * - `"geo"`: Prefer ECS only when `steering_policy="geo"`.
     */
    prefer_ecs?: 'always' | 'never' | 'proximity' | 'geo';
  }

  /**
   * Configures pool weights.
   *
   * - `steering_policy="random"`: A random pool is selected with probability
   *   proportional to pool weights.
   * - `steering_policy="least_outstanding_requests"`: Use pool weights to scale each
   *   pool's outstanding requests.
   * - `steering_policy="least_connections"`: Use pool weights to scale each pool's
   *   open connections.
   */
  export interface RandomSteering {
    /**
     * The default weight for pools in the load balancer that are not specified in the
     * pool_weights map.
     */
    default_weight?: number;

    /**
     * A mapping of pool IDs to custom weights. The weight is relative to other pools
     * in the load balancer.
     */
    pool_weights?: unknown;
  }

  /**
   * A rule object containing conditions and overrides for this load balancer to
   * evaluate.
   */
  export interface Rule {
    /**
     * The condition expressions to evaluate. If the condition evaluates to true, the
     * overrides or fixed_response in this rule will be applied. An empty condition is
     * always true. For more details on condition expressions, please see
     * https://developers.cloudflare.com/load-balancing/understand-basics/load-balancing-rules/expressions.
     */
    condition?: string;

    /**
     * Disable this specific rule. It will no longer be evaluated by this load
     * balancer.
     */
    disabled?: boolean;

    /**
     * A collection of fields used to directly respond to the eyeball instead of
     * routing to a pool. If a fixed_response is supplied the rule will be marked as
     * terminates.
     */
    fixed_response?: Rule.FixedResponse;

    /**
     * Name of this rule. Only used for human readability.
     */
    name?: string;

    /**
     * A collection of overrides to apply to the load balancer when this rule's
     * condition is true. All fields are optional.
     */
    overrides?: Rule.Overrides;

    /**
     * The order in which rules should be executed in relation to each other. Lower
     * values are executed first. Values do not need to be sequential. If no value is
     * provided for any rule the array order of the rules field will be used to assign
     * a priority.
     */
    priority?: number;

    /**
     * If this rule's condition is true, this causes rule evaluation to stop after
     * processing this rule.
     */
    terminates?: boolean;
  }

  export namespace Rule {
    /**
     * A collection of fields used to directly respond to the eyeball instead of
     * routing to a pool. If a fixed_response is supplied the rule will be marked as
     * terminates.
     */
    export interface FixedResponse {
      /**
       * The http 'Content-Type' header to include in the response.
       */
      content_type?: string;

      /**
       * The http 'Location' header to include in the response.
       */
      location?: string;

      /**
       * Text to include as the http body.
       */
      message_body?: string;

      /**
       * The http status code to respond with.
       */
      status_code?: number;
    }

    /**
     * A collection of overrides to apply to the load balancer when this rule's
     * condition is true. All fields are optional.
     */
    export interface Overrides {
      /**
       * Controls features that modify the routing of requests to pools and origins in
       * response to dynamic conditions, such as during the interval between active
       * health monitoring requests. For example, zero-downtime failover occurs
       * immediately when an origin becomes unavailable due to HTTP 521, 522, or 523
       * response codes. If there is another healthy origin in the same pool, the request
       * is retried once against this alternate origin.
       */
      adaptive_routing?: Overrides.AdaptiveRouting;

      /**
       * A mapping of country codes to a list of pool IDs (ordered by their failover
       * priority) for the given country. Any country not explicitly defined will fall
       * back to using the corresponding region_pool mapping if it exists else to
       * default_pools.
       */
      country_pools?: unknown;

      /**
       * A list of pool IDs ordered by their failover priority. Pools defined here are
       * used by default, or when region_pools are not configured for a given region.
       */
      default_pools?: Array<string>;

      /**
       * The pool ID to use when all other pools are detected as unhealthy.
       */
      fallback_pool?: unknown;

      /**
       * Controls location-based steering for non-proxied requests. See `steering_policy`
       * to learn how steering is affected.
       */
      location_strategy?: Overrides.LocationStrategy;

      /**
       * (Enterprise only): A mapping of Cloudflare PoP identifiers to a list of pool IDs
       * (ordered by their failover priority) for the PoP (datacenter). Any PoPs not
       * explicitly defined will fall back to using the corresponding country_pool, then
       * region_pool mapping if it exists else to default_pools.
       */
      pop_pools?: unknown;

      /**
       * Configures pool weights.
       *
       * - `steering_policy="random"`: A random pool is selected with probability
       *   proportional to pool weights.
       * - `steering_policy="least_outstanding_requests"`: Use pool weights to scale each
       *   pool's outstanding requests.
       * - `steering_policy="least_connections"`: Use pool weights to scale each pool's
       *   open connections.
       */
      random_steering?: Overrides.RandomSteering;

      /**
       * A mapping of region codes to a list of pool IDs (ordered by their failover
       * priority) for the given region. Any regions not explicitly defined will fall
       * back to using default_pools.
       */
      region_pools?: unknown;

      /**
       * Specifies the type of session affinity the load balancer should use unless
       * specified as `"none"` or "" (default). The supported types are:
       *
       * - `"cookie"`: On the first request to a proxied load balancer, a cookie is
       *   generated, encoding information of which origin the request will be forwarded
       *   to. Subsequent requests, by the same client to the same load balancer, will be
       *   sent to the origin server the cookie encodes, for the duration of the cookie
       *   and as long as the origin server remains healthy. If the cookie has expired or
       *   the origin server is unhealthy, then a new origin server is calculated and
       *   used.
       * - `"ip_cookie"`: Behaves the same as `"cookie"` except the initial origin
       *   selection is stable and based on the client's ip address.
       * - `"header"`: On the first request to a proxied load balancer, a session key
       *   based on the configured HTTP headers (see
       *   `session_affinity_attributes.headers`) is generated, encoding the request
       *   headers used for storing in the load balancer session state which origin the
       *   request will be forwarded to. Subsequent requests to the load balancer with
       *   the same headers will be sent to the same origin server, for the duration of
       *   the session and as long as the origin server remains healthy. If the session
       *   has been idle for the duration of `session_affinity_ttl` seconds or the origin
       *   server is unhealthy, then a new origin server is calculated and used. See
       *   `headers` in `session_affinity_attributes` for additional required
       *   configuration.
       */
      session_affinity?: 'none' | 'cookie' | 'ip_cookie' | 'header' | '""';

      /**
       * Configures attributes for session affinity.
       */
      session_affinity_attributes?: Overrides.SessionAffinityAttributes;

      /**
       * Time, in seconds, until a client's session expires after being created. Once the
       * expiry time has been reached, subsequent requests may get sent to a different
       * origin server. The accepted ranges per `session_affinity` policy are:
       *
       * - `"cookie"` / `"ip_cookie"`: The current default of 23 hours will be used
       *   unless explicitly set. The accepted range of values is between [1800, 604800].
       * - `"header"`: The current default of 1800 seconds will be used unless explicitly
       *   set. The accepted range of values is between [30, 3600]. Note: With session
       *   affinity by header, sessions only expire after they haven't been used for the
       *   number of seconds specified.
       */
      session_affinity_ttl?: number;

      /**
       * Steering Policy for this load balancer.
       *
       * - `"off"`: Use `default_pools`.
       * - `"geo"`: Use `region_pools`/`country_pools`/`pop_pools`. For non-proxied
       *   requests, the country for `country_pools` is determined by
       *   `location_strategy`.
       * - `"random"`: Select a pool randomly.
       * - `"dynamic_latency"`: Use round trip time to select the closest pool in
       *   default_pools (requires pool health checks).
       * - `"proximity"`: Use the pools' latitude and longitude to select the closest
       *   pool using the Cloudflare PoP location for proxied requests or the location
       *   determined by `location_strategy` for non-proxied requests.
       * - `"least_outstanding_requests"`: Select a pool by taking into consideration
       *   `random_steering` weights, as well as each pool's number of outstanding
       *   requests. Pools with more pending requests are weighted proportionately less
       *   relative to others.
       * - `"least_connections"`: Select a pool by taking into consideration
       *   `random_steering` weights, as well as each pool's number of open connections.
       *   Pools with more open connections are weighted proportionately less relative to
       *   others. Supported for HTTP/1 and HTTP/2 connections.
       * - `""`: Will map to `"geo"` if you use
       *   `region_pools`/`country_pools`/`pop_pools` otherwise `"off"`.
       */
      steering_policy?:
        | 'off'
        | 'geo'
        | 'random'
        | 'dynamic_latency'
        | 'proximity'
        | 'least_outstanding_requests'
        | 'least_connections'
        | '""';

      /**
       * Time to live (TTL) of the DNS entry for the IP address returned by this load
       * balancer. This only applies to gray-clouded (unproxied) load balancers.
       */
      ttl?: number;
    }

    export namespace Overrides {
      /**
       * Controls features that modify the routing of requests to pools and origins in
       * response to dynamic conditions, such as during the interval between active
       * health monitoring requests. For example, zero-downtime failover occurs
       * immediately when an origin becomes unavailable due to HTTP 521, 522, or 523
       * response codes. If there is another healthy origin in the same pool, the request
       * is retried once against this alternate origin.
       */
      export interface AdaptiveRouting {
        /**
         * Extends zero-downtime failover of requests to healthy origins from alternate
         * pools, when no healthy alternate exists in the same pool, according to the
         * failover order defined by traffic and origin steering. When set false (the
         * default) zero-downtime failover will only occur between origins within the same
         * pool. See `session_affinity_attributes` for control over when sessions are
         * broken or reassigned.
         */
        failover_across_pools?: boolean;
      }

      /**
       * Controls location-based steering for non-proxied requests. See `steering_policy`
       * to learn how steering is affected.
       */
      export interface LocationStrategy {
        /**
         * Determines the authoritative location when ECS is not preferred, does not exist
         * in the request, or its GeoIP lookup is unsuccessful.
         *
         * - `"pop"`: Use the Cloudflare PoP location.
         * - `"resolver_ip"`: Use the DNS resolver GeoIP location. If the GeoIP lookup is
         *   unsuccessful, use the Cloudflare PoP location.
         */
        mode?: 'pop' | 'resolver_ip';

        /**
         * Whether the EDNS Client Subnet (ECS) GeoIP should be preferred as the
         * authoritative location.
         *
         * - `"always"`: Always prefer ECS.
         * - `"never"`: Never prefer ECS.
         * - `"proximity"`: Prefer ECS only when `steering_policy="proximity"`.
         * - `"geo"`: Prefer ECS only when `steering_policy="geo"`.
         */
        prefer_ecs?: 'always' | 'never' | 'proximity' | 'geo';
      }

      /**
       * Configures pool weights.
       *
       * - `steering_policy="random"`: A random pool is selected with probability
       *   proportional to pool weights.
       * - `steering_policy="least_outstanding_requests"`: Use pool weights to scale each
       *   pool's outstanding requests.
       * - `steering_policy="least_connections"`: Use pool weights to scale each pool's
       *   open connections.
       */
      export interface RandomSteering {
        /**
         * The default weight for pools in the load balancer that are not specified in the
         * pool_weights map.
         */
        default_weight?: number;

        /**
         * A mapping of pool IDs to custom weights. The weight is relative to other pools
         * in the load balancer.
         */
        pool_weights?: unknown;
      }

      /**
       * Configures attributes for session affinity.
       */
      export interface SessionAffinityAttributes {
        /**
         * Configures the drain duration in seconds. This field is only used when session
         * affinity is enabled on the load balancer.
         */
        drain_duration?: number;

        /**
         * Configures the names of HTTP headers to base session affinity on when header
         * `session_affinity` is enabled. At least one HTTP header name must be provided.
         * To specify the exact cookies to be used, include an item in the following
         * format: `"cookie:<cookie-name-1>,<cookie-name-2>"` (example) where everything
         * after the colon is a comma-separated list of cookie names. Providing only
         * `"cookie"` will result in all cookies being used. The default max number of HTTP
         * header names that can be provided depends on your plan: 5 for Enterprise, 1 for
         * all other plans.
         */
        headers?: Array<string>;

        /**
         * When header `session_affinity` is enabled, this option can be used to specify
         * how HTTP headers on load balancing requests will be used. The supported values
         * are:
         *
         * - `"true"`: Load balancing requests must contain _all_ of the HTTP headers
         *   specified by the `headers` session affinity attribute, otherwise sessions
         *   aren't created.
         * - `"false"`: Load balancing requests must contain _at least one_ of the HTTP
         *   headers specified by the `headers` session affinity attribute, otherwise
         *   sessions aren't created.
         */
        require_all_headers?: boolean;

        /**
         * Configures the SameSite attribute on session affinity cookie. Value "Auto" will
         * be translated to "Lax" or "None" depending if Always Use HTTPS is enabled. Note:
         * when using value "None", the secure attribute can not be set to "Never".
         */
        samesite?: 'Auto' | 'Lax' | 'None' | 'Strict';

        /**
         * Configures the Secure attribute on session affinity cookie. Value "Always"
         * indicates the Secure attribute will be set in the Set-Cookie header, "Never"
         * indicates the Secure attribute will not be set, and "Auto" will set the Secure
         * attribute depending if Always Use HTTPS is enabled.
         */
        secure?: 'Auto' | 'Always' | 'Never';

        /**
         * Configures the zero-downtime failover between origins within a pool when session
         * affinity is enabled. This feature is currently incompatible with Argo, Tiered
         * Cache, and Bandwidth Alliance. The supported values are:
         *
         * - `"none"`: No failover takes place for sessions pinned to the origin (default).
         * - `"temporary"`: Traffic will be sent to another other healthy origin until the
         *   originally pinned origin is available; note that this can potentially result
         *   in heavy origin flapping.
         * - `"sticky"`: The session affinity cookie is updated and subsequent requests are
         *   sent to the new origin. Note: Zero-downtime failover with sticky sessions is
         *   currently not supported for session affinity by header.
         */
        zero_downtime_failover?: 'none' | 'temporary' | 'sticky';
      }
    }
  }

  /**
   * Configures attributes for session affinity.
   */
  export interface SessionAffinityAttributes {
    /**
     * Configures the drain duration in seconds. This field is only used when session
     * affinity is enabled on the load balancer.
     */
    drain_duration?: number;

    /**
     * Configures the names of HTTP headers to base session affinity on when header
     * `session_affinity` is enabled. At least one HTTP header name must be provided.
     * To specify the exact cookies to be used, include an item in the following
     * format: `"cookie:<cookie-name-1>,<cookie-name-2>"` (example) where everything
     * after the colon is a comma-separated list of cookie names. Providing only
     * `"cookie"` will result in all cookies being used. The default max number of HTTP
     * header names that can be provided depends on your plan: 5 for Enterprise, 1 for
     * all other plans.
     */
    headers?: Array<string>;

    /**
     * When header `session_affinity` is enabled, this option can be used to specify
     * how HTTP headers on load balancing requests will be used. The supported values
     * are:
     *
     * - `"true"`: Load balancing requests must contain _all_ of the HTTP headers
     *   specified by the `headers` session affinity attribute, otherwise sessions
     *   aren't created.
     * - `"false"`: Load balancing requests must contain _at least one_ of the HTTP
     *   headers specified by the `headers` session affinity attribute, otherwise
     *   sessions aren't created.
     */
    require_all_headers?: boolean;

    /**
     * Configures the SameSite attribute on session affinity cookie. Value "Auto" will
     * be translated to "Lax" or "None" depending if Always Use HTTPS is enabled. Note:
     * when using value "None", the secure attribute can not be set to "Never".
     */
    samesite?: 'Auto' | 'Lax' | 'None' | 'Strict';

    /**
     * Configures the Secure attribute on session affinity cookie. Value "Always"
     * indicates the Secure attribute will be set in the Set-Cookie header, "Never"
     * indicates the Secure attribute will not be set, and "Auto" will set the Secure
     * attribute depending if Always Use HTTPS is enabled.
     */
    secure?: 'Auto' | 'Always' | 'Never';

    /**
     * Configures the zero-downtime failover between origins within a pool when session
     * affinity is enabled. This feature is currently incompatible with Argo, Tiered
     * Cache, and Bandwidth Alliance. The supported values are:
     *
     * - `"none"`: No failover takes place for sessions pinned to the origin (default).
     * - `"temporary"`: Traffic will be sent to another other healthy origin until the
     *   originally pinned origin is available; note that this can potentially result
     *   in heavy origin flapping.
     * - `"sticky"`: The session affinity cookie is updated and subsequent requests are
     *   sent to the new origin. Note: Zero-downtime failover with sticky sessions is
     *   currently not supported for session affinity by header.
     */
    zero_downtime_failover?: 'none' | 'temporary' | 'sticky';
  }
}

export interface LoadBalancerGetResponse {
  id?: string;

  /**
   * Controls features that modify the routing of requests to pools and origins in
   * response to dynamic conditions, such as during the interval between active
   * health monitoring requests. For example, zero-downtime failover occurs
   * immediately when an origin becomes unavailable due to HTTP 521, 522, or 523
   * response codes. If there is another healthy origin in the same pool, the request
   * is retried once against this alternate origin.
   */
  adaptive_routing?: LoadBalancerGetResponse.AdaptiveRouting;

  /**
   * A mapping of country codes to a list of pool IDs (ordered by their failover
   * priority) for the given country. Any country not explicitly defined will fall
   * back to using the corresponding region_pool mapping if it exists else to
   * default_pools.
   */
  country_pools?: unknown;

  created_on?: string;

  /**
   * A list of pool IDs ordered by their failover priority. Pools defined here are
   * used by default, or when region_pools are not configured for a given region.
   */
  default_pools?: Array<string>;

  /**
   * Object description.
   */
  description?: string;

  /**
   * Whether to enable (the default) this load balancer.
   */
  enabled?: boolean;

  /**
   * The pool ID to use when all other pools are detected as unhealthy.
   */
  fallback_pool?: unknown;

  /**
   * Controls location-based steering for non-proxied requests. See `steering_policy`
   * to learn how steering is affected.
   */
  location_strategy?: LoadBalancerGetResponse.LocationStrategy;

  modified_on?: string;

  /**
   * The DNS hostname to associate with your Load Balancer. If this hostname already
   * exists as a DNS record in Cloudflare's DNS, the Load Balancer will take
   * precedence and the DNS record will not be used.
   */
  name?: string;

  /**
   * (Enterprise only): A mapping of Cloudflare PoP identifiers to a list of pool IDs
   * (ordered by their failover priority) for the PoP (datacenter). Any PoPs not
   * explicitly defined will fall back to using the corresponding country_pool, then
   * region_pool mapping if it exists else to default_pools.
   */
  pop_pools?: unknown;

  /**
   * Whether the hostname should be gray clouded (false) or orange clouded (true).
   */
  proxied?: boolean;

  /**
   * Configures pool weights.
   *
   * - `steering_policy="random"`: A random pool is selected with probability
   *   proportional to pool weights.
   * - `steering_policy="least_outstanding_requests"`: Use pool weights to scale each
   *   pool's outstanding requests.
   * - `steering_policy="least_connections"`: Use pool weights to scale each pool's
   *   open connections.
   */
  random_steering?: LoadBalancerGetResponse.RandomSteering;

  /**
   * A mapping of region codes to a list of pool IDs (ordered by their failover
   * priority) for the given region. Any regions not explicitly defined will fall
   * back to using default_pools.
   */
  region_pools?: unknown;

  /**
   * BETA Field Not General Access: A list of rules for this load balancer to
   * execute.
   */
  rules?: Array<LoadBalancerGetResponse.Rule>;

  /**
   * Specifies the type of session affinity the load balancer should use unless
   * specified as `"none"` or "" (default). The supported types are:
   *
   * - `"cookie"`: On the first request to a proxied load balancer, a cookie is
   *   generated, encoding information of which origin the request will be forwarded
   *   to. Subsequent requests, by the same client to the same load balancer, will be
   *   sent to the origin server the cookie encodes, for the duration of the cookie
   *   and as long as the origin server remains healthy. If the cookie has expired or
   *   the origin server is unhealthy, then a new origin server is calculated and
   *   used.
   * - `"ip_cookie"`: Behaves the same as `"cookie"` except the initial origin
   *   selection is stable and based on the client's ip address.
   * - `"header"`: On the first request to a proxied load balancer, a session key
   *   based on the configured HTTP headers (see
   *   `session_affinity_attributes.headers`) is generated, encoding the request
   *   headers used for storing in the load balancer session state which origin the
   *   request will be forwarded to. Subsequent requests to the load balancer with
   *   the same headers will be sent to the same origin server, for the duration of
   *   the session and as long as the origin server remains healthy. If the session
   *   has been idle for the duration of `session_affinity_ttl` seconds or the origin
   *   server is unhealthy, then a new origin server is calculated and used. See
   *   `headers` in `session_affinity_attributes` for additional required
   *   configuration.
   */
  session_affinity?: 'none' | 'cookie' | 'ip_cookie' | 'header' | '""';

  /**
   * Configures attributes for session affinity.
   */
  session_affinity_attributes?: LoadBalancerGetResponse.SessionAffinityAttributes;

  /**
   * Time, in seconds, until a client's session expires after being created. Once the
   * expiry time has been reached, subsequent requests may get sent to a different
   * origin server. The accepted ranges per `session_affinity` policy are:
   *
   * - `"cookie"` / `"ip_cookie"`: The current default of 23 hours will be used
   *   unless explicitly set. The accepted range of values is between [1800, 604800].
   * - `"header"`: The current default of 1800 seconds will be used unless explicitly
   *   set. The accepted range of values is between [30, 3600]. Note: With session
   *   affinity by header, sessions only expire after they haven't been used for the
   *   number of seconds specified.
   */
  session_affinity_ttl?: number;

  /**
   * Steering Policy for this load balancer.
   *
   * - `"off"`: Use `default_pools`.
   * - `"geo"`: Use `region_pools`/`country_pools`/`pop_pools`. For non-proxied
   *   requests, the country for `country_pools` is determined by
   *   `location_strategy`.
   * - `"random"`: Select a pool randomly.
   * - `"dynamic_latency"`: Use round trip time to select the closest pool in
   *   default_pools (requires pool health checks).
   * - `"proximity"`: Use the pools' latitude and longitude to select the closest
   *   pool using the Cloudflare PoP location for proxied requests or the location
   *   determined by `location_strategy` for non-proxied requests.
   * - `"least_outstanding_requests"`: Select a pool by taking into consideration
   *   `random_steering` weights, as well as each pool's number of outstanding
   *   requests. Pools with more pending requests are weighted proportionately less
   *   relative to others.
   * - `"least_connections"`: Select a pool by taking into consideration
   *   `random_steering` weights, as well as each pool's number of open connections.
   *   Pools with more open connections are weighted proportionately less relative to
   *   others. Supported for HTTP/1 and HTTP/2 connections.
   * - `""`: Will map to `"geo"` if you use
   *   `region_pools`/`country_pools`/`pop_pools` otherwise `"off"`.
   */
  steering_policy?:
    | 'off'
    | 'geo'
    | 'random'
    | 'dynamic_latency'
    | 'proximity'
    | 'least_outstanding_requests'
    | 'least_connections'
    | '""';

  /**
   * Time to live (TTL) of the DNS entry for the IP address returned by this load
   * balancer. This only applies to gray-clouded (unproxied) load balancers.
   */
  ttl?: number;
}

export namespace LoadBalancerGetResponse {
  /**
   * Controls features that modify the routing of requests to pools and origins in
   * response to dynamic conditions, such as during the interval between active
   * health monitoring requests. For example, zero-downtime failover occurs
   * immediately when an origin becomes unavailable due to HTTP 521, 522, or 523
   * response codes. If there is another healthy origin in the same pool, the request
   * is retried once against this alternate origin.
   */
  export interface AdaptiveRouting {
    /**
     * Extends zero-downtime failover of requests to healthy origins from alternate
     * pools, when no healthy alternate exists in the same pool, according to the
     * failover order defined by traffic and origin steering. When set false (the
     * default) zero-downtime failover will only occur between origins within the same
     * pool. See `session_affinity_attributes` for control over when sessions are
     * broken or reassigned.
     */
    failover_across_pools?: boolean;
  }

  /**
   * Controls location-based steering for non-proxied requests. See `steering_policy`
   * to learn how steering is affected.
   */
  export interface LocationStrategy {
    /**
     * Determines the authoritative location when ECS is not preferred, does not exist
     * in the request, or its GeoIP lookup is unsuccessful.
     *
     * - `"pop"`: Use the Cloudflare PoP location.
     * - `"resolver_ip"`: Use the DNS resolver GeoIP location. If the GeoIP lookup is
     *   unsuccessful, use the Cloudflare PoP location.
     */
    mode?: 'pop' | 'resolver_ip';

    /**
     * Whether the EDNS Client Subnet (ECS) GeoIP should be preferred as the
     * authoritative location.
     *
     * - `"always"`: Always prefer ECS.
     * - `"never"`: Never prefer ECS.
     * - `"proximity"`: Prefer ECS only when `steering_policy="proximity"`.
     * - `"geo"`: Prefer ECS only when `steering_policy="geo"`.
     */
    prefer_ecs?: 'always' | 'never' | 'proximity' | 'geo';
  }

  /**
   * Configures pool weights.
   *
   * - `steering_policy="random"`: A random pool is selected with probability
   *   proportional to pool weights.
   * - `steering_policy="least_outstanding_requests"`: Use pool weights to scale each
   *   pool's outstanding requests.
   * - `steering_policy="least_connections"`: Use pool weights to scale each pool's
   *   open connections.
   */
  export interface RandomSteering {
    /**
     * The default weight for pools in the load balancer that are not specified in the
     * pool_weights map.
     */
    default_weight?: number;

    /**
     * A mapping of pool IDs to custom weights. The weight is relative to other pools
     * in the load balancer.
     */
    pool_weights?: unknown;
  }

  /**
   * A rule object containing conditions and overrides for this load balancer to
   * evaluate.
   */
  export interface Rule {
    /**
     * The condition expressions to evaluate. If the condition evaluates to true, the
     * overrides or fixed_response in this rule will be applied. An empty condition is
     * always true. For more details on condition expressions, please see
     * https://developers.cloudflare.com/load-balancing/understand-basics/load-balancing-rules/expressions.
     */
    condition?: string;

    /**
     * Disable this specific rule. It will no longer be evaluated by this load
     * balancer.
     */
    disabled?: boolean;

    /**
     * A collection of fields used to directly respond to the eyeball instead of
     * routing to a pool. If a fixed_response is supplied the rule will be marked as
     * terminates.
     */
    fixed_response?: Rule.FixedResponse;

    /**
     * Name of this rule. Only used for human readability.
     */
    name?: string;

    /**
     * A collection of overrides to apply to the load balancer when this rule's
     * condition is true. All fields are optional.
     */
    overrides?: Rule.Overrides;

    /**
     * The order in which rules should be executed in relation to each other. Lower
     * values are executed first. Values do not need to be sequential. If no value is
     * provided for any rule the array order of the rules field will be used to assign
     * a priority.
     */
    priority?: number;

    /**
     * If this rule's condition is true, this causes rule evaluation to stop after
     * processing this rule.
     */
    terminates?: boolean;
  }

  export namespace Rule {
    /**
     * A collection of fields used to directly respond to the eyeball instead of
     * routing to a pool. If a fixed_response is supplied the rule will be marked as
     * terminates.
     */
    export interface FixedResponse {
      /**
       * The http 'Content-Type' header to include in the response.
       */
      content_type?: string;

      /**
       * The http 'Location' header to include in the response.
       */
      location?: string;

      /**
       * Text to include as the http body.
       */
      message_body?: string;

      /**
       * The http status code to respond with.
       */
      status_code?: number;
    }

    /**
     * A collection of overrides to apply to the load balancer when this rule's
     * condition is true. All fields are optional.
     */
    export interface Overrides {
      /**
       * Controls features that modify the routing of requests to pools and origins in
       * response to dynamic conditions, such as during the interval between active
       * health monitoring requests. For example, zero-downtime failover occurs
       * immediately when an origin becomes unavailable due to HTTP 521, 522, or 523
       * response codes. If there is another healthy origin in the same pool, the request
       * is retried once against this alternate origin.
       */
      adaptive_routing?: Overrides.AdaptiveRouting;

      /**
       * A mapping of country codes to a list of pool IDs (ordered by their failover
       * priority) for the given country. Any country not explicitly defined will fall
       * back to using the corresponding region_pool mapping if it exists else to
       * default_pools.
       */
      country_pools?: unknown;

      /**
       * A list of pool IDs ordered by their failover priority. Pools defined here are
       * used by default, or when region_pools are not configured for a given region.
       */
      default_pools?: Array<string>;

      /**
       * The pool ID to use when all other pools are detected as unhealthy.
       */
      fallback_pool?: unknown;

      /**
       * Controls location-based steering for non-proxied requests. See `steering_policy`
       * to learn how steering is affected.
       */
      location_strategy?: Overrides.LocationStrategy;

      /**
       * (Enterprise only): A mapping of Cloudflare PoP identifiers to a list of pool IDs
       * (ordered by their failover priority) for the PoP (datacenter). Any PoPs not
       * explicitly defined will fall back to using the corresponding country_pool, then
       * region_pool mapping if it exists else to default_pools.
       */
      pop_pools?: unknown;

      /**
       * Configures pool weights.
       *
       * - `steering_policy="random"`: A random pool is selected with probability
       *   proportional to pool weights.
       * - `steering_policy="least_outstanding_requests"`: Use pool weights to scale each
       *   pool's outstanding requests.
       * - `steering_policy="least_connections"`: Use pool weights to scale each pool's
       *   open connections.
       */
      random_steering?: Overrides.RandomSteering;

      /**
       * A mapping of region codes to a list of pool IDs (ordered by their failover
       * priority) for the given region. Any regions not explicitly defined will fall
       * back to using default_pools.
       */
      region_pools?: unknown;

      /**
       * Specifies the type of session affinity the load balancer should use unless
       * specified as `"none"` or "" (default). The supported types are:
       *
       * - `"cookie"`: On the first request to a proxied load balancer, a cookie is
       *   generated, encoding information of which origin the request will be forwarded
       *   to. Subsequent requests, by the same client to the same load balancer, will be
       *   sent to the origin server the cookie encodes, for the duration of the cookie
       *   and as long as the origin server remains healthy. If the cookie has expired or
       *   the origin server is unhealthy, then a new origin server is calculated and
       *   used.
       * - `"ip_cookie"`: Behaves the same as `"cookie"` except the initial origin
       *   selection is stable and based on the client's ip address.
       * - `"header"`: On the first request to a proxied load balancer, a session key
       *   based on the configured HTTP headers (see
       *   `session_affinity_attributes.headers`) is generated, encoding the request
       *   headers used for storing in the load balancer session state which origin the
       *   request will be forwarded to. Subsequent requests to the load balancer with
       *   the same headers will be sent to the same origin server, for the duration of
       *   the session and as long as the origin server remains healthy. If the session
       *   has been idle for the duration of `session_affinity_ttl` seconds or the origin
       *   server is unhealthy, then a new origin server is calculated and used. See
       *   `headers` in `session_affinity_attributes` for additional required
       *   configuration.
       */
      session_affinity?: 'none' | 'cookie' | 'ip_cookie' | 'header' | '""';

      /**
       * Configures attributes for session affinity.
       */
      session_affinity_attributes?: Overrides.SessionAffinityAttributes;

      /**
       * Time, in seconds, until a client's session expires after being created. Once the
       * expiry time has been reached, subsequent requests may get sent to a different
       * origin server. The accepted ranges per `session_affinity` policy are:
       *
       * - `"cookie"` / `"ip_cookie"`: The current default of 23 hours will be used
       *   unless explicitly set. The accepted range of values is between [1800, 604800].
       * - `"header"`: The current default of 1800 seconds will be used unless explicitly
       *   set. The accepted range of values is between [30, 3600]. Note: With session
       *   affinity by header, sessions only expire after they haven't been used for the
       *   number of seconds specified.
       */
      session_affinity_ttl?: number;

      /**
       * Steering Policy for this load balancer.
       *
       * - `"off"`: Use `default_pools`.
       * - `"geo"`: Use `region_pools`/`country_pools`/`pop_pools`. For non-proxied
       *   requests, the country for `country_pools` is determined by
       *   `location_strategy`.
       * - `"random"`: Select a pool randomly.
       * - `"dynamic_latency"`: Use round trip time to select the closest pool in
       *   default_pools (requires pool health checks).
       * - `"proximity"`: Use the pools' latitude and longitude to select the closest
       *   pool using the Cloudflare PoP location for proxied requests or the location
       *   determined by `location_strategy` for non-proxied requests.
       * - `"least_outstanding_requests"`: Select a pool by taking into consideration
       *   `random_steering` weights, as well as each pool's number of outstanding
       *   requests. Pools with more pending requests are weighted proportionately less
       *   relative to others.
       * - `"least_connections"`: Select a pool by taking into consideration
       *   `random_steering` weights, as well as each pool's number of open connections.
       *   Pools with more open connections are weighted proportionately less relative to
       *   others. Supported for HTTP/1 and HTTP/2 connections.
       * - `""`: Will map to `"geo"` if you use
       *   `region_pools`/`country_pools`/`pop_pools` otherwise `"off"`.
       */
      steering_policy?:
        | 'off'
        | 'geo'
        | 'random'
        | 'dynamic_latency'
        | 'proximity'
        | 'least_outstanding_requests'
        | 'least_connections'
        | '""';

      /**
       * Time to live (TTL) of the DNS entry for the IP address returned by this load
       * balancer. This only applies to gray-clouded (unproxied) load balancers.
       */
      ttl?: number;
    }

    export namespace Overrides {
      /**
       * Controls features that modify the routing of requests to pools and origins in
       * response to dynamic conditions, such as during the interval between active
       * health monitoring requests. For example, zero-downtime failover occurs
       * immediately when an origin becomes unavailable due to HTTP 521, 522, or 523
       * response codes. If there is another healthy origin in the same pool, the request
       * is retried once against this alternate origin.
       */
      export interface AdaptiveRouting {
        /**
         * Extends zero-downtime failover of requests to healthy origins from alternate
         * pools, when no healthy alternate exists in the same pool, according to the
         * failover order defined by traffic and origin steering. When set false (the
         * default) zero-downtime failover will only occur between origins within the same
         * pool. See `session_affinity_attributes` for control over when sessions are
         * broken or reassigned.
         */
        failover_across_pools?: boolean;
      }

      /**
       * Controls location-based steering for non-proxied requests. See `steering_policy`
       * to learn how steering is affected.
       */
      export interface LocationStrategy {
        /**
         * Determines the authoritative location when ECS is not preferred, does not exist
         * in the request, or its GeoIP lookup is unsuccessful.
         *
         * - `"pop"`: Use the Cloudflare PoP location.
         * - `"resolver_ip"`: Use the DNS resolver GeoIP location. If the GeoIP lookup is
         *   unsuccessful, use the Cloudflare PoP location.
         */
        mode?: 'pop' | 'resolver_ip';

        /**
         * Whether the EDNS Client Subnet (ECS) GeoIP should be preferred as the
         * authoritative location.
         *
         * - `"always"`: Always prefer ECS.
         * - `"never"`: Never prefer ECS.
         * - `"proximity"`: Prefer ECS only when `steering_policy="proximity"`.
         * - `"geo"`: Prefer ECS only when `steering_policy="geo"`.
         */
        prefer_ecs?: 'always' | 'never' | 'proximity' | 'geo';
      }

      /**
       * Configures pool weights.
       *
       * - `steering_policy="random"`: A random pool is selected with probability
       *   proportional to pool weights.
       * - `steering_policy="least_outstanding_requests"`: Use pool weights to scale each
       *   pool's outstanding requests.
       * - `steering_policy="least_connections"`: Use pool weights to scale each pool's
       *   open connections.
       */
      export interface RandomSteering {
        /**
         * The default weight for pools in the load balancer that are not specified in the
         * pool_weights map.
         */
        default_weight?: number;

        /**
         * A mapping of pool IDs to custom weights. The weight is relative to other pools
         * in the load balancer.
         */
        pool_weights?: unknown;
      }

      /**
       * Configures attributes for session affinity.
       */
      export interface SessionAffinityAttributes {
        /**
         * Configures the drain duration in seconds. This field is only used when session
         * affinity is enabled on the load balancer.
         */
        drain_duration?: number;

        /**
         * Configures the names of HTTP headers to base session affinity on when header
         * `session_affinity` is enabled. At least one HTTP header name must be provided.
         * To specify the exact cookies to be used, include an item in the following
         * format: `"cookie:<cookie-name-1>,<cookie-name-2>"` (example) where everything
         * after the colon is a comma-separated list of cookie names. Providing only
         * `"cookie"` will result in all cookies being used. The default max number of HTTP
         * header names that can be provided depends on your plan: 5 for Enterprise, 1 for
         * all other plans.
         */
        headers?: Array<string>;

        /**
         * When header `session_affinity` is enabled, this option can be used to specify
         * how HTTP headers on load balancing requests will be used. The supported values
         * are:
         *
         * - `"true"`: Load balancing requests must contain _all_ of the HTTP headers
         *   specified by the `headers` session affinity attribute, otherwise sessions
         *   aren't created.
         * - `"false"`: Load balancing requests must contain _at least one_ of the HTTP
         *   headers specified by the `headers` session affinity attribute, otherwise
         *   sessions aren't created.
         */
        require_all_headers?: boolean;

        /**
         * Configures the SameSite attribute on session affinity cookie. Value "Auto" will
         * be translated to "Lax" or "None" depending if Always Use HTTPS is enabled. Note:
         * when using value "None", the secure attribute can not be set to "Never".
         */
        samesite?: 'Auto' | 'Lax' | 'None' | 'Strict';

        /**
         * Configures the Secure attribute on session affinity cookie. Value "Always"
         * indicates the Secure attribute will be set in the Set-Cookie header, "Never"
         * indicates the Secure attribute will not be set, and "Auto" will set the Secure
         * attribute depending if Always Use HTTPS is enabled.
         */
        secure?: 'Auto' | 'Always' | 'Never';

        /**
         * Configures the zero-downtime failover between origins within a pool when session
         * affinity is enabled. This feature is currently incompatible with Argo, Tiered
         * Cache, and Bandwidth Alliance. The supported values are:
         *
         * - `"none"`: No failover takes place for sessions pinned to the origin (default).
         * - `"temporary"`: Traffic will be sent to another other healthy origin until the
         *   originally pinned origin is available; note that this can potentially result
         *   in heavy origin flapping.
         * - `"sticky"`: The session affinity cookie is updated and subsequent requests are
         *   sent to the new origin. Note: Zero-downtime failover with sticky sessions is
         *   currently not supported for session affinity by header.
         */
        zero_downtime_failover?: 'none' | 'temporary' | 'sticky';
      }
    }
  }

  /**
   * Configures attributes for session affinity.
   */
  export interface SessionAffinityAttributes {
    /**
     * Configures the drain duration in seconds. This field is only used when session
     * affinity is enabled on the load balancer.
     */
    drain_duration?: number;

    /**
     * Configures the names of HTTP headers to base session affinity on when header
     * `session_affinity` is enabled. At least one HTTP header name must be provided.
     * To specify the exact cookies to be used, include an item in the following
     * format: `"cookie:<cookie-name-1>,<cookie-name-2>"` (example) where everything
     * after the colon is a comma-separated list of cookie names. Providing only
     * `"cookie"` will result in all cookies being used. The default max number of HTTP
     * header names that can be provided depends on your plan: 5 for Enterprise, 1 for
     * all other plans.
     */
    headers?: Array<string>;

    /**
     * When header `session_affinity` is enabled, this option can be used to specify
     * how HTTP headers on load balancing requests will be used. The supported values
     * are:
     *
     * - `"true"`: Load balancing requests must contain _all_ of the HTTP headers
     *   specified by the `headers` session affinity attribute, otherwise sessions
     *   aren't created.
     * - `"false"`: Load balancing requests must contain _at least one_ of the HTTP
     *   headers specified by the `headers` session affinity attribute, otherwise
     *   sessions aren't created.
     */
    require_all_headers?: boolean;

    /**
     * Configures the SameSite attribute on session affinity cookie. Value "Auto" will
     * be translated to "Lax" or "None" depending if Always Use HTTPS is enabled. Note:
     * when using value "None", the secure attribute can not be set to "Never".
     */
    samesite?: 'Auto' | 'Lax' | 'None' | 'Strict';

    /**
     * Configures the Secure attribute on session affinity cookie. Value "Always"
     * indicates the Secure attribute will be set in the Set-Cookie header, "Never"
     * indicates the Secure attribute will not be set, and "Auto" will set the Secure
     * attribute depending if Always Use HTTPS is enabled.
     */
    secure?: 'Auto' | 'Always' | 'Never';

    /**
     * Configures the zero-downtime failover between origins within a pool when session
     * affinity is enabled. This feature is currently incompatible with Argo, Tiered
     * Cache, and Bandwidth Alliance. The supported values are:
     *
     * - `"none"`: No failover takes place for sessions pinned to the origin (default).
     * - `"temporary"`: Traffic will be sent to another other healthy origin until the
     *   originally pinned origin is available; note that this can potentially result
     *   in heavy origin flapping.
     * - `"sticky"`: The session affinity cookie is updated and subsequent requests are
     *   sent to the new origin. Note: Zero-downtime failover with sticky sessions is
     *   currently not supported for session affinity by header.
     */
    zero_downtime_failover?: 'none' | 'temporary' | 'sticky';
  }
}

export interface LoadBalancerCreateParams {
  /**
   * A list of pool IDs ordered by their failover priority. Pools defined here are
   * used by default, or when region_pools are not configured for a given region.
   */
  default_pools: Array<string>;

  /**
   * The pool ID to use when all other pools are detected as unhealthy.
   */
  fallback_pool: unknown;

  /**
   * The DNS hostname to associate with your Load Balancer. If this hostname already
   * exists as a DNS record in Cloudflare's DNS, the Load Balancer will take
   * precedence and the DNS record will not be used.
   */
  name: string;

  /**
   * Controls features that modify the routing of requests to pools and origins in
   * response to dynamic conditions, such as during the interval between active
   * health monitoring requests. For example, zero-downtime failover occurs
   * immediately when an origin becomes unavailable due to HTTP 521, 522, or 523
   * response codes. If there is another healthy origin in the same pool, the request
   * is retried once against this alternate origin.
   */
  adaptive_routing?: LoadBalancerCreateParams.AdaptiveRouting;

  /**
   * A mapping of country codes to a list of pool IDs (ordered by their failover
   * priority) for the given country. Any country not explicitly defined will fall
   * back to using the corresponding region_pool mapping if it exists else to
   * default_pools.
   */
  country_pools?: unknown;

  /**
   * Object description.
   */
  description?: string;

  /**
   * Controls location-based steering for non-proxied requests. See `steering_policy`
   * to learn how steering is affected.
   */
  location_strategy?: LoadBalancerCreateParams.LocationStrategy;

  /**
   * (Enterprise only): A mapping of Cloudflare PoP identifiers to a list of pool IDs
   * (ordered by their failover priority) for the PoP (datacenter). Any PoPs not
   * explicitly defined will fall back to using the corresponding country_pool, then
   * region_pool mapping if it exists else to default_pools.
   */
  pop_pools?: unknown;

  /**
   * Whether the hostname should be gray clouded (false) or orange clouded (true).
   */
  proxied?: boolean;

  /**
   * Configures pool weights.
   *
   * - `steering_policy="random"`: A random pool is selected with probability
   *   proportional to pool weights.
   * - `steering_policy="least_outstanding_requests"`: Use pool weights to scale each
   *   pool's outstanding requests.
   * - `steering_policy="least_connections"`: Use pool weights to scale each pool's
   *   open connections.
   */
  random_steering?: LoadBalancerCreateParams.RandomSteering;

  /**
   * A mapping of region codes to a list of pool IDs (ordered by their failover
   * priority) for the given region. Any regions not explicitly defined will fall
   * back to using default_pools.
   */
  region_pools?: unknown;

  /**
   * BETA Field Not General Access: A list of rules for this load balancer to
   * execute.
   */
  rules?: Array<LoadBalancerCreateParams.Rule>;

  /**
   * Specifies the type of session affinity the load balancer should use unless
   * specified as `"none"` or "" (default). The supported types are:
   *
   * - `"cookie"`: On the first request to a proxied load balancer, a cookie is
   *   generated, encoding information of which origin the request will be forwarded
   *   to. Subsequent requests, by the same client to the same load balancer, will be
   *   sent to the origin server the cookie encodes, for the duration of the cookie
   *   and as long as the origin server remains healthy. If the cookie has expired or
   *   the origin server is unhealthy, then a new origin server is calculated and
   *   used.
   * - `"ip_cookie"`: Behaves the same as `"cookie"` except the initial origin
   *   selection is stable and based on the client's ip address.
   * - `"header"`: On the first request to a proxied load balancer, a session key
   *   based on the configured HTTP headers (see
   *   `session_affinity_attributes.headers`) is generated, encoding the request
   *   headers used for storing in the load balancer session state which origin the
   *   request will be forwarded to. Subsequent requests to the load balancer with
   *   the same headers will be sent to the same origin server, for the duration of
   *   the session and as long as the origin server remains healthy. If the session
   *   has been idle for the duration of `session_affinity_ttl` seconds or the origin
   *   server is unhealthy, then a new origin server is calculated and used. See
   *   `headers` in `session_affinity_attributes` for additional required
   *   configuration.
   */
  session_affinity?: 'none' | 'cookie' | 'ip_cookie' | 'header' | '""';

  /**
   * Configures attributes for session affinity.
   */
  session_affinity_attributes?: LoadBalancerCreateParams.SessionAffinityAttributes;

  /**
   * Time, in seconds, until a client's session expires after being created. Once the
   * expiry time has been reached, subsequent requests may get sent to a different
   * origin server. The accepted ranges per `session_affinity` policy are:
   *
   * - `"cookie"` / `"ip_cookie"`: The current default of 23 hours will be used
   *   unless explicitly set. The accepted range of values is between [1800, 604800].
   * - `"header"`: The current default of 1800 seconds will be used unless explicitly
   *   set. The accepted range of values is between [30, 3600]. Note: With session
   *   affinity by header, sessions only expire after they haven't been used for the
   *   number of seconds specified.
   */
  session_affinity_ttl?: number;

  /**
   * Steering Policy for this load balancer.
   *
   * - `"off"`: Use `default_pools`.
   * - `"geo"`: Use `region_pools`/`country_pools`/`pop_pools`. For non-proxied
   *   requests, the country for `country_pools` is determined by
   *   `location_strategy`.
   * - `"random"`: Select a pool randomly.
   * - `"dynamic_latency"`: Use round trip time to select the closest pool in
   *   default_pools (requires pool health checks).
   * - `"proximity"`: Use the pools' latitude and longitude to select the closest
   *   pool using the Cloudflare PoP location for proxied requests or the location
   *   determined by `location_strategy` for non-proxied requests.
   * - `"least_outstanding_requests"`: Select a pool by taking into consideration
   *   `random_steering` weights, as well as each pool's number of outstanding
   *   requests. Pools with more pending requests are weighted proportionately less
   *   relative to others.
   * - `"least_connections"`: Select a pool by taking into consideration
   *   `random_steering` weights, as well as each pool's number of open connections.
   *   Pools with more open connections are weighted proportionately less relative to
   *   others. Supported for HTTP/1 and HTTP/2 connections.
   * - `""`: Will map to `"geo"` if you use
   *   `region_pools`/`country_pools`/`pop_pools` otherwise `"off"`.
   */
  steering_policy?:
    | 'off'
    | 'geo'
    | 'random'
    | 'dynamic_latency'
    | 'proximity'
    | 'least_outstanding_requests'
    | 'least_connections'
    | '""';

  /**
   * Time to live (TTL) of the DNS entry for the IP address returned by this load
   * balancer. This only applies to gray-clouded (unproxied) load balancers.
   */
  ttl?: number;
}

export namespace LoadBalancerCreateParams {
  /**
   * Controls features that modify the routing of requests to pools and origins in
   * response to dynamic conditions, such as during the interval between active
   * health monitoring requests. For example, zero-downtime failover occurs
   * immediately when an origin becomes unavailable due to HTTP 521, 522, or 523
   * response codes. If there is another healthy origin in the same pool, the request
   * is retried once against this alternate origin.
   */
  export interface AdaptiveRouting {
    /**
     * Extends zero-downtime failover of requests to healthy origins from alternate
     * pools, when no healthy alternate exists in the same pool, according to the
     * failover order defined by traffic and origin steering. When set false (the
     * default) zero-downtime failover will only occur between origins within the same
     * pool. See `session_affinity_attributes` for control over when sessions are
     * broken or reassigned.
     */
    failover_across_pools?: boolean;
  }

  /**
   * Controls location-based steering for non-proxied requests. See `steering_policy`
   * to learn how steering is affected.
   */
  export interface LocationStrategy {
    /**
     * Determines the authoritative location when ECS is not preferred, does not exist
     * in the request, or its GeoIP lookup is unsuccessful.
     *
     * - `"pop"`: Use the Cloudflare PoP location.
     * - `"resolver_ip"`: Use the DNS resolver GeoIP location. If the GeoIP lookup is
     *   unsuccessful, use the Cloudflare PoP location.
     */
    mode?: 'pop' | 'resolver_ip';

    /**
     * Whether the EDNS Client Subnet (ECS) GeoIP should be preferred as the
     * authoritative location.
     *
     * - `"always"`: Always prefer ECS.
     * - `"never"`: Never prefer ECS.
     * - `"proximity"`: Prefer ECS only when `steering_policy="proximity"`.
     * - `"geo"`: Prefer ECS only when `steering_policy="geo"`.
     */
    prefer_ecs?: 'always' | 'never' | 'proximity' | 'geo';
  }

  /**
   * Configures pool weights.
   *
   * - `steering_policy="random"`: A random pool is selected with probability
   *   proportional to pool weights.
   * - `steering_policy="least_outstanding_requests"`: Use pool weights to scale each
   *   pool's outstanding requests.
   * - `steering_policy="least_connections"`: Use pool weights to scale each pool's
   *   open connections.
   */
  export interface RandomSteering {
    /**
     * The default weight for pools in the load balancer that are not specified in the
     * pool_weights map.
     */
    default_weight?: number;

    /**
     * A mapping of pool IDs to custom weights. The weight is relative to other pools
     * in the load balancer.
     */
    pool_weights?: unknown;
  }

  /**
   * A rule object containing conditions and overrides for this load balancer to
   * evaluate.
   */
  export interface Rule {
    /**
     * The condition expressions to evaluate. If the condition evaluates to true, the
     * overrides or fixed_response in this rule will be applied. An empty condition is
     * always true. For more details on condition expressions, please see
     * https://developers.cloudflare.com/load-balancing/understand-basics/load-balancing-rules/expressions.
     */
    condition?: string;

    /**
     * Disable this specific rule. It will no longer be evaluated by this load
     * balancer.
     */
    disabled?: boolean;

    /**
     * A collection of fields used to directly respond to the eyeball instead of
     * routing to a pool. If a fixed_response is supplied the rule will be marked as
     * terminates.
     */
    fixed_response?: Rule.FixedResponse;

    /**
     * Name of this rule. Only used for human readability.
     */
    name?: string;

    /**
     * A collection of overrides to apply to the load balancer when this rule's
     * condition is true. All fields are optional.
     */
    overrides?: Rule.Overrides;

    /**
     * The order in which rules should be executed in relation to each other. Lower
     * values are executed first. Values do not need to be sequential. If no value is
     * provided for any rule the array order of the rules field will be used to assign
     * a priority.
     */
    priority?: number;

    /**
     * If this rule's condition is true, this causes rule evaluation to stop after
     * processing this rule.
     */
    terminates?: boolean;
  }

  export namespace Rule {
    /**
     * A collection of fields used to directly respond to the eyeball instead of
     * routing to a pool. If a fixed_response is supplied the rule will be marked as
     * terminates.
     */
    export interface FixedResponse {
      /**
       * The http 'Content-Type' header to include in the response.
       */
      content_type?: string;

      /**
       * The http 'Location' header to include in the response.
       */
      location?: string;

      /**
       * Text to include as the http body.
       */
      message_body?: string;

      /**
       * The http status code to respond with.
       */
      status_code?: number;
    }

    /**
     * A collection of overrides to apply to the load balancer when this rule's
     * condition is true. All fields are optional.
     */
    export interface Overrides {
      /**
       * Controls features that modify the routing of requests to pools and origins in
       * response to dynamic conditions, such as during the interval between active
       * health monitoring requests. For example, zero-downtime failover occurs
       * immediately when an origin becomes unavailable due to HTTP 521, 522, or 523
       * response codes. If there is another healthy origin in the same pool, the request
       * is retried once against this alternate origin.
       */
      adaptive_routing?: Overrides.AdaptiveRouting;

      /**
       * A mapping of country codes to a list of pool IDs (ordered by their failover
       * priority) for the given country. Any country not explicitly defined will fall
       * back to using the corresponding region_pool mapping if it exists else to
       * default_pools.
       */
      country_pools?: unknown;

      /**
       * A list of pool IDs ordered by their failover priority. Pools defined here are
       * used by default, or when region_pools are not configured for a given region.
       */
      default_pools?: Array<string>;

      /**
       * The pool ID to use when all other pools are detected as unhealthy.
       */
      fallback_pool?: unknown;

      /**
       * Controls location-based steering for non-proxied requests. See `steering_policy`
       * to learn how steering is affected.
       */
      location_strategy?: Overrides.LocationStrategy;

      /**
       * (Enterprise only): A mapping of Cloudflare PoP identifiers to a list of pool IDs
       * (ordered by their failover priority) for the PoP (datacenter). Any PoPs not
       * explicitly defined will fall back to using the corresponding country_pool, then
       * region_pool mapping if it exists else to default_pools.
       */
      pop_pools?: unknown;

      /**
       * Configures pool weights.
       *
       * - `steering_policy="random"`: A random pool is selected with probability
       *   proportional to pool weights.
       * - `steering_policy="least_outstanding_requests"`: Use pool weights to scale each
       *   pool's outstanding requests.
       * - `steering_policy="least_connections"`: Use pool weights to scale each pool's
       *   open connections.
       */
      random_steering?: Overrides.RandomSteering;

      /**
       * A mapping of region codes to a list of pool IDs (ordered by their failover
       * priority) for the given region. Any regions not explicitly defined will fall
       * back to using default_pools.
       */
      region_pools?: unknown;

      /**
       * Specifies the type of session affinity the load balancer should use unless
       * specified as `"none"` or "" (default). The supported types are:
       *
       * - `"cookie"`: On the first request to a proxied load balancer, a cookie is
       *   generated, encoding information of which origin the request will be forwarded
       *   to. Subsequent requests, by the same client to the same load balancer, will be
       *   sent to the origin server the cookie encodes, for the duration of the cookie
       *   and as long as the origin server remains healthy. If the cookie has expired or
       *   the origin server is unhealthy, then a new origin server is calculated and
       *   used.
       * - `"ip_cookie"`: Behaves the same as `"cookie"` except the initial origin
       *   selection is stable and based on the client's ip address.
       * - `"header"`: On the first request to a proxied load balancer, a session key
       *   based on the configured HTTP headers (see
       *   `session_affinity_attributes.headers`) is generated, encoding the request
       *   headers used for storing in the load balancer session state which origin the
       *   request will be forwarded to. Subsequent requests to the load balancer with
       *   the same headers will be sent to the same origin server, for the duration of
       *   the session and as long as the origin server remains healthy. If the session
       *   has been idle for the duration of `session_affinity_ttl` seconds or the origin
       *   server is unhealthy, then a new origin server is calculated and used. See
       *   `headers` in `session_affinity_attributes` for additional required
       *   configuration.
       */
      session_affinity?: 'none' | 'cookie' | 'ip_cookie' | 'header' | '""';

      /**
       * Configures attributes for session affinity.
       */
      session_affinity_attributes?: Overrides.SessionAffinityAttributes;

      /**
       * Time, in seconds, until a client's session expires after being created. Once the
       * expiry time has been reached, subsequent requests may get sent to a different
       * origin server. The accepted ranges per `session_affinity` policy are:
       *
       * - `"cookie"` / `"ip_cookie"`: The current default of 23 hours will be used
       *   unless explicitly set. The accepted range of values is between [1800, 604800].
       * - `"header"`: The current default of 1800 seconds will be used unless explicitly
       *   set. The accepted range of values is between [30, 3600]. Note: With session
       *   affinity by header, sessions only expire after they haven't been used for the
       *   number of seconds specified.
       */
      session_affinity_ttl?: number;

      /**
       * Steering Policy for this load balancer.
       *
       * - `"off"`: Use `default_pools`.
       * - `"geo"`: Use `region_pools`/`country_pools`/`pop_pools`. For non-proxied
       *   requests, the country for `country_pools` is determined by
       *   `location_strategy`.
       * - `"random"`: Select a pool randomly.
       * - `"dynamic_latency"`: Use round trip time to select the closest pool in
       *   default_pools (requires pool health checks).
       * - `"proximity"`: Use the pools' latitude and longitude to select the closest
       *   pool using the Cloudflare PoP location for proxied requests or the location
       *   determined by `location_strategy` for non-proxied requests.
       * - `"least_outstanding_requests"`: Select a pool by taking into consideration
       *   `random_steering` weights, as well as each pool's number of outstanding
       *   requests. Pools with more pending requests are weighted proportionately less
       *   relative to others.
       * - `"least_connections"`: Select a pool by taking into consideration
       *   `random_steering` weights, as well as each pool's number of open connections.
       *   Pools with more open connections are weighted proportionately less relative to
       *   others. Supported for HTTP/1 and HTTP/2 connections.
       * - `""`: Will map to `"geo"` if you use
       *   `region_pools`/`country_pools`/`pop_pools` otherwise `"off"`.
       */
      steering_policy?:
        | 'off'
        | 'geo'
        | 'random'
        | 'dynamic_latency'
        | 'proximity'
        | 'least_outstanding_requests'
        | 'least_connections'
        | '""';

      /**
       * Time to live (TTL) of the DNS entry for the IP address returned by this load
       * balancer. This only applies to gray-clouded (unproxied) load balancers.
       */
      ttl?: number;
    }

    export namespace Overrides {
      /**
       * Controls features that modify the routing of requests to pools and origins in
       * response to dynamic conditions, such as during the interval between active
       * health monitoring requests. For example, zero-downtime failover occurs
       * immediately when an origin becomes unavailable due to HTTP 521, 522, or 523
       * response codes. If there is another healthy origin in the same pool, the request
       * is retried once against this alternate origin.
       */
      export interface AdaptiveRouting {
        /**
         * Extends zero-downtime failover of requests to healthy origins from alternate
         * pools, when no healthy alternate exists in the same pool, according to the
         * failover order defined by traffic and origin steering. When set false (the
         * default) zero-downtime failover will only occur between origins within the same
         * pool. See `session_affinity_attributes` for control over when sessions are
         * broken or reassigned.
         */
        failover_across_pools?: boolean;
      }

      /**
       * Controls location-based steering for non-proxied requests. See `steering_policy`
       * to learn how steering is affected.
       */
      export interface LocationStrategy {
        /**
         * Determines the authoritative location when ECS is not preferred, does not exist
         * in the request, or its GeoIP lookup is unsuccessful.
         *
         * - `"pop"`: Use the Cloudflare PoP location.
         * - `"resolver_ip"`: Use the DNS resolver GeoIP location. If the GeoIP lookup is
         *   unsuccessful, use the Cloudflare PoP location.
         */
        mode?: 'pop' | 'resolver_ip';

        /**
         * Whether the EDNS Client Subnet (ECS) GeoIP should be preferred as the
         * authoritative location.
         *
         * - `"always"`: Always prefer ECS.
         * - `"never"`: Never prefer ECS.
         * - `"proximity"`: Prefer ECS only when `steering_policy="proximity"`.
         * - `"geo"`: Prefer ECS only when `steering_policy="geo"`.
         */
        prefer_ecs?: 'always' | 'never' | 'proximity' | 'geo';
      }

      /**
       * Configures pool weights.
       *
       * - `steering_policy="random"`: A random pool is selected with probability
       *   proportional to pool weights.
       * - `steering_policy="least_outstanding_requests"`: Use pool weights to scale each
       *   pool's outstanding requests.
       * - `steering_policy="least_connections"`: Use pool weights to scale each pool's
       *   open connections.
       */
      export interface RandomSteering {
        /**
         * The default weight for pools in the load balancer that are not specified in the
         * pool_weights map.
         */
        default_weight?: number;

        /**
         * A mapping of pool IDs to custom weights. The weight is relative to other pools
         * in the load balancer.
         */
        pool_weights?: unknown;
      }

      /**
       * Configures attributes for session affinity.
       */
      export interface SessionAffinityAttributes {
        /**
         * Configures the drain duration in seconds. This field is only used when session
         * affinity is enabled on the load balancer.
         */
        drain_duration?: number;

        /**
         * Configures the names of HTTP headers to base session affinity on when header
         * `session_affinity` is enabled. At least one HTTP header name must be provided.
         * To specify the exact cookies to be used, include an item in the following
         * format: `"cookie:<cookie-name-1>,<cookie-name-2>"` (example) where everything
         * after the colon is a comma-separated list of cookie names. Providing only
         * `"cookie"` will result in all cookies being used. The default max number of HTTP
         * header names that can be provided depends on your plan: 5 for Enterprise, 1 for
         * all other plans.
         */
        headers?: Array<string>;

        /**
         * When header `session_affinity` is enabled, this option can be used to specify
         * how HTTP headers on load balancing requests will be used. The supported values
         * are:
         *
         * - `"true"`: Load balancing requests must contain _all_ of the HTTP headers
         *   specified by the `headers` session affinity attribute, otherwise sessions
         *   aren't created.
         * - `"false"`: Load balancing requests must contain _at least one_ of the HTTP
         *   headers specified by the `headers` session affinity attribute, otherwise
         *   sessions aren't created.
         */
        require_all_headers?: boolean;

        /**
         * Configures the SameSite attribute on session affinity cookie. Value "Auto" will
         * be translated to "Lax" or "None" depending if Always Use HTTPS is enabled. Note:
         * when using value "None", the secure attribute can not be set to "Never".
         */
        samesite?: 'Auto' | 'Lax' | 'None' | 'Strict';

        /**
         * Configures the Secure attribute on session affinity cookie. Value "Always"
         * indicates the Secure attribute will be set in the Set-Cookie header, "Never"
         * indicates the Secure attribute will not be set, and "Auto" will set the Secure
         * attribute depending if Always Use HTTPS is enabled.
         */
        secure?: 'Auto' | 'Always' | 'Never';

        /**
         * Configures the zero-downtime failover between origins within a pool when session
         * affinity is enabled. This feature is currently incompatible with Argo, Tiered
         * Cache, and Bandwidth Alliance. The supported values are:
         *
         * - `"none"`: No failover takes place for sessions pinned to the origin (default).
         * - `"temporary"`: Traffic will be sent to another other healthy origin until the
         *   originally pinned origin is available; note that this can potentially result
         *   in heavy origin flapping.
         * - `"sticky"`: The session affinity cookie is updated and subsequent requests are
         *   sent to the new origin. Note: Zero-downtime failover with sticky sessions is
         *   currently not supported for session affinity by header.
         */
        zero_downtime_failover?: 'none' | 'temporary' | 'sticky';
      }
    }
  }

  /**
   * Configures attributes for session affinity.
   */
  export interface SessionAffinityAttributes {
    /**
     * Configures the drain duration in seconds. This field is only used when session
     * affinity is enabled on the load balancer.
     */
    drain_duration?: number;

    /**
     * Configures the names of HTTP headers to base session affinity on when header
     * `session_affinity` is enabled. At least one HTTP header name must be provided.
     * To specify the exact cookies to be used, include an item in the following
     * format: `"cookie:<cookie-name-1>,<cookie-name-2>"` (example) where everything
     * after the colon is a comma-separated list of cookie names. Providing only
     * `"cookie"` will result in all cookies being used. The default max number of HTTP
     * header names that can be provided depends on your plan: 5 for Enterprise, 1 for
     * all other plans.
     */
    headers?: Array<string>;

    /**
     * When header `session_affinity` is enabled, this option can be used to specify
     * how HTTP headers on load balancing requests will be used. The supported values
     * are:
     *
     * - `"true"`: Load balancing requests must contain _all_ of the HTTP headers
     *   specified by the `headers` session affinity attribute, otherwise sessions
     *   aren't created.
     * - `"false"`: Load balancing requests must contain _at least one_ of the HTTP
     *   headers specified by the `headers` session affinity attribute, otherwise
     *   sessions aren't created.
     */
    require_all_headers?: boolean;

    /**
     * Configures the SameSite attribute on session affinity cookie. Value "Auto" will
     * be translated to "Lax" or "None" depending if Always Use HTTPS is enabled. Note:
     * when using value "None", the secure attribute can not be set to "Never".
     */
    samesite?: 'Auto' | 'Lax' | 'None' | 'Strict';

    /**
     * Configures the Secure attribute on session affinity cookie. Value "Always"
     * indicates the Secure attribute will be set in the Set-Cookie header, "Never"
     * indicates the Secure attribute will not be set, and "Auto" will set the Secure
     * attribute depending if Always Use HTTPS is enabled.
     */
    secure?: 'Auto' | 'Always' | 'Never';

    /**
     * Configures the zero-downtime failover between origins within a pool when session
     * affinity is enabled. This feature is currently incompatible with Argo, Tiered
     * Cache, and Bandwidth Alliance. The supported values are:
     *
     * - `"none"`: No failover takes place for sessions pinned to the origin (default).
     * - `"temporary"`: Traffic will be sent to another other healthy origin until the
     *   originally pinned origin is available; note that this can potentially result
     *   in heavy origin flapping.
     * - `"sticky"`: The session affinity cookie is updated and subsequent requests are
     *   sent to the new origin. Note: Zero-downtime failover with sticky sessions is
     *   currently not supported for session affinity by header.
     */
    zero_downtime_failover?: 'none' | 'temporary' | 'sticky';
  }
}

export interface LoadBalancerEditParams {
  /**
   * Controls features that modify the routing of requests to pools and origins in
   * response to dynamic conditions, such as during the interval between active
   * health monitoring requests. For example, zero-downtime failover occurs
   * immediately when an origin becomes unavailable due to HTTP 521, 522, or 523
   * response codes. If there is another healthy origin in the same pool, the request
   * is retried once against this alternate origin.
   */
  adaptive_routing?: LoadBalancerEditParams.AdaptiveRouting;

  /**
   * A mapping of country codes to a list of pool IDs (ordered by their failover
   * priority) for the given country. Any country not explicitly defined will fall
   * back to using the corresponding region_pool mapping if it exists else to
   * default_pools.
   */
  country_pools?: unknown;

  /**
   * A list of pool IDs ordered by their failover priority. Pools defined here are
   * used by default, or when region_pools are not configured for a given region.
   */
  default_pools?: Array<string>;

  /**
   * Object description.
   */
  description?: string;

  /**
   * Whether to enable (the default) this load balancer.
   */
  enabled?: boolean;

  /**
   * The pool ID to use when all other pools are detected as unhealthy.
   */
  fallback_pool?: unknown;

  /**
   * Controls location-based steering for non-proxied requests. See `steering_policy`
   * to learn how steering is affected.
   */
  location_strategy?: LoadBalancerEditParams.LocationStrategy;

  /**
   * The DNS hostname to associate with your Load Balancer. If this hostname already
   * exists as a DNS record in Cloudflare's DNS, the Load Balancer will take
   * precedence and the DNS record will not be used.
   */
  name?: string;

  /**
   * (Enterprise only): A mapping of Cloudflare PoP identifiers to a list of pool IDs
   * (ordered by their failover priority) for the PoP (datacenter). Any PoPs not
   * explicitly defined will fall back to using the corresponding country_pool, then
   * region_pool mapping if it exists else to default_pools.
   */
  pop_pools?: unknown;

  /**
   * Whether the hostname should be gray clouded (false) or orange clouded (true).
   */
  proxied?: boolean;

  /**
   * Configures pool weights.
   *
   * - `steering_policy="random"`: A random pool is selected with probability
   *   proportional to pool weights.
   * - `steering_policy="least_outstanding_requests"`: Use pool weights to scale each
   *   pool's outstanding requests.
   * - `steering_policy="least_connections"`: Use pool weights to scale each pool's
   *   open connections.
   */
  random_steering?: LoadBalancerEditParams.RandomSteering;

  /**
   * A mapping of region codes to a list of pool IDs (ordered by their failover
   * priority) for the given region. Any regions not explicitly defined will fall
   * back to using default_pools.
   */
  region_pools?: unknown;

  /**
   * BETA Field Not General Access: A list of rules for this load balancer to
   * execute.
   */
  rules?: Array<LoadBalancerEditParams.Rule>;

  /**
   * Specifies the type of session affinity the load balancer should use unless
   * specified as `"none"` or "" (default). The supported types are:
   *
   * - `"cookie"`: On the first request to a proxied load balancer, a cookie is
   *   generated, encoding information of which origin the request will be forwarded
   *   to. Subsequent requests, by the same client to the same load balancer, will be
   *   sent to the origin server the cookie encodes, for the duration of the cookie
   *   and as long as the origin server remains healthy. If the cookie has expired or
   *   the origin server is unhealthy, then a new origin server is calculated and
   *   used.
   * - `"ip_cookie"`: Behaves the same as `"cookie"` except the initial origin
   *   selection is stable and based on the client's ip address.
   * - `"header"`: On the first request to a proxied load balancer, a session key
   *   based on the configured HTTP headers (see
   *   `session_affinity_attributes.headers`) is generated, encoding the request
   *   headers used for storing in the load balancer session state which origin the
   *   request will be forwarded to. Subsequent requests to the load balancer with
   *   the same headers will be sent to the same origin server, for the duration of
   *   the session and as long as the origin server remains healthy. If the session
   *   has been idle for the duration of `session_affinity_ttl` seconds or the origin
   *   server is unhealthy, then a new origin server is calculated and used. See
   *   `headers` in `session_affinity_attributes` for additional required
   *   configuration.
   */
  session_affinity?: 'none' | 'cookie' | 'ip_cookie' | 'header' | '""';

  /**
   * Configures attributes for session affinity.
   */
  session_affinity_attributes?: LoadBalancerEditParams.SessionAffinityAttributes;

  /**
   * Time, in seconds, until a client's session expires after being created. Once the
   * expiry time has been reached, subsequent requests may get sent to a different
   * origin server. The accepted ranges per `session_affinity` policy are:
   *
   * - `"cookie"` / `"ip_cookie"`: The current default of 23 hours will be used
   *   unless explicitly set. The accepted range of values is between [1800, 604800].
   * - `"header"`: The current default of 1800 seconds will be used unless explicitly
   *   set. The accepted range of values is between [30, 3600]. Note: With session
   *   affinity by header, sessions only expire after they haven't been used for the
   *   number of seconds specified.
   */
  session_affinity_ttl?: number;

  /**
   * Steering Policy for this load balancer.
   *
   * - `"off"`: Use `default_pools`.
   * - `"geo"`: Use `region_pools`/`country_pools`/`pop_pools`. For non-proxied
   *   requests, the country for `country_pools` is determined by
   *   `location_strategy`.
   * - `"random"`: Select a pool randomly.
   * - `"dynamic_latency"`: Use round trip time to select the closest pool in
   *   default_pools (requires pool health checks).
   * - `"proximity"`: Use the pools' latitude and longitude to select the closest
   *   pool using the Cloudflare PoP location for proxied requests or the location
   *   determined by `location_strategy` for non-proxied requests.
   * - `"least_outstanding_requests"`: Select a pool by taking into consideration
   *   `random_steering` weights, as well as each pool's number of outstanding
   *   requests. Pools with more pending requests are weighted proportionately less
   *   relative to others.
   * - `"least_connections"`: Select a pool by taking into consideration
   *   `random_steering` weights, as well as each pool's number of open connections.
   *   Pools with more open connections are weighted proportionately less relative to
   *   others. Supported for HTTP/1 and HTTP/2 connections.
   * - `""`: Will map to `"geo"` if you use
   *   `region_pools`/`country_pools`/`pop_pools` otherwise `"off"`.
   */
  steering_policy?:
    | 'off'
    | 'geo'
    | 'random'
    | 'dynamic_latency'
    | 'proximity'
    | 'least_outstanding_requests'
    | 'least_connections'
    | '""';

  /**
   * Time to live (TTL) of the DNS entry for the IP address returned by this load
   * balancer. This only applies to gray-clouded (unproxied) load balancers.
   */
  ttl?: number;
}

export namespace LoadBalancerEditParams {
  /**
   * Controls features that modify the routing of requests to pools and origins in
   * response to dynamic conditions, such as during the interval between active
   * health monitoring requests. For example, zero-downtime failover occurs
   * immediately when an origin becomes unavailable due to HTTP 521, 522, or 523
   * response codes. If there is another healthy origin in the same pool, the request
   * is retried once against this alternate origin.
   */
  export interface AdaptiveRouting {
    /**
     * Extends zero-downtime failover of requests to healthy origins from alternate
     * pools, when no healthy alternate exists in the same pool, according to the
     * failover order defined by traffic and origin steering. When set false (the
     * default) zero-downtime failover will only occur between origins within the same
     * pool. See `session_affinity_attributes` for control over when sessions are
     * broken or reassigned.
     */
    failover_across_pools?: boolean;
  }

  /**
   * Controls location-based steering for non-proxied requests. See `steering_policy`
   * to learn how steering is affected.
   */
  export interface LocationStrategy {
    /**
     * Determines the authoritative location when ECS is not preferred, does not exist
     * in the request, or its GeoIP lookup is unsuccessful.
     *
     * - `"pop"`: Use the Cloudflare PoP location.
     * - `"resolver_ip"`: Use the DNS resolver GeoIP location. If the GeoIP lookup is
     *   unsuccessful, use the Cloudflare PoP location.
     */
    mode?: 'pop' | 'resolver_ip';

    /**
     * Whether the EDNS Client Subnet (ECS) GeoIP should be preferred as the
     * authoritative location.
     *
     * - `"always"`: Always prefer ECS.
     * - `"never"`: Never prefer ECS.
     * - `"proximity"`: Prefer ECS only when `steering_policy="proximity"`.
     * - `"geo"`: Prefer ECS only when `steering_policy="geo"`.
     */
    prefer_ecs?: 'always' | 'never' | 'proximity' | 'geo';
  }

  /**
   * Configures pool weights.
   *
   * - `steering_policy="random"`: A random pool is selected with probability
   *   proportional to pool weights.
   * - `steering_policy="least_outstanding_requests"`: Use pool weights to scale each
   *   pool's outstanding requests.
   * - `steering_policy="least_connections"`: Use pool weights to scale each pool's
   *   open connections.
   */
  export interface RandomSteering {
    /**
     * The default weight for pools in the load balancer that are not specified in the
     * pool_weights map.
     */
    default_weight?: number;

    /**
     * A mapping of pool IDs to custom weights. The weight is relative to other pools
     * in the load balancer.
     */
    pool_weights?: unknown;
  }

  /**
   * A rule object containing conditions and overrides for this load balancer to
   * evaluate.
   */
  export interface Rule {
    /**
     * The condition expressions to evaluate. If the condition evaluates to true, the
     * overrides or fixed_response in this rule will be applied. An empty condition is
     * always true. For more details on condition expressions, please see
     * https://developers.cloudflare.com/load-balancing/understand-basics/load-balancing-rules/expressions.
     */
    condition?: string;

    /**
     * Disable this specific rule. It will no longer be evaluated by this load
     * balancer.
     */
    disabled?: boolean;

    /**
     * A collection of fields used to directly respond to the eyeball instead of
     * routing to a pool. If a fixed_response is supplied the rule will be marked as
     * terminates.
     */
    fixed_response?: Rule.FixedResponse;

    /**
     * Name of this rule. Only used for human readability.
     */
    name?: string;

    /**
     * A collection of overrides to apply to the load balancer when this rule's
     * condition is true. All fields are optional.
     */
    overrides?: Rule.Overrides;

    /**
     * The order in which rules should be executed in relation to each other. Lower
     * values are executed first. Values do not need to be sequential. If no value is
     * provided for any rule the array order of the rules field will be used to assign
     * a priority.
     */
    priority?: number;

    /**
     * If this rule's condition is true, this causes rule evaluation to stop after
     * processing this rule.
     */
    terminates?: boolean;
  }

  export namespace Rule {
    /**
     * A collection of fields used to directly respond to the eyeball instead of
     * routing to a pool. If a fixed_response is supplied the rule will be marked as
     * terminates.
     */
    export interface FixedResponse {
      /**
       * The http 'Content-Type' header to include in the response.
       */
      content_type?: string;

      /**
       * The http 'Location' header to include in the response.
       */
      location?: string;

      /**
       * Text to include as the http body.
       */
      message_body?: string;

      /**
       * The http status code to respond with.
       */
      status_code?: number;
    }

    /**
     * A collection of overrides to apply to the load balancer when this rule's
     * condition is true. All fields are optional.
     */
    export interface Overrides {
      /**
       * Controls features that modify the routing of requests to pools and origins in
       * response to dynamic conditions, such as during the interval between active
       * health monitoring requests. For example, zero-downtime failover occurs
       * immediately when an origin becomes unavailable due to HTTP 521, 522, or 523
       * response codes. If there is another healthy origin in the same pool, the request
       * is retried once against this alternate origin.
       */
      adaptive_routing?: Overrides.AdaptiveRouting;

      /**
       * A mapping of country codes to a list of pool IDs (ordered by their failover
       * priority) for the given country. Any country not explicitly defined will fall
       * back to using the corresponding region_pool mapping if it exists else to
       * default_pools.
       */
      country_pools?: unknown;

      /**
       * A list of pool IDs ordered by their failover priority. Pools defined here are
       * used by default, or when region_pools are not configured for a given region.
       */
      default_pools?: Array<string>;

      /**
       * The pool ID to use when all other pools are detected as unhealthy.
       */
      fallback_pool?: unknown;

      /**
       * Controls location-based steering for non-proxied requests. See `steering_policy`
       * to learn how steering is affected.
       */
      location_strategy?: Overrides.LocationStrategy;

      /**
       * (Enterprise only): A mapping of Cloudflare PoP identifiers to a list of pool IDs
       * (ordered by their failover priority) for the PoP (datacenter). Any PoPs not
       * explicitly defined will fall back to using the corresponding country_pool, then
       * region_pool mapping if it exists else to default_pools.
       */
      pop_pools?: unknown;

      /**
       * Configures pool weights.
       *
       * - `steering_policy="random"`: A random pool is selected with probability
       *   proportional to pool weights.
       * - `steering_policy="least_outstanding_requests"`: Use pool weights to scale each
       *   pool's outstanding requests.
       * - `steering_policy="least_connections"`: Use pool weights to scale each pool's
       *   open connections.
       */
      random_steering?: Overrides.RandomSteering;

      /**
       * A mapping of region codes to a list of pool IDs (ordered by their failover
       * priority) for the given region. Any regions not explicitly defined will fall
       * back to using default_pools.
       */
      region_pools?: unknown;

      /**
       * Specifies the type of session affinity the load balancer should use unless
       * specified as `"none"` or "" (default). The supported types are:
       *
       * - `"cookie"`: On the first request to a proxied load balancer, a cookie is
       *   generated, encoding information of which origin the request will be forwarded
       *   to. Subsequent requests, by the same client to the same load balancer, will be
       *   sent to the origin server the cookie encodes, for the duration of the cookie
       *   and as long as the origin server remains healthy. If the cookie has expired or
       *   the origin server is unhealthy, then a new origin server is calculated and
       *   used.
       * - `"ip_cookie"`: Behaves the same as `"cookie"` except the initial origin
       *   selection is stable and based on the client's ip address.
       * - `"header"`: On the first request to a proxied load balancer, a session key
       *   based on the configured HTTP headers (see
       *   `session_affinity_attributes.headers`) is generated, encoding the request
       *   headers used for storing in the load balancer session state which origin the
       *   request will be forwarded to. Subsequent requests to the load balancer with
       *   the same headers will be sent to the same origin server, for the duration of
       *   the session and as long as the origin server remains healthy. If the session
       *   has been idle for the duration of `session_affinity_ttl` seconds or the origin
       *   server is unhealthy, then a new origin server is calculated and used. See
       *   `headers` in `session_affinity_attributes` for additional required
       *   configuration.
       */
      session_affinity?: 'none' | 'cookie' | 'ip_cookie' | 'header' | '""';

      /**
       * Configures attributes for session affinity.
       */
      session_affinity_attributes?: Overrides.SessionAffinityAttributes;

      /**
       * Time, in seconds, until a client's session expires after being created. Once the
       * expiry time has been reached, subsequent requests may get sent to a different
       * origin server. The accepted ranges per `session_affinity` policy are:
       *
       * - `"cookie"` / `"ip_cookie"`: The current default of 23 hours will be used
       *   unless explicitly set. The accepted range of values is between [1800, 604800].
       * - `"header"`: The current default of 1800 seconds will be used unless explicitly
       *   set. The accepted range of values is between [30, 3600]. Note: With session
       *   affinity by header, sessions only expire after they haven't been used for the
       *   number of seconds specified.
       */
      session_affinity_ttl?: number;

      /**
       * Steering Policy for this load balancer.
       *
       * - `"off"`: Use `default_pools`.
       * - `"geo"`: Use `region_pools`/`country_pools`/`pop_pools`. For non-proxied
       *   requests, the country for `country_pools` is determined by
       *   `location_strategy`.
       * - `"random"`: Select a pool randomly.
       * - `"dynamic_latency"`: Use round trip time to select the closest pool in
       *   default_pools (requires pool health checks).
       * - `"proximity"`: Use the pools' latitude and longitude to select the closest
       *   pool using the Cloudflare PoP location for proxied requests or the location
       *   determined by `location_strategy` for non-proxied requests.
       * - `"least_outstanding_requests"`: Select a pool by taking into consideration
       *   `random_steering` weights, as well as each pool's number of outstanding
       *   requests. Pools with more pending requests are weighted proportionately less
       *   relative to others.
       * - `"least_connections"`: Select a pool by taking into consideration
       *   `random_steering` weights, as well as each pool's number of open connections.
       *   Pools with more open connections are weighted proportionately less relative to
       *   others. Supported for HTTP/1 and HTTP/2 connections.
       * - `""`: Will map to `"geo"` if you use
       *   `region_pools`/`country_pools`/`pop_pools` otherwise `"off"`.
       */
      steering_policy?:
        | 'off'
        | 'geo'
        | 'random'
        | 'dynamic_latency'
        | 'proximity'
        | 'least_outstanding_requests'
        | 'least_connections'
        | '""';

      /**
       * Time to live (TTL) of the DNS entry for the IP address returned by this load
       * balancer. This only applies to gray-clouded (unproxied) load balancers.
       */
      ttl?: number;
    }

    export namespace Overrides {
      /**
       * Controls features that modify the routing of requests to pools and origins in
       * response to dynamic conditions, such as during the interval between active
       * health monitoring requests. For example, zero-downtime failover occurs
       * immediately when an origin becomes unavailable due to HTTP 521, 522, or 523
       * response codes. If there is another healthy origin in the same pool, the request
       * is retried once against this alternate origin.
       */
      export interface AdaptiveRouting {
        /**
         * Extends zero-downtime failover of requests to healthy origins from alternate
         * pools, when no healthy alternate exists in the same pool, according to the
         * failover order defined by traffic and origin steering. When set false (the
         * default) zero-downtime failover will only occur between origins within the same
         * pool. See `session_affinity_attributes` for control over when sessions are
         * broken or reassigned.
         */
        failover_across_pools?: boolean;
      }

      /**
       * Controls location-based steering for non-proxied requests. See `steering_policy`
       * to learn how steering is affected.
       */
      export interface LocationStrategy {
        /**
         * Determines the authoritative location when ECS is not preferred, does not exist
         * in the request, or its GeoIP lookup is unsuccessful.
         *
         * - `"pop"`: Use the Cloudflare PoP location.
         * - `"resolver_ip"`: Use the DNS resolver GeoIP location. If the GeoIP lookup is
         *   unsuccessful, use the Cloudflare PoP location.
         */
        mode?: 'pop' | 'resolver_ip';

        /**
         * Whether the EDNS Client Subnet (ECS) GeoIP should be preferred as the
         * authoritative location.
         *
         * - `"always"`: Always prefer ECS.
         * - `"never"`: Never prefer ECS.
         * - `"proximity"`: Prefer ECS only when `steering_policy="proximity"`.
         * - `"geo"`: Prefer ECS only when `steering_policy="geo"`.
         */
        prefer_ecs?: 'always' | 'never' | 'proximity' | 'geo';
      }

      /**
       * Configures pool weights.
       *
       * - `steering_policy="random"`: A random pool is selected with probability
       *   proportional to pool weights.
       * - `steering_policy="least_outstanding_requests"`: Use pool weights to scale each
       *   pool's outstanding requests.
       * - `steering_policy="least_connections"`: Use pool weights to scale each pool's
       *   open connections.
       */
      export interface RandomSteering {
        /**
         * The default weight for pools in the load balancer that are not specified in the
         * pool_weights map.
         */
        default_weight?: number;

        /**
         * A mapping of pool IDs to custom weights. The weight is relative to other pools
         * in the load balancer.
         */
        pool_weights?: unknown;
      }

      /**
       * Configures attributes for session affinity.
       */
      export interface SessionAffinityAttributes {
        /**
         * Configures the drain duration in seconds. This field is only used when session
         * affinity is enabled on the load balancer.
         */
        drain_duration?: number;

        /**
         * Configures the names of HTTP headers to base session affinity on when header
         * `session_affinity` is enabled. At least one HTTP header name must be provided.
         * To specify the exact cookies to be used, include an item in the following
         * format: `"cookie:<cookie-name-1>,<cookie-name-2>"` (example) where everything
         * after the colon is a comma-separated list of cookie names. Providing only
         * `"cookie"` will result in all cookies being used. The default max number of HTTP
         * header names that can be provided depends on your plan: 5 for Enterprise, 1 for
         * all other plans.
         */
        headers?: Array<string>;

        /**
         * When header `session_affinity` is enabled, this option can be used to specify
         * how HTTP headers on load balancing requests will be used. The supported values
         * are:
         *
         * - `"true"`: Load balancing requests must contain _all_ of the HTTP headers
         *   specified by the `headers` session affinity attribute, otherwise sessions
         *   aren't created.
         * - `"false"`: Load balancing requests must contain _at least one_ of the HTTP
         *   headers specified by the `headers` session affinity attribute, otherwise
         *   sessions aren't created.
         */
        require_all_headers?: boolean;

        /**
         * Configures the SameSite attribute on session affinity cookie. Value "Auto" will
         * be translated to "Lax" or "None" depending if Always Use HTTPS is enabled. Note:
         * when using value "None", the secure attribute can not be set to "Never".
         */
        samesite?: 'Auto' | 'Lax' | 'None' | 'Strict';

        /**
         * Configures the Secure attribute on session affinity cookie. Value "Always"
         * indicates the Secure attribute will be set in the Set-Cookie header, "Never"
         * indicates the Secure attribute will not be set, and "Auto" will set the Secure
         * attribute depending if Always Use HTTPS is enabled.
         */
        secure?: 'Auto' | 'Always' | 'Never';

        /**
         * Configures the zero-downtime failover between origins within a pool when session
         * affinity is enabled. This feature is currently incompatible with Argo, Tiered
         * Cache, and Bandwidth Alliance. The supported values are:
         *
         * - `"none"`: No failover takes place for sessions pinned to the origin (default).
         * - `"temporary"`: Traffic will be sent to another other healthy origin until the
         *   originally pinned origin is available; note that this can potentially result
         *   in heavy origin flapping.
         * - `"sticky"`: The session affinity cookie is updated and subsequent requests are
         *   sent to the new origin. Note: Zero-downtime failover with sticky sessions is
         *   currently not supported for session affinity by header.
         */
        zero_downtime_failover?: 'none' | 'temporary' | 'sticky';
      }
    }
  }

  /**
   * Configures attributes for session affinity.
   */
  export interface SessionAffinityAttributes {
    /**
     * Configures the drain duration in seconds. This field is only used when session
     * affinity is enabled on the load balancer.
     */
    drain_duration?: number;

    /**
     * Configures the names of HTTP headers to base session affinity on when header
     * `session_affinity` is enabled. At least one HTTP header name must be provided.
     * To specify the exact cookies to be used, include an item in the following
     * format: `"cookie:<cookie-name-1>,<cookie-name-2>"` (example) where everything
     * after the colon is a comma-separated list of cookie names. Providing only
     * `"cookie"` will result in all cookies being used. The default max number of HTTP
     * header names that can be provided depends on your plan: 5 for Enterprise, 1 for
     * all other plans.
     */
    headers?: Array<string>;

    /**
     * When header `session_affinity` is enabled, this option can be used to specify
     * how HTTP headers on load balancing requests will be used. The supported values
     * are:
     *
     * - `"true"`: Load balancing requests must contain _all_ of the HTTP headers
     *   specified by the `headers` session affinity attribute, otherwise sessions
     *   aren't created.
     * - `"false"`: Load balancing requests must contain _at least one_ of the HTTP
     *   headers specified by the `headers` session affinity attribute, otherwise
     *   sessions aren't created.
     */
    require_all_headers?: boolean;

    /**
     * Configures the SameSite attribute on session affinity cookie. Value "Auto" will
     * be translated to "Lax" or "None" depending if Always Use HTTPS is enabled. Note:
     * when using value "None", the secure attribute can not be set to "Never".
     */
    samesite?: 'Auto' | 'Lax' | 'None' | 'Strict';

    /**
     * Configures the Secure attribute on session affinity cookie. Value "Always"
     * indicates the Secure attribute will be set in the Set-Cookie header, "Never"
     * indicates the Secure attribute will not be set, and "Auto" will set the Secure
     * attribute depending if Always Use HTTPS is enabled.
     */
    secure?: 'Auto' | 'Always' | 'Never';

    /**
     * Configures the zero-downtime failover between origins within a pool when session
     * affinity is enabled. This feature is currently incompatible with Argo, Tiered
     * Cache, and Bandwidth Alliance. The supported values are:
     *
     * - `"none"`: No failover takes place for sessions pinned to the origin (default).
     * - `"temporary"`: Traffic will be sent to another other healthy origin until the
     *   originally pinned origin is available; note that this can potentially result
     *   in heavy origin flapping.
     * - `"sticky"`: The session affinity cookie is updated and subsequent requests are
     *   sent to the new origin. Note: Zero-downtime failover with sticky sessions is
     *   currently not supported for session affinity by header.
     */
    zero_downtime_failover?: 'none' | 'temporary' | 'sticky';
  }
}

export namespace LoadBalancers {
  export import LoadBalancerCreateResponse = LoadBalancersAPI.LoadBalancerCreateResponse;
  export import LoadBalancerListResponse = LoadBalancersAPI.LoadBalancerListResponse;
  export import LoadBalancerDeleteResponse = LoadBalancersAPI.LoadBalancerDeleteResponse;
  export import LoadBalancerEditResponse = LoadBalancersAPI.LoadBalancerEditResponse;
  export import LoadBalancerGetResponse = LoadBalancersAPI.LoadBalancerGetResponse;
  export import LoadBalancerCreateParams = LoadBalancersAPI.LoadBalancerCreateParams;
  export import LoadBalancerEditParams = LoadBalancersAPI.LoadBalancerEditParams;
  export import Monitors = MonitorsAPI.Monitors;
  export import MonitorCreateResponse = MonitorsAPI.MonitorCreateResponse;
  export import MonitorListResponse = MonitorsAPI.MonitorListResponse;
  export import MonitorDeleteResponse = MonitorsAPI.MonitorDeleteResponse;
  export import MonitorEditResponse = MonitorsAPI.MonitorEditResponse;
  export import MonitorGetResponse = MonitorsAPI.MonitorGetResponse;
  export import MonitorCreateParams = MonitorsAPI.MonitorCreateParams;
  export import MonitorEditParams = MonitorsAPI.MonitorEditParams;
  export import Pools = PoolsAPI.Pools;
  export import PoolCreateResponse = PoolsAPI.PoolCreateResponse;
  export import PoolListResponse = PoolsAPI.PoolListResponse;
  export import PoolDeleteResponse = PoolsAPI.PoolDeleteResponse;
  export import PoolEditResponse = PoolsAPI.PoolEditResponse;
  export import PoolGetResponse = PoolsAPI.PoolGetResponse;
  export import PoolCreateParams = PoolsAPI.PoolCreateParams;
  export import PoolListParams = PoolsAPI.PoolListParams;
  export import PoolEditParams = PoolsAPI.PoolEditParams;
  export import Previews = PreviewsAPI.Previews;
  export import PreviewGetResponse = PreviewsAPI.PreviewGetResponse;
  export import Regions = RegionsAPI.Regions;
  export import RegionListResponse = RegionsAPI.RegionListResponse;
  export import RegionGetResponse = RegionsAPI.RegionGetResponse;
  export import RegionListParams = RegionsAPI.RegionListParams;
  export import Searches = SearchesAPI.Searches;
  export import SearchListResponse = SearchesAPI.SearchListResponse;
  export import SearchListParams = SearchesAPI.SearchListParams;
}
