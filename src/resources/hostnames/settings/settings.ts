// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as TLSAPI from './tls';
import {
  Setting,
  SettingValue,
  TLS,
  TLSDeleteParams,
  TLSDeleteResponse,
  TLSGetParams,
  TLSGetResponse,
  TLSUpdateParams,
} from './tls';

export class Settings extends APIResource {
  tls: TLSAPI.TLS = new TLSAPI.TLS(this._client);
}

Settings.TLS = TLS;

export declare namespace Settings {
  export {
    TLS as TLS,
    type Setting as Setting,
    type SettingValue as SettingValue,
    type TLSDeleteResponse as TLSDeleteResponse,
    type TLSGetResponse as TLSGetResponse,
    type TLSUpdateParams as TLSUpdateParams,
    type TLSDeleteParams as TLSDeleteParams,
    type TLSGetParams as TLSGetParams,
  };
}
