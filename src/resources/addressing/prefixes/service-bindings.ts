// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseServiceBindings extends APIResource {
  static override readonly _key: readonly ['addressing', 'prefixes', 'serviceBindings'] = Object.freeze([
    'addressing',
    'prefixes',
    'serviceBindings',
  ] as const);
}
export class ServiceBindings extends BaseServiceBindings {}
