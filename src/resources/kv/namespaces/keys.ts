// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as KeysAPI from 'cloudflare/resources/kv/namespaces/keys';

export class Keys extends APIResource {
  /**
   * Lists a namespace's keys.
   */
  list(
    namespaceId: string,
    params: KeyListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<KeyListResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/storage/kv/namespaces/${namespaceId}/keys`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: KeyListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * A name for a value. A value stored under a given key may be retrieved via the
 * same key.
 */
export interface WorkersKVKey {
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
  metadata?: unknown;
}

export type KeyListResponse = Array<WorkersKVKey>;

export interface KeyListParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param: Opaque token indicating the position from which to continue when
   * requesting the next set of records if the amount of list results was limited by
   * the limit parameter. A valid value for the cursor can be obtained from the
   * `cursors` object in the `result_info` structure.
   */
  cursor?: string;

  /**
   * Query param: The number of keys to return. The cursor attribute may be used to
   * iterate over the next batch of keys if there are more than the limit.
   */
  limit?: number;

  /**
   * Query param: A string prefix used to filter down which keys will be returned.
   * Exact matches and any key names that begin with the prefix will be returned.
   */
  prefix?: string;
}

export namespace Keys {
  export import WorkersKVKey = KeysAPI.WorkersKVKey;
  export import KeyListResponse = KeysAPI.KeyListResponse;
  export import KeyListParams = KeysAPI.KeyListParams;
}
