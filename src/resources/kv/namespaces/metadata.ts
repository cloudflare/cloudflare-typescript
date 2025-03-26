// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Metadata extends APIResource {
  /**
   * Returns the metadata associated with the given key in the given namespace. Use
   * URL-encoding to use special characters (for example, `:`, `!`, `%`) in the key
   * name.
   */
  get(keyName: string, params: MetadataGetParams, options?: RequestOptions): APIPromise<MetadataGetResponse> {
    const { account_id, namespace_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/storage/kv/namespaces/${namespace_id}/metadata/${keyName}`,
        options,
      ) as APIPromise<{ result: MetadataGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Arbitrary JSON that is associated with a key.
 */
export type MetadataGetResponse = Record<string, unknown>;

export interface MetadataGetParams {
  /**
   * Identifier
   */
  account_id: string;

  /**
   * Namespace identifier tag.
   */
  namespace_id: string;
}

export declare namespace Metadata {
  export { type MetadataGetResponse as MetadataGetResponse, type MetadataGetParams as MetadataGetParams };
}
