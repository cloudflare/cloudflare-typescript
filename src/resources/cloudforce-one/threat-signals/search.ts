// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseSearch extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatSignals', 'search'] = Object.freeze([
    'cloudforceOne',
    'threatSignals',
    'search',
  ] as const);

  /**
   * Searches the account's Threat Signals articles using keyword and semantic
   * retrieval.
   *
   * @example
   * ```ts
   * const response =
   *   await client.cloudforceOne.threatSignals.search.search({
   *     account_id: 'account_id',
   *     query: 'x',
   *   });
   * ```
   */
  search(params: SearchSearchParams, options?: RequestOptions): APIPromise<SearchSearchResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(path`/accounts/${account_id}/cloudforce-one/v2/threat-signals/search`, {
        query,
        ...options,
      }) as APIPromise<{ result: SearchSearchResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Search extends BaseSearch {}

export interface SearchSearchResponse {
  /**
   * Number of unique article candidates returned in this response. Equal to
   * results.length.
   */
  count: number;

  results: Array<SearchSearchResponse.Result>;
}

export namespace SearchSearchResponse {
  export interface Result {
    article_id: string;

    dataset_id: string | null;

    event_id: string | null;

    feed_id: string;

    score: number;

    text: string;
  }
}

export interface SearchSearchParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Query param
   */
  query: string;

  /**
   * Query param
   */
  feed_id?: string;

  /**
   * Query param
   */
  max_results?: '' | (string & {});
}

export declare namespace Search {
  export { type SearchSearchResponse as SearchSearchResponse, type SearchSearchParams as SearchSearchParams };
}
