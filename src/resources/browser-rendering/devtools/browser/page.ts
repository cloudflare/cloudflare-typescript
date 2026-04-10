// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Page extends APIResource {
  /**
   * Establishes a WebSocket connection to a specific Chrome DevTools target or page.
   *
   * @example
   * ```ts
   * await client.browserRendering.devtools.browser.page.get(
   *   'target_id',
   *   {
   *     account_id: 'account_id',
   *     session_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   },
   * );
   * ```
   */
  get(targetID: string, params: PageGetParams, options?: RequestOptions): APIPromise<void> {
    const { account_id, session_id } = params;
    return this._client.get(
      path`/accounts/${account_id}/browser-rendering/devtools/browser/${session_id}/page/${targetID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }
}

export interface PageGetParams {
  /**
   * Account ID.
   */
  account_id: string;

  /**
   * Browser session ID.
   */
  session_id: string;
}

export declare namespace Page {
  export { type PageGetParams as PageGetParams };
}
