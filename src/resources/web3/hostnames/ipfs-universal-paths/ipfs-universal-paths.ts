// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as ContentListsAPI from './content-lists/content-lists';
import { ContentLists } from './content-lists/content-lists';

export class IPFSUniversalPaths extends APIResource {
  contentLists: ContentListsAPI.ContentLists = new ContentListsAPI.ContentLists(this._client);
}

IPFSUniversalPaths.ContentLists = ContentLists;

export declare namespace IPFSUniversalPaths {
  export { ContentLists as ContentLists };
}
