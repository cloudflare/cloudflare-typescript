// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as NamespacesAPI from './namespaces';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Metadata extends APIResource {
  /**
   * Returns the metadata associated with the given key in the given namespace. Use
   * URL-encoding to use special characters (for example, `:`, `!`, `%`) in the key
   * name.
   *
   * @example
   * ```ts
   * const any = await client.kv.namespaces.metadata.get(
   *   'My-Key',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     namespace_id: '0f2ac74b498b48028cb68387c421e279',
   *   },
   * );
   * ```
   */
  get(keyName: string, params: MetadataGetParams, options?: RequestOptions): APIPromise<NamespacesAPI.Any> {
    const { account_id, namespace_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/storage/kv/namespaces/${namespace_id}/metadata/${keyName}`,
        options,
      ) as APIPromise<{ result: NamespacesAPI.Any }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface MetadataGetParams {
  /**
   * Identifier.
   */
  account_id: string;

  /**
   * Namespace identifier tag.
   */
  namespace_id: string;
}

export declare namespace Metadata {
  export { type MetadataGetParams as MetadataGetParams };
}
