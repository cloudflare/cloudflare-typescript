// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseVersions extends APIResource {
  static override readonly _key: readonly ['logpush', 'transformers', 'versions'] = Object.freeze([
    'logpush',
    'transformers',
    'versions',
  ] as const);

  /**
   * Returns version metadata for a transformer, newest first. Each version
   * corresponds to a SQL query update.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const versionListResponse of client.logpush.transformers.versions.list(
   *   42,
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    transformerID: number,
    params: VersionListParams,
    options?: RequestOptions,
  ): PagePromise<VersionListResponsesSinglePage, VersionListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/logpush/transformers/${transformerID}/versions`,
      SinglePage<VersionListResponse>,
      { query, ...options },
    );
  }
}
export class Versions extends BaseVersions {}

export type VersionListResponsesSinglePage = SinglePage<VersionListResponse>;

export interface VersionListResponse {
  /**
   * Unique identifier for this version.
   */
  id?: number;

  /**
   * When this version was created (RFC 3339).
   */
  created_at?: string;

  /**
   * Sequential version number.
   */
  version?: number;
}

export interface VersionListParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Query param: Maximum number of versions to return.
   */
  limit?: number;
}

export declare namespace Versions {
  export {
    type VersionListResponse as VersionListResponse,
    type VersionListResponsesSinglePage as VersionListResponsesSinglePage,
    type VersionListParams as VersionListParams,
  };
}
