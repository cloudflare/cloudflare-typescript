// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';

export class Page extends APIResource {
  /**
   * Establishes a WebSocket connection to a specific Chrome DevTools target or page.
   *
   * @example
   * ```ts
   * await client.browserRendering.devtools.browser.page.get(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   'target_id',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  get(
    sessionId: string,
    targetId: string,
    params: PageGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { account_id } = params;
    return this._client.get(
      `/accounts/${account_id}/browser-rendering/devtools/browser/${sessionId}/page/${targetId}`,
      { ...options, headers: { Accept: '*/*', ...options?.headers } },
    );
  }
}

export interface PageGetParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export declare namespace Page {
  export { type PageGetParams as PageGetParams };
}
