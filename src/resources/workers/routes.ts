// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import { SinglePage } from '../../pagination';

export class Routes extends APIResource {
  /**
   * Creates a route that maps a URL pattern to a Worker.
   */
  create(params: RouteCreateParams, options?: Core.RequestOptions): Core.APIPromise<RouteCreateResponse> {
    const { zone_id, ...body } = params;
    return this._client.post(`/zones/${zone_id}/workers/routes`, { body, ...options });
  }

  /**
   * Updates the URL pattern or Worker associated with a route.
   */
  update(
    routeId: string,
    params: RouteUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteUpdateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(`/zones/${zone_id}/workers/routes/${routeId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RouteUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns routes for a zone.
   */
  list(
    params: RouteListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RouteListResponsesSinglePage, RouteListResponse> {
    const { zone_id } = params;
    return this._client.getAPIList(`/zones/${zone_id}/workers/routes`, RouteListResponsesSinglePage, options);
  }

  /**
   * Deletes a route.
   */
  delete(
    routeId: string,
    params: RouteDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteDeleteResponse> {
    const { zone_id } = params;
    return this._client.delete(`/zones/${zone_id}/workers/routes/${routeId}`, options);
  }

  /**
   * Returns information about a route, including URL pattern and Worker.
   */
  get(
    routeId: string,
    params: RouteGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/workers/routes/${routeId}`, options) as Core.APIPromise<{
        result: RouteGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class RouteListResponsesSinglePage extends SinglePage<RouteListResponse> {}

export interface RouteCreateResponse {
  errors: Array<Shared.ResponseInfo>;

  messages: Array<Shared.ResponseInfo>;

  /**
   * Whether the API call was successful
   */
  success: true;
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

export interface RouteListResponse {
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

export interface RouteDeleteResponse {
  errors: Array<Shared.ResponseInfo>;

  messages: Array<Shared.ResponseInfo>;

  /**
   * Whether the API call was successful
   */
  success: true;
}

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
   * Identifier
   */
  zone_id: string;
}

export interface RouteGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

Routes.RouteListResponsesSinglePage = RouteListResponsesSinglePage;

export declare namespace Routes {
  export {
    type RouteCreateResponse as RouteCreateResponse,
    type RouteUpdateResponse as RouteUpdateResponse,
    type RouteListResponse as RouteListResponse,
    type RouteDeleteResponse as RouteDeleteResponse,
    type RouteGetResponse as RouteGetResponse,
    RouteListResponsesSinglePage as RouteListResponsesSinglePage,
    type RouteCreateParams as RouteCreateParams,
    type RouteUpdateParams as RouteUpdateParams,
    type RouteListParams as RouteListParams,
    type RouteDeleteParams as RouteDeleteParams,
    type RouteGetParams as RouteGetParams,
  };
}
