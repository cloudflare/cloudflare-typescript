// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import * as MetadataAPI from './metadata';

export class Metadata extends APIResource {
  /**
   * Returns the metadata associated with the given key in the given namespace. Use
   * URL-encoding to use special characters (for example, `:`, `!`, `%`) in the key
   * name.
   */
  get(namespaceId: string, keyName: string, params: MetadataGetParams, options?: Core.RequestOptions): Core.APIPromise<MetadataGetResponse> {
    const { account_id } = params;
    return (this._client.get(`/accounts/${account_id}/storage/kv/namespaces/${namespaceId}/metadata/${keyName}`, options) as Core.APIPromise<{ result: MetadataGetResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Arbitrary JSON that is associated with a key.
 */
export type MetadataGetResponse = Record<string, unknown>

export interface MetadataGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Metadata {
  export import MetadataGetResponse = MetadataAPI.MetadataGetResponse;
  export import MetadataGetParams = MetadataAPI.MetadataGetParams;
}
