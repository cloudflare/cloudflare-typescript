// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseSubnets extends APIResource {
  static override readonly _key: readonly ['intel', 'asn', 'subnets'] = Object.freeze([
    'intel',
    'asn',
    'subnets',
  ] as const);
}
export class Subnets extends BaseSubnets {}
