// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';

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
    sessionId: string,
    params: TargetCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TargetCreateResponse> {
    const { account_id, url } = params;
    return this._client.put(
      `/accounts/${account_id}/browser-rendering/devtools/browser/${sessionId}/json/new`,
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
    sessionId: string,
    params: TargetListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TargetListResponse> {
    const { account_id } = params;
    return this._client.get(
      `/accounts/${account_id}/browser-rendering/devtools/browser/${sessionId}/json/list`,
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
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     'target_id',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  activate(
    sessionId: string,
    targetId: string,
    params: TargetActivateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TargetActivateResponse> {
    const { account_id } = params;
    return this._client.get(
      `/accounts/${account_id}/browser-rendering/devtools/browser/${sessionId}/json/activate/${targetId}`,
      options,
    );
  }

  /**
   * Closes a specific browser target (tab, page, etc.) by its ID. Returns 'Target is
   * closing' on success or an error if the target is not found.
   *
   * @example
   * ```ts
   * const response =
   *   await client.browserRendering.devtools.browser.targets.close(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     'target_id',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  close(
    sessionId: string,
    targetId: string,
    params: TargetCloseParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TargetCloseResponse> {
    const { account_id } = params;
    return this._client.get(
      `/accounts/${account_id}/browser-rendering/devtools/browser/${sessionId}/json/close/${targetId}`,
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
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     'target_id',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  get(
    sessionId: string,
    targetId: string,
    params: TargetGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TargetGetResponse> {
    const { account_id } = params;
    return this._client.get(
      `/accounts/${account_id}/browser-rendering/devtools/browser/${sessionId}/json/list/${targetId}`,
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

export interface TargetCloseResponse {
  /**
   * Target is closing.
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
}

export interface TargetCloseParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export interface TargetGetParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export declare namespace Targets {
  export {
    type TargetCreateResponse as TargetCreateResponse,
    type TargetListResponse as TargetListResponse,
    type TargetActivateResponse as TargetActivateResponse,
    type TargetCloseResponse as TargetCloseResponse,
    type TargetGetResponse as TargetGetResponse,
    type TargetCreateParams as TargetCreateParams,
    type TargetListParams as TargetListParams,
    type TargetActivateParams as TargetActivateParams,
    type TargetCloseParams as TargetCloseParams,
    type TargetGetParams as TargetGetParams,
  };
}
