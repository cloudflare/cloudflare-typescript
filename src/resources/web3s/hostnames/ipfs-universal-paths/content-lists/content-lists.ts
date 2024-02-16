// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ContentListsAPI from 'cloudflare/resources/web3s/hostnames/ipfs-universal-paths/content-lists/content-lists';
import * as EntriesAPI from 'cloudflare/resources/web3s/hostnames/ipfs-universal-paths/content-lists/entries';

export class ContentLists extends APIResource {
  entries: EntriesAPI.Entries = new EntriesAPI.Entries(this._client);

  /**
   * IPFS Universal Path Gateway Content List Details
   */
  web3HostnameIpfsUniversalPathGatewayContentListDetails(
    zoneIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContentListWeb3HostnameIpfsUniversalPathGatewayContentListDetailsResponse> {
    return (
      this._client.get(
        `/zones/${zoneIdentifier}/web3/hostnames/${identifier}/ipfs_universal_path/content_list`,
        options,
      ) as Core.APIPromise<{
        result: ContentListWeb3HostnameIpfsUniversalPathGatewayContentListDetailsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update IPFS Universal Path Gateway Content List
   */
  web3HostnameUpdateIpfsUniversalPathGatewayContentList(
    zoneIdentifier: string,
    identifier: string,
    body: ContentListWeb3HostnameUpdateIpfsUniversalPathGatewayContentListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContentListWeb3HostnameUpdateIpfsUniversalPathGatewayContentListResponse> {
    return (
      this._client.put(
        `/zones/${zoneIdentifier}/web3/hostnames/${identifier}/ipfs_universal_path/content_list`,
        { body, ...options },
      ) as Core.APIPromise<{
        result: ContentListWeb3HostnameUpdateIpfsUniversalPathGatewayContentListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ContentListWeb3HostnameIpfsUniversalPathGatewayContentListDetailsResponse {
  /**
   * Behavior of the content list.
   */
  action?: 'block';
}

export interface ContentListWeb3HostnameUpdateIpfsUniversalPathGatewayContentListResponse {
  /**
   * Behavior of the content list.
   */
  action?: 'block';
}

export interface ContentListWeb3HostnameUpdateIpfsUniversalPathGatewayContentListParams {
  /**
   * Behavior of the content list.
   */
  action: 'block';

  /**
   * Content list entries.
   */
  entries: Array<ContentListWeb3HostnameUpdateIpfsUniversalPathGatewayContentListParams.Entry>;
}

export namespace ContentListWeb3HostnameUpdateIpfsUniversalPathGatewayContentListParams {
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

export namespace ContentLists {
  export import ContentListWeb3HostnameIpfsUniversalPathGatewayContentListDetailsResponse = ContentListsAPI.ContentListWeb3HostnameIpfsUniversalPathGatewayContentListDetailsResponse;
  export import ContentListWeb3HostnameUpdateIpfsUniversalPathGatewayContentListResponse = ContentListsAPI.ContentListWeb3HostnameUpdateIpfsUniversalPathGatewayContentListResponse;
  export import ContentListWeb3HostnameUpdateIpfsUniversalPathGatewayContentListParams = ContentListsAPI.ContentListWeb3HostnameUpdateIpfsUniversalPathGatewayContentListParams;
  export import Entries = EntriesAPI.Entries;
  export import EntryUpdateResponse = EntriesAPI.EntryUpdateResponse;
  export import EntryDeleteResponse = EntriesAPI.EntryDeleteResponse;
  export import EntryGetResponse = EntriesAPI.EntryGetResponse;
  export import EntryWeb3HostnameCreateIpfsUniversalPathGatewayContentListEntryResponse = EntriesAPI.EntryWeb3HostnameCreateIpfsUniversalPathGatewayContentListEntryResponse;
  export import EntryWeb3HostnameListIpfsUniversalPathGatewayContentListEntriesResponse = EntriesAPI.EntryWeb3HostnameListIpfsUniversalPathGatewayContentListEntriesResponse;
  export import EntryUpdateParams = EntriesAPI.EntryUpdateParams;
  export import EntryWeb3HostnameCreateIpfsUniversalPathGatewayContentListEntryParams = EntriesAPI.EntryWeb3HostnameCreateIpfsUniversalPathGatewayContentListEntryParams;
}
