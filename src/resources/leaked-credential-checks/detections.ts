// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { SinglePage } from '../../pagination';

export class Detections extends APIResource {
  /**
   * Create user-defined detection pattern for Leaked Credential Checks
   */
  create(
    params: DetectionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DetectionCreateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(`/zones/${zone_id}/leaked-credential-checks/detections`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DetectionCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update user-defined detection pattern for Leaked Credential Checks
   */
  update(
    detectionId: string,
    params: DetectionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DetectionUpdateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(`/zones/${zone_id}/leaked-credential-checks/detections/${detectionId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DetectionUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List user-defined detection patterns for Leaked Credential Checks
   */
  list(
    params: DetectionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DetectionListResponsesSinglePage, DetectionListResponse> {
    const { zone_id } = params;
    return this._client.getAPIList(
      `/zones/${zone_id}/leaked-credential-checks/detections`,
      DetectionListResponsesSinglePage,
      options,
    );
  }

  /**
   * Remove user-defined detection pattern for Leaked Credential Checks
   */
  delete(
    detectionId: string,
    params: DetectionDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DetectionDeleteResponse> {
    const { zone_id } = params;
    return (
      this._client.delete(
        `/zones/${zone_id}/leaked-credential-checks/detections/${detectionId}`,
        options,
      ) as Core.APIPromise<{ result: DetectionDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class DetectionListResponsesSinglePage extends SinglePage<DetectionListResponse> {}

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

Detections.DetectionListResponsesSinglePage = DetectionListResponsesSinglePage;

export declare namespace Detections {
  export {
    type DetectionCreateResponse as DetectionCreateResponse,
    type DetectionUpdateResponse as DetectionUpdateResponse,
    type DetectionListResponse as DetectionListResponse,
    type DetectionDeleteResponse as DetectionDeleteResponse,
    DetectionListResponsesSinglePage as DetectionListResponsesSinglePage,
    type DetectionCreateParams as DetectionCreateParams,
    type DetectionUpdateParams as DetectionUpdateParams,
    type DetectionListParams as DetectionListParams,
    type DetectionDeleteParams as DetectionDeleteParams,
  };
}
