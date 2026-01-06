// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Json extends APIResource {
  /**
   * Gets json from a webpage from a provided URL or HTML. Pass `prompt` or `schema`
   * in the body. Control page loading with `gotoOptions` and `waitFor*` options.
   */
  create(params: JsonCreateParams, options?: Core.RequestOptions): Core.APIPromise<JsonCreateResponse> {
    const { account_id, cacheTTL, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/browser-rendering/json`, {
        query: { cacheTTL },
        body,
        ...options,
      }) as Core.APIPromise<{ result: JsonCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type JsonCreateResponse = { [key: string]: unknown };

export type JsonCreateParams = JsonCreateParams.Variant0 | JsonCreateParams.Variant1;

export declare namespace JsonCreateParams {
  export interface Variant0 {
    /**
     * Path param: Account ID.
     */
    account_id: string;

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
     * Body param: Optional list of custom AI models to use for the request. The models
     * will be tried in the order provided, and in case a model returns an error, the
     * next one will be used as fallback.
     */
    custom_ai?: Array<Variant0.CustomAI>;

    /**
     * Body param:
     */
    emulateMediaType?: string;

    /**
     * Body param: Check [options](https://pptr.dev/api/puppeteer.gotooptions).
     */
    gotoOptions?: Variant0.GotoOptions;

    /**
     * Body param:
     */
    prompt?: string;

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
    response_format?: Variant0.ResponseFormat;

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

    export interface CustomAI {
      /**
       * Authorization token for the AI model: `Bearer <token>`.
       */
      authorization: string;

      /**
       * AI model to use for the request. Must be formed as `<provider>/<model_name>`,
       * e.g. `workers-ai/@cf/meta/llama-3.3-70b-instruct-fp8-fast`
       */
      model: string;
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

    export interface ResponseFormat {
      type: string;

      /**
       * Schema for the response format. More information here:
       * https://developers.cloudflare.com/workers-ai/json-mode/
       */
      json_schema?: { [key: string]: string | number | boolean | unknown | Array<string> } | null;
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
     * Body param: Optional list of custom AI models to use for the request. The models
     * will be tried in the order provided, and in case a model returns an error, the
     * next one will be used as fallback.
     */
    custom_ai?: Array<Variant1.CustomAI>;

    /**
     * Body param:
     */
    emulateMediaType?: string;

    /**
     * Body param: Check [options](https://pptr.dev/api/puppeteer.gotooptions).
     */
    gotoOptions?: Variant1.GotoOptions;

    /**
     * Body param:
     */
    prompt?: string;

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
    response_format?: Variant1.ResponseFormat;

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

    export interface CustomAI {
      /**
       * Authorization token for the AI model: `Bearer <token>`.
       */
      authorization: string;

      /**
       * AI model to use for the request. Must be formed as `<provider>/<model_name>`,
       * e.g. `workers-ai/@cf/meta/llama-3.3-70b-instruct-fp8-fast`
       */
      model: string;
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

    export interface ResponseFormat {
      type: string;

      /**
       * Schema for the response format. More information here:
       * https://developers.cloudflare.com/workers-ai/json-mode/
       */
      json_schema?: { [key: string]: string | number | boolean | unknown | Array<string> } | null;
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

export declare namespace Json {
  export { type JsonCreateResponse as JsonCreateResponse, type JsonCreateParams as JsonCreateParams };
}
