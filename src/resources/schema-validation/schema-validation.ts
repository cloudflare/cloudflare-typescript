// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as SchemasAPI from './schemas';
import { Schemas } from './schemas';
import * as SettingsAPI from './settings/settings';
import { Settings } from './settings/settings';

export class SchemaValidation extends APIResource {
  schemas: SchemasAPI.Schemas = new SchemasAPI.Schemas(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
}

SchemaValidation.Schemas = Schemas;
SchemaValidation.Settings = Settings;

export declare namespace SchemaValidation {
  export { Schemas as Schemas };

  export { Settings as Settings };
}
