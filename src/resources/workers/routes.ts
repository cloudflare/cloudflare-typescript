// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RoutesAPI from 'cloudflare/resources/workers/routes';
import { SinglePage } from 'cloudflare/pagination';

export class Routes extends APIResource {
  /**
   * Creates a route that maps a URL pattern to a Worker.
   */
  create(params: RouteCreateParams, options?: Core.RequestOptions): Core.APIPromise<RouteCreateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(`/zones/${zone_id}/workers/routes`, { body, ...options }) as Core.APIPromise<{
        result: RouteCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates the URL pattern or Worker associated with a route.
   */
  update(
    routeId: string,
    params: RouteUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WorkersRoute> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(`/zones/${zone_id}/workers/routes/${routeId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: WorkersRoute }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns routes for a zone.
   */
  list(
    params: RouteListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<WorkersRoutesSinglePage, WorkersRoute> {
    const { zone_id } = params;
    return this._client.getAPIList(`/zones/${zone_id}/workers/routes`, WorkersRoutesSinglePage, options);
  }

  /**
   * Deletes a route.
   */
  delete(
    routeId: string,
    params: RouteDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteDeleteResponse> {
    const { zone_id, body } = params;
    return (
      this._client.delete(`/zones/${zone_id}/workers/routes/${routeId}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: RouteDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns information about a route, including URL pattern and Worker.
   */
  get(routeId: string, params: RouteGetParams, options?: Core.RequestOptions): Core.APIPromise<WorkersRoute> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/workers/routes/${routeId}`, options) as Core.APIPromise<{
        result: WorkersRoute;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class WorkersRoutesSinglePage extends SinglePage<WorkersRoute> {}

export interface WorkersRoute {
  /**
   * Identifier
   */
  id: string;

  pattern: string;

  /**
   * Name of the script, used in URLs and route configuration.
   */
  script: string;
}

export type RouteCreateResponse = unknown | string;

export type RouteDeleteResponse = unknown | string;

export interface RouteCreateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param:
   */
  pattern: string;

  /**
   * Body param: Name of the script, used in URLs and route configuration.
   */
  script?: string;
}

export interface RouteUpdateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param:
   */
  pattern: string;

  /**
   * Body param: Name of the script, used in URLs and route configuration.
   */
  script?: string;
}

export interface RouteListParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface RouteDeleteParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface RouteGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Routes {
  export import WorkersRoute = RoutesAPI.WorkersRoute;
  export import RouteCreateResponse = RoutesAPI.RouteCreateResponse;
  export import RouteDeleteResponse = RoutesAPI.RouteDeleteResponse;
  export import WorkersRoutesSinglePage = RoutesAPI.WorkersRoutesSinglePage;
  export import RouteCreateParams = RoutesAPI.RouteCreateParams;
  export import RouteUpdateParams = RoutesAPI.RouteUpdateParams;
  export import RouteListParams = RoutesAPI.RouteListParams;
  export import RouteDeleteParams = RoutesAPI.RouteDeleteParams;
  export import RouteGetParams = RoutesAPI.RouteGetParams;
}
