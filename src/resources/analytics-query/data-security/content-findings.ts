// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseContentFindings extends APIResource {
  static override readonly _key: readonly ['analyticsQuery', 'dataSecurity', 'contentFindings'] =
    Object.freeze(['analyticsQuery', 'dataSecurity', 'contentFindings'] as const);

  /**
   * Returns the top N integrations ranked by total content findings.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const contentFindingTopNResponse of client.analyticsQuery.dataSecurity.contentFindings.topN(
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     filters: [],
   *     from: '2024-11-01T00:00:00Z',
   *     n: 10,
   *     to: '2024-11-08T00:00:00Z',
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  topN(
    params: ContentFindingTopNParams,
    options?: RequestOptions,
  ): PagePromise<ContentFindingTopNResponsesSinglePage, ContentFindingTopNResponse> {
    const { account_id, ...body } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/analytics/query/data-security/content-findings/top-n`,
      SinglePage<ContentFindingTopNResponse>,
      { body, method: 'post', ...options },
    );
  }
}
export class ContentFindings extends BaseContentFindings {}

export type ContentFindingTopNResponsesSinglePage = SinglePage<ContentFindingTopNResponse>;

/**
 * Maps field names to values. Keys represent stat names and group-by column names.
 * Values depend on the dataset (strings, numbers, booleans).
 */
export type ContentFindingTopNResponse = { [key: string]: unknown };

export interface ContentFindingTopNParams {
  /**
   * Path param: Cloudflare account identifier.
   */
  account_id: string;

  /**
   * Body param: Filters to apply. `findingType = content` is applied automatically
   * for CASB data.
   */
  filters: Array<ContentFindingTopNParams.Filter>;

  /**
   * Body param: Start of the query time range (inclusive). RFC3339.
   */
  from: string;

  /**
   * Body param: Maximum number of integrations to return.
   */
  n: number;

  /**
   * Body param: End of the query time range (exclusive). RFC3339.
   */
  to: string;
}

export namespace ContentFindingTopNParams {
  /**
   * A filter to apply to the query.
   */
  export interface Filter {
    /**
     * Specifies the column name to filter on. Requires a valid column for the target
     * dataset (e.g. `country`, `allowed`, `appId`).
     */
    name: string;

    /**
     * Filter operator. Common values: `eq`, `neq`, `in`, `not_in`, `gt`, `lt`, `gte`,
     * `lte`.
     */
    op: string;

    /**
     * Values to match against. Type depends on the column.
     */
    values: Array<string | boolean | number>;
  }
}

export declare namespace ContentFindings {
  export {
    type ContentFindingTopNResponse as ContentFindingTopNResponse,
    type ContentFindingTopNResponsesSinglePage as ContentFindingTopNResponsesSinglePage,
    type ContentFindingTopNParams as ContentFindingTopNParams,
  };
}
