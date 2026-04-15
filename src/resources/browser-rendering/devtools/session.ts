// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Session extends APIResource {
  /**
   * List active browser sessions.
   *
   * @example
   * ```ts
   * const sessions =
   *   await client.browserRendering.devtools.session.list({
   *     account_id: 'account_id',
   *   });
   * ```
   */
  list(params?: SessionListParams, options?: Core.RequestOptions): Core.APIPromise<SessionListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<SessionListResponse>;
  list(
    params: SessionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionListResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { account_id = this._client.accountId, ...query } = params;
    return this._client.get(`/accounts/${account_id}/browser-rendering/devtools/session`, {
      query,
      ...options,
    });
  }

  /**
   * Get details for a specific browser session.
   *
   * @example
   * ```ts
   * const session =
   *   await client.browserRendering.devtools.session.get(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  get(
    sessionId: string,
    params?: SessionGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionGetResponse | null>;
  get(sessionId: string, options?: Core.RequestOptions): Core.APIPromise<SessionGetResponse | null>;
  get(
    sessionId: string,
    params: SessionGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionGetResponse | null> {
    if (isRequestOptions(params)) {
      return this.get(sessionId, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return this._client.get(
      `/accounts/${account_id}/browser-rendering/devtools/session/${sessionId}`,
      options,
    );
  }
}

export type SessionListResponse = Array<SessionListResponse.SessionListResponseItem>;

export namespace SessionListResponse {
  export interface SessionListResponseItem {
    /**
     * Session ID.
     */
    sessionId: string;

    /**
     * Reason for session closure.
     */
    closeReason?: string;

    /**
     * Human-readable close reason.
     */
    closeReasonText?: string;

    /**
     * Connection end time.
     */
    connectionEndTime?: number;

    /**
     * Connection ID.
     */
    connectionId?: string;

    /**
     * Connection start time.
     */
    connectionStartTime?: number;

    /**
     * DevTools frontend URL.
     */
    devtoolsFrontendUrl?: string;

    /**
     * Session end time.
     */
    endTime?: number;

    /**
     * Last updated timestamp.
     */
    lastUpdated?: number;

    /**
     * Session start time.
     */
    startTime?: number;

    /**
     * WebSocket URL for debugging this target.
     */
    webSocketDebuggerUrl?: string;
  }
}

export interface SessionGetResponse {
  /**
   * Session ID.
   */
  sessionId: string;

  /**
   * Reason for session closure.
   */
  closeReason?: string;

  /**
   * Human-readable close reason.
   */
  closeReasonText?: string;

  /**
   * Connection end time.
   */
  connectionEndTime?: number;

  /**
   * Connection ID.
   */
  connectionId?: string;

  /**
   * Connection start time.
   */
  connectionStartTime?: number;

  /**
   * DevTools frontend URL.
   */
  devtoolsFrontendUrl?: string;

  /**
   * Session end time.
   */
  endTime?: number;

  /**
   * Last updated timestamp.
   */
  lastUpdated?: number;

  /**
   * Session start time.
   */
  startTime?: number;

  /**
   * WebSocket URL for debugging this target.
   */
  webSocketDebuggerUrl?: string;
}

export interface SessionListParams {
  /**
   * Path param: Account ID.
   */
  account_id?: string;

  /**
   * Query param
   */
  limit?: number;

  /**
   * Query param
   */
  offset?: number;
}

export interface SessionGetParams {
  /**
   * Account ID.
   */
  account_id?: string;
}

export declare namespace Session {
  export {
    type SessionListResponse as SessionListResponse,
    type SessionGetResponse as SessionGetResponse,
    type SessionListParams as SessionListParams,
    type SessionGetParams as SessionGetParams,
  };
}
