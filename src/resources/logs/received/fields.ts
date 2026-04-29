// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseFields extends APIResource {
  static override readonly _key: readonly ['logs', 'received', 'fields'] = Object.freeze([
    'logs',
    'received',
    'fields',
  ] as const);
}
export class Fields extends BaseFields {}
