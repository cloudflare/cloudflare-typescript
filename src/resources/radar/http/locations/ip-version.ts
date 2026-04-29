// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseIPVersion extends APIResource {
  static override readonly _key: readonly ['radar', 'http', 'locations', 'ipVersion'] = Object.freeze([
    'radar',
    'http',
    'locations',
    'ipVersion',
  ] as const);
}
export class IPVersion extends BaseIPVersion {}
