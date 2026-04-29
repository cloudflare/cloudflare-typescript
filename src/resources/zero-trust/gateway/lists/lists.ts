// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as ItemsAPI from './items';
import { Items } from './items';

export class Lists extends APIResource {
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);
}

Lists.Items = Items;

export declare namespace Lists {
  export { Items as Items };
}
