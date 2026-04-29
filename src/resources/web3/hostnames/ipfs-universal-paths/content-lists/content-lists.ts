// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import * as EntriesAPI from './entries';
import { Entries } from './entries';

export class ContentLists extends APIResource {
  entries: EntriesAPI.Entries = new EntriesAPI.Entries(this._client);
}

ContentLists.Entries = Entries;

export declare namespace ContentLists {
  export { Entries as Entries };
}
