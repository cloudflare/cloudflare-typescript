// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RoutesAPI from 'cloudflare/resources/workers/routes';

export class Routes extends APIResource {
  /**
   * Creates a route that maps a URL pattern to a Worker.
   */
  create(
    zoneId: string,
    body: RouteCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteCreateResponse> {
    return (
      this._client.post(`/zones/${zoneId}/workers/routes`, { body, ...options }) as Core.APIPromise<{
        result: RouteCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns routes for a zone.
   */
  list(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<RouteListResponse> {
    return (
      this._client.get(`/zones/${zoneId}/workers/routes`, options) as Core.APIPromise<{
        result: RouteListResponse;
      }>
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
   * Updates the URL pattern or Worker associated with a route.
   */
  replace(
    zoneId: string,
    routeId: string,
    body: RouteReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteReplaceResponse> {
    return (
      this._client.put(`/zones/${zoneId}/workers/routes/${routeId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RouteReplaceResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type RouteCreateResponse = unknown | string;

export type RouteListResponse = Array<RouteListResponse.RouteListResponseItem>;

export namespace RouteListResponse {
  export interface RouteListResponseItem {
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

export interface RouteReplaceResponse {
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

export interface RouteCreateParams {
  pattern: string;

  /**
   * Name of the script, used in URLs and route configuration.
   */
  script?: string;
}

export interface RouteReplaceParams {
  pattern: string;

  /**
   * Name of the script, used in URLs and route configuration.
   */
  script?: string;
}

export namespace Routes {
  export import RouteCreateResponse = RoutesAPI.RouteCreateResponse;
  export import RouteListResponse = RoutesAPI.RouteListResponse;
  export import RouteDeleteResponse = RoutesAPI.RouteDeleteResponse;
  export import RouteGetResponse = RoutesAPI.RouteGetResponse;
  export import RouteReplaceResponse = RoutesAPI.RouteReplaceResponse;
  export import RouteCreateParams = RoutesAPI.RouteCreateParams;
  export import RouteReplaceParams = RoutesAPI.RouteReplaceParams;
}
