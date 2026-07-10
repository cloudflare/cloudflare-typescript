// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as V1API from '../v1/v1';
import * as DirectUploadsAPI from './direct-uploads';
import {
  BaseDirectUploads,
  DirectUploadCreateParams,
  DirectUploadCreateResponse,
  DirectUploads,
} from './direct-uploads';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseV2 extends APIResource {
  static override readonly _key: readonly ['images', 'v2'] = Object.freeze(['images', 'v2'] as const);

  /**
   * List up to 10000 images with up to 1000 results per page. Use the optional
   * parameters below to get a specific range of images. Pagination is supported via
   * continuation_token.
   *
   * **Metadata Filtering (Optional):**
   *
   * You can optionally filter images by custom metadata fields using the
   * `meta.<field>[<operator>]=<value>` syntax.
   *
   * **Supported Operators:**
   *
   * - `eq` / `eq:string` / `eq:number` / `eq:boolean` - Exact match
   * - `in` / `in:string` / `in:number` - Match any value in list (pipe-separated)
   *
   * **Metadata Filter Constraints:**
   *
   * - Maximum 5 metadata filters per request
   * - Maximum 5 levels of nesting (e.g., `meta.first.second.third.fourth.fifth`)
   * - Maximum 10 elements for list operators (`in`)
   * - Supports string, number, and boolean value types
   *
   * **Examples:**
   *
   * ```
   * # List all images
   * /images/v2
   *
   * # Filter by metadata [eq]
   * /images/v2?meta.status[eq:string]=active
   *
   * # Filter by metadata [in]
   * /images/v2?meta.status[in]=pending|deleted|flagged
   *
   * # Filter by metadata [in:number]
   * /images/v2?meta.ratings[in:number]=4|5
   *
   * # Filter by nested metadata
   * /images/v2?meta.region.name[eq]=eu-west
   *
   * # Combine metadata filters with creator
   * /images/v2?meta.status[eq]=active&creator=user123
   *
   * # Multiple metadata filters (AND logic)
   * /images/v2?meta.status[eq]=active&meta.priority[eq:number]=5
   * ```
   *
   * @example
   * ```ts
   * const v2s = await client.images.v2.list({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  list(params: V2ListParams, options?: RequestOptions): APIPromise<V2ListResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(path`/accounts/${account_id}/images/v2`, { query, ...options }) as APIPromise<{
        result: V2ListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class V2 extends BaseV2 {
  directUploads: DirectUploadsAPI.DirectUploads = new DirectUploadsAPI.DirectUploads(this._client);
}

export interface V2ListResponse {
  /**
   * Continuation token to fetch next page. Passed as a query param when requesting
   * List V2 api endpoint.
   */
  continuation_token?: string | null;

  images?: Array<V1API.Image>;
}

export interface V2ListParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Query param: Continuation token to fetch next page. Passed as a query param when
   * requesting List V2 api endpoint.
   */
  continuation_token?: string | null;

  /**
   * Query param: Internal user ID set within the creator field. Setting to empty
   * string "" will return images where creator field is not set
   */
  creator?: string | null;

  /**
   * Query param
   */
  meta?: V2ListParams.Meta;

  /**
   * Query param: Number of items per page
   */
  per_page?: number;

  /**
   * Query param: Sorting order by upload time
   */
  sort_order?: 'asc' | 'desc';
}

export namespace V2ListParams {
  export interface Meta {
    /**
     * Optional metadata filter(s). Multiple filters can be combined with AND logic.
     *
     * **Operators:**
     *
     * - `eq`, `eq:string`, `eq:number`, `eq:boolean` - Exact match
     * - `in`, `in:string`, `in:number` - Match any value in pipe-separated list
     *
     * **Examples:**
     *
     * - `meta.status[eq]=active`
     * - `meta.priority[eq:number]=5`
     * - `meta.enabled[eq:boolean]=true`
     * - `meta.region[in]=us-east|us-west|eu-west`
     */
    '<field>[<operator>]'?: string;
  }
}

V2.DirectUploads = DirectUploads;
V2.BaseDirectUploads = BaseDirectUploads;

export declare namespace V2 {
  export { type V2ListResponse as V2ListResponse, type V2ListParams as V2ListParams };

  export {
    DirectUploads as DirectUploads,
    BaseDirectUploads as BaseDirectUploads,
    type DirectUploadCreateResponse as DirectUploadCreateResponse,
    type DirectUploadCreateParams as DirectUploadCreateParams,
  };
}
