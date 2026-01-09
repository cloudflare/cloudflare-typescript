// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as SchemasAPI from './schemas';
import {
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
  SettingEditParams,
  SettingEditResponse,
  SettingGetParams,
  SettingGetResponse,
  SettingUpdateParams,
  SettingUpdateResponse,
  Settings,
} from './settings/settings';

export class SchemaValidation extends APIResource {
  schemas: SchemasAPI.Schemas = new SchemasAPI.Schemas(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
}

SchemaValidation.Schemas = Schemas;
SchemaValidation.PublicSchemasV4PagePaginationArray = PublicSchemasV4PagePaginationArray;
SchemaValidation.Settings = Settings;

export declare namespace SchemaValidation {
  export {
    Schemas as Schemas,
    type PublicSchema as PublicSchema,
    type SchemaDeleteResponse as SchemaDeleteResponse,
    PublicSchemasV4PagePaginationArray as PublicSchemasV4PagePaginationArray,
    type SchemaCreateParams as SchemaCreateParams,
    type SchemaListParams as SchemaListParams,
    type SchemaDeleteParams as SchemaDeleteParams,
    type SchemaEditParams as SchemaEditParams,
    type SchemaGetParams as SchemaGetParams,
  };

  export {
    Settings as Settings,
    type SettingUpdateResponse as SettingUpdateResponse,
    type SettingEditResponse as SettingEditResponse,
    type SettingGetResponse as SettingGetResponse,
    type SettingUpdateParams as SettingUpdateParams,
    type SettingEditParams as SettingEditParams,
    type SettingGetParams as SettingGetParams,
  };
}
