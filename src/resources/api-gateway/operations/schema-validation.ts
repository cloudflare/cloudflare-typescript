// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import * as SchemaValidationAPI from './schema-validation';

export class SchemaValidation extends APIResource {
  /**
   * Updates operation-level schema validation settings on the zone
   */
  update(operationId: string, params: SchemaValidationUpdateParams, options?: Core.RequestOptions): Core.APIPromise<SchemaValidationUpdateResponse> {
    const { zone_id, ...body } = params;
    return this._client.put(`/zones/${zone_id}/api_gateway/operations/${operationId}/schema_validation`, { body, ...options });
  }

  /**
   * Updates multiple operation-level schema validation settings on the zone
   */
  edit(params: SchemaValidationEditParams, options?: Core.RequestOptions): Core.APIPromise<SettingsMultipleRequest> {
    const { zone_id, settings_multiple_request } = params;
    return (this._client.patch(`/zones/${zone_id}/api_gateway/operations/schema_validation`, { body: settings_multiple_request, ...options }) as Core.APIPromise<{ result: SettingsMultipleRequest }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves operation-level schema validation settings on the zone
   */
  get(operationId: string, params: SchemaValidationGetParams, options?: Core.RequestOptions): Core.APIPromise<SchemaValidationGetResponse> {
    const { zone_id } = params;
    return this._client.get(`/zones/${zone_id}/api_gateway/operations/${operationId}/schema_validation`, options);
  }
}

export type SettingsMultipleRequest = Record<string, SettingsMultipleRequest.item>

export namespace SettingsMultipleRequest {
  /**
   * Operation ID to mitigation action mappings
   */
  export interface item {
    /**
     * When set, this applies a mitigation action to this operation
     *
     * - `log` log request when request does not conform to schema for this operation
     * - `block` deny access to the site when request does not conform to schema for
     *   this operation
     * - `none` will skip mitigation for this operation
     * - `null` indicates that no operation level mitigation is in place, see Zone
     *   Level Schema Validation Settings for mitigation action that will be applied
     */
    mitigation_action?: 'log' | 'block' | 'none' | null;
  }
}

export type SettingsMultipleRequestParam = Record<string, SettingsMultipleRequestParam.item>

export namespace SettingsMultipleRequestParam {
  /**
   * Operation ID to mitigation action mappings
   */
  export interface item {
    /**
     * When set, this applies a mitigation action to this operation
     *
     * - `log` log request when request does not conform to schema for this operation
     * - `block` deny access to the site when request does not conform to schema for
     *   this operation
     * - `none` will skip mitigation for this operation
     * - `null` indicates that no operation level mitigation is in place, see Zone
     *   Level Schema Validation Settings for mitigation action that will be applied
     */
    mitigation_action?: 'log' | 'block' | 'none' | null;
  }
}

export interface SchemaValidationUpdateResponse {
  /**
   * When set, this applies a mitigation action to this operation
   *
   * - `log` log request when request does not conform to schema for this operation
   * - `block` deny access to the site when request does not conform to schema for
   *   this operation
   * - `none` will skip mitigation for this operation
   * - `null` indicates that no operation level mitigation is in place, see Zone
   *   Level Schema Validation Settings for mitigation action that will be applied
   */
  mitigation_action?: 'log' | 'block' | 'none' | null;
}

export interface SchemaValidationGetResponse {
  /**
   * When set, this applies a mitigation action to this operation
   *
   * - `log` log request when request does not conform to schema for this operation
   * - `block` deny access to the site when request does not conform to schema for
   *   this operation
   * - `none` will skip mitigation for this operation
   * - `null` indicates that no operation level mitigation is in place, see Zone
   *   Level Schema Validation Settings for mitigation action that will be applied
   */
  mitigation_action?: 'log' | 'block' | 'none' | null;
}

export interface SchemaValidationUpdateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: When set, this applies a mitigation action to this operation
   *
   * - `log` log request when request does not conform to schema for this operation
   * - `block` deny access to the site when request does not conform to schema for
   *   this operation
   * - `none` will skip mitigation for this operation
   * - `null` indicates that no operation level mitigation is in place, see Zone
   *   Level Schema Validation Settings for mitigation action that will be applied
   */
  mitigation_action?: 'log' | 'block' | 'none' | null;
}

export interface SchemaValidationEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param:
   */
  settings_multiple_request: SettingsMultipleRequestParam;
}

export interface SchemaValidationGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace SchemaValidation {
  export import SettingsMultipleRequest = SchemaValidationAPI.SettingsMultipleRequest;
  export import SchemaValidationUpdateResponse = SchemaValidationAPI.SchemaValidationUpdateResponse;
  export import SchemaValidationGetResponse = SchemaValidationAPI.SchemaValidationGetResponse;
  export import SchemaValidationUpdateParams = SchemaValidationAPI.SchemaValidationUpdateParams;
  export import SchemaValidationEditParams = SchemaValidationAPI.SchemaValidationEditParams;
  export import SchemaValidationGetParams = SchemaValidationAPI.SchemaValidationGetParams;
}
