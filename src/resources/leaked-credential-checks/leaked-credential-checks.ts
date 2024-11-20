// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as DetectionsAPI from './detections';
import {
  DetectionCreateParams,
  DetectionCreateResponse,
  DetectionDeleteParams,
  DetectionDeleteResponse,
  DetectionListParams,
  DetectionListResponse,
  DetectionListResponsesSinglePage,
  DetectionUpdateParams,
  DetectionUpdateResponse,
  Detections,
} from './detections';

export class LeakedCredentialChecks extends APIResource {
  detections: DetectionsAPI.Detections = new DetectionsAPI.Detections(this._client);

  /**
   * Updates the current status of Leaked Credential Checks
   */
  create(
    params: LeakedCredentialCheckCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LeakedCredentialCheckCreateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(`/zones/${zone_id}/leaked-credential-checks`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: LeakedCredentialCheckCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the current status of Leaked Credential Checks
   */
  list(
    params: LeakedCredentialCheckListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LeakedCredentialCheckListResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/leaked-credential-checks`, options) as Core.APIPromise<{
        result: LeakedCredentialCheckListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * The overall status for Leaked Credential Checks
 */
export interface LeakedCredentialCheckCreateResponse {
  /**
   * Whether or not Leaked Credential Checks are enabled
   */
  enabled?: boolean;
}

/**
 * The overall status for Leaked Credential Checks
 */
export interface LeakedCredentialCheckListResponse {
  /**
   * Whether or not Leaked Credential Checks are enabled
   */
  enabled?: boolean;
}

export interface LeakedCredentialCheckCreateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Whether or not Leaked Credential Checks are enabled
   */
  enabled?: boolean;
}

export interface LeakedCredentialCheckListParams {
  /**
   * Identifier
   */
  zone_id: string;
}

LeakedCredentialChecks.Detections = Detections;
LeakedCredentialChecks.DetectionListResponsesSinglePage = DetectionListResponsesSinglePage;

export declare namespace LeakedCredentialChecks {
  export {
    type LeakedCredentialCheckCreateResponse as LeakedCredentialCheckCreateResponse,
    type LeakedCredentialCheckListResponse as LeakedCredentialCheckListResponse,
    type LeakedCredentialCheckCreateParams as LeakedCredentialCheckCreateParams,
    type LeakedCredentialCheckListParams as LeakedCredentialCheckListParams,
  };

  export {
    Detections as Detections,
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
