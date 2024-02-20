// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RoutesAPI from 'cloudflare/resources/magics/routes';

export class Routes extends APIResource {
  /**
   * Creates a new Magic static route. Use `?validate_only=true` as an optional query
   * parameter to run validation only without persisting changes.
   */
  create(
    accountIdentifier: string,
    body: RouteCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteCreateResponse> {
    return (
      this._client.post(`/accounts/${accountIdentifier}/magic/routes`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RouteCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a specific Magic static route. Use `?validate_only=true` as an optional
   * query parameter to run validation only without persisting changes.
   */
  update(
    accountIdentifier: string,
    routeIdentifier: string,
    body: RouteUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteUpdateResponse> {
    return (
      this._client.put(`/accounts/${accountIdentifier}/magic/routes/${routeIdentifier}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RouteUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Disable and remove a specific Magic static route.
   */
  delete(
    accountIdentifier: string,
    routeIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteDeleteResponse> {
    return (
      this._client.delete(
        `/accounts/${accountIdentifier}/magic/routes/${routeIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: RouteDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a specific Magic static route.
   */
  get(
    accountIdentifier: string,
    routeIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteGetResponse> {
    return (
      this._client.get(
        `/accounts/${accountIdentifier}/magic/routes/${routeIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: RouteGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all Magic static routes.
   */
  magicStaticRoutesListRoutes(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteMagicStaticRoutesListRoutesResponse> {
    return (
      this._client.get(`/accounts/${accountIdentifier}/magic/routes`, options) as Core.APIPromise<{
        result: RouteMagicStaticRoutesListRoutesResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface RouteCreateResponse {
  routes?: Array<RouteCreateResponse.Route>;
}

export namespace RouteCreateResponse {
  export interface Route {
    /**
     * The next-hop IP Address for the static route.
     */
    nexthop: string;

    /**
     * IP Prefix in Classless Inter-Domain Routing format.
     */
    prefix: string;

    /**
     * Priority of the static route.
     */
    priority: number;

    /**
     * Identifier
     */
    id?: string;

    /**
     * When the route was created.
     */
    created_on?: string;

    /**
     * An optional human provided description of the static route.
     */
    description?: string;

    /**
     * When the route was last modified.
     */
    modified_on?: string;

    /**
     * Used only for ECMP routes.
     */
    scope?: Route.Scope;

    /**
     * Optional weight of the ECMP scope - if provided.
     */
    weight?: number;
  }

  export namespace Route {
    /**
     * Used only for ECMP routes.
     */
    export interface Scope {
      /**
       * List of colo names for the ECMP scope.
       */
      colo_names?: Array<string>;

      /**
       * List of colo regions for the ECMP scope.
       */
      colo_regions?: Array<string>;
    }
  }
}

export interface RouteUpdateResponse {
  modified?: boolean;

  modified_route?: unknown;
}

export interface RouteDeleteResponse {
  deleted?: boolean;

  deleted_route?: unknown;
}

export interface RouteGetResponse {
  route?: unknown;
}

export interface RouteMagicStaticRoutesListRoutesResponse {
  routes?: Array<RouteMagicStaticRoutesListRoutesResponse.Route>;
}

export namespace RouteMagicStaticRoutesListRoutesResponse {
  export interface Route {
    /**
     * The next-hop IP Address for the static route.
     */
    nexthop: string;

    /**
     * IP Prefix in Classless Inter-Domain Routing format.
     */
    prefix: string;

    /**
     * Priority of the static route.
     */
    priority: number;

    /**
     * Identifier
     */
    id?: string;

    /**
     * When the route was created.
     */
    created_on?: string;

    /**
     * An optional human provided description of the static route.
     */
    description?: string;

    /**
     * When the route was last modified.
     */
    modified_on?: string;

    /**
     * Used only for ECMP routes.
     */
    scope?: Route.Scope;

    /**
     * Optional weight of the ECMP scope - if provided.
     */
    weight?: number;
  }

  export namespace Route {
    /**
     * Used only for ECMP routes.
     */
    export interface Scope {
      /**
       * List of colo names for the ECMP scope.
       */
      colo_names?: Array<string>;

      /**
       * List of colo regions for the ECMP scope.
       */
      colo_regions?: Array<string>;
    }
  }
}

export type RouteCreateParams = unknown;

export interface RouteUpdateParams {
  /**
   * The next-hop IP Address for the static route.
   */
  nexthop: string;

  /**
   * IP Prefix in Classless Inter-Domain Routing format.
   */
  prefix: string;

  /**
   * Priority of the static route.
   */
  priority: number;

  /**
   * An optional human provided description of the static route.
   */
  description?: string;

  /**
   * Used only for ECMP routes.
   */
  scope?: RouteUpdateParams.Scope;

  /**
   * Optional weight of the ECMP scope - if provided.
   */
  weight?: number;
}

export namespace RouteUpdateParams {
  /**
   * Used only for ECMP routes.
   */
  export interface Scope {
    /**
     * List of colo names for the ECMP scope.
     */
    colo_names?: Array<string>;

    /**
     * List of colo regions for the ECMP scope.
     */
    colo_regions?: Array<string>;
  }
}

export namespace Routes {
  export import RouteCreateResponse = RoutesAPI.RouteCreateResponse;
  export import RouteUpdateResponse = RoutesAPI.RouteUpdateResponse;
  export import RouteDeleteResponse = RoutesAPI.RouteDeleteResponse;
  export import RouteGetResponse = RoutesAPI.RouteGetResponse;
  export import RouteMagicStaticRoutesListRoutesResponse = RoutesAPI.RouteMagicStaticRoutesListRoutesResponse;
  export import RouteCreateParams = RoutesAPI.RouteCreateParams;
  export import RouteUpdateParams = RoutesAPI.RouteUpdateParams;
}
