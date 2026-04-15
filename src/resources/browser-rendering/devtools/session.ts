// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseSession extends APIResource {
  static override readonly _key: readonly ['browserRendering', 'devtools', 'session'] = Object.freeze([
    'browserRendering',
    'devtools',
    'session',
  ] as const);

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
  list(
    params: SessionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SessionListResponse> {
    const { account_id = this._client.accountID, ...query } = params ?? {};
    return this._client.get(path`/accounts/${account_id}/browser-rendering/devtools/session`, {
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
    sessionID: string,
    params: SessionGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SessionGetResponse | null> {
    const { account_id = this._client.accountID } = params ?? {};
    return this._client.get(
      path`/accounts/${account_id}/browser-rendering/devtools/session/${sessionID}`,
      options,
    );
  }
}
export class Session extends BaseSession {}

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
