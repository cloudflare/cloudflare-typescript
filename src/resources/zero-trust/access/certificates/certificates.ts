// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as SettingsAPI from './settings';
import { Settings } from './settings';

export class Certificates extends APIResource {
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
}

Certificates.Settings = Settings;

export declare namespace Certificates {
  export { Settings as Settings };
}
