// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseFallbackOrigin extends APIResource {
  static override readonly _key: readonly ['customHostnames', 'fallbackOrigin'] = Object.freeze([
    'customHostnames',
    'fallbackOrigin',
  ] as const);

  /**
   * Updates the fallback origin configuration for custom hostnames on a zone. Sets
   * the default origin server for custom hostname traffic.
   *
   * @example
   * ```ts
   * const fallbackOrigin =
   *   await client.customHostnames.fallbackOrigin.update({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     origin: 'fallback.example.com',
   *   });
   * ```
   */
  update(
    params: FallbackOriginUpdateParams,
    options?: RequestOptions,
  ): APIPromise<FallbackOriginUpdateResponse> {
    const { zone_id = this._client.zoneID, ...body } = params;
    return (
      this._client.put(path`/zones/${zone_id}/custom_hostnames/fallback_origin`, {
        body,
        ...options,
      }) as APIPromise<{ result: FallbackOriginUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Removes the fallback origin configuration for custom hostnames on a zone. Custom
   * hostnames without specific origins will no longer have a fallback.
   *
   * @example
   * ```ts
   * const fallbackOrigin =
   *   await client.customHostnames.fallbackOrigin.delete({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  delete(
    params: FallbackOriginDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FallbackOriginDeleteResponse> {
    const { zone_id = this._client.zoneID } = params ?? {};
    return (
      this._client.delete(path`/zones/${zone_id}/custom_hostnames/fallback_origin`, options) as APIPromise<{
        result: FallbackOriginDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the current fallback origin configuration for custom hostnames on a
   * zone. The fallback origin handles traffic when specific custom hostname origins
   * are unavailable.
   *
   * @example
   * ```ts
   * const fallbackOrigin =
   *   await client.customHostnames.fallbackOrigin.get({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  get(
    params: FallbackOriginGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FallbackOriginGetResponse> {
    const { zone_id = this._client.zoneID } = params ?? {};
    return (
      this._client.get(path`/zones/${zone_id}/custom_hostnames/fallback_origin`, options) as APIPromise<{
        result: FallbackOriginGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class FallbackOrigin extends BaseFallbackOrigin {}

export interface FallbackOriginUpdateResponse {
  /**
   * This is the time the fallback origin was created.
   */
  created_at?: string;

  /**
   * These are errors that were encountered while trying to activate a fallback
   * origin.
   */
  errors?: Array<string>;

  /**
   * Your origin hostname that requests to your custom hostnames will be sent to.
   */
  origin?: string;

  /**
   * Status of the fallback origin's activation.
   */
  status?:
    | 'initializing'
    | 'pending_deployment'
    | 'pending_deletion'
    | 'active'
    | 'deployment_timed_out'
    | 'deletion_timed_out';

  /**
   * This is the time the fallback origin was updated.
   */
  updated_at?: string;
}

export interface FallbackOriginDeleteResponse {
  /**
   * This is the time the fallback origin was created.
   */
  created_at?: string;

  /**
   * These are errors that were encountered while trying to activate a fallback
   * origin.
   */
  errors?: Array<string>;

  /**
   * Your origin hostname that requests to your custom hostnames will be sent to.
   */
  origin?: string;

  /**
   * Status of the fallback origin's activation.
   */
  status?:
    | 'initializing'
    | 'pending_deployment'
    | 'pending_deletion'
    | 'active'
    | 'deployment_timed_out'
    | 'deletion_timed_out';

  /**
   * This is the time the fallback origin was updated.
   */
  updated_at?: string;
}

export interface FallbackOriginGetResponse {
  /**
   * This is the time the fallback origin was created.
   */
  created_at?: string;

  /**
   * These are errors that were encountered while trying to activate a fallback
   * origin.
   */
  errors?: Array<string>;

  /**
   * Your origin hostname that requests to your custom hostnames will be sent to.
   */
  origin?: string;

  /**
   * Status of the fallback origin's activation.
   */
  status?:
    | 'initializing'
    | 'pending_deployment'
    | 'pending_deletion'
    | 'active'
    | 'deployment_timed_out'
    | 'deletion_timed_out';

  /**
   * This is the time the fallback origin was updated.
   */
  updated_at?: string;
}

export interface FallbackOriginUpdateParams {
  /**
   * Path param: Identifier.
   */
  zone_id?: string;

  /**
   * Body param: Your origin hostname that requests to your custom hostnames will be
   * sent to.
   */
  origin: string;
}

export interface FallbackOriginDeleteParams {
  /**
   * Identifier.
   */
  zone_id?: string;
}

export interface FallbackOriginGetParams {
  /**
   * Identifier.
   */
  zone_id?: string;
}

export declare namespace FallbackOrigin {
  export {
    type FallbackOriginUpdateResponse as FallbackOriginUpdateResponse,
    type FallbackOriginDeleteResponse as FallbackOriginDeleteResponse,
    type FallbackOriginGetResponse as FallbackOriginGetResponse,
    type FallbackOriginUpdateParams as FallbackOriginUpdateParams,
    type FallbackOriginDeleteParams as FallbackOriginDeleteParams,
    type FallbackOriginGetParams as FallbackOriginGetParams,
  };
}
