// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as PayloadsAPI from './payloads';
import { Payloads } from './payloads';
import * as SettingsAPI from './settings';
import { Settings } from './settings';

export class ContentScanning extends APIResource {
  payloads: PayloadsAPI.Payloads = new PayloadsAPI.Payloads(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
}

ContentScanning.Payloads = Payloads;
ContentScanning.Settings = Settings;

export declare namespace ContentScanning {
  export { Payloads as Payloads };

  export { Settings as Settings };
}
