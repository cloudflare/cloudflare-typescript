// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import * as ContentListsAPI from './content-lists';
import * as EntriesAPI from './entries';

export class ContentLists extends APIResource {
  entries: EntriesAPI.Entries = new EntriesAPI.Entries(this._client);
}

export interface ContentList {
  /**
   * Behavior of the content list.
   */
  action?: 'block';
}

export namespace ContentLists {
  export import ContentList = ContentListsAPI.ContentList;
  export import Entries = EntriesAPI.Entries;
}
