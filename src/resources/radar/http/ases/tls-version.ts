// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseTLSVersion extends APIResource {
  static override readonly _key: readonly ['radar', 'http', 'ases', 'tlsVersion'] = Object.freeze([
    'radar',
    'http',
    'ases',
    'tlsVersion',
  ] as const);
}
export class TLSVersion extends BaseTLSVersion {}
