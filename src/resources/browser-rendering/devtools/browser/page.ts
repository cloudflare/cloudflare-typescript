// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BasePage extends APIResource {
  static override readonly _key: readonly ['browserRendering', 'devtools', 'browser', 'page'] = Object.freeze(
    ['browserRendering', 'devtools', 'browser', 'page'] as const,
  );

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
    const { account_id, session_id, 'cf-brapi-guardrails': cfBrapiGuardrails } = params;
    return this._client.get(
      path`/accounts/${account_id}/browser-rendering/devtools/browser/${session_id}/page/${targetID}`,
      {
        ...options,
        headers: buildHeaders([
          {
            Accept: '*/*',
            ...(cfBrapiGuardrails != null ? { 'cf-brapi-guardrails': cfBrapiGuardrails } : undefined),
          },
          options?.headers,
        ]),
      },
    );
  }
}
export class Page extends BasePage {}

export interface PageGetParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Path param: Browser session ID.
   */
  session_id: string;

  /**
   * Header param: Optional base64url-encoded JSON connection guardrails (mode)
   */
  'cf-brapi-guardrails'?: string;
}

export declare namespace Page {
  export { type PageGetParams as PageGetParams };
}
