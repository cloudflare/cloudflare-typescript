// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DNSAPI from './dns';
import { BaseDNS, DNS } from './dns';

export class BaseSubdomains extends APIResource {
  static override readonly _key: readonly ['emailSending', 'subdomains'] = Object.freeze([
    'emailSending',
    'subdomains',
  ] as const);
}
export class Subdomains extends BaseSubdomains {
  dns: DNSAPI.DNS = new DNSAPI.DNS(this._client);
}

Subdomains.DNS = DNS;
Subdomains.BaseDNS = BaseDNS;

export declare namespace Subdomains {
  export { DNS as DNS, BaseDNS as BaseDNS };
}
