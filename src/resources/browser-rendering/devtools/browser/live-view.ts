// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseLiveView extends APIResource {
  static override readonly _key: readonly ['browserRendering', 'devtools', 'browser', 'liveView'] =
    Object.freeze(['browserRendering', 'devtools', 'browser', 'liveView'] as const);

  /**
   * Generates time-limited URLs to view a remote browser session. Set
   * `guardrails: { mode: 'readonly' }` to create a view-only link.
   *
   * @example
   * ```ts
   * const liveView =
   *   await client.browserRendering.devtools.browser.liveView.create(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  create(
    sessionID: string,
    params: LiveViewCreateParams,
    options?: RequestOptions,
  ): APIPromise<LiveViewCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(
      path`/accounts/${account_id}/browser-rendering/devtools/browser/${sessionID}/live_view`,
      { body, ...options },
    );
  }
}
export class LiveView extends BaseLiveView {}

export interface LiveViewCreateResponse {
  /**
   * Target ID
   */
  id: string;

  /**
   * URL to open the live view in a browser
   */
  devtoolsFrontendUrl: string;

  options: LiveViewCreateResponse.Options;

  /**
   * WebSocket URL for CDP connection
   */
  webSocketDebuggerUrl: string;
}

export namespace LiveViewCreateResponse {
  export interface Options {
    /**
     * UI mode for the live view
     */
    mode: 'devtools' | 'tab' | 'full';

    /**
     * Connection guardrails applied to this link
     */
    guardrails?: Options.Guardrails;
  }

  export namespace Options {
    /**
     * Connection guardrails applied to this link
     */
    export interface Guardrails {
      mode: 'readonly';
    }
  }
}

export interface LiveViewCreateParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Body param: How long the live view URLs remain valid, in milliseconds. Default:
   * 5 minutes. Max: 60 minutes.
   */
  expiresInMs?: number;

  /**
   * Body param: Connection guardrails. Use `{ mode: 'readonly' }` to generate a
   * view-only link.
   */
  guardrails?: LiveViewCreateParams.Guardrails;

  /**
   * Body param: UI mode: 'devtools' (Chrome DevTools), 'tab' (single tab view),
   * 'full' (multi-tab browser)
   */
  mode?: 'devtools' | 'tab' | 'full';

  /**
   * Body param: Target ID (page) to connect to. If omitted, auto-resolves to the
   * first active page.
   */
  targetId?: string;
}

export namespace LiveViewCreateParams {
  /**
   * Connection guardrails. Use `{ mode: 'readonly' }` to generate a view-only link.
   */
  export interface Guardrails {
    mode: 'readonly';
  }
}

export declare namespace LiveView {
  export {
    type LiveViewCreateResponse as LiveViewCreateResponse,
    type LiveViewCreateParams as LiveViewCreateParams,
  };
}
