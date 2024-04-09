// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as EntriesAPI from 'cloudflare/resources/web3/hostnames/ipfs-universal-paths/content-lists/entries';

export class Entries extends APIResource {
  /**
   * Create IPFS Universal Path Gateway Content List Entry
   */
  create(
    zoneIdentifier: string,
    identifier: string,
    body: EntryCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContentList> {
    return (
      this._client.post(
        `/zones/${zoneIdentifier}/web3/hostnames/${identifier}/ipfs_universal_path/content_list/entries`,
        { body, ...options },
      ) as Core.APIPromise<{ result: ContentList }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Edit IPFS Universal Path Gateway Content List Entry
   */
  update(
    zoneIdentifier: string,
    identifier: string,
    contentListEntryIdentifier: string,
    body: EntryUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContentList> {
    return (
      this._client.put(
        `/zones/${zoneIdentifier}/web3/hostnames/${identifier}/ipfs_universal_path/content_list/entries/${contentListEntryIdentifier}`,
        { body, ...options },
      ) as Core.APIPromise<{ result: ContentList }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List IPFS Universal Path Gateway Content List Entries
   */
  list(
    zoneIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EntryListResponse | null> {
    return (
      this._client.get(
        `/zones/${zoneIdentifier}/web3/hostnames/${identifier}/ipfs_universal_path/content_list/entries`,
        options,
      ) as Core.APIPromise<{ result: EntryListResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete IPFS Universal Path Gateway Content List Entry
   */
  delete(
    zoneIdentifier: string,
    identifier: string,
    contentListEntryIdentifier: string,
    body: EntryDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EntryDeleteResponse | null> {
    return (
      this._client.delete(
        `/zones/${zoneIdentifier}/web3/hostnames/${identifier}/ipfs_universal_path/content_list/entries/${contentListEntryIdentifier}`,
        { body, ...options },
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
  ): Core.APIPromise<ContentList> {
    return (
      this._client.get(
        `/zones/${zoneIdentifier}/web3/hostnames/${identifier}/ipfs_universal_path/content_list/entries/${contentListEntryIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: ContentList }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Content list entry to be blocked.
 */
export interface ContentList {
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
export interface UnnamedSchemaRef5e618833803e286db9ee7c73727f8b86 {
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

export interface EntryListResponse {
  /**
   * Content list entries.
   */
  entries?: Array<ContentList>;
}

export interface EntryDeleteResponse {
  /**
   * Identifier
   */
  id: string;
}

export interface EntryCreateParams {
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

export type EntryDeleteParams = unknown;

export namespace Entries {
  export import ContentList = EntriesAPI.ContentList;
  export import UnnamedSchemaRef5e618833803e286db9ee7c73727f8b86 = EntriesAPI.UnnamedSchemaRef5e618833803e286db9ee7c73727f8b86;
  export import EntryListResponse = EntriesAPI.EntryListResponse;
  export import EntryDeleteResponse = EntriesAPI.EntryDeleteResponse;
  export import EntryCreateParams = EntriesAPI.EntryCreateParams;
  export import EntryUpdateParams = EntriesAPI.EntryUpdateParams;
  export import EntryDeleteParams = EntriesAPI.EntryDeleteParams;
}
