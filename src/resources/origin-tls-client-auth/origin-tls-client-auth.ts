// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as HostnameCertificatesAPI from './hostname-certificates';
import { BaseHostnameCertificates, HostnameCertificates } from './hostname-certificates';
import * as HostnamesAPI from './hostnames';
import { BaseHostnames, Hostnames } from './hostnames';
import * as SettingsAPI from './settings';
import { BaseSettings, Settings } from './settings';
import * as ZoneCertificatesAPI from './zone-certificates';
import { BaseZoneCertificates, ZoneCertificates } from './zone-certificates';

export class BaseOriginTLSClientAuth extends APIResource {
  static override readonly _key: readonly ['originTLSClientAuth'] = Object.freeze([
    'originTLSClientAuth',
  ] as const);
}
export class OriginTLSClientAuth extends BaseOriginTLSClientAuth {
  zoneCertificates: ZoneCertificatesAPI.ZoneCertificates = new ZoneCertificatesAPI.ZoneCertificates(
    this._client,
  );
  hostnames: HostnamesAPI.Hostnames = new HostnamesAPI.Hostnames(this._client);
  hostnameCertificates: HostnameCertificatesAPI.HostnameCertificates =
    new HostnameCertificatesAPI.HostnameCertificates(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
}

OriginTLSClientAuth.ZoneCertificates = ZoneCertificates;
OriginTLSClientAuth.BaseZoneCertificates = BaseZoneCertificates;
OriginTLSClientAuth.Hostnames = Hostnames;
OriginTLSClientAuth.BaseHostnames = BaseHostnames;
OriginTLSClientAuth.HostnameCertificates = HostnameCertificates;
OriginTLSClientAuth.BaseHostnameCertificates = BaseHostnameCertificates;
OriginTLSClientAuth.Settings = Settings;
OriginTLSClientAuth.BaseSettings = BaseSettings;

export declare namespace OriginTLSClientAuth {
  export { ZoneCertificates as ZoneCertificates, BaseZoneCertificates as BaseZoneCertificates };

  export { Hostnames as Hostnames, BaseHostnames as BaseHostnames };

  export {
    HostnameCertificates as HostnameCertificates,
    BaseHostnameCertificates as BaseHostnameCertificates,
  };

  export { Settings as Settings, BaseSettings as BaseSettings };
}
