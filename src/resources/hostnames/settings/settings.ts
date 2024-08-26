// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import { TLS } from './tls';
import * as TLSAPI from './tls';

export class Settings extends APIResource {
  tls: TLSAPI.TLS = new TLSAPI.TLS(this._client);
}

export namespace Settings {
  export import TLS = TLSAPI.TLS;
  export import Setting = TLSAPI.Setting;
  export import SettingValue = TLSAPI.SettingValue;
  export import TLSDeleteResponse = TLSAPI.TLSDeleteResponse;
  export import TLSGetResponse = TLSAPI.TLSGetResponse;
  export import TLSUpdateParams = TLSAPI.TLSUpdateParams;
  export import TLSDeleteParams = TLSAPI.TLSDeleteParams;
  export import TLSGetParams = TLSAPI.TLSGetParams;
}
