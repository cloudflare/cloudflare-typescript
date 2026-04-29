// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SchemasAPI from './schemas';
import { BaseSchemas, Schemas } from './schemas';
import * as SettingsAPI from './settings/settings';
import { BaseSettings, Settings } from './settings/settings';

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
  export { Schemas as Schemas, BaseSchemas as BaseSchemas };

  export { Settings as Settings, BaseSettings as BaseSettings };
}
