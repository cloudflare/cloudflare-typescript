// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseValues extends APIResource {
  static override readonly _key: readonly ['kv', 'namespaces', 'values'] = Object.freeze([
    'kv',
    'namespaces',
    'values',
  ] as const);
}
export class Values extends BaseValues {}
