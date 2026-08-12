// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TLSAPI from './tls';
import {
  BaseTLS,
  Setting,
  SettingValue,
  TLS,
  TLSDeleteParams,
  TLSDeleteResponse,
  TLSGetParams,
  TLSListParams,
  TLSListResponse,
  TLSListResponsesSinglePage,
  TLSUpdateParams,
} from './tls';

export class BaseSettings extends APIResource {
  static override readonly _key: readonly ['hostnames', 'settings'] = Object.freeze([
    'hostnames',
    'settings',
  ] as const);
}
export class Settings extends BaseSettings {
  tls: TLSAPI.TLS = new TLSAPI.TLS(this._client);
}

Settings.TLS = TLS;
Settings.BaseTLS = BaseTLS;

export declare namespace Settings {
  export {
    TLS as TLS,
    BaseTLS as BaseTLS,
    type Setting as Setting,
    type SettingValue as SettingValue,
    type TLSListResponse as TLSListResponse,
    type TLSDeleteResponse as TLSDeleteResponse,
    type TLSListResponsesSinglePage as TLSListResponsesSinglePage,
    type TLSUpdateParams as TLSUpdateParams,
    type TLSListParams as TLSListParams,
    type TLSDeleteParams as TLSDeleteParams,
    type TLSGetParams as TLSGetParams,
  };
}
