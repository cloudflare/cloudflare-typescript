// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { SinglePage } from '../../pagination';

export class Detections extends APIResource {
  /**
   * Create user-defined detection pattern for Leaked Credential Checks.
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
   * Update user-defined detection pattern for Leaked Credential Checks.
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
   * List user-defined detection patterns for Leaked Credential Checks.
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
   * Remove user-defined detection pattern for Leaked Credential Checks.
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
