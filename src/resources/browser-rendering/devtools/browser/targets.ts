// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Targets extends APIResource {
  /**
   * Opens a new tab in the browser. Optionally specify a URL to navigate to.
   *
   * @example
   * ```ts
   * const target =
   *   await client.browserRendering.devtools.browser.targets.create(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  create(
    sessionID: string,
    params: TargetCreateParams,
    options?: RequestOptions,
  ): APIPromise<TargetCreateResponse> {
    const { account_id, url } = params;
    return this._client.put(
      path`/accounts/${account_id}/browser-rendering/devtools/browser/${sessionID}/json/new`,
      { query: { url }, ...options },
    );
  }

  /**
   * Returns a list of all debuggable targets including tabs, pages, service workers,
   * and other browser contexts.
   *
   * @example
   * ```ts
   * const targets =
   *   await client.browserRendering.devtools.browser.targets.list(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  list(
    sessionID: string,
    params: TargetListParams,
    options?: RequestOptions,
  ): APIPromise<TargetListResponse> {
    const { account_id } = params;
    return this._client.get(
      path`/accounts/${account_id}/browser-rendering/devtools/browser/${sessionID}/json/list`,
      options,
    );
  }

  /**
   * Activates (brings to front) a specific browser target by its ID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.browserRendering.devtools.browser.targets.activate(
   *     'target_id',
   *     {
   *       account_id: 'account_id',
   *       session_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     },
   *   );
   * ```
   */
  activate(
    targetID: string,
    params: TargetActivateParams,
    options?: RequestOptions,
  ): APIPromise<TargetActivateResponse> {
    const { account_id, session_id } = params;
    return this._client.get(
      path`/accounts/${account_id}/browser-rendering/devtools/browser/${session_id}/json/activate/${targetID}`,
      options,
    );
  }

  /**
   * Returns the debuggable target with the given ID.
   *
   * @example
   * ```ts
   * const target =
   *   await client.browserRendering.devtools.browser.targets.get(
   *     'target_id',
   *     {
   *       account_id: 'account_id',
   *       session_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     },
   *   );
   * ```
   */
  get(targetID: string, params: TargetGetParams, options?: RequestOptions): APIPromise<TargetGetResponse> {
    const { account_id, session_id } = params;
    return this._client.get(
      path`/accounts/${account_id}/browser-rendering/devtools/browser/${session_id}/json/list/${targetID}`,
      options,
    );
  }
}

export interface TargetCreateResponse {
  /**
   * Target ID.
   */
  id: string;

  /**
   * Target type (page, background_page, worker, etc.).
   */
  type: string;

  /**
   * URL of the target.
   */
  url: string;

  /**
   * Target description.
   */
  description?: string;

  /**
   * DevTools frontend URL.
   */
  devtoolsFrontendUrl?: string;

  /**
   * Title of the target.
   */
  title?: string;

  /**
   * WebSocket URL for debugging this target.
   */
  webSocketDebuggerUrl?: string;
}

export type TargetListResponse = Array<TargetListResponse.TargetListResponseItem>;

export namespace TargetListResponse {
  export interface TargetListResponseItem {
    /**
     * Target ID.
     */
    id: string;

    /**
     * Target type (page, background_page, worker, etc.).
     */
    type: string;

    /**
     * URL of the target.
     */
    url: string;

    /**
     * Target description.
     */
    description?: string;

    /**
     * DevTools frontend URL.
     */
    devtoolsFrontendUrl?: string;

    /**
     * Title of the target.
     */
    title?: string;

    /**
     * WebSocket URL for debugging this target.
     */
    webSocketDebuggerUrl?: string;
  }
}

export interface TargetActivateResponse {
  /**
   * Target activated.
   */
  message: string;
}

export interface TargetGetResponse {
  /**
   * Target ID.
   */
  id: string;

  /**
   * Target type (page, background_page, worker, etc.).
   */
  type: string;

  /**
   * URL of the target.
   */
  url: string;

  /**
   * Target description.
   */
  description?: string;

  /**
   * DevTools frontend URL.
   */
  devtoolsFrontendUrl?: string;

  /**
   * Title of the target.
   */
  title?: string;

  /**
   * WebSocket URL for debugging this target.
   */
  webSocketDebuggerUrl?: string;
}

export interface TargetCreateParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Query param
   */
  url?: string;
}

export interface TargetListParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export interface TargetActivateParams {
  /**
   * Account ID.
   */
  account_id: string;

  /**
   * Browser session ID.
   */
  session_id: string;
}

export interface TargetGetParams {
  /**
   * Account ID.
   */
  account_id: string;

  /**
   * Browser session ID.
   */
  session_id: string;
}

export declare namespace Targets {
  export {
    type TargetCreateResponse as TargetCreateResponse,
    type TargetListResponse as TargetListResponse,
    type TargetActivateResponse as TargetActivateResponse,
    type TargetGetResponse as TargetGetResponse,
    type TargetCreateParams as TargetCreateParams,
    type TargetListParams as TargetListParams,
    type TargetActivateParams as TargetActivateParams,
    type TargetGetParams as TargetGetParams,
  };
}
