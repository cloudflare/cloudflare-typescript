// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseFields extends APIResource {
  static override readonly _key: readonly ['logpush', 'datasets', 'fields'] = Object.freeze([
    'logpush',
    'datasets',
    'fields',
  ] as const);
}
export class Fields extends BaseFields {}
