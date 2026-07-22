// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseAccessibilityTree extends APIResource {
  static override readonly _key: readonly ['browserRendering', 'accessibilityTree'] = Object.freeze([
    'browserRendering',
    'accessibilityTree',
  ] as const);

  /**
   * Returns the page's accessibility tree. Use `interestingOnly` to only return
   * semantically meaningful nodes; use `root` to scope the tree to a
   * CSS-selector-anchored subtree. Control page loading with `gotoOptions` and
   * `waitFor*` options.
   *
   * @example
   * ```ts
   * const accessibilityTree =
   *   await client.browserRendering.accessibilityTree.create({
   *     account_id: 'account_id',
   *     url: 'https://www.example.com/',
   *   });
   * ```
   */
  create(
    params: AccessibilityTreeCreateParams,
    options?: RequestOptions,
  ): APIPromise<AccessibilityTreeCreateResponse> {
    const { account_id, cacheTTL, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/browser-rendering/accessibilityTree`, {
        query: { cacheTTL },
        body,
        ...options,
      }) as APIPromise<{ result: AccessibilityTreeCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class AccessibilityTree extends BaseAccessibilityTree {}

export interface AccessibilityTreeCreateResponse {
  /**
   * Accessibility tree node
   */
  accessibilityTree: AccessibilityTreeCreateResponse.AccessibilityTree | null;
}

export namespace AccessibilityTreeCreateResponse {
  /**
   * Accessibility tree node
   */
  export interface AccessibilityTree {
    role: string;

    autocomplete?: string;

    checked?: boolean | 'mixed';

    children?: Array<unknown>;

    description?: string;

    disabled?: boolean;

    expanded?: boolean;

    focused?: boolean;

    haspopup?: string;

    invalid?: string;

    keyshortcuts?: string;

    level?: number;

    modal?: boolean;

    multiline?: boolean;

    multiselectable?: boolean;

    name?: string;

    orientation?: string;

    pressed?: boolean | 'mixed';

    readonly?: boolean;

    required?: boolean;

    roledescription?: string;

    selected?: boolean;

    value?: string | number;

    valuemax?: number;

    valuemin?: number;

    valuetext?: string;
  }
}

export interface AccessibilityTreeCreateParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Query param: Cache TTL default is 5s. Set to 0 to disable.
   */
  cacheTTL?: number;

  /**
   * Body param: The maximum duration allowed for the browser action to complete
   * after the page has loaded (such as taking screenshots, extracting content, or
   * generating PDFs). If this time limit is exceeded, the action stops and returns a
   * timeout error.
   */
  actionTimeout?: number;

  /**
   * Body param: Adds a `<script>` tag into the page with the desired URL or content.
   */
  addScriptTag?: Array<AccessibilityTreeCreateParams.AddScriptTag>;

  /**
   * Body param: Adds a `<link rel="stylesheet">` tag into the page with the desired
   * URL or a `<style type="text/css">` tag with the content.
   */
  addStyleTag?: Array<AccessibilityTreeCreateParams.AddStyleTag>;

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
  authenticate?: AccessibilityTreeCreateParams.Authenticate;

  /**
   * Body param: Attempt to proceed when 'awaited' events fail or timeout.
   */
  bestAttempt?: boolean;

  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.page.setcookie).
   */
  cookies?: Array<AccessibilityTreeCreateParams.Cookie>;

  /**
   * Body param
   */
  emulateMediaType?: string;

  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.gotooptions).
   */
  gotoOptions?: AccessibilityTreeCreateParams.GotoOptions;

  /**
   * Body param: Set the content of the page, eg: `<h1>Hello World!!</h1>`. Either
   * `html` or `url` must be set.
   */
  html?: string;

  /**
   * Body param
   */
  interestingOnly?: boolean;

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
   * Body param
   */
  root?: string;

  /**
   * Body param
   */
  setExtraHTTPHeaders?: { [key: string]: string };

  /**
   * Body param
   */
  setJavaScriptEnabled?: boolean;

  /**
   * Body param: URL to navigate to, eg. `https://example.com`.
   */
  url?: string;

  /**
   * Body param
   */
  userAgent?: string;

  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.page.setviewport).
   */
  viewport?: AccessibilityTreeCreateParams.Viewport;

  /**
   * Body param: Wait for the selector to appear in page. Check
   * [options](https://pptr.dev/api/puppeteer.page.waitforselector).
   */
  waitForSelector?: AccessibilityTreeCreateParams.WaitForSelector;

  /**
   * Body param: Waits for a specified timeout before continuing.
   */
  waitForTimeout?: number;
}

export namespace AccessibilityTreeCreateParams {
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
    /**
     * Cookie name.
     */
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

export declare namespace AccessibilityTree {
  export {
    type AccessibilityTreeCreateResponse as AccessibilityTreeCreateResponse,
    type AccessibilityTreeCreateParams as AccessibilityTreeCreateParams,
  };
}
