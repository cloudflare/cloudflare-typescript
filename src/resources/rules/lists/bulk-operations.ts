// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseBulkOperations extends APIResource {
  static override readonly _key: readonly ['rules', 'lists', 'bulkOperations'] = Object.freeze([
    'rules',
    'lists',
    'bulkOperations',
  ] as const);
}
export class BulkOperations extends BaseBulkOperations {}
