// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TLSAPI from './tls';
import { BaseTLS, TLS } from './tls';

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
  export { TLS as TLS, BaseTLS as BaseTLS };
}
