// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as HostnameCertificatesAPI from './hostname-certificates';
import { HostnameCertificates } from './hostname-certificates';
import * as HostnamesAPI from './hostnames';
import { Hostnames } from './hostnames';
import * as SettingsAPI from './settings';
import { Settings } from './settings';
import * as ZoneCertificatesAPI from './zone-certificates';
import { ZoneCertificates } from './zone-certificates';

export class OriginTLSClientAuth extends APIResource {
  zoneCertificates: ZoneCertificatesAPI.ZoneCertificates = new ZoneCertificatesAPI.ZoneCertificates(
    this._client,
  );
  hostnames: HostnamesAPI.Hostnames = new HostnamesAPI.Hostnames(this._client);
  hostnameCertificates: HostnameCertificatesAPI.HostnameCertificates =
    new HostnameCertificatesAPI.HostnameCertificates(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
}

OriginTLSClientAuth.ZoneCertificates = ZoneCertificates;
OriginTLSClientAuth.Hostnames = Hostnames;
OriginTLSClientAuth.HostnameCertificates = HostnameCertificates;
OriginTLSClientAuth.Settings = Settings;

export declare namespace OriginTLSClientAuth {
  export { ZoneCertificates as ZoneCertificates };

  export { Hostnames as Hostnames };

  export { HostnameCertificates as HostnameCertificates };

  export { Settings as Settings };
}
