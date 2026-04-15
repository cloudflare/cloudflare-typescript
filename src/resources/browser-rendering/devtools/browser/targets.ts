// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
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
    params?: TargetCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TargetCreateResponse>;
  create(sessionId: string, options?: Core.RequestOptions): Core.APIPromise<TargetCreateResponse>;
  create(
    sessionId: string,
    params: TargetCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TargetCreateResponse> {
    if (isRequestOptions(params)) {
      return this.create(sessionId, {}, params);
    }
    const { account_id = this._client.accountId, url } = params;
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
    params?: TargetListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TargetListResponse>;
  list(sessionId: string, options?: Core.RequestOptions): Core.APIPromise<TargetListResponse>;
  list(
    sessionId: string,
    params: TargetListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TargetListResponse> {
    if (isRequestOptions(params)) {
      return this.list(sessionId, {}, params);
    }
    const { account_id = this._client.accountId } = params;
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
    params?: TargetActivateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TargetActivateResponse>;
  activate(
    sessionId: string,
    targetId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TargetActivateResponse>;
  activate(
    sessionId: string,
    targetId: string,
    params: TargetActivateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TargetActivateResponse> {
    if (isRequestOptions(params)) {
      return this.activate(sessionId, targetId, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return this._client.get(
      `/accounts/${account_id}/browser-rendering/devtools/browser/${sessionId}/json/activate/${targetId}`,
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
    params?: TargetGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TargetGetResponse>;
  get(sessionId: string, targetId: string, options?: Core.RequestOptions): Core.APIPromise<TargetGetResponse>;
  get(
    sessionId: string,
    targetId: string,
    params: TargetGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TargetGetResponse> {
    if (isRequestOptions(params)) {
      return this.get(sessionId, targetId, {}, params);
    }
    const { account_id = this._client.accountId } = params;
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
  account_id?: string;

  /**
   * Query param
   */
  url?: string;
}

export interface TargetListParams {
  /**
   * Account ID.
   */
  account_id?: string;
}

export interface TargetActivateParams {
  /**
   * Account ID.
   */
  account_id?: string;
}

export interface TargetGetParams {
  /**
   * Account ID.
   */
  account_id?: string;
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
