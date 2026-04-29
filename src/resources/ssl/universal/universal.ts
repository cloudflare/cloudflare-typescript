// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SettingsAPI from './settings';
import { BaseSettings, Settings } from './settings';

export class BaseUniversal extends APIResource {
  static override readonly _key: readonly ['ssl', 'universal'] = Object.freeze(['ssl', 'universal'] as const);
}
export class Universal extends BaseUniversal {
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
}

Universal.Settings = Settings;
Universal.BaseSettings = BaseSettings;

export declare namespace Universal {
  export { Settings as Settings, BaseSettings as BaseSettings };
}
