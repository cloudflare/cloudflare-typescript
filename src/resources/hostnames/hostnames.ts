// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as SettingsAPI from './settings/settings';

export class Hostnames extends APIResource {
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
}

export namespace Hostnames {
  export import Settings = SettingsAPI.Settings;
}
