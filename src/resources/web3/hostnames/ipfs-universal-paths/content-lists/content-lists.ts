// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import * as Core from '../../../../../core';
import * as EntriesAPI from './entries';
import {
  Entries,
  EntryCreateParams,
  EntryCreateResponse,
  EntryDeleteParams,
  EntryDeleteResponse,
  EntryGetParams,
  EntryGetResponse,
  EntryListParams,
  EntryListResponse,
  EntryUpdateParams,
  EntryUpdateResponse,
} from './entries';

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

ContentLists.Entries = Entries;

export declare namespace ContentLists {
  export {
    type ContentList as ContentList,
    type ContentListUpdateParams as ContentListUpdateParams,
    type ContentListGetParams as ContentListGetParams,
  };

  export {
    Entries as Entries,
    type EntryCreateResponse as EntryCreateResponse,
    type EntryUpdateResponse as EntryUpdateResponse,
    type EntryListResponse as EntryListResponse,
    type EntryDeleteResponse as EntryDeleteResponse,
    type EntryGetResponse as EntryGetResponse,
    type EntryCreateParams as EntryCreateParams,
    type EntryUpdateParams as EntryUpdateParams,
    type EntryListParams as EntryListParams,
    type EntryDeleteParams as EntryDeleteParams,
    type EntryGetParams as EntryGetParams,
  };
}
