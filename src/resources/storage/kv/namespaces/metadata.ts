// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as MetadataAPI from 'cloudflare/resources/storage/kv/namespaces/metadata';

export class Metadata extends APIResource {
  /**
   * Returns the metadata associated with the given key in the given namespace. Use
   * URL-encoding to use special characters (for example, `:`, `!`, `%`) in the key
   * name.
   */
  get(
    accountId: string,
    namespaceId: string,
    keyName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MetadataGetResponse> {
    return (
      this._client.get(
        `/accounts/${accountId}/storage/kv/namespaces/${namespaceId}/metadata/${keyName}`,
        options,
      ) as Core.APIPromise<{ result: MetadataGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Arbitrary JSON that is associated with a key.
 */
export type MetadataGetResponse = unknown;

export namespace Metadata {
  export import MetadataGetResponse = MetadataAPI.MetadataGetResponse;
}
