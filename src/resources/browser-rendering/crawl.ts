// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Crawl extends APIResource {
  /**
   * Starts a crawl job for the provided URL and its children. Check available
   * options like `gotoOptions` and `waitFor*` to control page load behaviour.
   *
   * @example
   * ```ts
   * const crawl = await client.browserRendering.crawl.create({
   *   account_id: 'account_id',
   *   url: 'https://example.com',
   * });
   * ```
   */
  create(params: CrawlCreateParams, options?: Core.RequestOptions): Core.APIPromise<CrawlCreateResponse> {
    const { account_id = this._client.accountId, cacheTTL, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/browser-rendering/crawl`, {
        query: { cacheTTL },
        body,
        ...options,
      }) as Core.APIPromise<{ result: CrawlCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Cancels an ongoing crawl job by setting its status to cancelled and stopping all
   * queued URLs.
   *
   * @example
   * ```ts
   * const crawl = await client.browserRendering.crawl.delete(
   *   'job_id',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  delete(
    jobId: string,
    params?: CrawlDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CrawlDeleteResponse>;
  delete(jobId: string, options?: Core.RequestOptions): Core.APIPromise<CrawlDeleteResponse>;
  delete(
    jobId: string,
    params: CrawlDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CrawlDeleteResponse> {
    if (isRequestOptions(params)) {
      return this.delete(jobId, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/browser-rendering/crawl/${jobId}`,
        options,
      ) as Core.APIPromise<{ result: CrawlDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the result of a crawl job.
   *
   * @example
   * ```ts
   * const crawl = await client.browserRendering.crawl.get('x', {
   *   account_id: 'account_id',
   * });
   * ```
   */
  get(
    jobId: string,
    params?: CrawlGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CrawlGetResponse>;
  get(jobId: string, options?: Core.RequestOptions): Core.APIPromise<CrawlGetResponse>;
  get(
    jobId: string,
    params: CrawlGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CrawlGetResponse> {
    if (isRequestOptions(params)) {
      return this.get(jobId, {}, params);
    }
    const { account_id = this._client.accountId, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/browser-rendering/crawl/${jobId}`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: CrawlGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Crawl job ID.
 */
export type CrawlCreateResponse = string;

export interface CrawlDeleteResponse {
  /**
   * The ID of the cancelled job.
   */
  job_id: string;

  /**
   * Cancellation confirmation message.
   */
  message: string;
}

export interface CrawlGetResponse {
  /**
   * Crawl job ID.
   */
  id: string;

  /**
   * Total seconds spent in browser so far.
   */
  browserSecondsUsed: number;

  /**
   * Total number of URLs that have been crawled so far.
   */
  finished: number;

  /**
   * List of crawl job records.
   */
  records: Array<CrawlGetResponse.Record>;

  /**
   * Total number of URLs that were skipped due to include/exclude/subdomain filters.
   * Skipped URLs are included in records but are not counted toward total/finished.
   */
  skipped: number;

  /**
   * Current crawl job status.
   */
  status: string;

  /**
   * Total current number of URLs in the crawl job.
   */
  total: number;

  /**
   * Cursor for pagination.
   */
  cursor?: string;
}

export namespace CrawlGetResponse {
  export interface Record {
    metadata: Record.Metadata;

    /**
     * Current status of the crawled URL.
     */
    status: 'queued' | 'errored' | 'completed' | 'disallowed' | 'skipped' | 'cancelled';

    /**
     * Crawled URL.
     */
    url: string;

    /**
     * HTML content of the crawled URL.
     */
    html?: string;

    /**
     * JSON of the content of the crawled URL.
     */
    json?: { [key: string]: unknown };

    /**
     * Markdown of the content of the crawled URL.
     */
    markdown?: string;
  }

  export namespace Record {
    export interface Metadata {
      /**
       * HTTP status code of the crawled page.
       */
      status: number;

      /**
       * Final URL of the crawled page.
       */
      url: string;

      /**
       * Title of the crawled page.
       */
      title?: string;
    }
  }
}

export type CrawlCreateParams = CrawlCreateParams.Variant0 | CrawlCreateParams.Variant1;

export declare namespace CrawlCreateParams {
  export interface Variant0 {
    /**
     * Path param: Account ID.
     */
    account_id?: string;

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
     * Body param: List of crawl purposes to respect Content-Signal directives in
     * robots.txt. Allowed values: 'search', 'ai-input', 'ai-train'. Learn more:
     * https://contentsignals.org/. Default: ['search', 'ai-input', 'ai-train'].
     */
    crawlPurposes?: Array<'search' | 'ai-input' | 'ai-train'>;

    /**
     * Body param: Maximum number of levels deep the crawler will traverse from the
     * starting URL.
     */
    depth?: number;

    /**
     * Body param
     */
    emulateMediaType?: string;

    /**
     * Body param: Formats to return. Default is `html`.
     */
    formats?: Array<'html' | 'markdown' | 'json'>;

    /**
     * Body param: Check [options](https://pptr.dev/api/puppeteer.gotooptions).
     */
    gotoOptions?: Variant0.GotoOptions;

    /**
     * Body param: Options for JSON extraction.
     */
    jsonOptions?: Variant0.JsonOptions;

    /**
     * Body param: Maximum number of URLs to crawl.
     */
    limit?: number;

    /**
     * Body param: Maximum age of a resource that can be returned from cache in
     * seconds. Default is 1 day.
     */
    maxAge?: number;

    /**
     * Body param: Unix timestamp (seconds since epoch) indicating to only crawl pages
     * that were modified since this time. For sitemap URLs with a lastmod field, this
     * is compared directly. For other URLs, the crawler will use If-Modified-Since
     * header when fetching. URLs without modification information (no lastmod in
     * sitemap and no Last-Modified header support) will be crawled. Note: This works
     * in conjunction with maxAge - both filters must pass for a cached resource to be
     * used. Must be within the last year and not in the future.
     */
    modifiedSince?: number;

    /**
     * Body param: Additional options for the crawler.
     */
    options?: Variant0.Options;

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
     * Body param: Whether to render the page or fetch static content. True by default.
     */
    render?: true;

    /**
     * Body param
     */
    setExtraHTTPHeaders?: { [key: string]: string };

    /**
     * Body param
     */
    setJavaScriptEnabled?: boolean;

    /**
     * Body param: Source of links to crawl. 'sitemaps' - only crawl URLs from
     * sitemaps, 'links' - only crawl URLs scraped from pages, 'all' - crawl both
     * sitemap and scraped links (default).
     */
    source?: 'sitemaps' | 'links' | 'all';

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
     * Options for JSON extraction.
     */
    export interface JsonOptions {
      /**
       * Optional list of custom AI models to use for the request. The models will be
       * tried in the order provided, and in case a model returns an error, the next one
       * will be used as fallback.
       */
      custom_ai?: Array<JsonOptions.CustomAI>;

      prompt?: string;

      response_format?: JsonOptions.ResponseFormat;
    }

    export namespace JsonOptions {
      export interface CustomAI {
        /**
         * AI model to use for the request. Must be formed as `<provider>/<model_name>`,
         * e.g. `workers-ai/@cf/meta/llama-3.3-70b-instruct-fp8-fast`.
         */
        model: string;

        /**
         * Authorization token for the AI model: `Bearer <token>`. Not needed for
         * workers-ai models.
         */
        authorization?: string;
      }

      export interface ResponseFormat {
        type: string;

        /**
         * Schema for the response format. More information here:
         * https://developers.cloudflare.com/workers-ai/json-mode/
         */
        json_schema?: { [key: string]: string | number | boolean | unknown | Array<string> } | null;
      }
    }

    /**
     * Additional options for the crawler.
     */
    export interface Options {
      /**
       * Exclude links matching the provided wildcard patterns in the crawl job. Example:
       * 'https://example.com/privacy/**'.
       */
      excludePatterns?: Array<string>;

      /**
       * Include external links in the crawl job. If set to true, includeSubdomains is
       * ignored.
       */
      includeExternalLinks?: boolean;

      /**
       * Include only links matching the provided wildcard patterns in the crawl job.
       * Include patterns are evaluated before exclude patterns. URLs that match any of
       * the specified include patterns will be included in the crawl job. Example:
       * 'https://example.com/blog/**'.
       */
      includePatterns?: Array<string>;

      /**
       * Include links to subdomains in the crawl job. This option is ignored if
       * includeExternalLinks is true.
       */
      includeSubdomains?: boolean;
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
    account_id?: string;

    /**
     * Body param: Whether to render the page or fetch static content. True by default.
     */
    render: false;

    /**
     * Body param: URL to navigate to, eg. `https://example.com`.
     */
    url: string;

    /**
     * Query param: Cache TTL default is 5s. Set to 0 to disable.
     */
    cacheTTL?: number;

    /**
     * Body param: List of crawl purposes to respect Content-Signal directives in
     * robots.txt. Allowed values: 'search', 'ai-input', 'ai-train'. Learn more:
     * https://contentsignals.org/. Default: ['search', 'ai-input', 'ai-train'].
     */
    crawlPurposes?: Array<'search' | 'ai-input' | 'ai-train'>;

    /**
     * Body param: Maximum number of levels deep the crawler will traverse from the
     * starting URL.
     */
    depth?: number;

    /**
     * Body param: Formats to return. Default is `html`.
     */
    formats?: Array<'html' | 'markdown' | 'json'>;

    /**
     * Body param: Options for JSON extraction.
     */
    jsonOptions?: Variant1.JsonOptions;

    /**
     * Body param: Maximum number of URLs to crawl.
     */
    limit?: number;

    /**
     * Body param: Maximum age of a resource that can be returned from cache in
     * seconds. Default is 1 day.
     */
    maxAge?: number;

    /**
     * Body param: Unix timestamp (seconds since epoch) indicating to only crawl pages
     * that were modified since this time. For sitemap URLs with a lastmod field, this
     * is compared directly. For other URLs, the crawler will use If-Modified-Since
     * header when fetching. URLs without modification information (no lastmod in
     * sitemap and no Last-Modified header support) will be crawled. Note: This works
     * in conjunction with maxAge - both filters must pass for a cached resource to be
     * used. Must be within the last year and not in the future.
     */
    modifiedSince?: number;

    /**
     * Body param: Additional options for the crawler.
     */
    options?: Variant1.Options;

    /**
     * Body param: Source of links to crawl. 'sitemaps' - only crawl URLs from
     * sitemaps, 'links' - only crawl URLs scraped from pages, 'all' - crawl both
     * sitemap and scraped links (default).
     */
    source?: 'sitemaps' | 'links' | 'all';
  }

  export namespace Variant1 {
    /**
     * Options for JSON extraction.
     */
    export interface JsonOptions {
      /**
       * Optional list of custom AI models to use for the request. The models will be
       * tried in the order provided, and in case a model returns an error, the next one
       * will be used as fallback.
       */
      custom_ai?: Array<JsonOptions.CustomAI>;

      prompt?: string;

      response_format?: JsonOptions.ResponseFormat;
    }

    export namespace JsonOptions {
      export interface CustomAI {
        /**
         * AI model to use for the request. Must be formed as `<provider>/<model_name>`,
         * e.g. `workers-ai/@cf/meta/llama-3.3-70b-instruct-fp8-fast`.
         */
        model: string;

        /**
         * Authorization token for the AI model: `Bearer <token>`. Not needed for
         * workers-ai models.
         */
        authorization?: string;
      }

      export interface ResponseFormat {
        type: string;

        /**
         * Schema for the response format. More information here:
         * https://developers.cloudflare.com/workers-ai/json-mode/
         */
        json_schema?: { [key: string]: string | number | boolean | unknown | Array<string> } | null;
      }
    }

    /**
     * Additional options for the crawler.
     */
    export interface Options {
      /**
       * Exclude links matching the provided wildcard patterns in the crawl job. Example:
       * 'https://example.com/privacy/**'.
       */
      excludePatterns?: Array<string>;

      /**
       * Include external links in the crawl job. If set to true, includeSubdomains is
       * ignored.
       */
      includeExternalLinks?: boolean;

      /**
       * Include only links matching the provided wildcard patterns in the crawl job.
       * Include patterns are evaluated before exclude patterns. URLs that match any of
       * the specified include patterns will be included in the crawl job. Example:
       * 'https://example.com/blog/**'.
       */
      includePatterns?: Array<string>;

      /**
       * Include links to subdomains in the crawl job. This option is ignored if
       * includeExternalLinks is true.
       */
      includeSubdomains?: boolean;
    }
  }
}

export interface CrawlDeleteParams {
  /**
   * Account ID.
   */
  account_id?: string;
}

export interface CrawlGetParams {
  /**
   * Path param: Account ID.
   */
  account_id?: string;

  /**
   * Query param: Cache TTL default is 5s. Set to 0 to disable.
   */
  cacheTTL?: number;

  /**
   * Query param: Cursor for pagination.
   */
  cursor?: number;

  /**
   * Query param: Limit for pagination.
   */
  limit?: number;

  /**
   * Query param: Filter by URL status.
   */
  status?: 'queued' | 'errored' | 'completed' | 'disallowed' | 'skipped' | 'cancelled';
}

export declare namespace Crawl {
  export {
    type CrawlCreateResponse as CrawlCreateResponse,
    type CrawlDeleteResponse as CrawlDeleteResponse,
    type CrawlGetResponse as CrawlGetResponse,
    type CrawlCreateParams as CrawlCreateParams,
    type CrawlDeleteParams as CrawlDeleteParams,
    type CrawlGetParams as CrawlGetParams,
  };
}
