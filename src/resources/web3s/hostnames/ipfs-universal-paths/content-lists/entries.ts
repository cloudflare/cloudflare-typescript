// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as EntriesAPI from 'cloudflare/resources/web3s/hostnames/ipfs-universal-paths/content-lists/entries';

export class Entries extends APIResource {
  /**
   * Edit IPFS Universal Path Gateway Content List Entry
   */
  update(
    zoneIdentifier: string,
    identifier: string,
    contentListEntryIdentifier: string,
    body: EntryUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EntryUpdateResponse> {
    return (
      this._client.put(
        `/zones/${zoneIdentifier}/web3/hostnames/${identifier}/ipfs_universal_path/content_list/entries/${contentListEntryIdentifier}`,
        { body, ...options },
      ) as Core.APIPromise<{ result: EntryUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete IPFS Universal Path Gateway Content List Entry
   */
  delete(
    zoneIdentifier: string,
    identifier: string,
    contentListEntryIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EntryDeleteResponse | null> {
    return (
      this._client.delete(
        `/zones/${zoneIdentifier}/web3/hostnames/${identifier}/ipfs_universal_path/content_list/entries/${contentListEntryIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: EntryDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * IPFS Universal Path Gateway Content List Entry Details
   */
  get(
    zoneIdentifier: string,
    identifier: string,
    contentListEntryIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EntryGetResponse> {
    return (
      this._client.get(
        `/zones/${zoneIdentifier}/web3/hostnames/${identifier}/ipfs_universal_path/content_list/entries/${contentListEntryIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: EntryGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Create IPFS Universal Path Gateway Content List Entry
   */
  web3HostnameCreateIpfsUniversalPathGatewayContentListEntry(
    zoneIdentifier: string,
    identifier: string,
    body: EntryWeb3HostnameCreateIpfsUniversalPathGatewayContentListEntryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EntryWeb3HostnameCreateIpfsUniversalPathGatewayContentListEntryResponse> {
    return (
      this._client.post(
        `/zones/${zoneIdentifier}/web3/hostnames/${identifier}/ipfs_universal_path/content_list/entries`,
        { body, ...options },
      ) as Core.APIPromise<{
        result: EntryWeb3HostnameCreateIpfsUniversalPathGatewayContentListEntryResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List IPFS Universal Path Gateway Content List Entries
   */
  web3HostnameListIpfsUniversalPathGatewayContentListEntries(
    zoneIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EntryWeb3HostnameListIpfsUniversalPathGatewayContentListEntriesResponse | null> {
    return (
      this._client.get(
        `/zones/${zoneIdentifier}/web3/hostnames/${identifier}/ipfs_universal_path/content_list/entries`,
        options,
      ) as Core.APIPromise<{
        result: EntryWeb3HostnameListIpfsUniversalPathGatewayContentListEntriesResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Content list entry to be blocked.
 */
export interface EntryUpdateResponse {
  /**
   * Identifier
   */
  id?: string;

  /**
   * CID or content path of content to block.
   */
  content?: string;

  created_on?: string;

  /**
   * An optional description of the content list entry.
   */
  description?: string;

  modified_on?: string;

  /**
   * Type of content list entry to block.
   */
  type?: 'cid' | 'content_path';
}

export interface EntryDeleteResponse {
  /**
   * Identifier
   */
  id: string;
}

/**
 * Content list entry to be blocked.
 */
export interface EntryGetResponse {
  /**
   * Identifier
   */
  id?: string;

  /**
   * CID or content path of content to block.
   */
  content?: string;

  created_on?: string;

  /**
   * An optional description of the content list entry.
   */
  description?: string;

  modified_on?: string;

  /**
   * Type of content list entry to block.
   */
  type?: 'cid' | 'content_path';
}

/**
 * Content list entry to be blocked.
 */
export interface EntryWeb3HostnameCreateIpfsUniversalPathGatewayContentListEntryResponse {
  /**
   * Identifier
   */
  id?: string;

  /**
   * CID or content path of content to block.
   */
  content?: string;

  created_on?: string;

  /**
   * An optional description of the content list entry.
   */
  description?: string;

  modified_on?: string;

  /**
   * Type of content list entry to block.
   */
  type?: 'cid' | 'content_path';
}

export interface EntryWeb3HostnameListIpfsUniversalPathGatewayContentListEntriesResponse {
  /**
   * Content list entries.
   */
  entries?: Array<EntryWeb3HostnameListIpfsUniversalPathGatewayContentListEntriesResponse.Entry>;
}

export namespace EntryWeb3HostnameListIpfsUniversalPathGatewayContentListEntriesResponse {
  /**
   * Content list entry to be blocked.
   */
  export interface Entry {
    /**
     * Identifier
     */
    id?: string;

    /**
     * CID or content path of content to block.
     */
    content?: string;

    created_on?: string;

    /**
     * An optional description of the content list entry.
     */
    description?: string;

    modified_on?: string;

    /**
     * Type of content list entry to block.
     */
    type?: 'cid' | 'content_path';
  }
}

export interface EntryUpdateParams {
  /**
   * CID or content path of content to block.
   */
  content: string;

  /**
   * Type of content list entry to block.
   */
  type: 'cid' | 'content_path';

  /**
   * An optional description of the content list entry.
   */
  description?: string;
}

export interface EntryWeb3HostnameCreateIpfsUniversalPathGatewayContentListEntryParams {
  /**
   * CID or content path of content to block.
   */
  content: string;

  /**
   * Type of content list entry to block.
   */
  type: 'cid' | 'content_path';

  /**
   * An optional description of the content list entry.
   */
  description?: string;
}

export namespace Entries {
  export import EntryUpdateResponse = EntriesAPI.EntryUpdateResponse;
  export import EntryDeleteResponse = EntriesAPI.EntryDeleteResponse;
  export import EntryGetResponse = EntriesAPI.EntryGetResponse;
  export import EntryWeb3HostnameCreateIpfsUniversalPathGatewayContentListEntryResponse = EntriesAPI.EntryWeb3HostnameCreateIpfsUniversalPathGatewayContentListEntryResponse;
  export import EntryWeb3HostnameListIpfsUniversalPathGatewayContentListEntriesResponse = EntriesAPI.EntryWeb3HostnameListIpfsUniversalPathGatewayContentListEntriesResponse;
  export import EntryUpdateParams = EntriesAPI.EntryUpdateParams;
  export import EntryWeb3HostnameCreateIpfsUniversalPathGatewayContentListEntryParams = EntriesAPI.EntryWeb3HostnameCreateIpfsUniversalPathGatewayContentListEntryParams;
}
