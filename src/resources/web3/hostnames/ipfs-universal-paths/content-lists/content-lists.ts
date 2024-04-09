// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ContentListsAPI from 'cloudflare/resources/web3/hostnames/ipfs-universal-paths/content-lists/content-lists';
import * as EntriesAPI from 'cloudflare/resources/web3/hostnames/ipfs-universal-paths/content-lists/entries';

export class ContentLists extends APIResource {
  entries: EntriesAPI.Entries = new EntriesAPI.Entries(this._client);

  /**
   * Update IPFS Universal Path Gateway Content List
   */
  update(
    zoneIdentifier: string,
    identifier: string,
    body: ContentListUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContentList> {
    return (
      this._client.put(
        `/zones/${zoneIdentifier}/web3/hostnames/${identifier}/ipfs_universal_path/content_list`,
        { body, ...options },
      ) as Core.APIPromise<{ result: ContentList }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * IPFS Universal Path Gateway Content List Details
   */
  get(
    zoneIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContentList> {
    return (
      this._client.get(
        `/zones/${zoneIdentifier}/web3/hostnames/${identifier}/ipfs_universal_path/content_list`,
        options,
      ) as Core.APIPromise<{ result: ContentList }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ContentList {
  /**
   * Behavior of the content list.
   */
  action?: 'block';
}

export interface ContentListUpdateParams {
  /**
   * Behavior of the content list.
   */
  action: 'block';

  /**
   * Content list entries.
   */
  entries: Array<EntriesAPI.ContentList>;
}

export namespace ContentLists {
  export import ContentList = ContentListsAPI.ContentList;
  export import ContentListUpdateParams = ContentListsAPI.ContentListUpdateParams;
  export import Entries = EntriesAPI.Entries;
  export import UnnamedSchemaRef5e618833803e286db9ee7c73727f8b86 = EntriesAPI.UnnamedSchemaRef5e618833803e286db9ee7c73727f8b86;
  export import EntryListResponse = EntriesAPI.EntryListResponse;
  export import EntryDeleteResponse = EntriesAPI.EntryDeleteResponse;
  export import EntryCreateParams = EntriesAPI.EntryCreateParams;
  export import EntryUpdateParams = EntriesAPI.EntryUpdateParams;
  export import EntryDeleteParams = EntriesAPI.EntryDeleteParams;
}
