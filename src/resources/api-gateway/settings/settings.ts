// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as SchemaValidationAPI from './schema-validation';
import {
  SchemaValidation,
  SchemaValidationEditParams,
  SchemaValidationEditResponse,
  SchemaValidationGetParams,
  SchemaValidationGetResponse,
  SchemaValidationUpdateParams,
  SchemaValidationUpdateResponse,
} from './schema-validation';

export class Settings extends APIResource {
  schemaValidation: SchemaValidationAPI.SchemaValidation = new SchemaValidationAPI.SchemaValidation(
    this._client,
  );
}

Settings.SchemaValidation = SchemaValidation;

export declare namespace Settings {
  export {
    SchemaValidation as SchemaValidation,
    type SchemaValidationUpdateResponse as SchemaValidationUpdateResponse,
    type SchemaValidationEditResponse as SchemaValidationEditResponse,
    type SchemaValidationGetResponse as SchemaValidationGetResponse,
    type SchemaValidationUpdateParams as SchemaValidationUpdateParams,
    type SchemaValidationEditParams as SchemaValidationEditParams,
    type SchemaValidationGetParams as SchemaValidationGetParams,
  };
}
