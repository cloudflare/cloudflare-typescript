// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as TLSAPI from './tls';
import { TLS } from './tls';

export class Settings extends APIResource {
  tls: TLSAPI.TLS = new TLSAPI.TLS(this._client);
}

Settings.TLS = TLS;

export declare namespace Settings {
  export { TLS as TLS };
}
