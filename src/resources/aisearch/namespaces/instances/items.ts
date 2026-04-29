// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseItems extends APIResource {
  static override readonly _key: readonly ['aiSearch', 'namespaces', 'instances', 'items'] = Object.freeze([
    'aiSearch',
    'namespaces',
    'instances',
    'items',
  ] as const);
}
export class Items extends BaseItems {}
