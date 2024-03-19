// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as TLSAPI from 'cloudflare/resources/hostnames/settings/tls';

export class Settings extends APIResource {
  tls: TLSAPI.TLS = new TLSAPI.TLS(this._client);
}

export namespace Settings {
  export import TLS = TLSAPI.TLS;
  export import TLSCertificatesAndHostnamesSettingObject = TLSAPI.TLSCertificatesAndHostnamesSettingObject;
  export import TLSCertificatesAndHostnamesSettingObjectDelete = TLSAPI.TLSCertificatesAndHostnamesSettingObjectDelete;
  export import TLSGetResponse = TLSAPI.TLSGetResponse;
  export import TLSUpdateParams = TLSAPI.TLSUpdateParams;
  export import TLSDeleteParams = TLSAPI.TLSDeleteParams;
  export import TLSGetParams = TLSAPI.TLSGetParams;
}
