// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as LoadBalancersAPI from 'cloudflare/resources/load-balancers/load-balancers';
import * as PreviewsAPI from 'cloudflare/resources/load-balancers/previews';
import * as RegionsAPI from 'cloudflare/resources/load-balancers/regions';
import * as SearchesAPI from 'cloudflare/resources/load-balancers/searches';
import * as MonitorsAPI from 'cloudflare/resources/load-balancers/monitors/monitors';
import * as PoolsAPI from 'cloudflare/resources/load-balancers/pools/pools';
import { SinglePage } from 'cloudflare/pagination';

export class LoadBalancers extends APIResource {
  monitors: MonitorsAPI.Monitors = new MonitorsAPI.Monitors(this._client);
  pools: PoolsAPI.Pools = new PoolsAPI.Pools(this._client);
  previews: PreviewsAPI.Previews = new PreviewsAPI.Previews(this._client);
  regions: RegionsAPI.Regions = new RegionsAPI.Regions(this._client);
  searches: SearchesAPI.Searches = new SearchesAPI.Searches(this._client);

  /**
   * Create a new load balancer.
   */
  create(params: LoadBalancerCreateParams, options?: Core.RequestOptions): Core.APIPromise<LoadBalancer> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(`/zones/${zone_id}/load_balancers`, { body, ...options }) as Core.APIPromise<{
        result: LoadBalancer;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a configured load balancer.
   */
  update(
    loadBalancerId: string,
    params: LoadBalancerUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LoadBalancer> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(`/zones/${zone_id}/load_balancers/${loadBalancerId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: LoadBalancer }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List configured load balancers.
   */
  list(
    params: LoadBalancerListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LoadBalancersSinglePage, LoadBalancer> {
    const { zone_id } = params;
    return this._client.getAPIList(`/zones/${zone_id}/load_balancers`, LoadBalancersSinglePage, options);
  }

  /**
   * Delete a configured load balancer.
   */
  delete(
    loadBalancerId: string,
    params: LoadBalancerDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LoadBalancerDeleteResponse> {
    const { zone_id } = params;
    return (
      this._client.delete(`/zones/${zone_id}/load_balancers/${loadBalancerId}`, options) as Core.APIPromise<{
        result: LoadBalancerDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Apply changes to an existing load balancer, overwriting the supplied properties.
   */
  edit(
    loadBalancerId: string,
    params: LoadBalancerEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LoadBalancer> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/load_balancers/${loadBalancerId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: LoadBalancer }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a single configured load balancer.
   */
  get(
    loadBalancerId: string,
    params: LoadBalancerGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LoadBalancer> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/load_balancers/${loadBalancerId}`, options) as Core.APIPromise<{
        result: LoadBalancer;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class LoadBalancersSinglePage extends SinglePage<LoadBalancer> {}

export interface LoadBalancer {
  id?: string;

  /**
   * Controls features that modify the routing of requests to pools and origins in
   * response to dynamic conditions, such as during the interval between active
   * health monitoring requests. For example, zero-downtime failover occurs
   * immediately when an origin becomes unavailable due to HTTP 521, 522, or 523
   * response codes. If there is another healthy origin in the same pool, the request
   * is retried once against this alternate origin.
   */
  adaptive_routing?: LoadBalancer.AdaptiveRouting;

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
  location_strategy?: LoadBalancer.LocationStrategy;

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
  random_steering?: LoadBalancer.RandomSteering;

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
  rules?: Array<LoadBalancer.Rule>;

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
  session_affinity_attributes?: LoadBalancer.SessionAffinityAttributes;

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

export namespace LoadBalancer {
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

export interface LoadBalancerDeleteResponse {
  id?: string;
}

export interface LoadBalancerCreateParams {
  /**
   * Path param:
   */
  zone_id: string;

  /**
   * Body param: A list of pool IDs ordered by their failover priority. Pools defined
   * here are used by default, or when region_pools are not configured for a given
   * region.
   */
  default_pools: Array<string>;

  /**
   * Body param: The pool ID to use when all other pools are detected as unhealthy.
   */
  fallback_pool: unknown;

  /**
   * Body param: The DNS hostname to associate with your Load Balancer. If this
   * hostname already exists as a DNS record in Cloudflare's DNS, the Load Balancer
   * will take precedence and the DNS record will not be used.
   */
  name: string;

  /**
   * Body param: Controls features that modify the routing of requests to pools and
   * origins in response to dynamic conditions, such as during the interval between
   * active health monitoring requests. For example, zero-downtime failover occurs
   * immediately when an origin becomes unavailable due to HTTP 521, 522, or 523
   * response codes. If there is another healthy origin in the same pool, the request
   * is retried once against this alternate origin.
   */
  adaptive_routing?: LoadBalancerCreateParams.AdaptiveRouting;

  /**
   * Body param: A mapping of country codes to a list of pool IDs (ordered by their
   * failover priority) for the given country. Any country not explicitly defined
   * will fall back to using the corresponding region_pool mapping if it exists else
   * to default_pools.
   */
  country_pools?: unknown;

  /**
   * Body param: Object description.
   */
  description?: string;

  /**
   * Body param: Controls location-based steering for non-proxied requests. See
   * `steering_policy` to learn how steering is affected.
   */
  location_strategy?: LoadBalancerCreateParams.LocationStrategy;

  /**
   * Body param: (Enterprise only): A mapping of Cloudflare PoP identifiers to a list
   * of pool IDs (ordered by their failover priority) for the PoP (datacenter). Any
   * PoPs not explicitly defined will fall back to using the corresponding
   * country_pool, then region_pool mapping if it exists else to default_pools.
   */
  pop_pools?: unknown;

  /**
   * Body param: Whether the hostname should be gray clouded (false) or orange
   * clouded (true).
   */
  proxied?: boolean;

  /**
   * Body param: Configures pool weights.
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
   * Body param: A mapping of region codes to a list of pool IDs (ordered by their
   * failover priority) for the given region. Any regions not explicitly defined will
   * fall back to using default_pools.
   */
  region_pools?: unknown;

  /**
   * Body param: BETA Field Not General Access: A list of rules for this load
   * balancer to execute.
   */
  rules?: Array<LoadBalancerCreateParams.Rule>;

  /**
   * Body param: Specifies the type of session affinity the load balancer should use
   * unless specified as `"none"` or "" (default). The supported types are:
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
   * Body param: Configures attributes for session affinity.
   */
  session_affinity_attributes?: LoadBalancerCreateParams.SessionAffinityAttributes;

  /**
   * Body param: Time, in seconds, until a client's session expires after being
   * created. Once the expiry time has been reached, subsequent requests may get sent
   * to a different origin server. The accepted ranges per `session_affinity` policy
   * are:
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
   * Body param: Steering Policy for this load balancer.
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
   * Body param: Time to live (TTL) of the DNS entry for the IP address returned by
   * this load balancer. This only applies to gray-clouded (unproxied) load
   * balancers.
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

export interface LoadBalancerUpdateParams {
  /**
   * Path param:
   */
  zone_id: string;

  /**
   * Body param: A list of pool IDs ordered by their failover priority. Pools defined
   * here are used by default, or when region_pools are not configured for a given
   * region.
   */
  default_pools: Array<string>;

  /**
   * Body param: The pool ID to use when all other pools are detected as unhealthy.
   */
  fallback_pool: unknown;

  /**
   * Body param: The DNS hostname to associate with your Load Balancer. If this
   * hostname already exists as a DNS record in Cloudflare's DNS, the Load Balancer
   * will take precedence and the DNS record will not be used.
   */
  name: string;

  /**
   * Body param: Controls features that modify the routing of requests to pools and
   * origins in response to dynamic conditions, such as during the interval between
   * active health monitoring requests. For example, zero-downtime failover occurs
   * immediately when an origin becomes unavailable due to HTTP 521, 522, or 523
   * response codes. If there is another healthy origin in the same pool, the request
   * is retried once against this alternate origin.
   */
  adaptive_routing?: LoadBalancerUpdateParams.AdaptiveRouting;

  /**
   * Body param: A mapping of country codes to a list of pool IDs (ordered by their
   * failover priority) for the given country. Any country not explicitly defined
   * will fall back to using the corresponding region_pool mapping if it exists else
   * to default_pools.
   */
  country_pools?: unknown;

  /**
   * Body param: Object description.
   */
  description?: string;

  /**
   * Body param: Whether to enable (the default) this load balancer.
   */
  enabled?: boolean;

  /**
   * Body param: Controls location-based steering for non-proxied requests. See
   * `steering_policy` to learn how steering is affected.
   */
  location_strategy?: LoadBalancerUpdateParams.LocationStrategy;

  /**
   * Body param: (Enterprise only): A mapping of Cloudflare PoP identifiers to a list
   * of pool IDs (ordered by their failover priority) for the PoP (datacenter). Any
   * PoPs not explicitly defined will fall back to using the corresponding
   * country_pool, then region_pool mapping if it exists else to default_pools.
   */
  pop_pools?: unknown;

  /**
   * Body param: Whether the hostname should be gray clouded (false) or orange
   * clouded (true).
   */
  proxied?: boolean;

  /**
   * Body param: Configures pool weights.
   *
   * - `steering_policy="random"`: A random pool is selected with probability
   *   proportional to pool weights.
   * - `steering_policy="least_outstanding_requests"`: Use pool weights to scale each
   *   pool's outstanding requests.
   * - `steering_policy="least_connections"`: Use pool weights to scale each pool's
   *   open connections.
   */
  random_steering?: LoadBalancerUpdateParams.RandomSteering;

  /**
   * Body param: A mapping of region codes to a list of pool IDs (ordered by their
   * failover priority) for the given region. Any regions not explicitly defined will
   * fall back to using default_pools.
   */
  region_pools?: unknown;

  /**
   * Body param: BETA Field Not General Access: A list of rules for this load
   * balancer to execute.
   */
  rules?: Array<LoadBalancerUpdateParams.Rule>;

  /**
   * Body param: Specifies the type of session affinity the load balancer should use
   * unless specified as `"none"` or "" (default). The supported types are:
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
   * Body param: Configures attributes for session affinity.
   */
  session_affinity_attributes?: LoadBalancerUpdateParams.SessionAffinityAttributes;

  /**
   * Body param: Time, in seconds, until a client's session expires after being
   * created. Once the expiry time has been reached, subsequent requests may get sent
   * to a different origin server. The accepted ranges per `session_affinity` policy
   * are:
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
   * Body param: Steering Policy for this load balancer.
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
   * Body param: Time to live (TTL) of the DNS entry for the IP address returned by
   * this load balancer. This only applies to gray-clouded (unproxied) load
   * balancers.
   */
  ttl?: number;
}

export namespace LoadBalancerUpdateParams {
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

export interface LoadBalancerListParams {
  zone_id: string;
}

export interface LoadBalancerDeleteParams {
  zone_id: string;
}

export interface LoadBalancerEditParams {
  /**
   * Path param:
   */
  zone_id: string;

  /**
   * Body param: Controls features that modify the routing of requests to pools and
   * origins in response to dynamic conditions, such as during the interval between
   * active health monitoring requests. For example, zero-downtime failover occurs
   * immediately when an origin becomes unavailable due to HTTP 521, 522, or 523
   * response codes. If there is another healthy origin in the same pool, the request
   * is retried once against this alternate origin.
   */
  adaptive_routing?: LoadBalancerEditParams.AdaptiveRouting;

  /**
   * Body param: A mapping of country codes to a list of pool IDs (ordered by their
   * failover priority) for the given country. Any country not explicitly defined
   * will fall back to using the corresponding region_pool mapping if it exists else
   * to default_pools.
   */
  country_pools?: unknown;

  /**
   * Body param: A list of pool IDs ordered by their failover priority. Pools defined
   * here are used by default, or when region_pools are not configured for a given
   * region.
   */
  default_pools?: Array<string>;

  /**
   * Body param: Object description.
   */
  description?: string;

  /**
   * Body param: Whether to enable (the default) this load balancer.
   */
  enabled?: boolean;

  /**
   * Body param: The pool ID to use when all other pools are detected as unhealthy.
   */
  fallback_pool?: unknown;

  /**
   * Body param: Controls location-based steering for non-proxied requests. See
   * `steering_policy` to learn how steering is affected.
   */
  location_strategy?: LoadBalancerEditParams.LocationStrategy;

  /**
   * Body param: The DNS hostname to associate with your Load Balancer. If this
   * hostname already exists as a DNS record in Cloudflare's DNS, the Load Balancer
   * will take precedence and the DNS record will not be used.
   */
  name?: string;

  /**
   * Body param: (Enterprise only): A mapping of Cloudflare PoP identifiers to a list
   * of pool IDs (ordered by their failover priority) for the PoP (datacenter). Any
   * PoPs not explicitly defined will fall back to using the corresponding
   * country_pool, then region_pool mapping if it exists else to default_pools.
   */
  pop_pools?: unknown;

  /**
   * Body param: Whether the hostname should be gray clouded (false) or orange
   * clouded (true).
   */
  proxied?: boolean;

  /**
   * Body param: Configures pool weights.
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
   * Body param: A mapping of region codes to a list of pool IDs (ordered by their
   * failover priority) for the given region. Any regions not explicitly defined will
   * fall back to using default_pools.
   */
  region_pools?: unknown;

  /**
   * Body param: BETA Field Not General Access: A list of rules for this load
   * balancer to execute.
   */
  rules?: Array<LoadBalancerEditParams.Rule>;

  /**
   * Body param: Specifies the type of session affinity the load balancer should use
   * unless specified as `"none"` or "" (default). The supported types are:
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
   * Body param: Configures attributes for session affinity.
   */
  session_affinity_attributes?: LoadBalancerEditParams.SessionAffinityAttributes;

  /**
   * Body param: Time, in seconds, until a client's session expires after being
   * created. Once the expiry time has been reached, subsequent requests may get sent
   * to a different origin server. The accepted ranges per `session_affinity` policy
   * are:
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
   * Body param: Steering Policy for this load balancer.
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
   * Body param: Time to live (TTL) of the DNS entry for the IP address returned by
   * this load balancer. This only applies to gray-clouded (unproxied) load
   * balancers.
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

export interface LoadBalancerGetParams {
  zone_id: string;
}

export namespace LoadBalancers {
  export import LoadBalancer = LoadBalancersAPI.LoadBalancer;
  export import LoadBalancerDeleteResponse = LoadBalancersAPI.LoadBalancerDeleteResponse;
  export import LoadBalancersSinglePage = LoadBalancersAPI.LoadBalancersSinglePage;
  export import LoadBalancerCreateParams = LoadBalancersAPI.LoadBalancerCreateParams;
  export import LoadBalancerUpdateParams = LoadBalancersAPI.LoadBalancerUpdateParams;
  export import LoadBalancerListParams = LoadBalancersAPI.LoadBalancerListParams;
  export import LoadBalancerDeleteParams = LoadBalancersAPI.LoadBalancerDeleteParams;
  export import LoadBalancerEditParams = LoadBalancersAPI.LoadBalancerEditParams;
  export import LoadBalancerGetParams = LoadBalancersAPI.LoadBalancerGetParams;
  export import Monitors = MonitorsAPI.Monitors;
  export import MonitorDeleteResponse = MonitorsAPI.MonitorDeleteResponse;
  export import MonitorCreateParams = MonitorsAPI.MonitorCreateParams;
  export import MonitorUpdateParams = MonitorsAPI.MonitorUpdateParams;
  export import MonitorListParams = MonitorsAPI.MonitorListParams;
  export import MonitorDeleteParams = MonitorsAPI.MonitorDeleteParams;
  export import MonitorEditParams = MonitorsAPI.MonitorEditParams;
  export import MonitorGetParams = MonitorsAPI.MonitorGetParams;
  export import Pools = PoolsAPI.Pools;
  export import PoolDeleteResponse = PoolsAPI.PoolDeleteResponse;
  export import PoolCreateParams = PoolsAPI.PoolCreateParams;
  export import PoolUpdateParams = PoolsAPI.PoolUpdateParams;
  export import PoolListParams = PoolsAPI.PoolListParams;
  export import PoolDeleteParams = PoolsAPI.PoolDeleteParams;
  export import PoolEditParams = PoolsAPI.PoolEditParams;
  export import PoolGetParams = PoolsAPI.PoolGetParams;
  export import Previews = PreviewsAPI.Previews;
  export import PreviewGetParams = PreviewsAPI.PreviewGetParams;
  export import Regions = RegionsAPI.Regions;
  export import RegionListResponse = RegionsAPI.RegionListResponse;
  export import RegionGetResponse = RegionsAPI.RegionGetResponse;
  export import RegionListParams = RegionsAPI.RegionListParams;
  export import RegionGetParams = RegionsAPI.RegionGetParams;
  export import Searches = SearchesAPI.Searches;
  export import SearchGetResponse = SearchesAPI.SearchGetResponse;
  export import SearchGetParams = SearchesAPI.SearchGetParams;
}
