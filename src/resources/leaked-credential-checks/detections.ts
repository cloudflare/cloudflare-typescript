// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, SinglePage } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Detections extends APIResource {
  /**
   * Create user-defined detection pattern for Leaked Credential Checks.
   *
   * @example
   * ```ts
   * const detection =
   *   await client.leakedCredentialChecks.detections.create({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  create(params: DetectionCreateParams, options?: RequestOptions): APIPromise<DetectionCreateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(path`/zones/${zone_id}/leaked-credential-checks/detections`, {
        body,
        ...options,
      }) as APIPromise<{ result: DetectionCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update user-defined detection pattern for Leaked Credential Checks.
   *
   * @example
   * ```ts
   * const detection =
   *   await client.leakedCredentialChecks.detections.update(
   *     '18a14bafaa8eb1df04ce683ec18c765e',
   *     { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  update(
    detectionID: string,
    params: DetectionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<DetectionUpdateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(path`/zones/${zone_id}/leaked-credential-checks/detections/${detectionID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: DetectionUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List user-defined detection patterns for Leaked Credential Checks.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const detectionListResponse of client.leakedCredentialChecks.detections.list(
   *   { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: DetectionListParams,
    options?: RequestOptions,
  ): PagePromise<DetectionListResponsesSinglePage, DetectionListResponse> {
    const { zone_id } = params;
    return this._client.getAPIList(
      path`/zones/${zone_id}/leaked-credential-checks/detections`,
      SinglePage<DetectionListResponse>,
      options,
    );
  }

  /**
   * Remove user-defined detection pattern for Leaked Credential Checks.
   *
   * @example
   * ```ts
   * const detection =
   *   await client.leakedCredentialChecks.detections.delete(
   *     '18a14bafaa8eb1df04ce683ec18c765e',
   *     { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  delete(
    detectionID: string,
    params: DetectionDeleteParams,
    options?: RequestOptions,
  ): APIPromise<DetectionDeleteResponse> {
    const { zone_id } = params;
    return (
      this._client.delete(
        path`/zones/${zone_id}/leaked-credential-checks/detections/${detectionID}`,
        options,
      ) as APIPromise<{ result: DetectionDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type DetectionListResponsesSinglePage = SinglePage<DetectionListResponse>;

/**
 * Defines a custom set of username/password expressions to match Leaked Credential
 * Checks on.
 */
export interface DetectionCreateResponse {
  /**
   * Defines the unique ID for this custom detection.
   */
  id?: string;

  /**
   * Defines ehe ruleset expression to use in matching the password in a request.
   */
  password?: string;

  /**
   * Defines the ruleset expression to use in matching the username in a request.
   */
  username?: string;
}

/**
 * Defines a custom set of username/password expressions to match Leaked Credential
 * Checks on.
 */
export interface DetectionUpdateResponse {
  /**
   * Defines the unique ID for this custom detection.
   */
  id?: string;

  /**
   * Defines ehe ruleset expression to use in matching the password in a request.
   */
  password?: string;

  /**
   * Defines the ruleset expression to use in matching the username in a request.
   */
  username?: string;
}

/**
 * Defines a custom set of username/password expressions to match Leaked Credential
 * Checks on.
 */
export interface DetectionListResponse {
  /**
   * Defines the unique ID for this custom detection.
   */
  id?: string;

  /**
   * Defines ehe ruleset expression to use in matching the password in a request.
   */
  password?: string;

  /**
   * Defines the ruleset expression to use in matching the username in a request.
   */
  username?: string;
}

export type DetectionDeleteResponse = unknown;

export interface DetectionCreateParams {
  /**
   * Path param: Defines an identifier.
   */
  zone_id: string;

  /**
   * Body param: Defines ehe ruleset expression to use in matching the password in a
   * request.
   */
  password?: string;

  /**
   * Body param: Defines the ruleset expression to use in matching the username in a
   * request.
   */
  username?: string;
}

export interface DetectionUpdateParams {
  /**
   * Path param: Defines an identifier.
   */
  zone_id: string;

  /**
   * Body param: Defines ehe ruleset expression to use in matching the password in a
   * request.
   */
  password?: string;

  /**
   * Body param: Defines the ruleset expression to use in matching the username in a
   * request.
   */
  username?: string;
}

export interface DetectionListParams {
  /**
   * Defines an identifier.
   */
  zone_id: string;
}

export interface DetectionDeleteParams {
  /**
   * Defines an identifier.
   */
  zone_id: string;
}

export declare namespace Detections {
  export {
    type DetectionCreateResponse as DetectionCreateResponse,
    type DetectionUpdateResponse as DetectionUpdateResponse,
    type DetectionListResponse as DetectionListResponse,
    type DetectionDeleteResponse as DetectionDeleteResponse,
    type DetectionListResponsesSinglePage as DetectionListResponsesSinglePage,
    type DetectionCreateParams as DetectionCreateParams,
    type DetectionUpdateParams as DetectionUpdateParams,
    type DetectionListParams as DetectionListParams,
    type DetectionDeleteParams as DetectionDeleteParams,
  };
}
