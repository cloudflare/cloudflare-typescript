// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ValuesAPI from 'cloudflare/resources/storage/kv/namespaces/values';
import { multipartFormRequestOptions } from 'cloudflare/core';

export class Values extends APIResource {
  /**
   * Remove a KV pair from the namespace. Use URL-encoding to use special characters
   * (for example, `:`, `!`, `%`) in the key name.
   */
  delete(
    accountId: string,
    namespaceId: string,
    keyName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ValueDeleteResponse> {
    return (
      this._client.delete(
        `/accounts/${accountId}/storage/kv/namespaces/${namespaceId}/values/${keyName}`,
        options,
      ) as Core.APIPromise<{ result: ValueDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the value associated with the given key in the given namespace. Use
   * URL-encoding to use special characters (for example, `:`, `!`, `%`) in the key
   * name. If the KV-pair is set to expire at some point, the expiration time as
   * measured in seconds since the UNIX epoch will be returned in the `expiration`
   * response header.
   */
  get(
    accountId: string,
    namespaceId: string,
    keyName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    return this._client.get(`/accounts/${accountId}/storage/kv/namespaces/${namespaceId}/values/${keyName}`, {
      ...options,
      headers: { Accept: 'application/json', ...options?.headers },
    });
  }

  /**
   * Write a value identified by a key. Use URL-encoding to use special characters
   * (for example, `:`, `!`, `%`) in the key name. Body should be the value to be
   * stored along with JSON metadata to be associated with the key/value pair.
   * Existing values, expirations, and metadata will be overwritten. If neither
   * `expiration` nor `expiration_ttl` is specified, the key-value pair will never
   * expire. If both are set, `expiration_ttl` is used and `expiration` is ignored.
   */
  replace(
    accountId: string,
    namespaceId: string,
    keyName: string,
    body: ValueReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ValueReplaceResponse> {
    return (
      this._client.put(
        `/accounts/${accountId}/storage/kv/namespaces/${namespaceId}/values/${keyName}`,
        multipartFormRequestOptions({ body, ...options }),
      ) as Core.APIPromise<{ result: ValueReplaceResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ValueDeleteResponse = unknown | string;

/**
 * A byte sequence to be stored, up to 25 MiB in length.
 */
export type ValueGetResponse = string;

export type ValueReplaceResponse = unknown | string;

export interface ValueReplaceParams {
  /**
   * Arbitrary JSON to be associated with a key/value pair.
   */
  metadata: string;

  /**
   * A byte sequence to be stored, up to 25 MiB in length.
   */
  value: string;
}

export namespace Values {
  export import ValueDeleteResponse = ValuesAPI.ValueDeleteResponse;
  export import ValueGetResponse = ValuesAPI.ValueGetResponse;
  export import ValueReplaceResponse = ValuesAPI.ValueReplaceResponse;
  export import ValueReplaceParams = ValuesAPI.ValueReplaceParams;
}
