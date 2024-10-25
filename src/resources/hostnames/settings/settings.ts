// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as TLSAPI from './tls';

export class Settings extends APIResource {
  tls: TLSAPI.TLS = new TLSAPI.TLS(this._client);
}

export namespace Settings {
  export import TLS = TLSAPI.TLS;
  export type Setting = TLSAPI.Setting;
  export type SettingValue = TLSAPI.SettingValue;
  export type TLSDeleteResponse = TLSAPI.TLSDeleteResponse;
  export type TLSGetResponse = TLSAPI.TLSGetResponse;
  export type TLSUpdateParams = TLSAPI.TLSUpdateParams;
  export type TLSDeleteParams = TLSAPI.TLSDeleteParams;
  export type TLSGetParams = TLSAPI.TLSGetParams;
}
