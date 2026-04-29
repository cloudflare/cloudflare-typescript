// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as DNSAPI from './dns';
import { DNS } from './dns';

export class Subdomains extends APIResource {
  dns: DNSAPI.DNS = new DNSAPI.DNS(this._client);
}

Subdomains.DNS = DNS;

export declare namespace Subdomains {
  export { DNS as DNS };
}
