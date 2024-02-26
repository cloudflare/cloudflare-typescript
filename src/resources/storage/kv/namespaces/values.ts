// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ValuesAPI from 'cloudflare/resources/storage/kv/namespaces/values';
import { multipartFormRequestOptions } from 'cloudflare/core';

export class Values extends APIResource {
  /**
   * Write a value identified by a key. Use URL-encoding to use special characters
   * (for example, `:`, `!`, `%`) in the key name. Body should be the value to be
   * stored along with JSON metadata to be associated with the key/value pair.
   * Existing values, expirations, and metadata will be overwritten. If neither
   * `expiration` nor `expiration_ttl` is specified, the key-value pair will never
   * expire. If both are set, `expiration_ttl` is used and `expiration` is ignored.
   */
  update(
    namespaceId: string,
    keyName: string,
    params: ValueUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ValueUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(
        `/accounts/${account_id}/storage/kv/namespaces/${namespaceId}/values/${keyName}`,
        multipartFormRequestOptions({ body, ...options }),
      ) as Core.APIPromise<{ result: ValueUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Remove a KV pair from the namespace. Use URL-encoding to use special characters
   * (for example, `:`, `!`, `%`) in the key name.
   */
  delete(
    namespaceId: string,
    keyName: string,
    params: ValueDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ValueDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/storage/kv/namespaces/${namespaceId}/values/${keyName}`,
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
    namespaceId: string,
    keyName: string,
    params: ValueGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    const { account_id } = params;
    return this._client.get(
      `/accounts/${account_id}/storage/kv/namespaces/${namespaceId}/values/${keyName}`,
      { ...options, headers: { Accept: 'application/json', ...options?.headers } },
    );
  }
}

export type ValueUpdateResponse = unknown | string;

export type ValueDeleteResponse = unknown | string;

/**
 * A byte sequence to be stored, up to 25 MiB in length.
 */
export type ValueGetResponse = string;

export interface ValueUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: Arbitrary JSON to be associated with a key/value pair.
   */
  metadata: string;

  /**
   * Body param: A byte sequence to be stored, up to 25 MiB in length.
   */
  value: string;
}

export interface ValueDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface ValueGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Values {
  export import ValueUpdateResponse = ValuesAPI.ValueUpdateResponse;
  export import ValueDeleteResponse = ValuesAPI.ValueDeleteResponse;
  export import ValueGetResponse = ValuesAPI.ValueGetResponse;
  export import ValueUpdateParams = ValuesAPI.ValueUpdateParams;
  export import ValueDeleteParams = ValuesAPI.ValueDeleteParams;
  export import ValueGetParams = ValuesAPI.ValueGetParams;
}
