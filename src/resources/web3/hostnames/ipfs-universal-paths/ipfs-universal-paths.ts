// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ContentListsAPI from 'cloudflare/resources/web3/hostnames/ipfs-universal-paths/content-lists/content-lists';

export class IpfsUniversalPaths extends APIResource {
  contentLists: ContentListsAPI.ContentLists = new ContentListsAPI.ContentLists(this._client);
}

export namespace IpfsUniversalPaths {
  export import ContentLists = ContentListsAPI.ContentLists;
  export import ContentListUpdateResponse = ContentListsAPI.ContentListUpdateResponse;
  export import ContentListListResponse = ContentListsAPI.ContentListListResponse;
  export import ContentListUpdateParams = ContentListsAPI.ContentListUpdateParams;
}
