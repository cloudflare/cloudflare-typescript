// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as RoutesAPI from './routes';

export class Routes extends APIResource {
  /**
   * Creates a new Magic static route. Use `?validate_only=true` as an optional query
   * parameter to run validation only without persisting changes.
   */
  create(params: RouteCreateParams, options?: Core.RequestOptions): Core.APIPromise<RouteCreateResponse> {
    const { account_id, body } = params;
    return (
      this._client.post(`/accounts/${account_id}/magic/routes`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: RouteCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all Magic static routes.
   */
  list(params: RouteListParams, options?: Core.RequestOptions): Core.APIPromise<RouteListResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/magic/routes`, options) as Core.APIPromise<{
        result: RouteListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete multiple Magic static routes.
   */
  empty(params: RouteEmptyParams, options?: Core.RequestOptions): Core.APIPromise<RouteEmptyResponse> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/magic/routes`, options) as Core.APIPromise<{
        result: RouteEmptyResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

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
    scope?: RoutesAPI.Scope;

    /**
     * Optional weight of the ECMP scope - if provided.
     */
    weight?: number;
  }
}

export interface RouteListResponse {
  routes?: Array<RouteListResponse.Route>;
}

export namespace RouteListResponse {
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
    scope?: RoutesAPI.Scope;

    /**
     * Optional weight of the ECMP scope - if provided.
     */
    weight?: number;
  }
}

export interface RouteEmptyResponse {
  deleted?: boolean;

  deleted_routes?: unknown;
}

export interface RouteCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface RouteListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface RouteEmptyParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Routes {
  export import Scope = RoutesAPI.Scope;
  export import RouteCreateResponse = RoutesAPI.RouteCreateResponse;
  export import RouteListResponse = RoutesAPI.RouteListResponse;
  export import RouteEmptyResponse = RoutesAPI.RouteEmptyResponse;
  export import RouteCreateParams = RoutesAPI.RouteCreateParams;
  export import RouteListParams = RoutesAPI.RouteListParams;
  export import RouteEmptyParams = RoutesAPI.RouteEmptyParams;
}
