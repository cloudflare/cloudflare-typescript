// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { type Response } from '../_shims/index';

export class BrowserRendering extends APIResource {
  /**
   * Fetches rendered HTML content from provided URL or HTML. Check available options
   * like `goToOptions` and `waitFor*` to control page load behaviour.
   */
  content(
    accountId: string,
    params?: BrowserRenderingContentParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BrowserRenderingContentResponse>;
  content(accountId: string, options?: Core.RequestOptions): Core.APIPromise<BrowserRenderingContentResponse>;
  content(
    accountId: string,
    params: BrowserRenderingContentParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BrowserRenderingContentResponse> {
    if (isRequestOptions(params)) {
      return this.content(accountId, {}, params);
    }
    const { cacheTTL, ...body } = params;
    return (
      this._client.post(`/accounts/${accountId}/browser-rendering/content`, {
        query: { cacheTTL },
        body,
        ...options,
      }) as Core.APIPromise<{ result: BrowserRenderingContentResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches rendered PDF from provided URL or HTML. Check available options like
   * `goToOptions` and `waitFor*` to control page load behaviour.
   */
  pdf(
    accountId: string,
    params?: BrowserRenderingPDFParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response>;
  pdf(accountId: string, options?: Core.RequestOptions): Core.APIPromise<Response>;
  pdf(
    accountId: string,
    params: BrowserRenderingPDFParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    if (isRequestOptions(params)) {
      return this.pdf(accountId, {}, params);
    }
    const { cacheTTL, ...body } = params;
    return this._client.post(`/accounts/${accountId}/browser-rendering/pdf`, {
      query: { cacheTTL },
      body,
      ...options,
      headers: { Accept: 'application/pdf', ...options?.headers },
      __binaryResponse: true,
    });
  }

  /**
   * Get meta attributes like height, width, text and others of selected elements.
   */
  scrape(
    accountId: string,
    params: BrowserRenderingScrapeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BrowserRenderingScrapeResponse> {
    const { cacheTTL, ...body } = params;
    return (
      this._client.post(`/accounts/${accountId}/browser-rendering/scrape`, {
        query: { cacheTTL },
        body,
        ...options,
      }) as Core.APIPromise<{ result: BrowserRenderingScrapeResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Takes a screenshot of a webpage from provided URL or HTML. Control page loading
   * with `goToOptions` and `waitFor*` options. Customize screenshots with
   * `viewport`, `fullPage`, `clip` and others.
   */
  screenshot(
    accountId: string,
    params?: BrowserRenderingScreenshotParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BrowserRenderingScreenshotResponse>;
  screenshot(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BrowserRenderingScreenshotResponse>;
  screenshot(
    accountId: string,
    params: BrowserRenderingScreenshotParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BrowserRenderingScreenshotResponse> {
    if (isRequestOptions(params)) {
      return this.screenshot(accountId, {}, params);
    }
    const { cacheTTL, ...body } = params;
    return this._client.post(`/accounts/${accountId}/browser-rendering/screenshot`, {
      query: { cacheTTL },
      body,
      ...options,
    });
  }

  /**
   * Returns the page's HTML content and screenshot. Control page loading with
   * `goToOptions` and `waitFor*` options. Customize screenshots with `viewport`,
   * `fullPage`, `clip` and others.
   */
  snapshot(
    accountId: string,
    params?: BrowserRenderingSnapshotParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BrowserRenderingSnapshotResponse>;
  snapshot(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BrowserRenderingSnapshotResponse>;
  snapshot(
    accountId: string,
    params: BrowserRenderingSnapshotParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BrowserRenderingSnapshotResponse> {
    if (isRequestOptions(params)) {
      return this.snapshot(accountId, {}, params);
    }
    const { cacheTTL, ...body } = params;
    return (
      this._client.post(`/accounts/${accountId}/browser-rendering/snapshot`, {
        query: { cacheTTL },
        body,
        ...options,
      }) as Core.APIPromise<{ result: BrowserRenderingSnapshotResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * HTML content
 */
export type BrowserRenderingContentResponse = string;

export type BrowserRenderingScrapeResponse =
  Array<BrowserRenderingScrapeResponse.BrowserRenderingScrapeResponseItem>;

export namespace BrowserRenderingScrapeResponse {
  export interface BrowserRenderingScrapeResponseItem {
    result: BrowserRenderingScrapeResponseItem.Result;

    /**
     * Selector
     */
    selector: string;
  }

  export namespace BrowserRenderingScrapeResponseItem {
    export interface Result {
      attributes: Array<Result.Attribute>;

      /**
       * Element height
       */
      height: number;

      /**
       * Html content
       */
      html: string;

      /**
       * Element left
       */
      left: number;

      /**
       * Text content
       */
      text: string;

      /**
       * Element top
       */
      top: number;

      /**
       * Element width
       */
      width: number;
    }

    export namespace Result {
      export interface Attribute {
        /**
         * Attribute name
         */
        name: string;

        /**
         * Attribute value
         */
        value: string;
      }
    }
  }
}

export interface BrowserRenderingScreenshotResponse {
  /**
   * Response status
   */
  status: boolean;

  errors?: Array<BrowserRenderingScreenshotResponse.Error>;
}

export namespace BrowserRenderingScreenshotResponse {
  export interface Error {
    /**
     * Error code
     */
    code: number;

    /**
     * Error Message
     */
    message: string;
  }
}

export interface BrowserRenderingSnapshotResponse {
  /**
   * HTML content
   */
  content: string;

  /**
   * Base64 encoded image
   */
  screenshot: string;
}

export interface BrowserRenderingContentParams {
  /**
   * Query param: Cache TTL default is 5s. Set to 0 to disable.
   */
  cacheTTL?: number;

  /**
   * Body param: Adds a `<script>` tag into the page with the desired URL or content.
   */
  addScriptTag?: Array<BrowserRenderingContentParams.AddScriptTag>;

  /**
   * Body param: Adds a `<link rel="stylesheet">` tag into the page with the desired
   * URL or a `<style type="text/css">` tag with the content.
   */
  addStyleTag?: Array<BrowserRenderingContentParams.AddStyleTag>;

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
  authenticate?: BrowserRenderingContentParams.Authenticate;

  /**
   * Body param: Attempt to proceed when 'awaited' events fail or timeout.
   */
  bestAttempt?: boolean;

  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.page.setcookie).
   */
  cookies?: Array<BrowserRenderingContentParams.Cookie>;

  /**
   * Body param:
   */
  emulateMediaType?: string;

  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.gotooptions).
   */
  gotoOptions?: BrowserRenderingContentParams.GotoOptions;

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
  viewport?: BrowserRenderingContentParams.Viewport;

  /**
   * Body param: Wait for the selector to appear in page. Check
   * [options](https://pptr.dev/api/puppeteer.page.waitforselector).
   */
  waitForSelector?: BrowserRenderingContentParams.WaitForSelector;

  /**
   * Body param: Waits for a specified timeout before continuing.
   */
  waitForTimeout?: number;
}

export namespace BrowserRenderingContentParams {
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

export interface BrowserRenderingPDFParams {
  /**
   * Query param: Cache TTL default is 5s. Set to 0 to disable.
   */
  cacheTTL?: number;

  /**
   * Body param: Adds a `<script>` tag into the page with the desired URL or content.
   */
  addScriptTag?: Array<BrowserRenderingPDFParams.AddScriptTag>;

  /**
   * Body param: Adds a `<link rel="stylesheet">` tag into the page with the desired
   * URL or a `<style type="text/css">` tag with the content.
   */
  addStyleTag?: Array<BrowserRenderingPDFParams.AddStyleTag>;

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
  authenticate?: BrowserRenderingPDFParams.Authenticate;

  /**
   * Body param: Attempt to proceed when 'awaited' events fail or timeout.
   */
  bestAttempt?: boolean;

  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.page.setcookie).
   */
  cookies?: Array<BrowserRenderingPDFParams.Cookie>;

  /**
   * Body param:
   */
  emulateMediaType?: string;

  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.gotooptions).
   */
  gotoOptions?: BrowserRenderingPDFParams.GotoOptions;

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
  viewport?: BrowserRenderingPDFParams.Viewport;

  /**
   * Body param: Wait for the selector to appear in page. Check
   * [options](https://pptr.dev/api/puppeteer.page.waitforselector).
   */
  waitForSelector?: BrowserRenderingPDFParams.WaitForSelector;

  /**
   * Body param: Waits for a specified timeout before continuing.
   */
  waitForTimeout?: number;
}

export namespace BrowserRenderingPDFParams {
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

export interface BrowserRenderingScrapeParams {
  /**
   * Body param:
   */
  elements: Array<BrowserRenderingScrapeParams.Element>;

  /**
   * Query param: Cache TTL default is 5s. Set to 0 to disable.
   */
  cacheTTL?: number;

  /**
   * Body param: Adds a `<script>` tag into the page with the desired URL or content.
   */
  addScriptTag?: Array<BrowserRenderingScrapeParams.AddScriptTag>;

  /**
   * Body param: Adds a `<link rel="stylesheet">` tag into the page with the desired
   * URL or a `<style type="text/css">` tag with the content.
   */
  addStyleTag?: Array<BrowserRenderingScrapeParams.AddStyleTag>;

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
  authenticate?: BrowserRenderingScrapeParams.Authenticate;

  /**
   * Body param: Attempt to proceed when 'awaited' events fail or timeout.
   */
  bestAttempt?: boolean;

  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.page.setcookie).
   */
  cookies?: Array<BrowserRenderingScrapeParams.Cookie>;

  /**
   * Body param:
   */
  emulateMediaType?: string;

  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.gotooptions).
   */
  gotoOptions?: BrowserRenderingScrapeParams.GotoOptions;

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
  viewport?: BrowserRenderingScrapeParams.Viewport;

  /**
   * Body param: Wait for the selector to appear in page. Check
   * [options](https://pptr.dev/api/puppeteer.page.waitforselector).
   */
  waitForSelector?: BrowserRenderingScrapeParams.WaitForSelector;

  /**
   * Body param: Waits for a specified timeout before continuing.
   */
  waitForTimeout?: number;
}

export namespace BrowserRenderingScrapeParams {
  export interface Element {
    selector: string;
  }

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

export interface BrowserRenderingScreenshotParams {
  /**
   * Query param: Cache TTL default is 5s. Set to 0 to disable.
   */
  cacheTTL?: number;

  /**
   * Body param: Adds a `<script>` tag into the page with the desired URL or content.
   */
  addScriptTag?: Array<BrowserRenderingScreenshotParams.AddScriptTag>;

  /**
   * Body param: Adds a `<link rel="stylesheet">` tag into the page with the desired
   * URL or a `<style type="text/css">` tag with the content.
   */
  addStyleTag?: Array<BrowserRenderingScreenshotParams.AddStyleTag>;

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
  authenticate?: BrowserRenderingScreenshotParams.Authenticate;

  /**
   * Body param: Attempt to proceed when 'awaited' events fail or timeout.
   */
  bestAttempt?: boolean;

  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.page.setcookie).
   */
  cookies?: Array<BrowserRenderingScreenshotParams.Cookie>;

  /**
   * Body param:
   */
  emulateMediaType?: string;

  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.gotooptions).
   */
  gotoOptions?: BrowserRenderingScreenshotParams.GotoOptions;

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
   * Body param: Check [options](https://pptr.dev/api/puppeteer.screenshotoptions).
   */
  screenshotOptions?: BrowserRenderingScreenshotParams.ScreenshotOptions;

  /**
   * Body param:
   */
  scrollPage?: boolean;

  /**
   * Body param:
   */
  selector?: string;

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
  viewport?: BrowserRenderingScreenshotParams.Viewport;

  /**
   * Body param: Wait for the selector to appear in page. Check
   * [options](https://pptr.dev/api/puppeteer.page.waitforselector).
   */
  waitForSelector?: BrowserRenderingScreenshotParams.WaitForSelector;

  /**
   * Body param: Waits for a specified timeout before continuing.
   */
  waitForTimeout?: number;
}

export namespace BrowserRenderingScreenshotParams {
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
   * Check [options](https://pptr.dev/api/puppeteer.screenshotoptions).
   */
  export interface ScreenshotOptions {
    captureBeyondViewport?: boolean;

    clip?: ScreenshotOptions.Clip;

    encoding?: 'binary' | 'base64';

    fromSurface?: boolean;

    fullPage?: boolean;

    omitBackground?: boolean;

    optimizeForSpeed?: boolean;

    quality?: number;

    type?: 'png' | 'jpeg' | 'webp';
  }

  export namespace ScreenshotOptions {
    export interface Clip {
      height: number;

      width: number;

      x: number;

      y: number;

      scale?: number;
    }
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

export interface BrowserRenderingSnapshotParams {
  /**
   * Query param: Cache TTL default is 5s. Set to 0 to disable.
   */
  cacheTTL?: number;

  /**
   * Body param: Adds a `<script>` tag into the page with the desired URL or content.
   */
  addScriptTag?: Array<BrowserRenderingSnapshotParams.AddScriptTag>;

  /**
   * Body param: Adds a `<link rel="stylesheet">` tag into the page with the desired
   * URL or a `<style type="text/css">` tag with the content.
   */
  addStyleTag?: Array<BrowserRenderingSnapshotParams.AddStyleTag>;

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
  authenticate?: BrowserRenderingSnapshotParams.Authenticate;

  /**
   * Body param: Attempt to proceed when 'awaited' events fail or timeout.
   */
  bestAttempt?: boolean;

  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.page.setcookie).
   */
  cookies?: Array<BrowserRenderingSnapshotParams.Cookie>;

  /**
   * Body param:
   */
  emulateMediaType?: string;

  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.gotooptions).
   */
  gotoOptions?: BrowserRenderingSnapshotParams.GotoOptions;

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
  viewport?: BrowserRenderingSnapshotParams.Viewport;

  /**
   * Body param: Wait for the selector to appear in page. Check
   * [options](https://pptr.dev/api/puppeteer.page.waitforselector).
   */
  waitForSelector?: BrowserRenderingSnapshotParams.WaitForSelector;

  /**
   * Body param: Waits for a specified timeout before continuing.
   */
  waitForTimeout?: number;
}

export namespace BrowserRenderingSnapshotParams {
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
