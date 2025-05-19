// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, SinglePage } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Routes extends APIResource {
  /**
   * Creates a route that maps a URL pattern to a Worker.
   *
   * @example
   * ```ts
   * const route = await client.workers.routes.create({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   pattern: 'example.com/*',
   * });
   * ```
   */
  create(params: RouteCreateParams, options?: RequestOptions): APIPromise<RouteCreateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(path`/zones/${zone_id}/workers/routes`, { body, ...options }) as APIPromise<{
        result: RouteCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates the URL pattern or Worker associated with a route.
   *
   * @example
   * ```ts
   * const route = await client.workers.routes.update(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   {
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     pattern: 'example.com/*',
   *   },
   * );
   * ```
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
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const routeListResponse of client.workers.routes.list(
   *   { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
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
   *
   * @example
   * ```ts
   * const route = await client.workers.routes.delete(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  delete(
    routeID: string,
    params: RouteDeleteParams,
    options?: RequestOptions,
  ): APIPromise<RouteDeleteResponse> {
    const { zone_id } = params;
    return (
      this._client.delete(path`/zones/${zone_id}/workers/routes/${routeID}`, options) as APIPromise<{
        result: RouteDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns information about a route, including URL pattern and Worker.
   *
   * @example
   * ```ts
   * const route = await client.workers.routes.get(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
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
  /**
   * Identifier.
   */
  id: string;

  /**
   * Pattern to match incoming requests against.
   * [Learn more](https://developers.cloudflare.com/workers/configuration/routing/routes/#matching-behavior).
   */
  pattern: string;

  /**
   * Name of the script to run if the route matches.
   */
  script?: string;
}

export interface RouteUpdateResponse {
  /**
   * Identifier.
   */
  id: string;

  /**
   * Pattern to match incoming requests against.
   * [Learn more](https://developers.cloudflare.com/workers/configuration/routing/routes/#matching-behavior).
   */
  pattern: string;

  /**
   * Name of the script to run if the route matches.
   */
  script?: string;
}

export interface RouteListResponse {
  /**
   * Identifier.
   */
  id: string;

  /**
   * Pattern to match incoming requests against.
   * [Learn more](https://developers.cloudflare.com/workers/configuration/routing/routes/#matching-behavior).
   */
  pattern: string;

  /**
   * Name of the script to run if the route matches.
   */
  script?: string;
}

export interface RouteDeleteResponse {
  /**
   * Identifier.
   */
  id?: string;
}

export interface RouteGetResponse {
  /**
   * Identifier.
   */
  id: string;

  /**
   * Pattern to match incoming requests against.
   * [Learn more](https://developers.cloudflare.com/workers/configuration/routing/routes/#matching-behavior).
   */
  pattern: string;

  /**
   * Name of the script to run if the route matches.
   */
  script?: string;
}

export interface RouteCreateParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param: Pattern to match incoming requests against.
   * [Learn more](https://developers.cloudflare.com/workers/configuration/routing/routes/#matching-behavior).
   */
  pattern: string;

  /**
   * Body param: Name of the script to run if the route matches.
   */
  script?: string;
}

export interface RouteUpdateParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param: Pattern to match incoming requests against.
   * [Learn more](https://developers.cloudflare.com/workers/configuration/routing/routes/#matching-behavior).
   */
  pattern: string;

  /**
   * Body param: Name of the script to run if the route matches.
   */
  script?: string;
}

export interface RouteListParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

export interface RouteDeleteParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

export interface RouteGetParams {
  /**
   * Identifier.
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
