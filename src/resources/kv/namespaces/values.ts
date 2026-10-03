// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { type Uploadable } from '../../../core/uploads';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../internal/uploads';
import { path } from '../../../internal/utils/path';

export class BaseValues extends APIResource {
  static override readonly _key: readonly ['kv', 'namespaces', 'values'] = Object.freeze([
    'kv',
    'namespaces',
    'values',
  ] as const);

  /**
   * Writes a value under the specified key in the Workers KV namespace, creating the
   * key-value pair or replacing its existing value, expiration, and metadata. Send
   * the value as an `application/octet-stream` request body, or use
   * `multipart/form-data` with a `value` part and an optional JSON `metadata` part.
   * Use URL-encoding for special characters (for example, `:`, `!`, `%`) in the key
   * name when constructing the request URL. If neither `expiration` nor
   * `expiration_ttl` is specified, the key-value pair will not expire. If both are
   * set, `expiration_ttl` takes precedence.
   *
   * @example
   * ```ts
   * const value = await client.kv.namespaces.values.update(
   *   'My-Key',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     namespace_id: '0f2ac74b498b48028cb68387c421e279',
   *     value: 'Some Value',
   *   },
   * );
   * ```
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
        multipartFormRequestOptions(
          { query: { expiration, expiration_ttl }, body, ...options },
          this._client,
        ),
      ) as APIPromise<{ result: ValueUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes the specified key and its value from the Workers KV namespace. Use
   * URL-encoding for special characters (for example, `:`, `!`, `%`) in the key name
   * when constructing the request URL.
   *
   * @example
   * ```ts
   * const value = await client.kv.namespaces.values.delete(
   *   'My-Key',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     namespace_id: '0f2ac74b498b48028cb68387c421e279',
   *   },
   * );
   * ```
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
   * Returns the value stored under the specified key in the Workers KV namespace as
   * raw bytes. Use URL-encoding for special characters (for example, `:`, `!`, `%`)
   * in the key name when constructing the request URL. If the key-value pair
   * expires, the `expiration` response header contains its expiration time in
   * seconds since the UNIX epoch.
   *
   * @example
   * ```ts
   * const value = await client.kv.namespaces.values.get(
   *   'My-Key',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     namespace_id: '0f2ac74b498b48028cb68387c421e279',
   *   },
   * );
   *
   * const content = await value.blob();
   * console.log(content);
   * ```
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
export class Values extends BaseValues {}

export interface ValueUpdateResponse {}

export interface ValueDeleteResponse {}

export interface ValueUpdateParams {
  /**
   * Path param: ID of the Cloudflare account that owns the Workers KV namespaces.
   */
  account_id: string;

  /**
   * Path param: ID of the Workers KV namespace.
   */
  namespace_id: string;

  /**
   * Body param: A byte sequence to be stored, up to 25 MiB in length.
   */
  value: string | Uploadable;

  /**
   * Query param: Expires the key at a certain time, measured in number of seconds
   * since the UNIX epoch.
   */
  expiration?: number;

  /**
   * Query param: Number of seconds until the key expires. Must be at least 60. Takes
   * precedence over `expiration` when both are specified.
   */
  expiration_ttl?: number;

  /**
   * Body param: Associates arbitrary JSON data with a key/value pair.
   */
  metadata?: unknown;
}

export interface ValueDeleteParams {
  /**
   * ID of the Cloudflare account that owns the Workers KV namespaces.
   */
  account_id: string;

  /**
   * ID of the Workers KV namespace.
   */
  namespace_id: string;
}

export interface ValueGetParams {
  /**
   * ID of the Cloudflare account that owns the Workers KV namespaces.
   */
  account_id: string;

  /**
   * ID of the Workers KV namespace.
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
