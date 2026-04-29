// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ListsAPI from './lists/lists';
import { Lists } from './lists/lists';

export class Rules extends APIResource {
  lists: ListsAPI.Lists = new ListsAPI.Lists(this._client);
}

Rules.Lists = Lists;

export declare namespace Rules {
  export { Lists as Lists };
}
