// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import * as Core from '../../../../../core';
import * as ContentListsAPI from './content-lists';
import * as EntriesAPI from './entries';

export class ContentLists extends APIResource {
  entries: EntriesAPI.Entries = new EntriesAPI.Entries(this._client);

  /**
   * Update IPFS Universal Path Gateway Content List
   */
  update(
    identifier: string,
    params: ContentListUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContentList> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(`/zones/${zone_id}/web3/hostnames/${identifier}/ipfs_universal_path/content_list`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ContentList }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * IPFS Universal Path Gateway Content List Details
   */
  get(
    identifier: string,
    params: ContentListGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContentList> {
    const { zone_id } = params;
    return (
      this._client.get(
        `/zones/${zone_id}/web3/hostnames/${identifier}/ipfs_universal_path/content_list`,
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
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Behavior of the content list.
   */
  action: 'block';

  /**
   * Body param: Content list entries.
   */
  entries: Array<ContentListUpdateParams.Entry>;
}

export namespace ContentListUpdateParams {
  /**
   * Content list entry to be blocked.
   */
  export interface Entry {
    /**
     * CID or content path of content to block.
     */
    content?: string;

    /**
     * An optional description of the content list entry.
     */
    description?: string;

    /**
     * Type of content list entry to block.
     */
    type?: 'cid' | 'content_path';
  }
}

export interface ContentListGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace ContentLists {
  export import ContentList = ContentListsAPI.ContentList;
  export import ContentListUpdateParams = ContentListsAPI.ContentListUpdateParams;
  export import ContentListGetParams = ContentListsAPI.ContentListGetParams;
  export import Entries = EntriesAPI.Entries;
  export import EntryCreateResponse = EntriesAPI.EntryCreateResponse;
  export import EntryUpdateResponse = EntriesAPI.EntryUpdateResponse;
  export import EntryListResponse = EntriesAPI.EntryListResponse;
  export import EntryDeleteResponse = EntriesAPI.EntryDeleteResponse;
  export import EntryGetResponse = EntriesAPI.EntryGetResponse;
  export import EntryCreateParams = EntriesAPI.EntryCreateParams;
  export import EntryUpdateParams = EntriesAPI.EntryUpdateParams;
  export import EntryListParams = EntriesAPI.EntryListParams;
  export import EntryDeleteParams = EntriesAPI.EntryDeleteParams;
  export import EntryGetParams = EntriesAPI.EntryGetParams;
}
