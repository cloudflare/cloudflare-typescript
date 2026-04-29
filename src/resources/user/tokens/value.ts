// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseValue extends APIResource {
  static override readonly _key: readonly ['user', 'tokens', 'value'] = Object.freeze([
    'user',
    'tokens',
    'value',
  ] as const);
}
export class Value extends BaseValue {}
