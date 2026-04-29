// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseValue extends APIResource {
  static override readonly _key: readonly ['accounts', 'tokens', 'value'] = Object.freeze([
    'accounts',
    'tokens',
    'value',
  ] as const);
}
export class Value extends BaseValue {}
