// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SchemasAPI from './schemas';
import {
  BaseSchemas,
  PublicSchema,
  PublicSchemasV4PagePaginationArray,
  SchemaCreateParams,
  SchemaDeleteParams,
  SchemaDeleteResponse,
  SchemaEditParams,
  SchemaGetParams,
  SchemaListParams,
  Schemas,
} from './schemas';
import * as SettingsAPI from './settings/settings';
import {
  BaseSettings,
  SettingEditParams,
  SettingEditResponse,
  SettingGetParams,
  SettingGetResponse,
  SettingUpdateParams,
  SettingUpdateResponse,
  Settings,
} from './settings/settings';

export class BaseSchemaValidation extends APIResource {
  static override readonly _key: readonly ['schemaValidation'] = Object.freeze(['schemaValidation'] as const);
}
export class SchemaValidation extends BaseSchemaValidation {
  schemas: SchemasAPI.Schemas = new SchemasAPI.Schemas(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
}

SchemaValidation.Schemas = Schemas;
SchemaValidation.BaseSchemas = BaseSchemas;
SchemaValidation.Settings = Settings;
SchemaValidation.BaseSettings = BaseSettings;

export declare namespace SchemaValidation {
  export {
    Schemas as Schemas,
    BaseSchemas as BaseSchemas,
    type PublicSchema as PublicSchema,
    type SchemaDeleteResponse as SchemaDeleteResponse,
    type PublicSchemasV4PagePaginationArray as PublicSchemasV4PagePaginationArray,
    type SchemaCreateParams as SchemaCreateParams,
    type SchemaListParams as SchemaListParams,
    type SchemaDeleteParams as SchemaDeleteParams,
    type SchemaEditParams as SchemaEditParams,
    type SchemaGetParams as SchemaGetParams,
  };

  export {
    Settings as Settings,
    BaseSettings as BaseSettings,
    type SettingUpdateResponse as SettingUpdateResponse,
    type SettingEditResponse as SettingEditResponse,
    type SettingGetResponse as SettingGetResponse,
    type SettingUpdateParams as SettingUpdateParams,
    type SettingEditParams as SettingEditParams,
    type SettingGetParams as SettingGetParams,
  };
}
