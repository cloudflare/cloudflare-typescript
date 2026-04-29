// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseHistory extends APIResource {
  static override readonly _key: readonly ['user', 'billing', 'history'] = Object.freeze([
    'user',
    'billing',
    'history',
  ] as const);
}
export class History extends BaseHistory {}
