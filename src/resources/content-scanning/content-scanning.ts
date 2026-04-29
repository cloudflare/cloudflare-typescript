// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PayloadsAPI from './payloads';
import { BasePayloads, Payloads } from './payloads';
import * as SettingsAPI from './settings';
import { BaseSettings, Settings } from './settings';

export class BaseContentScanning extends APIResource {
  static override readonly _key: readonly ['contentScanning'] = Object.freeze(['contentScanning'] as const);
}
export class ContentScanning extends BaseContentScanning {
  payloads: PayloadsAPI.Payloads = new PayloadsAPI.Payloads(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
}

ContentScanning.Payloads = Payloads;
ContentScanning.BasePayloads = BasePayloads;
ContentScanning.Settings = Settings;
ContentScanning.BaseSettings = BaseSettings;

export declare namespace ContentScanning {
  export { Payloads as Payloads, BasePayloads as BasePayloads };

  export { Settings as Settings, BaseSettings as BaseSettings };
}
