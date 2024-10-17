// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as ValuesAPI from './values';
import { type Response } from '../../../_shims/index';

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
    namespaceId: string,
    keyName: string,
    params: ValueUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ValueUpdateResponse | null> {
    const { account_id, expiration, expiration_ttl, ...body } = params;
    return (
      this._client.put(
        `/accounts/${account_id}/storage/kv/namespaces/${namespaceId}/values/${keyName}`,
        Core.maybeMultipartFormRequestOptions({
          query: { expiration, expiration_ttl },
          body,
          ...options,
          headers: { 'Content-Type': '', ...options?.headers },
        }),
      ) as Core.APIPromise<{ result: ValueUpdateResponse | null }>
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
  ): Core.APIPromise<ValueDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/storage/kv/namespaces/${namespaceId}/values/${keyName}`,
        options,
      ) as Core.APIPromise<{ result: ValueDeleteResponse | null }>
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
  ): Core.APIPromise<Response> {
    const { account_id } = params;
    return this._client.get(
      `/accounts/${account_id}/storage/kv/namespaces/${namespaceId}/values/${keyName}`,
      { ...options, __binaryResponse: true },
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
  export import ValueUpdateParams = ValuesAPI.ValueUpdateParams;
  export import ValueDeleteParams = ValuesAPI.ValueDeleteParams;
  export import ValueGetParams = ValuesAPI.ValueGetParams;
}
