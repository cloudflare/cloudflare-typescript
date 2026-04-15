// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';
import * as PageAPI from './page';
import { Page, PageGetParams } from './page';
import * as TargetsAPI from './targets';
import {
  TargetActivateParams,
  TargetActivateResponse,
  TargetCreateParams,
  TargetCreateResponse,
  TargetGetParams,
  TargetGetResponse,
  TargetListParams,
  TargetListResponse,
  Targets,
} from './targets';

export class Browser extends APIResource {
  page: PageAPI.Page = new PageAPI.Page(this._client);
  targets: TargetsAPI.Targets = new TargetsAPI.Targets(this._client);

  /**
   * Get a browser session ID.
   *
   * @example
   * ```ts
   * const browser =
   *   await client.browserRendering.devtools.browser.create({
   *     account_id: 'account_id',
   *   });
   * ```
   */
  create(params?: BrowserCreateParams, options?: Core.RequestOptions): Core.APIPromise<BrowserCreateResponse>;
  create(options?: Core.RequestOptions): Core.APIPromise<BrowserCreateResponse>;
  create(
    params: BrowserCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BrowserCreateResponse> {
    if (isRequestOptions(params)) {
      return this.create({}, params);
    }
    const { account_id = this._client.accountId, keep_alive, lab, recording, targets } = params;
    return this._client.post(`/accounts/${account_id}/browser-rendering/devtools/browser`, {
      query: { keep_alive, lab, recording, targets },
      ...options,
    });
  }

  /**
   * Closes an existing browser session.
   *
   * @example
   * ```ts
   * const browser =
   *   await client.browserRendering.devtools.browser.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  delete(
    sessionId: string,
    params?: BrowserDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BrowserDeleteResponse>;
  delete(sessionId: string, options?: Core.RequestOptions): Core.APIPromise<BrowserDeleteResponse>;
  delete(
    sessionId: string,
    params: BrowserDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BrowserDeleteResponse> {
    if (isRequestOptions(params)) {
      return this.delete(sessionId, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return this._client.delete(
      `/accounts/${account_id}/browser-rendering/devtools/browser/${sessionId}`,
      options,
    );
  }

  /**
   * Establishes a WebSocket connection to an existing browser session.
   *
   * @example
   * ```ts
   * await client.browserRendering.devtools.browser.connect(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  connect(
    sessionId: string,
    params?: BrowserConnectParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  connect(sessionId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  connect(
    sessionId: string,
    params: BrowserConnectParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.connect(sessionId, {}, params);
    }
    const { account_id = this._client.accountId, ...query } = params;
    return this._client.get(`/accounts/${account_id}/browser-rendering/devtools/browser/${sessionId}`, {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Acquires and establishes a WebSocket connection to a browser session.
   *
   * @example
   * ```ts
   * await client.browserRendering.devtools.browser.launch({
   *   account_id: 'account_id',
   * });
   * ```
   */
  launch(params?: BrowserLaunchParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  launch(options?: Core.RequestOptions): Core.APIPromise<void>;
  launch(
    params: BrowserLaunchParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.launch({}, params);
    }
    const { account_id = this._client.accountId, ...query } = params;
    return this._client.get(`/accounts/${account_id}/browser-rendering/devtools/browser`, {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Returns the complete Chrome DevTools Protocol schema including all domains,
   * commands, events, and types. This schema describes the entire CDP API surface.
   *
   * @example
   * ```ts
   * const response =
   *   await client.browserRendering.devtools.browser.protocol(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  protocol(
    sessionId: string,
    params?: BrowserProtocolParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BrowserProtocolResponse>;
  protocol(sessionId: string, options?: Core.RequestOptions): Core.APIPromise<BrowserProtocolResponse>;
  protocol(
    sessionId: string,
    params: BrowserProtocolParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BrowserProtocolResponse> {
    if (isRequestOptions(params)) {
      return this.protocol(sessionId, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return this._client.get(
      `/accounts/${account_id}/browser-rendering/devtools/browser/${sessionId}/json/protocol`,
      options,
    );
  }

  /**
   * Get browser version metadata.
   *
   * @example
   * ```ts
   * const response =
   *   await client.browserRendering.devtools.browser.version(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  version(
    sessionId: string,
    params?: BrowserVersionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BrowserVersionResponse>;
  version(sessionId: string, options?: Core.RequestOptions): Core.APIPromise<BrowserVersionResponse>;
  version(
    sessionId: string,
    params: BrowserVersionParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BrowserVersionResponse> {
    if (isRequestOptions(params)) {
      return this.version(sessionId, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return this._client.get(
      `/accounts/${account_id}/browser-rendering/devtools/browser/${sessionId}/json/version`,
      options,
    );
  }
}

export interface BrowserCreateResponse {
  /**
   * Browser session ID.
   */
  sessionId: string;

  /**
   * WebSocket URL for the session.
   */
  webSocketDebuggerUrl?: string;
}

export interface BrowserDeleteResponse {
  status: 'closing' | 'closed';
}

export interface BrowserProtocolResponse {
  /**
   * List of protocol domains.
   */
  domains: Array<BrowserProtocolResponse.Domain>;

  /**
   * Protocol version.
   */
  version?: BrowserProtocolResponse.Version;
}

export namespace BrowserProtocolResponse {
  export interface Domain {
    /**
     * Domain name.
     */
    domain: string;

    /**
     * Available commands.
     */
    commands?: Array<{ [key: string]: unknown }>;

    /**
     * Domain dependencies.
     */
    dependencies?: Array<string>;

    /**
     * Available events.
     */
    events?: Array<{ [key: string]: unknown }>;

    /**
     * Whether this domain is experimental.
     */
    experimental?: boolean;

    /**
     * Type definitions.
     */
    types?: Array<{ [key: string]: unknown }>;
  }

  /**
   * Protocol version.
   */
  export interface Version {
    /**
     * Major version.
     */
    major: string;

    /**
     * Minor version.
     */
    minor: string;
  }
}

export interface BrowserVersionResponse {
  /**
   * Browser name and version.
   */
  Browser: string;

  /**
   * Chrome DevTools Protocol version.
   */
  'Protocol-Version': string;

  /**
   * User agent string.
   */
  'User-Agent': string;

  /**
   * V8 JavaScript engine version.
   */
  'V8-Version': string;

  /**
   * WebKit version.
   */
  'WebKit-Version': string;

  /**
   * WebSocket URL for debugging the browser.
   */
  webSocketDebuggerUrl: string;
}

export interface BrowserCreateParams {
  /**
   * Path param: Account ID.
   */
  account_id?: string;

  /**
   * Query param: Keep-alive time in milliseconds.
   */
  keep_alive?: number;

  /**
   * Query param: Use experimental browser.
   */
  lab?: boolean;

  /**
   * Query param
   */
  recording?: boolean;

  /**
   * Query param: Include browser targets in response.
   */
  targets?: boolean;
}

export interface BrowserDeleteParams {
  /**
   * Account ID.
   */
  account_id?: string;
}

export interface BrowserConnectParams {
  /**
   * Path param: Account ID.
   */
  account_id?: string;

  /**
   * Query param: Keep-alive time in ms (only valid when acquiring new session).
   */
  keep_alive?: number;

  /**
   * Query param: Use experimental browser.
   */
  lab?: boolean;

  /**
   * Query param
   */
  recording?: boolean;
}

export interface BrowserLaunchParams {
  /**
   * Path param: Account ID.
   */
  account_id?: string;

  /**
   * Query param: Keep-alive time in ms (only valid when acquiring new session).
   */
  keep_alive?: number;

  /**
   * Query param: Use experimental browser.
   */
  lab?: boolean;

  /**
   * Query param
   */
  recording?: boolean;
}

export interface BrowserProtocolParams {
  /**
   * Account ID.
   */
  account_id?: string;
}

export interface BrowserVersionParams {
  /**
   * Account ID.
   */
  account_id?: string;
}

Browser.Page = Page;
Browser.Targets = Targets;

export declare namespace Browser {
  export {
    type BrowserCreateResponse as BrowserCreateResponse,
    type BrowserDeleteResponse as BrowserDeleteResponse,
    type BrowserProtocolResponse as BrowserProtocolResponse,
    type BrowserVersionResponse as BrowserVersionResponse,
    type BrowserCreateParams as BrowserCreateParams,
    type BrowserDeleteParams as BrowserDeleteParams,
    type BrowserConnectParams as BrowserConnectParams,
    type BrowserLaunchParams as BrowserLaunchParams,
    type BrowserProtocolParams as BrowserProtocolParams,
    type BrowserVersionParams as BrowserVersionParams,
  };

  export { Page as Page, type PageGetParams as PageGetParams };

  export {
    Targets as Targets,
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
