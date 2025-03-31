// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, SinglePage } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Routes extends APIResource {
  /**
   * Creates a route that maps a URL pattern to a Worker.
   */
  create(params: RouteCreateParams, options?: RequestOptions): APIPromise<RouteCreateResponse> {
    const { zone_id, ...body } = params;
    return this._client.post(path`/zones/${zone_id}/workers/routes`, { body, ...options });
  }

  /**
   * Updates the URL pattern or Worker associated with a route.
   */
  update(
    routeID: string,
    params: RouteUpdateParams,
    options?: RequestOptions,
  ): APIPromise<RouteUpdateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(path`/zones/${zone_id}/workers/routes/${routeID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: RouteUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns routes for a zone.
   */
  list(
    params: RouteListParams,
    options?: RequestOptions,
  ): PagePromise<RouteListResponsesSinglePage, RouteListResponse> {
    const { zone_id } = params;
    return this._client.getAPIList(
      path`/zones/${zone_id}/workers/routes`,
      SinglePage<RouteListResponse>,
      options,
    );
  }

  /**
   * Deletes a route.
   */
  delete(
    routeID: string,
    params: RouteDeleteParams,
    options?: RequestOptions,
  ): APIPromise<RouteDeleteResponse> {
    const { zone_id } = params;
    return this._client.delete(path`/zones/${zone_id}/workers/routes/${routeID}`, options);
  }

  /**
   * Returns information about a route, including URL pattern and Worker.
   */
  get(routeID: string, params: RouteGetParams, options?: RequestOptions): APIPromise<RouteGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(path`/zones/${zone_id}/workers/routes/${routeID}`, options) as APIPromise<{
        result: RouteGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type RouteListResponsesSinglePage = SinglePage<RouteListResponse>;

export interface RouteCreateResponse {
  errors: Array<unknown>;

  messages: Array<unknown>;

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
  errors: Array<unknown>;

  messages: Array<unknown>;

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

export declare namespace Routes {
  export {
    type RouteCreateResponse as RouteCreateResponse,
    type RouteUpdateResponse as RouteUpdateResponse,
    type RouteListResponse as RouteListResponse,
    type RouteDeleteResponse as RouteDeleteResponse,
    type RouteGetResponse as RouteGetResponse,
    type RouteListResponsesSinglePage as RouteListResponsesSinglePage,
    type RouteCreateParams as RouteCreateParams,
    type RouteUpdateParams as RouteUpdateParams,
    type RouteListParams as RouteListParams,
    type RouteDeleteParams as RouteDeleteParams,
    type RouteGetParams as RouteGetParams,
  };
}
