// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BulkOperationsAPI from './bulk-operations';
import { BaseBulkOperations, BulkOperations } from './bulk-operations';
import * as ItemsAPI from './items';
import { BaseItems, Items } from './items';

export class BaseLists extends APIResource {
  static override readonly _key: readonly ['rules', 'lists'] = Object.freeze(['rules', 'lists'] as const);
}
export class Lists extends BaseLists {
  bulkOperations: BulkOperationsAPI.BulkOperations = new BulkOperationsAPI.BulkOperations(this._client);
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);
}

Lists.BulkOperations = BulkOperations;
Lists.BaseBulkOperations = BaseBulkOperations;
Lists.Items = Items;
Lists.BaseItems = BaseItems;

export declare namespace Lists {
  export { BulkOperations as BulkOperations, BaseBulkOperations as BaseBulkOperations };

  export { Items as Items, BaseItems as BaseItems };
}
