// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { PagePromise, SinglePage } from '../../pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Detections extends APIResource {
  /**
   * Create user-defined detection pattern for Leaked Credential Checks
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
   * Update user-defined detection pattern for Leaked Credential Checks
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
   * List user-defined detection patterns for Leaked Credential Checks
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
   * Remove user-defined detection pattern for Leaked Credential Checks
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
 * A custom set of username/password expressions to match Leaked Credential Checks
 * on
 */
export interface DetectionCreateResponse {
  /**
   * The unique ID for this custom detection
   */
  id?: unknown;

  /**
   * The ruleset expression to use in matching the password in a request
   */
  password?: string;

  /**
   * The ruleset expression to use in matching the username in a request
   */
  username?: string;
}

/**
 * A custom set of username/password expressions to match Leaked Credential Checks
 * on
 */
export interface DetectionUpdateResponse {
  /**
   * The unique ID for this custom detection
   */
  id?: unknown;

  /**
   * The ruleset expression to use in matching the password in a request
   */
  password?: string;

  /**
   * The ruleset expression to use in matching the username in a request
   */
  username?: string;
}

/**
 * A custom set of username/password expressions to match Leaked Credential Checks
 * on
 */
export interface DetectionListResponse {
  /**
   * The unique ID for this custom detection
   */
  id?: unknown;

  /**
   * The ruleset expression to use in matching the password in a request
   */
  password?: string;

  /**
   * The ruleset expression to use in matching the username in a request
   */
  username?: string;
}

export type DetectionDeleteResponse = unknown;

export interface DetectionCreateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: The unique ID for this custom detection
   */
  id?: unknown;

  /**
   * Body param: The ruleset expression to use in matching the password in a request
   */
  password?: string;

  /**
   * Body param: The ruleset expression to use in matching the username in a request
   */
  username?: string;
}

export interface DetectionUpdateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: The unique ID for this custom detection
   */
  id?: unknown;

  /**
   * Body param: The ruleset expression to use in matching the password in a request
   */
  password?: string;

  /**
   * Body param: The ruleset expression to use in matching the username in a request
   */
  username?: string;
}

export interface DetectionListParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface DetectionDeleteParams {
  /**
   * Identifier
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
