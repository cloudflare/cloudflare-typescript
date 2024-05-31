// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as SchemaValidationAPI from './schema-validation';

export class Settings extends APIResource {
  schemaValidation: SchemaValidationAPI.SchemaValidation = new SchemaValidationAPI.SchemaValidation(
    this._client,
  );
}

export namespace Settings {
  export import SchemaValidation = SchemaValidationAPI.SchemaValidation;
  export import Settings = SchemaValidationAPI.Settings;
  export import SchemaValidationUpdateParams = SchemaValidationAPI.SchemaValidationUpdateParams;
  export import SchemaValidationGetParams = SchemaValidationAPI.SchemaValidationGetParams;
}
