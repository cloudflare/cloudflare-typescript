// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SchemaValidationAPI from './schema-validation';
import { BaseSchemaValidation, SchemaValidation } from './schema-validation';

/**
 * @deprecated Please use the [Schema Validation Settings](https://developers.cloudflare.com/api/resources/schema_validation/subresources/settings/) APIs instead
 */
export class BaseSettings extends APIResource {
  static override readonly _key: readonly ['apiGateway', 'settings'] = Object.freeze([
    'apiGateway',
    'settings',
  ] as const);
}
/**
 * @deprecated Please use the [Schema Validation Settings](https://developers.cloudflare.com/api/resources/schema_validation/subresources/settings/) APIs instead
 */
export class Settings extends BaseSettings {
  schemaValidation: SchemaValidationAPI.SchemaValidation = new SchemaValidationAPI.SchemaValidation(
    this._client,
  );
}

Settings.SchemaValidation = SchemaValidation;
Settings.BaseSchemaValidation = BaseSchemaValidation;

export declare namespace Settings {
  export { SchemaValidation as SchemaValidation, BaseSchemaValidation as BaseSchemaValidation };
}
