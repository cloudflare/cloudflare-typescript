// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Scrape extends APIResource {
  /**
   * Get meta attributes like height, width, text and others of selected elements.
   *
   * @example
   * ```ts
   * const scrapes = await client.browserRendering.scrape.create(
   *   {
   *     account_id: 'account_id',
   *     elements: [{ selector: 'h1' }],
   *     html: '<h1>Hello World!</h1>',
   *   },
   * );
   * ```
   */
  create(params: ScrapeCreateParams, options?: Core.RequestOptions): Core.APIPromise<ScrapeCreateResponse> {
    const { account_id, cacheTTL, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/browser-rendering/scrape`, {
        query: { cacheTTL },
        body,
        ...options,
      }) as Core.APIPromise<{ result: ScrapeCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ScrapeCreateResponse = Array<ScrapeCreateResponse.ScrapeCreateResponseItem>;

export namespace ScrapeCreateResponse {
  export interface ScrapeCreateResponseItem {
    results: ScrapeCreateResponseItem.Results;

    /**
     * Selector
     */
    selector: string;
  }

  export namespace ScrapeCreateResponseItem {
    export interface Results {
      attributes: Array<Results.Attribute>;

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

    export namespace Results {
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

export type ScrapeCreateParams = ScrapeCreateParams.Variant0 | ScrapeCreateParams.Variant1;

export declare namespace ScrapeCreateParams {
  export interface Variant0 {
    /**
     * Path param: Account ID.
     */
    account_id: string;

    /**
     * Body param:
     */
    elements: Array<Variant0.Element>;

    /**
     * Body param: Set the content of the page, eg: `<h1>Hello World!!</h1>`. Either
     * `html` or `url` must be set.
     */
    html: string;

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
    addScriptTag?: Array<Variant0.AddScriptTag>;

    /**
     * Body param: Adds a `<link rel="stylesheet">` tag into the page with the desired
     * URL or a `<style type="text/css">` tag with the content.
     */
    addStyleTag?: Array<Variant0.AddStyleTag>;

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
    authenticate?: Variant0.Authenticate;

    /**
     * Body param: Attempt to proceed when 'awaited' events fail or timeout.
     */
    bestAttempt?: boolean;

    /**
     * Body param: Check [options](https://pptr.dev/api/puppeteer.page.setcookie).
     */
    cookies?: Array<Variant0.Cookie>;

    /**
     * Body param:
     */
    emulateMediaType?: string;

    /**
     * Body param: Check [options](https://pptr.dev/api/puppeteer.gotooptions).
     */
    gotoOptions?: Variant0.GotoOptions;

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
    setExtraHTTPHeaders?: { [key: string]: string };

    /**
     * Body param:
     */
    setJavaScriptEnabled?: boolean;

    /**
     * Body param:
     */
    userAgent?: string;

    /**
     * Body param: Check [options](https://pptr.dev/api/puppeteer.page.setviewport).
     */
    viewport?: Variant0.Viewport;

    /**
     * Body param: Wait for the selector to appear in page. Check
     * [options](https://pptr.dev/api/puppeteer.page.waitforselector).
     */
    waitForSelector?: Variant0.WaitForSelector;

    /**
     * Body param: Waits for a specified timeout before continuing.
     */
    waitForTimeout?: number;
  }

  export namespace Variant0 {
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

  export interface Variant1 {
    /**
     * Path param: Account ID.
     */
    account_id: string;

    /**
     * Body param:
     */
    elements: Array<Variant1.Element>;

    /**
     * Body param: URL to navigate to, eg. `https://example.com`.
     */
    url: string;

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
    addScriptTag?: Array<Variant1.AddScriptTag>;

    /**
     * Body param: Adds a `<link rel="stylesheet">` tag into the page with the desired
     * URL or a `<style type="text/css">` tag with the content.
     */
    addStyleTag?: Array<Variant1.AddStyleTag>;

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
    authenticate?: Variant1.Authenticate;

    /**
     * Body param: Attempt to proceed when 'awaited' events fail or timeout.
     */
    bestAttempt?: boolean;

    /**
     * Body param: Check [options](https://pptr.dev/api/puppeteer.page.setcookie).
     */
    cookies?: Array<Variant1.Cookie>;

    /**
     * Body param:
     */
    emulateMediaType?: string;

    /**
     * Body param: Check [options](https://pptr.dev/api/puppeteer.gotooptions).
     */
    gotoOptions?: Variant1.GotoOptions;

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
    setExtraHTTPHeaders?: { [key: string]: string };

    /**
     * Body param:
     */
    setJavaScriptEnabled?: boolean;

    /**
     * Body param:
     */
    userAgent?: string;

    /**
     * Body param: Check [options](https://pptr.dev/api/puppeteer.page.setviewport).
     */
    viewport?: Variant1.Viewport;

    /**
     * Body param: Wait for the selector to appear in page. Check
     * [options](https://pptr.dev/api/puppeteer.page.waitforselector).
     */
    waitForSelector?: Variant1.WaitForSelector;

    /**
     * Body param: Waits for a specified timeout before continuing.
     */
    waitForTimeout?: number;
  }

  export namespace Variant1 {
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
}

export declare namespace Scrape {
  export { type ScrapeCreateResponse as ScrapeCreateResponse, type ScrapeCreateParams as ScrapeCreateParams };
}
