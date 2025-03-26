// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import {
  CursorLimitPagination,
  type CursorLimitPaginationParams,
  PagePromise,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Keys extends APIResource {
  /**
   * Lists a namespace's keys.
   */
  list(
    namespaceID: string,
    params: KeyListParams,
    options?: RequestOptions,
  ): PagePromise<KeysCursorLimitPagination, Key> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/storage/kv/namespaces/${namespaceID}/keys`,
      CursorLimitPagination<Key>,
      { query, ...options },
    );
  }
}

export type KeysCursorLimitPagination = CursorLimitPagination<Key>;

/**
 * A name for a value. A value stored under a given key may be retrieved via the
 * same key.
 */
export interface Key {
  /**
   * A key's name. The name may be at most 512 bytes. All printable, non-whitespace
   * characters are valid. Use percent-encoding to define key names as part of a URL.
   */
  name: string;

  /**
   * The time, measured in number of seconds since the UNIX epoch, at which the key
   * will expire. This property is omitted for keys that will not expire.
   */
  expiration?: number;

  /**
   * Arbitrary JSON that is associated with a key.
   */
  metadata?: Record<string, unknown>;
}

export interface KeyListParams extends CursorLimitPaginationParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param: A string prefix used to filter down which keys will be returned.
   * Exact matches and any key names that begin with the prefix will be returned.
   */
  prefix?: string;
}

export declare namespace Keys {
  export {
    type Key as Key,
    type KeysCursorLimitPagination as KeysCursorLimitPagination,
    type KeyListParams as KeyListParams,
  };
}
