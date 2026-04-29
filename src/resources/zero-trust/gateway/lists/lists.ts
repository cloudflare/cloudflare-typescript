// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ItemsAPI from './items';
import { BaseItems, Items } from './items';

export class BaseLists extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'gateway', 'lists'] = Object.freeze([
    'zeroTrust',
    'gateway',
    'lists',
  ] as const);
}
export class Lists extends BaseLists {
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);
}

Lists.Items = Items;
Lists.BaseItems = BaseItems;

export declare namespace Lists {
  export { Items as Items, BaseItems as BaseItems };
}
