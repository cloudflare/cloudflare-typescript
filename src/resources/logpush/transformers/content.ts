// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseContent extends APIResource {
  static override readonly _key: readonly ['logpush', 'transformers', 'content'] = Object.freeze([
    'logpush',
    'transformers',
    'content',
  ] as const);

  /**
   * Returns the SQL query content for a transformer. Without query params, returns
   * the latest version. With `version_id`, returns the specified version.
   *
   * @example
   * ```ts
   * const content =
   *   await client.logpush.transformers.content.get(42, {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  get(
    transformerID: number,
    params: ContentGetParams,
    options?: RequestOptions,
  ): APIPromise<ContentGetResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(path`/accounts/${account_id}/logpush/transformers/${transformerID}/content`, {
        query,
        ...options,
      }) as APIPromise<{ result: ContentGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Content extends BaseContent {}

export interface ContentGetResponse {
  /**
   * The SQL query content.
   */
  content?: string;
}

export interface ContentGetParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Query param: Specific version ID to retrieve. When omitted, the latest version
   * is returned.
   */
  version_id?: number;
}

export declare namespace Content {
  export { type ContentGetResponse as ContentGetResponse, type ContentGetParams as ContentGetParams };
}
