// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DetectionsAPI from './detections';
import {
  BaseDetections,
  DetectionCreateParams,
  DetectionCreateResponse,
  DetectionDeleteParams,
  DetectionDeleteResponse,
  DetectionGetParams,
  DetectionGetResponse,
  DetectionListParams,
  DetectionListResponse,
  DetectionListResponsesSinglePage,
  DetectionUpdateParams,
  DetectionUpdateResponse,
  Detections,
} from './detections';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseLeakedCredentialChecks extends APIResource {
  static override readonly _key: readonly ['leakedCredentialChecks'] = Object.freeze([
    'leakedCredentialChecks',
  ] as const);

  /**
   * Updates the current status of Leaked Credential Checks.
   *
   * @example
   * ```ts
   * const leakedCredentialCheck =
   *   await client.leakedCredentialChecks.create({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  create(
    params: LeakedCredentialCheckCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LeakedCredentialCheckCreateResponse> {
    const { zone_id = this._client.zoneID, ...body } = params ?? {};
    return (
      this._client.post(path`/zones/${zone_id}/leaked-credential-checks`, {
        body,
        ...options,
      }) as APIPromise<{ result: LeakedCredentialCheckCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the current status of Leaked Credential Checks.
   *
   * @example
   * ```ts
   * const leakedCredentialCheck =
   *   await client.leakedCredentialChecks.get({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  get(
    params: LeakedCredentialCheckGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LeakedCredentialCheckGetResponse> {
    const { zone_id = this._client.zoneID } = params ?? {};
    return (
      this._client.get(path`/zones/${zone_id}/leaked-credential-checks`, options) as APIPromise<{
        result: LeakedCredentialCheckGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class LeakedCredentialChecks extends BaseLeakedCredentialChecks {
  detections: DetectionsAPI.Detections = new DetectionsAPI.Detections(this._client);
}

/**
 * Defines the overall status for Leaked Credential Checks.
 */
export interface LeakedCredentialCheckCreateResponse {
  /**
   * Determines whether or not Leaked Credential Checks are enabled.
   */
  enabled?: boolean;
}

/**
 * Defines the overall status for Leaked Credential Checks.
 */
export interface LeakedCredentialCheckGetResponse {
  /**
   * Determines whether or not Leaked Credential Checks are enabled.
   */
  enabled?: boolean;
}

export interface LeakedCredentialCheckCreateParams {
  /**
   * Path param: Defines an identifier.
   */
  zone_id?: string;

  /**
   * Body param: Determines whether or not Leaked Credential Checks are enabled.
   */
  enabled?: boolean;
}

export interface LeakedCredentialCheckGetParams {
  /**
   * Defines an identifier.
   */
  zone_id?: string;
}

LeakedCredentialChecks.Detections = Detections;
LeakedCredentialChecks.BaseDetections = BaseDetections;

export declare namespace LeakedCredentialChecks {
  export {
    type LeakedCredentialCheckCreateResponse as LeakedCredentialCheckCreateResponse,
    type LeakedCredentialCheckGetResponse as LeakedCredentialCheckGetResponse,
    type LeakedCredentialCheckCreateParams as LeakedCredentialCheckCreateParams,
    type LeakedCredentialCheckGetParams as LeakedCredentialCheckGetParams,
  };

  export {
    Detections as Detections,
    BaseDetections as BaseDetections,
    type DetectionCreateResponse as DetectionCreateResponse,
    type DetectionUpdateResponse as DetectionUpdateResponse,
    type DetectionListResponse as DetectionListResponse,
    type DetectionDeleteResponse as DetectionDeleteResponse,
    type DetectionGetResponse as DetectionGetResponse,
    type DetectionListResponsesSinglePage as DetectionListResponsesSinglePage,
    type DetectionCreateParams as DetectionCreateParams,
    type DetectionUpdateParams as DetectionUpdateParams,
    type DetectionListParams as DetectionListParams,
    type DetectionDeleteParams as DetectionDeleteParams,
    type DetectionGetParams as DetectionGetParams,
  };
}
