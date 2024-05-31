// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as SchemaValidationAPI from './schema-validation';
import * as SettingsSchemaValidationAPI from './settings/schema-validation';

export class SchemaValidation extends APIResource {
  /**
   * Updates zone level schema validation settings on the zone
   */
  edit(
    params: SchemaValidationEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingsSchemaValidationAPI.Settings> {
    const { zone_id, ...body } = params;
    return this._client.patch(`/zones/${zone_id}/api_gateway/settings/schema_validation`, {
      body,
      ...options,
    });
  }
}

export interface SchemaValidationEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: The default mitigation action used when there is no mitigation
   * action defined on the operation Mitigation actions are as follows:
   *
   * - `log` - log request when request does not conform to schema
   * - `block` - deny access to the site when request does not conform to schema
   *
   * A special value of of `none` will skip running schema validation entirely for
   * the request when there is no mitigation action defined on the operation
   *
   * `null` will have no effect.
   */
  validation_default_mitigation_action?: 'none' | 'log' | 'block' | null;

  /**
   * Body param: When set, this overrides both zone level and operation level
   * mitigation actions.
   *
   * - `none` will skip running schema validation entirely for the request
   *
   * To clear any override, use the special value `disable_override`
   *
   * `null` will have no effect.
   */
  validation_override_mitigation_action?: 'none' | 'disable_override' | null;
}

export namespace SchemaValidation {
  export import SchemaValidationEditParams = SchemaValidationAPI.SchemaValidationEditParams;
}
