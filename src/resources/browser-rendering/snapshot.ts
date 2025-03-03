// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Snapshot extends APIResource {
  /**
   * Returns the page's HTML content and screenshot. Control page loading with
   * `goToOptions` and `waitFor*` options. Customize screenshots with `viewport`,
   * `fullPage`, `clip` and others.
   */
  create(
    accountId: string,
    params?: SnapshotCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SnapshotCreateResponse>;
  create(accountId: string, options?: Core.RequestOptions): Core.APIPromise<SnapshotCreateResponse>;
  create(
    accountId: string,
    params: SnapshotCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SnapshotCreateResponse> {
    if (isRequestOptions(params)) {
      return this.create(accountId, {}, params);
    }
    const { cacheTTL, ...body } = params;
    return (
      this._client.post(`/accounts/${accountId}/browser-rendering/snapshot`, {
        query: { cacheTTL },
        body,
        ...options,
      }) as Core.APIPromise<{ result: SnapshotCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SnapshotCreateResponse {
  /**
   * HTML content
   */
  content: string;

  /**
   * Base64 encoded image
   */
  screenshot: string;
}

export interface SnapshotCreateParams {
  /**
   * Query param: Cache TTL default is 5s. Set to 0 to disable.
   */
  cacheTTL?: number;

  /**
   * Body param: Adds a `<script>` tag into the page with the desired URL or content.
   */
  addScriptTag?: Array<SnapshotCreateParams.AddScriptTag>;

  /**
   * Body param: Adds a `<link rel="stylesheet">` tag into the page with the desired
   * URL or a `<style type="text/css">` tag with the content.
   */
  addStyleTag?: Array<SnapshotCreateParams.AddStyleTag>;

  /**
   * Body param: Only allow requests that match the provided regex patterns, eg.
   * '/^.\*\.(css)'.
   */
  allowRequestPattern?: Array<string>;

  /**
   * Body param: Only allow requests that match the provided resource types, eg.
   * 'image' or 'script'.
   */
  allowResourceTypes?: Array<
    | 'document'
    | 'stylesheet'
    | 'image'
    | 'media'
    | 'font'
    | 'script'
    | 'texttrack'
    | 'xhr'
    | 'fetch'
    | 'prefetch'
    | 'eventsource'
    | 'websocket'
    | 'manifest'
    | 'signedexchange'
    | 'ping'
    | 'cspviolationreport'
    | 'preflight'
    | 'other'
  >;

  /**
   * Body param: Provide credentials for HTTP authentication.
   */
  authenticate?: SnapshotCreateParams.Authenticate;

  /**
   * Body param: Attempt to proceed when 'awaited' events fail or timeout.
   */
  bestAttempt?: boolean;

  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.page.setcookie).
   */
  cookies?: Array<SnapshotCreateParams.Cookie>;

  /**
   * Body param:
   */
  emulateMediaType?: string;

  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.gotooptions).
   */
  gotoOptions?: SnapshotCreateParams.GotoOptions;

  /**
   * Body param: Set the content of the page, eg: `<h1>Hello World!!</h1>`. Either
   * `html` or `url` must be set.
   */
  html?: string;

  /**
   * Body param: Block undesired requests that match the provided regex patterns, eg.
   * '/^.\*\.(css)'.
   */
  rejectRequestPattern?: Array<string>;

  /**
   * Body param: Block undesired requests that match the provided resource types, eg.
   * 'image' or 'script'.
   */
  rejectResourceTypes?: Array<
    | 'document'
    | 'stylesheet'
    | 'image'
    | 'media'
    | 'font'
    | 'script'
    | 'texttrack'
    | 'xhr'
    | 'fetch'
    | 'prefetch'
    | 'eventsource'
    | 'websocket'
    | 'manifest'
    | 'signedexchange'
    | 'ping'
    | 'cspviolationreport'
    | 'preflight'
    | 'other'
  >;

  /**
   * Body param:
   */
  setExtraHTTPHeaders?: Record<string, string>;

  /**
   * Body param:
   */
  setJavaScriptEnabled?: boolean;

  /**
   * Body param: URL to navigate to, eg. `https://example.com`.
   */
  url?: string;

  /**
   * Body param:
   */
  userAgent?: string;

  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.page.setviewport).
   */
  viewport?: SnapshotCreateParams.Viewport;

  /**
   * Body param: Wait for the selector to appear in page. Check
   * [options](https://pptr.dev/api/puppeteer.page.waitforselector).
   */
  waitForSelector?: SnapshotCreateParams.WaitForSelector;

  /**
   * Body param: Waits for a specified timeout before continuing.
   */
  waitForTimeout?: number;
}

export namespace SnapshotCreateParams {
  export interface AddScriptTag {
    id?: string;

    content?: string;

    type?: string;

    url?: string;
  }

  export interface AddStyleTag {
    content?: string;

    url?: string;
  }

  /**
   * Provide credentials for HTTP authentication.
   */
  export interface Authenticate {
    password: string;

    username: string;
  }

  export interface Cookie {
    name: string;

    value: string;

    domain?: string;

    expires?: number;

    httpOnly?: boolean;

    partitionKey?: string;

    path?: string;

    priority?: 'Low' | 'Medium' | 'High';

    sameParty?: boolean;

    sameSite?: 'Strict' | 'Lax' | 'None';

    secure?: boolean;

    sourcePort?: number;

    sourceScheme?: 'Unset' | 'NonSecure' | 'Secure';

    url?: string;
  }

  /**
   * Check [options](https://pptr.dev/api/puppeteer.gotooptions).
   */
  export interface GotoOptions {
    referer?: string;

    referrerPolicy?: string;

    timeout?: number;

    waitUntil?:
      | 'load'
      | 'domcontentloaded'
      | 'networkidle0'
      | 'networkidle2'
      | Array<'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2'>;
  }

  /**
   * Check [options](https://pptr.dev/api/puppeteer.page.setviewport).
   */
  export interface Viewport {
    height: number;

    width: number;

    deviceScaleFactor?: number;

    hasTouch?: boolean;

    isLandscape?: boolean;

    isMobile?: boolean;
  }

  /**
   * Wait for the selector to appear in page. Check
   * [options](https://pptr.dev/api/puppeteer.page.waitforselector).
   */
  export interface WaitForSelector {
    selector: string;

    hidden?: true;

    timeout?: number;

    visible?: true;
  }
}

export declare namespace Snapshot {
  export {
    type SnapshotCreateResponse as SnapshotCreateResponse,
    type SnapshotCreateParams as SnapshotCreateParams,
  };
}
