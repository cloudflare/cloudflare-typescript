// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseMetadata extends APIResource {
  static override readonly _key: readonly ['kv', 'namespaces', 'metadata'] = Object.freeze([
    'kv',
    'namespaces',
    'metadata',
  ] as const);

  /**
   * Returns the JSON metadata associated with the specified key in the Workers KV
   * namespace, without retrieving its value. Use URL-encoding for special characters
   * (for example, `:`, `!`, `%`) in the key name when constructing the request URL.
   *
   * @example
   * ```ts
   * const metadata = await client.kv.namespaces.metadata.get(
   *   'My-Key',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     namespace_id: '0f2ac74b498b48028cb68387c421e279',
   *   },
   * );
   * ```
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
export class Metadata extends BaseMetadata {}

/**
 * Arbitrary JSON that is associated with a key.
 */
export type MetadataGetResponse = unknown;

export interface MetadataGetParams {
  /**
   * ID of the Cloudflare account that owns the Workers KV namespaces.
   */
  account_id: string;

  /**
   * ID of the Workers KV namespace.
   */
  namespace_id: string;
}

export declare namespace Metadata {
  export { type MetadataGetResponse as MetadataGetResponse, type MetadataGetParams as MetadataGetParams };
}
