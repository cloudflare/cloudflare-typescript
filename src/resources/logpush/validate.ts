// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseValidate extends APIResource {
  static override readonly _key: readonly ['logpush', 'validate'] = Object.freeze([
    'logpush',
    'validate',
  ] as const);
}
export class Validate extends BaseValidate {}
