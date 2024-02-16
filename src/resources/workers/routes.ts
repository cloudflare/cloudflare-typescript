// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RoutesAPI from 'cloudflare/resources/workers/routes';

export class Routes extends APIResource {
  /**
   * Updates the URL pattern or Worker associated with a route.
   */
  update(
    zoneId: string,
    routeId: string,
    body: RouteUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteUpdateResponse> {
    return (
      this._client.put(`/zones/${zoneId}/workers/routes/${routeId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RouteUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes a route.
   */
  delete(
    zoneId: string,
    routeId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteDeleteResponse> {
    return (
      this._client.delete(`/zones/${zoneId}/workers/routes/${routeId}`, options) as Core.APIPromise<{
        result: RouteDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns information about a route, including URL pattern and Worker.
   */
  get(zoneId: string, routeId: string, options?: Core.RequestOptions): Core.APIPromise<RouteGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/workers/routes/${routeId}`, options) as Core.APIPromise<{
        result: RouteGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Creates a route that maps a URL pattern to a Worker.
   */
  workerRoutesCreateRoute(
    zoneId: string,
    body: RouteWorkerRoutesCreateRouteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteWorkerRoutesCreateRouteResponse> {
    return (
      this._client.post(`/zones/${zoneId}/workers/routes`, { body, ...options }) as Core.APIPromise<{
        result: RouteWorkerRoutesCreateRouteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns routes for a zone.
   */
  workerRoutesListRoutes(
    zoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteWorkerRoutesListRoutesResponse> {
    return (
      this._client.get(`/zones/${zoneId}/workers/routes`, options) as Core.APIPromise<{
        result: RouteWorkerRoutesListRoutesResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface RouteUpdateResponse {
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

export type RouteDeleteResponse = unknown | string;

export interface RouteGetResponse {
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

export type RouteWorkerRoutesCreateRouteResponse = unknown | string;

export type RouteWorkerRoutesListRoutesResponse =
  Array<RouteWorkerRoutesListRoutesResponse.RouteWorkerRoutesListRoutesResponseItem>;

export namespace RouteWorkerRoutesListRoutesResponse {
  export interface RouteWorkerRoutesListRoutesResponseItem {
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
}

export interface RouteUpdateParams {
  pattern: string;

  /**
   * Name of the script, used in URLs and route configuration.
   */
  script?: string;
}

export interface RouteWorkerRoutesCreateRouteParams {
  pattern: string;

  /**
   * Name of the script, used in URLs and route configuration.
   */
  script?: string;
}

export namespace Routes {
  export import RouteUpdateResponse = RoutesAPI.RouteUpdateResponse;
  export import RouteDeleteResponse = RoutesAPI.RouteDeleteResponse;
  export import RouteGetResponse = RoutesAPI.RouteGetResponse;
  export import RouteWorkerRoutesCreateRouteResponse = RoutesAPI.RouteWorkerRoutesCreateRouteResponse;
  export import RouteWorkerRoutesListRoutesResponse = RoutesAPI.RouteWorkerRoutesListRoutesResponse;
  export import RouteUpdateParams = RoutesAPI.RouteUpdateParams;
  export import RouteWorkerRoutesCreateRouteParams = RoutesAPI.RouteWorkerRoutesCreateRouteParams;
}
