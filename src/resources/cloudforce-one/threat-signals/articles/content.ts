// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseContent extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatSignals', 'articles', 'content'] =
    Object.freeze(['cloudforceOne', 'threatSignals', 'articles', 'content'] as const);

  /**
   * Retrieves the stored content of a Threat Signals article, unchanged. Depending
   * on how the article was captured from its source, the content is HTML, Markdown,
   * or plain text. The format parameter sets only the response Content-Type; it does
   * not convert the content.
   *
   * @example
   * ```ts
   * const content =
   *   await client.cloudforceOne.threatSignals.articles.content.get(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  get(articleID: string, params: ContentGetParams, options?: RequestOptions): APIPromise<string> {
    const { account_id, ...query } = params;
    return this._client.get(
      path`/accounts/${account_id}/cloudforce-one/v2/threat-signals/articles/${articleID}/content`,
      { query, ...options, headers: buildHeaders([{ Accept: 'text/html' }, options?.headers]) },
    );
  }
}
export class Content extends BaseContent {}

export type ContentGetResponse = string;

export interface ContentGetParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Query param: Response Content-Type: text (the default) for text/plain or html
   * for text/html. Neither value converts the content. html is deprecated; use text.
   */
  format?: 'text' | 'html';
}

export declare namespace Content {
  export { type ContentGetResponse as ContentGetResponse, type ContentGetParams as ContentGetParams };
}
