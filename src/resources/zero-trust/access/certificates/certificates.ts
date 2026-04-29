// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as SettingsAPI from './settings';
import { BaseSettings, Settings } from './settings';

export class BaseCertificates extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'access', 'certificates'] = Object.freeze([
    'zeroTrust',
    'access',
    'certificates',
  ] as const);
}
export class Certificates extends BaseCertificates {
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
}

Certificates.Settings = Settings;
Certificates.BaseSettings = BaseSettings;

export declare namespace Certificates {
  export { Settings as Settings, BaseSettings as BaseSettings };
}
