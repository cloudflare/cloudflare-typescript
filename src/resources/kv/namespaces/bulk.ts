// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as BulkAPI from './bulk';

export class Bulk extends APIResource {
  /**
   * Write multiple keys and values at once. Body should be an array of up to 10,000
   * key-value pairs to be stored, along with optional expiration information.
   * Existing values and expirations will be overwritten. If neither `expiration` nor
   * `expiration_ttl` is specified, the key-value pair will never expire. If both are
   * set, `expiration_ttl` is used and `expiration` is ignored. The entire request
   * size must be 100 megabytes or less.
   */
  update(
    namespaceId: string,
    params: BulkUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BulkUpdateResponse> {
    const { account_id, body } = params;
    return (
      this._client.put(`/accounts/${account_id}/storage/kv/namespaces/${namespaceId}/bulk`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: BulkUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Remove multiple KV pairs from the namespace. Body should be an array of up to
   * 10,000 keys to be removed.
   */
  delete(
    namespaceId: string,
    params: BulkDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BulkDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/storage/kv/namespaces/${namespaceId}/bulk`,
        options,
      ) as Core.APIPromise<{ result: BulkDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type BulkUpdateResponse = unknown;

export type BulkDeleteResponse = unknown;

export interface BulkUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: Array<BulkUpdateParams.Body>;
}

export namespace BulkUpdateParams {
  export interface Body {
    /**
     * Whether or not the server should base64 decode the value before storing it.
     * Useful for writing values that wouldn't otherwise be valid JSON strings, such as
     * images.
     */
    base64?: boolean;

    /**
     * The time, measured in number of seconds since the UNIX epoch, at which the key
     * should expire.
     */
    expiration?: number;

    /**
     * The number of seconds for which the key should be visible before it expires. At
     * least 60.
     */
    expiration_ttl?: number;

    /**
     * A key's name. The name may be at most 512 bytes. All printable, non-whitespace
     * characters are valid.
     */
    key?: string;

    /**
     * Arbitrary JSON that is associated with a key.
     */
    metadata?: Record<string, unknown>;

    /**
     * A UTF-8 encoded string to be stored, up to 25 MiB in length.
     */
    value?: string;
  }
}

export interface BulkDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Bulk {
  export import BulkUpdateResponse = BulkAPI.BulkUpdateResponse;
  export import BulkDeleteResponse = BulkAPI.BulkDeleteResponse;
  export import BulkUpdateParams = BulkAPI.BulkUpdateParams;
  export import BulkDeleteParams = BulkAPI.BulkDeleteParams;
}
