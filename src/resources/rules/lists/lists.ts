// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as BulkOperationsAPI from './bulk-operations';
import { BulkOperations } from './bulk-operations';
import * as ItemsAPI from './items';
import { Items } from './items';

export class Lists extends APIResource {
  bulkOperations: BulkOperationsAPI.BulkOperations = new BulkOperationsAPI.BulkOperations(this._client);
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);
}

Lists.BulkOperations = BulkOperations;
Lists.Items = Items;

export declare namespace Lists {
  export { BulkOperations as BulkOperations };

  export { Items as Items };
}
