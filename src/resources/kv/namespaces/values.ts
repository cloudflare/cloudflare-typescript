// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../../../internal/uploads';
import { path } from '../../../internal/utils/path';

export class Values extends APIResource {
  /**
   * Write a value identified by a key. Use URL-encoding to use special characters
   * (for example, `:`, `!`, `%`) in the key name. Body should be the value to be
   * stored. If JSON metadata to be associated with the key/value pair is needed, use
   * `multipart/form-data` content type for your PUT request (see dropdown below in
   * `REQUEST BODY SCHEMA`). Existing values, expirations, and metadata will be
   * overwritten. If neither `expiration` nor `expiration_ttl` is specified, the
   * key-value pair will never expire. If both are set, `expiration_ttl` is used and
   * `expiration` is ignored.
   */
  update(
    keyName: string,
    params: ValueUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ValueUpdateResponse | null> {
    const { account_id, namespace_id, expiration, expiration_ttl, ...body } = params;
    return (
      this._client.put(
        path`/accounts/${account_id}/storage/kv/namespaces/${namespace_id}/values/${keyName}`,
        maybeMultipartFormRequestOptions(
          {
            query: { expiration, expiration_ttl },
            body,
            ...options,
            headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
          },
          this._client,
        ),
      ) as APIPromise<{ result: ValueUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Remove a KV pair from the namespace. Use URL-encoding to use special characters
   * (for example, `:`, `!`, `%`) in the key name.
   */
  delete(
    keyName: string,
    params: ValueDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ValueDeleteResponse | null> {
    const { account_id, namespace_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/storage/kv/namespaces/${namespace_id}/values/${keyName}`,
        options,
      ) as APIPromise<{ result: ValueDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the value associated with the given key in the given namespace. Use
   * URL-encoding to use special characters (for example, `:`, `!`, `%`) in the key
   * name. If the KV-pair is set to expire at some point, the expiration time as
   * measured in seconds since the UNIX epoch will be returned in the `expiration`
   * response header.
   */
  get(keyName: string, params: ValueGetParams, options?: RequestOptions): APIPromise<Response> {
    const { account_id, namespace_id } = params;
    return this._client.get(
      path`/accounts/${account_id}/storage/kv/namespaces/${namespace_id}/values/${keyName}`,
      {
        ...options,
        headers: buildHeaders([{ Accept: 'application/octet-stream' }, options?.headers]),
        __binaryResponse: true,
      },
    );
  }
}

export interface ValueUpdateResponse {}

export interface ValueDeleteResponse {}

export interface ValueUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Path param: Namespace identifier tag.
   */
  namespace_id: string;

  /**
   * Body param: Arbitrary JSON to be associated with a key/value pair.
   */
  metadata: string;

  /**
   * Body param: A byte sequence to be stored, up to 25 MiB in length.
   */
  value: string;

  /**
   * Query param: The time, measured in number of seconds since the UNIX epoch, at
   * which the key should expire.
   */
  expiration?: number;

  /**
   * Query param: The number of seconds for which the key should be visible before it
   * expires. At least 60.
   */
  expiration_ttl?: number;
}

export interface ValueDeleteParams {
  /**
   * Identifier
   */
  account_id: string;

  /**
   * Namespace identifier tag.
   */
  namespace_id: string;
}

export interface ValueGetParams {
  /**
   * Identifier
   */
  account_id: string;

  /**
   * Namespace identifier tag.
   */
  namespace_id: string;
}

export declare namespace Values {
  export {
    type ValueUpdateResponse as ValueUpdateResponse,
    type ValueDeleteResponse as ValueDeleteResponse,
    type ValueUpdateParams as ValueUpdateParams,
    type ValueDeleteParams as ValueDeleteParams,
    type ValueGetParams as ValueGetParams,
  };
}
