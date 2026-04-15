// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OperationsAPI from './operations';
import {
  BaseOperations,
  OperationBulkEditParams,
  OperationBulkEditResponse,
  OperationDeleteParams,
  OperationDeleteResponse,
  OperationGetParams,
  OperationGetResponse,
  OperationListParams,
  OperationListResponse,
  OperationListResponsesV4PagePaginationArray,
  OperationUpdateParams,
  OperationUpdateResponse,
  Operations,
} from './operations';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseSettings extends APIResource {
  static override readonly _key: readonly ['schemaValidation', 'settings'] = Object.freeze([
    'schemaValidation',
    'settings',
  ] as const);

  /**
   * Fully updates global schema validation settings for a zone, replacing existing
   * configuration.
   *
   * @example
   * ```ts
   * const setting =
   *   await client.schemaValidation.settings.update({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     validation_default_mitigation_action: 'block',
   *   });
   * ```
   */
  update(params: SettingUpdateParams, options?: RequestOptions): APIPromise<SettingUpdateResponse> {
    const { zone_id = this._client.zoneID, ...body } = params;
    return (
      this._client.put(path`/zones/${zone_id}/schema_validation/settings`, {
        body,
        ...options,
      }) as APIPromise<{ result: SettingUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Partially updates global schema validation settings for a zone using PATCH
   * semantics.
   *
   * @example
   * ```ts
   * const response =
   *   await client.schemaValidation.settings.edit({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  edit(
    params: SettingEditParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SettingEditResponse> {
    const { zone_id = this._client.zoneID, ...body } = params ?? {};
    return (
      this._client.patch(path`/zones/${zone_id}/schema_validation/settings`, {
        body,
        ...options,
      }) as APIPromise<{ result: SettingEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the current global schema validation settings for a zone.
   *
   * @example
   * ```ts
   * const setting = await client.schemaValidation.settings.get({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  get(
    params: SettingGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SettingGetResponse> {
    const { zone_id = this._client.zoneID } = params ?? {};
    return (
      this._client.get(path`/zones/${zone_id}/schema_validation/settings`, options) as APIPromise<{
        result: SettingGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Settings extends BaseSettings {
  operations: OperationsAPI.Operations = new OperationsAPI.Operations(this._client);
}

export interface SettingUpdateResponse {
  /**
   * The default mitigation action used
   *
   * Mitigation actions are as follows:
   *
   * - `log` - log request when request does not conform to schema
   * - `block` - deny access to the site when request does not conform to schema
   * - `none` - skip running schema validation
   */
  validation_default_mitigation_action: 'none' | 'log' | 'block';

  /**
   * When not null, this overrides global both zone level and operation level
   * mitigation actions. This can serve as a quick way to disable schema validation
   * for the whole zone.
   *
   * - `"none"` will skip running schema validation entirely for the request
   */
  validation_override_mitigation_action?: 'none';
}

export interface SettingEditResponse {
  /**
   * The default mitigation action used
   *
   * Mitigation actions are as follows:
   *
   * - `log` - log request when request does not conform to schema
   * - `block` - deny access to the site when request does not conform to schema
   * - `none` - skip running schema validation
   */
  validation_default_mitigation_action: 'none' | 'log' | 'block';

  /**
   * When not null, this overrides global both zone level and operation level
   * mitigation actions. This can serve as a quick way to disable schema validation
   * for the whole zone.
   *
   * - `"none"` will skip running schema validation entirely for the request
   */
  validation_override_mitigation_action?: 'none';
}

export interface SettingGetResponse {
  /**
   * The default mitigation action used
   *
   * Mitigation actions are as follows:
   *
   * - `log` - log request when request does not conform to schema
   * - `block` - deny access to the site when request does not conform to schema
   * - `none` - skip running schema validation
   */
  validation_default_mitigation_action: 'none' | 'log' | 'block';

  /**
   * When not null, this overrides global both zone level and operation level
   * mitigation actions. This can serve as a quick way to disable schema validation
   * for the whole zone.
   *
   * - `"none"` will skip running schema validation entirely for the request
   */
  validation_override_mitigation_action?: 'none';
}

export interface SettingUpdateParams {
  /**
   * Path param: Identifier.
   */
  zone_id?: string;

  /**
   * Body param: The default mitigation action used Mitigation actions are as
   * follows:
   *
   * - `"log"` - log request when request does not conform to schema
   * - `"block"` - deny access to the site when request does not conform to schema
   * - `"none"` - skip running schema validation
   */
  validation_default_mitigation_action: 'none' | 'log' | 'block';

  /**
   * Body param: When set, this overrides both zone level and operation level
   * mitigation actions.
   *
   * - `"none"` - skip running schema validation entirely for the request
   * - `null` - clears any existing override
   */
  validation_override_mitigation_action?: 'none' | null;
}

export interface SettingEditParams {
  /**
   * Path param: Identifier.
   */
  zone_id?: string;

  /**
   * Body param: The default mitigation action used Mitigation actions are as
   * follows:
   *
   * - `"log"` - log request when request does not conform to schema
   * - `"block"` - deny access to the site when request does not conform to schema
   * - `"none"` - skip running schema validation
   */
  validation_default_mitigation_action?: 'none' | 'log' | 'block';

  /**
   * Body param: When set, this overrides both zone level and operation level
   * mitigation actions.
   *
   * - `"none"` - skip running schema validation entirely for the request
   * - `null` - clears any existing override
   */
  validation_override_mitigation_action?: 'none' | null;
}

export interface SettingGetParams {
  /**
   * Identifier.
   */
  zone_id?: string;
}

Settings.Operations = Operations;
Settings.BaseOperations = BaseOperations;

export declare namespace Settings {
  export {
    type SettingUpdateResponse as SettingUpdateResponse,
    type SettingEditResponse as SettingEditResponse,
    type SettingGetResponse as SettingGetResponse,
    type SettingUpdateParams as SettingUpdateParams,
    type SettingEditParams as SettingEditParams,
    type SettingGetParams as SettingGetParams,
  };

  export {
    Operations as Operations,
    BaseOperations as BaseOperations,
    type OperationUpdateResponse as OperationUpdateResponse,
    type OperationListResponse as OperationListResponse,
    type OperationDeleteResponse as OperationDeleteResponse,
    type OperationBulkEditResponse as OperationBulkEditResponse,
    type OperationGetResponse as OperationGetResponse,
    type OperationListResponsesV4PagePaginationArray as OperationListResponsesV4PagePaginationArray,
    type OperationUpdateParams as OperationUpdateParams,
    type OperationListParams as OperationListParams,
    type OperationDeleteParams as OperationDeleteParams,
    type OperationBulkEditParams as OperationBulkEditParams,
    type OperationGetParams as OperationGetParams,
  };
}
