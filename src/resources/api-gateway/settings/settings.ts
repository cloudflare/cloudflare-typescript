// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as SchemaValidationAPI from './schema-validation';
import { SchemaValidation } from './schema-validation';

/**
 * @deprecated Please use the [Schema Validation Settings](https://developers.cloudflare.com/api/resources/schema_validation/subresources/settings/) APIs instead
 */
export class Settings extends APIResource {
  schemaValidation: SchemaValidationAPI.SchemaValidation = new SchemaValidationAPI.SchemaValidation(
    this._client,
  );
}

Settings.SchemaValidation = SchemaValidation;

export declare namespace Settings {
  export { SchemaValidation as SchemaValidation };
}
