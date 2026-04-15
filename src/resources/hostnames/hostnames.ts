// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SettingsAPI from './settings/settings';
import { BaseSettings, Settings } from './settings/settings';

export class BaseHostnames extends APIResource {
  static override readonly _key: readonly ['hostnames'] = Object.freeze(['hostnames'] as const);
}
export class Hostnames extends BaseHostnames {
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
}

Hostnames.Settings = Settings;
Hostnames.BaseSettings = BaseSettings;

export declare namespace Hostnames {
  export { Settings as Settings, BaseSettings as BaseSettings };
}
