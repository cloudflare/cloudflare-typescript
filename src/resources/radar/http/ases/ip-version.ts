// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseIPVersion extends APIResource {
  static override readonly _key: readonly ['radar', 'http', 'ases', 'ipVersion'] = Object.freeze([
    'radar',
    'http',
    'ases',
    'ipVersion',
  ] as const);
}
export class IPVersion extends BaseIPVersion {}
