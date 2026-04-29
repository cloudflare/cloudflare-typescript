// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ListsAPI from './lists/lists';
import { BaseLists, Lists } from './lists/lists';

export class BaseRules extends APIResource {
  static override readonly _key: readonly ['rules'] = Object.freeze(['rules'] as const);
}
export class Rules extends BaseRules {
  lists: ListsAPI.Lists = new ListsAPI.Lists(this._client);
}

Rules.Lists = Lists;
Rules.BaseLists = BaseLists;

export declare namespace Rules {
  export { Lists as Lists, BaseLists as BaseLists };
}
