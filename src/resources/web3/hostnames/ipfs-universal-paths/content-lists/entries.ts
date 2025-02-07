// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import { APIPromise } from '../../../../../api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Entries extends APIResource {
  /**
   * Create IPFS Universal Path Gateway Content List Entry
   */
  create(
    identifier: string,
    params: EntryCreateParams,
    options?: RequestOptions,
  ): APIPromise<EntryCreateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(
        path`/zones/${zone_id}/web3/hostnames/${identifier}/ipfs_universal_path/content_list/entries`,
        { body, ...options },
      ) as APIPromise<{ result: EntryCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Edit IPFS Universal Path Gateway Content List Entry
   */
  update(
    contentListEntryIdentifier: string,
    params: EntryUpdateParams,
    options?: RequestOptions,
  ): APIPromise<EntryUpdateResponse> {
    const { zone_id, identifier, ...body } = params;
    return (
      this._client.put(
        path`/zones/${zone_id}/web3/hostnames/${identifier}/ipfs_universal_path/content_list/entries/${contentListEntryIdentifier}`,
        { body, ...options },
      ) as APIPromise<{ result: EntryUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List IPFS Universal Path Gateway Content List Entries
   */
  list(
    identifier: string,
    params: EntryListParams,
    options?: RequestOptions,
  ): APIPromise<EntryListResponse | null> {
    const { zone_id } = params;
    return (
      this._client.get(
        path`/zones/${zone_id}/web3/hostnames/${identifier}/ipfs_universal_path/content_list/entries`,
        options,
      ) as APIPromise<{ result: EntryListResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete IPFS Universal Path Gateway Content List Entry
   */
  delete(
    contentListEntryIdentifier: string,
    params: EntryDeleteParams,
    options?: RequestOptions,
  ): APIPromise<EntryDeleteResponse | null> {
    const { zone_id, identifier } = params;
    return (
      this._client.delete(
        path`/zones/${zone_id}/web3/hostnames/${identifier}/ipfs_universal_path/content_list/entries/${contentListEntryIdentifier}`,
        options,
      ) as APIPromise<{ result: EntryDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * IPFS Universal Path Gateway Content List Entry Details
   */
  get(
    contentListEntryIdentifier: string,
    params: EntryGetParams,
    options?: RequestOptions,
  ): APIPromise<EntryGetResponse> {
    const { zone_id, identifier } = params;
    return (
      this._client.get(
        path`/zones/${zone_id}/web3/hostnames/${identifier}/ipfs_universal_path/content_list/entries/${contentListEntryIdentifier}`,
        options,
      ) as APIPromise<{ result: EntryGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Content list entry to be blocked.
 */
export interface EntryCreateResponse {
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

export interface EntryListResponse {
  /**
   * Content list entries.
   */
  entries?: Array<EntryListResponse.Entry>;
}

export namespace EntryListResponse {
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

export interface EntryCreateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: CID or content path of content to block.
   */
  content: string;

  /**
   * Body param: Type of content list entry to block.
   */
  type: 'cid' | 'content_path';

  /**
   * Body param: An optional description of the content list entry.
   */
  description?: string;
}

export interface EntryUpdateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Path param: Identifier
   */
  identifier: string;

  /**
   * Body param: CID or content path of content to block.
   */
  content: string;

  /**
   * Body param: Type of content list entry to block.
   */
  type: 'cid' | 'content_path';

  /**
   * Body param: An optional description of the content list entry.
   */
  description?: string;
}

export interface EntryListParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface EntryDeleteParams {
  /**
   * Identifier
   */
  zone_id: string;

  /**
   * Identifier
   */
  identifier: string;
}

export interface EntryGetParams {
  /**
   * Identifier
   */
  zone_id: string;

  /**
   * Identifier
   */
  identifier: string;
}

export declare namespace Entries {
  export {
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
