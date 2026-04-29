// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseItems extends APIResource {
  static override readonly _key: readonly ['rules', 'lists', 'items'] = Object.freeze([
    'rules',
    'lists',
    'items',
  ] as const);
}
export class Items extends BaseItems {}
