// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { RequestInit, RequestInfo, BodyInit } from './internal/builtin-types';
import type { HTTPMethod, PromiseOrValue, MergedRequestInit } from './internal/types';
import { uuid4 } from './internal/utils/uuid';
import { validatePositiveInteger, isAbsoluteURL, hasOwn } from './internal/utils/values';
import { sleep } from './internal/utils/sleep';
import { castToError, isAbortError } from './internal/errors';
import type { APIResponseProps } from './internal/parse';
import { getPlatformHeaders } from './internal/detect-platform';
import * as Shims from './internal/shims';
import * as Opts from './internal/request-options';
import * as qs from './internal/qs';
import { VERSION } from './version';
import * as Errors from './error';
import * as Pagination from './pagination';
import {
  AbstractPage,
  type CursorLimitPaginationParams,
  CursorLimitPaginationResponse,
  type CursorPaginationParams,
  CursorPaginationResponse,
  SinglePageResponse,
  type V4PagePaginationArrayParams,
  V4PagePaginationArrayResponse,
  type V4PagePaginationParams,
  V4PagePaginationResponse,
} from './pagination';
import * as Uploads from './uploads';
import * as API from './resources/index';
import { APIPromise } from './api-promise';
import { type Fetch } from './internal/builtin-types';
import { HeadersLike, NullableHeaders, buildHeaders, isEmptyHeaders } from './internal/headers';
import { FinalRequestOptions, RequestOptions } from './internal/request-options';
import { AbuseReports } from './resources/abuse-reports';
import { AuditLogs } from './resources/audit-logs';
import { BotManagement } from './resources/bot-management';
import { BrandProtection } from './resources/brand-protection';
import { ClientCertificates } from './resources/client-certificates';
import { CustomNameservers } from './resources/custom-nameservers';
import { CustomPages } from './resources/custom-pages';
import { DCVDelegation } from './resources/dcv-delegation';
import { Filters } from './resources/filters';
import { IPs } from './resources/ips';
import { KeylessCertificates } from './resources/keyless-certificates';
import { ManagedTransforms } from './resources/managed-transforms';
import { Memberships } from './resources/memberships';
import { OriginCACertificates } from './resources/origin-ca-certificates';
import { OriginPostQuantumEncryption } from './resources/origin-post-quantum-encryption';
import { PageRules } from './resources/page-rules';
import { RateLimits } from './resources/rate-limits';
import { SecurityTXT } from './resources/security-txt';
import { URLNormalization } from './resources/url-normalization';
import { readEnv } from './internal/utils/env';
import { formatRequestDetails, loggerFor } from './internal/utils/log';
import { isEmptyObj } from './internal/utils/values';
import { Accounts } from './resources/accounts/accounts';
import { ACM } from './resources/acm/acm';
import { Addressing } from './resources/addressing/addressing';
import { AIGateway } from './resources/ai-gateway/ai-gateway';
import { AI } from './resources/ai/ai';
import { Alerting } from './resources/alerting/alerting';
import { APIGateway } from './resources/api-gateway/api-gateway';
import { Argo } from './resources/argo/argo';
import { Billing } from './resources/billing/billing';
import { BotnetFeed } from './resources/botnet-feed/botnet-feed';
import { BrowserRendering } from './resources/browser-rendering/browser-rendering';
import { Cache } from './resources/cache/cache';
import { Calls } from './resources/calls/calls';
import { CertificateAuthorities } from './resources/certificate-authorities/certificate-authorities';
import { CloudConnector } from './resources/cloud-connector/cloud-connector';
import { CloudforceOne } from './resources/cloudforce-one/cloudforce-one';
import { ContentScanning } from './resources/content-scanning/content-scanning';
import { CustomCertificates } from './resources/custom-certificates/custom-certificates';
import { CustomHostnames } from './resources/custom-hostnames/custom-hostnames';
import { D1Resource } from './resources/d1/d1';
import { Diagnostics } from './resources/diagnostics/diagnostics';
import { DNSFirewall } from './resources/dns-firewall/dns-firewall';
import { DNS } from './resources/dns/dns';
import { DurableObjects } from './resources/durable-objects/durable-objects';
import { EmailRouting } from './resources/email-routing/email-routing';
import { EmailSecurity } from './resources/email-security/email-security';
import { Firewall } from './resources/firewall/firewall';
import { Healthchecks } from './resources/healthchecks/healthchecks';
import { Hostnames } from './resources/hostnames/hostnames';
import { HyperdriveResource } from './resources/hyperdrive/hyperdrive';
import { IAM } from './resources/iam/iam';
import { Images } from './resources/images/images';
import { Intel } from './resources/intel/intel';
import { KV } from './resources/kv/kv';
import { LeakedCredentialChecks } from './resources/leaked-credential-checks/leaked-credential-checks';
import { LoadBalancers } from './resources/load-balancers/load-balancers';
import { Logpush } from './resources/logpush/logpush';
import { Logs } from './resources/logs/logs';
import { MagicNetworkMonitoring } from './resources/magic-network-monitoring/magic-network-monitoring';
import { MagicTransit } from './resources/magic-transit/magic-transit';
import { MTLSCertificates } from './resources/mtls-certificates/mtls-certificates';
import { NetworkInterconnects } from './resources/network-interconnects/network-interconnects';
import { OriginTLSClientAuth } from './resources/origin-tls-client-auth/origin-tls-client-auth';
import { PageShield } from './resources/page-shield/page-shield';
import { Pages } from './resources/pages/pages';
import { Queues } from './resources/queues/queues';
import { R2 } from './resources/r2/r2';
import { Radar } from './resources/radar/radar';
import { Registrar } from './resources/registrar/registrar';
import { RequestTracers } from './resources/request-tracers/request-tracers';
import { ResourceSharing } from './resources/resource-sharing/resource-sharing';
import { Rules } from './resources/rules/rules';
import { Rulesets } from './resources/rulesets/rulesets';
import { RUM } from './resources/rum/rum';
import { SecurityCenter } from './resources/security-center/security-center';
import { Snippets } from './resources/snippets/snippets';
import { Spectrum } from './resources/spectrum/spectrum';
import { Speed } from './resources/speed/speed';
import { SSL } from './resources/ssl/ssl';
import { Stream } from './resources/stream/stream';
import { Turnstile } from './resources/turnstile/turnstile';
import { URLScanner } from './resources/url-scanner/url-scanner';
import { User } from './resources/user/user';
import { Vectorize } from './resources/vectorize/vectorize';
import { WaitingRooms } from './resources/waiting-rooms/waiting-rooms';
import { Web3 } from './resources/web3/web3';
import { WorkersForPlatforms } from './resources/workers-for-platforms/workers-for-platforms';
import { Workers } from './resources/workers/workers';
import { Workflows } from './resources/workflows/workflows';
import { Zaraz } from './resources/zaraz/zaraz';
import { ZeroTrust } from './resources/zero-trust/zero-trust';
import { Zones } from './resources/zones/zones';

const safeJSON = (text: string) => {
  try {
    return JSON.parse(text);
  } catch (err) {
    return undefined;
  }
};

type LogFn = (message: string, ...rest: unknown[]) => void;
export type Logger = {
  error: LogFn;
  warn: LogFn;
  info: LogFn;
  debug: LogFn;
};
export type LogLevel = 'off' | 'error' | 'warn' | 'info' | 'debug';
const parseLogLevel = (
  maybeLevel: string | undefined,
  sourceName: string,
  client: Cloudflare,
): LogLevel | undefined => {
  if (!maybeLevel) {
    return undefined;
  }
  const levels: Record<LogLevel, true> = {
    off: true,
    error: true,
    warn: true,
    info: true,
    debug: true,
  };
  if (hasOwn(levels, maybeLevel)) {
    return maybeLevel;
  }
  loggerFor(client).warn(
    `${sourceName} was set to ${JSON.stringify(maybeLevel)}, expected one of ${JSON.stringify(
      Object.keys(levels),
    )}`,
  );
  return undefined;
};

export interface ClientOptions {
  /**
   * The preferred authorization scheme for interacting with the Cloudflare API. [Create a token](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/).
   */
  apiToken?: string | null | undefined;

  /**
   * The previous authorization scheme for interacting with the Cloudflare API. When possible, use API tokens instead of Global API keys.
   */
  apiKey?: string | null | undefined;

  /**
   * The previous authorization scheme for interacting with the Cloudflare API, used in conjunction with a Global API key.
   */
  apiEmail?: string | null | undefined;

  /**
   * Used when interacting with the Origin CA certificates API. [View/change your key](https://developers.cloudflare.com/fundamentals/api/get-started/ca-keys/#viewchange-your-origin-ca-keys).
   */
  userServiceKey?: string | null | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['CLOUDFLARE_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number | undefined;
  /**
   * Additional `RequestInit` options to be passed to `fetch` calls.
   * Properties will be overridden by per-request `fetchOptions`.
   */
  fetchOptions?: MergedRequestInit | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we expect that `fetch` is defined globally.
   */
  fetch?: Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `null` in request options.
   */
  defaultHeaders?: HeadersLike | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Record<string, string | undefined> | undefined;

  /**
   * Set the log level.
   *
   * Defaults to process.env['CLOUDFLARE_LOG'] or 'warn' if it isn't set.
   */
  logLevel?: LogLevel | undefined;

  /**
   * Set the logger.
   *
   * Defaults to globalThis.console.
   */
  logger?: Logger | undefined;
}

type FinalizedRequestInit = RequestInit & { headers: Headers };

/**
 * API Client for interfacing with the Cloudflare API.
 */
export class Cloudflare {
  apiToken: string | null;
  apiKey: string | null;
  apiEmail: string | null;
  userServiceKey: string | null;

  baseURL: string;
  maxRetries: number;
  timeout: number;
  logger: Logger | undefined;
  logLevel: LogLevel | undefined;
  fetchOptions: MergedRequestInit | undefined;

  private fetch: Fetch;
  #encoder: Opts.RequestEncoder;
  protected idempotencyHeader?: string;
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Cloudflare API.
   *
   * @param {string | null | undefined} [opts.apiToken=process.env['CLOUDFLARE_API_TOKEN'] ?? null]
   * @param {string | null | undefined} [opts.apiKey=process.env['CLOUDFLARE_API_KEY'] ?? null]
   * @param {string | null | undefined} [opts.apiEmail=process.env['CLOUDFLARE_EMAIL'] ?? null]
   * @param {string | null | undefined} [opts.userServiceKey=process.env['CLOUDFLARE_API_USER_SERVICE_KEY'] ?? null]
   * @param {string} [opts.baseURL=process.env['CLOUDFLARE_BASE_URL'] ?? https://api.cloudflare.com/client/v4] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {MergedRequestInit} [opts.fetchOptions] - Additional `RequestInit` options to be passed to `fetch` calls.
   * @param {Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {HeadersLike} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Record<string, string | undefined>} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = readEnv('CLOUDFLARE_BASE_URL'),
    apiToken = readEnv('CLOUDFLARE_API_TOKEN') ?? null,
    apiKey = readEnv('CLOUDFLARE_API_KEY') ?? null,
    apiEmail = readEnv('CLOUDFLARE_EMAIL') ?? null,
    userServiceKey = readEnv('CLOUDFLARE_API_USER_SERVICE_KEY') ?? null,
    ...opts
  }: ClientOptions = {}) {
    const options: ClientOptions = {
      apiToken,
      apiKey,
      apiEmail,
      userServiceKey,
      ...opts,
      baseURL: baseURL || `https://api.cloudflare.com/client/v4`,
    };

    this.baseURL = options.baseURL!;
    this.timeout = options.timeout ?? Cloudflare.DEFAULT_TIMEOUT /* 1 minute */;
    this.logger = options.logger ?? console;
    const defaultLogLevel = 'warn';
    // Set default logLevel early so that we can log a warning in parseLogLevel.
    this.logLevel = defaultLogLevel;
    this.logLevel =
      parseLogLevel(options.logLevel, 'ClientOptions.logLevel', this) ??
      parseLogLevel(readEnv('CLOUDFLARE_LOG'), "process.env['CLOUDFLARE_LOG']", this) ??
      defaultLogLevel;
    this.fetchOptions = options.fetchOptions;
    this.maxRetries = options.maxRetries ?? 2;
    this.fetch = options.fetch ?? Shims.getDefaultFetch();
    this.#encoder = Opts.FallbackEncoder;

    this._options = options;

    this.apiToken = apiToken;
    this.apiKey = apiKey;
    this.apiEmail = apiEmail;
    this.userServiceKey = userServiceKey;
  }

  protected defaultQuery(): Record<string, string | undefined> | undefined {
    return this._options.defaultQuery;
  }

  protected validateHeaders({ values, nulls }: NullableHeaders) {
    if (this.apiEmail && values.get('x-auth-email')) {
      return;
    }
    if (nulls.has('x-auth-email')) {
      return;
    }

    if (this.apiKey && values.get('x-auth-key')) {
      return;
    }
    if (nulls.has('x-auth-key')) {
      return;
    }

    if (this.apiToken && values.get('authorization')) {
      return;
    }
    if (nulls.has('authorization')) {
      return;
    }

    if (this.userServiceKey && values.get('x-auth-user-service-key')) {
      return;
    }
    if (nulls.has('x-auth-user-service-key')) {
      return;
    }

    throw new Error(
      'Could not resolve authentication method. Expected one of apiEmail, apiKey, apiToken or userServiceKey to be set. Or for one of the "X-Auth-Email", "X-Auth-Key", "Authorization" or "X-Auth-User-Service-Key" headers to be explicitly omitted',
    );
  }

  protected authHeaders(opts: FinalRequestOptions): Headers | undefined {
    const apiEmailAuth = this.apiEmailAuth(opts);
    const apiKeyAuth = this.apiKeyAuth(opts);
    const apiTokenAuth = this.apiTokenAuth(opts);
    const userServiceKeyAuth = this.userServiceKeyAuth(opts);

    if (
      apiEmailAuth != null &&
      !isEmptyHeaders(apiEmailAuth) &&
      apiKeyAuth != null &&
      !isEmptyHeaders(apiKeyAuth)
    ) {
      return { ...apiEmailAuth, ...apiKeyAuth };
    }

    if (apiTokenAuth != null && !isEmptyHeaders(apiTokenAuth)) {
      return apiTokenAuth;
    }

    if (userServiceKeyAuth != null && !isEmptyHeaders(userServiceKeyAuth)) {
      return userServiceKeyAuth;
    }
    return undefined;
  }

  protected apiEmailAuth(opts: FinalRequestOptions): Headers | undefined {
    if (this.apiEmail == null) {
      return undefined;
    }
    return new Headers({ 'X-Auth-Email': this.apiEmail });
  }

  protected apiKeyAuth(opts: FinalRequestOptions): Headers | undefined {
    if (this.apiKey == null) {
      return undefined;
    }
    return new Headers({ 'X-Auth-Key': this.apiKey });
  }

  protected apiTokenAuth(opts: FinalRequestOptions): Headers | undefined {
    if (this.apiToken == null) {
      return undefined;
    }
    return new Headers({ Authorization: `Bearer ${this.apiToken}` });
  }

  protected userServiceKeyAuth(opts: FinalRequestOptions): Headers | undefined {
    if (this.userServiceKey == null) {
      return undefined;
    }
    return new Headers({ 'X-Auth-User-Service-Key': this.userServiceKey });
  }

  protected stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { allowDots: true, arrayFormat: 'repeat' });
  }

  private getUserAgent(): string {
    return `${this.constructor.name}/JS ${VERSION}`;
  }

  protected defaultIdempotencyKey(): string {
    return `stainless-node-retry-${uuid4()}`;
  }

  protected makeStatusError(
    status: number,
    error: Object,
    message: string | undefined,
    headers: Headers,
  ): Errors.APIError {
    return Errors.APIError.generate(status, error, message, headers);
  }

  buildURL(path: string, query: Record<string, unknown> | null | undefined): string {
    const url =
      isAbsoluteURL(path) ?
        new URL(path)
      : new URL(this.baseURL + (this.baseURL.endsWith('/') && path.startsWith('/') ? path.slice(1) : path));

    const defaultQuery = this.defaultQuery();
    if (!isEmptyObj(defaultQuery)) {
      query = { ...defaultQuery, ...query };
    }

    if (typeof query === 'object' && query && !Array.isArray(query)) {
      url.search = this.stringifyQuery(query as Record<string, unknown>);
    }

    return url.toString();
  }

  /**
   * Used as a callback for mutating the given `FinalRequestOptions` object.
   */
  protected async prepareOptions(options: FinalRequestOptions): Promise<void> {}

  /**
   * Used as a callback for mutating the given `RequestInit` object.
   *
   * This is useful for cases where you want to add certain headers based off of
   * the request properties, e.g. `method` or `url`.
   */
  protected async prepareRequest(
    request: RequestInit,
    { url, options }: { url: string; options: FinalRequestOptions },
  ): Promise<void> {}

  get<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('get', path, opts);
  }

  post<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('post', path, opts);
  }

  patch<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('patch', path, opts);
  }

  put<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('put', path, opts);
  }

  delete<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('delete', path, opts);
  }

  private methodRequest<Rsp>(
    method: HTTPMethod,
    path: string,
    opts?: PromiseOrValue<RequestOptions>,
  ): APIPromise<Rsp> {
    return this.request(
      Promise.resolve(opts).then((opts) => {
        return { method, path, ...opts };
      }),
    );
  }

  request<Rsp>(
    options: PromiseOrValue<FinalRequestOptions>,
    remainingRetries: number | null = null,
  ): APIPromise<Rsp> {
    return new APIPromise(this, this.makeRequest(options, remainingRetries, undefined));
  }

  private async makeRequest(
    optionsInput: PromiseOrValue<FinalRequestOptions>,
    retriesRemaining: number | null,
    retryOfRequestLogID: string | undefined,
  ): Promise<APIResponseProps> {
    const options = await optionsInput;
    const maxRetries = options.maxRetries ?? this.maxRetries;
    if (retriesRemaining == null) {
      retriesRemaining = maxRetries;
    }

    await this.prepareOptions(options);

    const { req, url, timeout } = this.buildRequest(options, { retryCount: maxRetries - retriesRemaining });

    await this.prepareRequest(req, { url, options });

    /** Not an API request ID, just for correlating local log entries. */
    const requestLogID = 'log_' + ((Math.random() * (1 << 24)) | 0).toString(16).padStart(6, '0');
    const retryLogStr = retryOfRequestLogID === undefined ? '' : `, retryOf: ${retryOfRequestLogID}`;
    const startTime = Date.now();

    loggerFor(this).debug(
      `[${requestLogID}] sending request`,
      formatRequestDetails({
        retryOfRequestLogID,
        method: options.method,
        url,
        options,
        headers: req.headers,
      }),
    );

    if (options.signal?.aborted) {
      throw new Errors.APIUserAbortError();
    }

    const controller = new AbortController();
    const response = await this.fetchWithTimeout(url, req, timeout, controller).catch(castToError);
    const headersTime = Date.now();

    if (response instanceof Error) {
      const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;
      if (options.signal?.aborted) {
        throw new Errors.APIUserAbortError();
      }
      // detect native connection timeout errors
      // deno throws "TypeError: error sending request for url (https://example/): client error (Connect): tcp connect error: Operation timed out (os error 60): Operation timed out (os error 60)"
      // undici throws "TypeError: fetch failed" with cause "ConnectTimeoutError: Connect Timeout Error (attempted address: example:443, timeout: 1ms)"
      // others do not provide enough information to distinguish timeouts from other connection errors
      const isTimeout =
        isAbortError(response) ||
        /timed? ?out/i.test(String(response) + ('cause' in response ? String(response.cause) : ''));
      if (retriesRemaining) {
        loggerFor(this).info(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - ${retryMessage}`,
        );
        loggerFor(this).debug(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url,
            durationMs: headersTime - startTime,
            message: response.message,
          }),
        );
        return this.retryRequest(options, retriesRemaining, retryOfRequestLogID ?? requestLogID);
      }
      loggerFor(this).info(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - error; no more retries left`,
      );
      loggerFor(this).debug(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (error; no more retries left)`,
        formatRequestDetails({
          retryOfRequestLogID,
          url,
          durationMs: headersTime - startTime,
          message: response.message,
        }),
      );
      if (isTimeout) {
        throw new Errors.APIConnectionTimeoutError();
      }
      throw new Errors.APIConnectionError({ cause: response });
    }

    const responseInfo = `[${requestLogID}${retryLogStr}] ${req.method} ${url} ${
      response.ok ? 'succeeded' : 'failed'
    } with status ${response.status} in ${headersTime - startTime}ms`;

    if (!response.ok) {
      const shouldRetry = this.shouldRetry(response);
      if (retriesRemaining && shouldRetry) {
        const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;

        // We don't need the body of this response.
        await Shims.CancelReadableStream(response.body);
        loggerFor(this).info(`${responseInfo} - ${retryMessage}`);
        loggerFor(this).debug(
          `[${requestLogID}] response error (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url: response.url,
            status: response.status,
            headers: response.headers,
            durationMs: headersTime - startTime,
          }),
        );
        return this.retryRequest(
          options,
          retriesRemaining,
          retryOfRequestLogID ?? requestLogID,
          response.headers,
        );
      }

      const retryMessage = shouldRetry ? `error; no more retries left` : `error; not retryable`;

      loggerFor(this).info(`${responseInfo} - ${retryMessage}`);

      const errText = await response.text().catch((err: any) => castToError(err).message);
      const errJSON = safeJSON(errText);
      const errMessage = errJSON ? undefined : errText;

      loggerFor(this).debug(
        `[${requestLogID}] response error (${retryMessage})`,
        formatRequestDetails({
          retryOfRequestLogID,
          url: response.url,
          status: response.status,
          headers: response.headers,
          message: errMessage,
          durationMs: Date.now() - startTime,
        }),
      );

      const err = this.makeStatusError(response.status, errJSON, errMessage, response.headers);
      throw err;
    }

    loggerFor(this).info(responseInfo);
    loggerFor(this).debug(
      `[${requestLogID}] response start`,
      formatRequestDetails({
        retryOfRequestLogID,
        url: response.url,
        status: response.status,
        headers: response.headers,
        durationMs: headersTime - startTime,
      }),
    );

    return { response, options, controller, requestLogID, retryOfRequestLogID, startTime };
  }

  getAPIList<Item, PageClass extends Pagination.AbstractPage<Item> = Pagination.AbstractPage<Item>>(
    path: string,
    Page: new (...args: any[]) => PageClass,
    opts?: RequestOptions,
  ): Pagination.PagePromise<PageClass, Item> {
    return this.requestAPIList(Page, { method: 'get', path, ...opts });
  }

  requestAPIList<
    Item = unknown,
    PageClass extends Pagination.AbstractPage<Item> = Pagination.AbstractPage<Item>,
  >(
    Page: new (...args: ConstructorParameters<typeof Pagination.AbstractPage>) => PageClass,
    options: FinalRequestOptions,
  ): Pagination.PagePromise<PageClass, Item> {
    const request = this.makeRequest(options, null, undefined);
    return new Pagination.PagePromise<PageClass, Item>(this as any as Cloudflare, request, Page);
  }

  async fetchWithTimeout(
    url: RequestInfo,
    init: RequestInit | undefined,
    ms: number,
    controller: AbortController,
  ): Promise<Response> {
    const { signal, method, ...options } = init || {};
    if (signal) signal.addEventListener('abort', () => controller.abort());

    const timeout = setTimeout(() => controller.abort(), ms);

    const isReadableBody =
      ((globalThis as any).ReadableStream && options.body instanceof (globalThis as any).ReadableStream) ||
      (typeof options.body === 'object' && options.body !== null && Symbol.asyncIterator in options.body);

    const fetchOptions: RequestInit = {
      signal: controller.signal as any,
      ...(isReadableBody ? { duplex: 'half' } : {}),
      method: 'GET',
      ...options,
    };
    if (method) {
      // Custom methods like 'patch' need to be uppercased
      // See https://github.com/nodejs/undici/issues/2294
      fetchOptions.method = method.toUpperCase();
    }

    return (
      // use undefined this binding; fetch errors if bound to something else in browser/cloudflare
      this.fetch.call(undefined, url, fetchOptions).finally(() => {
        clearTimeout(timeout);
      })
    );
  }

  private shouldRetry(response: Response): boolean {
    // Note this is not a standard header.
    const shouldRetryHeader = response.headers.get('x-should-retry');

    // If the server explicitly says whether or not to retry, obey.
    if (shouldRetryHeader === 'true') return true;
    if (shouldRetryHeader === 'false') return false;

    // Retry on request timeouts.
    if (response.status === 408) return true;

    // Retry on lock timeouts.
    if (response.status === 409) return true;

    // Retry on rate limits.
    if (response.status === 429) return true;

    // Retry internal errors.
    if (response.status >= 500) return true;

    return false;
  }

  private async retryRequest(
    options: FinalRequestOptions,
    retriesRemaining: number,
    requestLogID: string,
    responseHeaders?: Headers | undefined,
  ): Promise<APIResponseProps> {
    let timeoutMillis: number | undefined;

    // Note the `retry-after-ms` header may not be standard, but is a good idea and we'd like proactive support for it.
    const retryAfterMillisHeader = responseHeaders?.get('retry-after-ms');
    if (retryAfterMillisHeader) {
      const timeoutMs = parseFloat(retryAfterMillisHeader);
      if (!Number.isNaN(timeoutMs)) {
        timeoutMillis = timeoutMs;
      }
    }

    // About the Retry-After header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After
    const retryAfterHeader = responseHeaders?.get('retry-after');
    if (retryAfterHeader && !timeoutMillis) {
      const timeoutSeconds = parseFloat(retryAfterHeader);
      if (!Number.isNaN(timeoutSeconds)) {
        timeoutMillis = timeoutSeconds * 1000;
      } else {
        timeoutMillis = Date.parse(retryAfterHeader) - Date.now();
      }
    }

    // If the API asks us to wait a certain amount of time (and it's a reasonable amount),
    // just do what it says, but otherwise calculate a default
    if (!(timeoutMillis && 0 <= timeoutMillis && timeoutMillis < 60 * 1000)) {
      const maxRetries = options.maxRetries ?? this.maxRetries;
      timeoutMillis = this.calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries);
    }
    await sleep(timeoutMillis);

    return this.makeRequest(options, retriesRemaining - 1, requestLogID);
  }

  private calculateDefaultRetryTimeoutMillis(retriesRemaining: number, maxRetries: number): number {
    const initialRetryDelay = 0.5;
    const maxRetryDelay = 8.0;

    const numRetries = maxRetries - retriesRemaining;

    // Apply exponential backoff, but not more than the max.
    const sleepSeconds = Math.min(initialRetryDelay * Math.pow(2, numRetries), maxRetryDelay);

    // Apply some jitter, take up to at most 25 percent of the retry time.
    const jitter = 1 - Math.random() * 0.25;

    return sleepSeconds * jitter * 1000;
  }

  buildRequest(
    options: FinalRequestOptions,
    { retryCount = 0 }: { retryCount?: number } = {},
  ): { req: FinalizedRequestInit; url: string; timeout: number } {
    options = { ...options };
    const { method, path, query } = options;

    const url = this.buildURL(path!, query as Record<string, unknown>);
    if ('timeout' in options) validatePositiveInteger('timeout', options.timeout);
    options.timeout = options.timeout ?? this.timeout;
    const { bodyHeaders, body } = this.buildBody({ options });
    const reqHeaders = this.buildHeaders({ options, method, bodyHeaders, retryCount });

    const req: FinalizedRequestInit = {
      method,
      headers: reqHeaders,
      ...(options.signal && { signal: options.signal }),
      ...((globalThis as any).ReadableStream &&
        body instanceof (globalThis as any).ReadableStream && { duplex: 'half' }),
      ...(body && { body }),
      ...((this.fetchOptions as any) ?? {}),
      ...((options.fetchOptions as any) ?? {}),
    };

    return { req, url, timeout: options.timeout };
  }

  private buildHeaders({
    options,
    method,
    bodyHeaders,
    retryCount,
  }: {
    options: FinalRequestOptions;
    method: HTTPMethod;
    bodyHeaders: HeadersLike;
    retryCount: number;
  }): Headers {
    let idempotencyHeaders: HeadersLike = {};
    if (this.idempotencyHeader && method !== 'get') {
      if (!options.idempotencyKey) options.idempotencyKey = this.defaultIdempotencyKey();
      idempotencyHeaders[this.idempotencyHeader] = options.idempotencyKey;
    }

    const headers = buildHeaders([
      idempotencyHeaders,
      {
        Accept: 'application/json',
        'User-Agent': this.getUserAgent(),
        'X-Stainless-Retry-Count': String(retryCount),
        ...(options.timeout ? { 'X-Stainless-Timeout': String(options.timeout) } : {}),
        ...getPlatformHeaders(),
        'X-Auth-Key': this.apiKey,
        'X-Auth-Email': this.apiEmail,
      },
      this.authHeaders(options),
      this._options.defaultHeaders,
      bodyHeaders,
      options.headers,
    ]);

    this.validateHeaders(headers);

    return headers.values;
  }

  private buildBody({ options: { body, headers: rawHeaders } }: { options: FinalRequestOptions }): {
    bodyHeaders: HeadersLike;
    body: BodyInit | undefined;
  } {
    if (!body) {
      return { bodyHeaders: undefined, body: undefined };
    }
    const headers = buildHeaders([rawHeaders]);
    if (
      // Pass raw type verbatim
      ArrayBuffer.isView(body) ||
      body instanceof ArrayBuffer ||
      body instanceof DataView ||
      (typeof body === 'string' &&
        // Preserve legacy string encoding behavior for now
        headers.values.has('content-type')) ||
      // `Blob` is superset of `File`
      body instanceof Blob ||
      // `FormData` -> `multipart/form-data`
      body instanceof FormData ||
      // `URLSearchParams` -> `application/x-www-form-urlencoded`
      body instanceof URLSearchParams ||
      // Send chunked stream (each chunk has own `length`)
      ((globalThis as any).ReadableStream && body instanceof (globalThis as any).ReadableStream)
    ) {
      return { bodyHeaders: undefined, body: body as BodyInit };
    } else if (
      typeof body === 'object' &&
      (Symbol.asyncIterator in body ||
        (Symbol.iterator in body && 'next' in body && typeof body.next === 'function'))
    ) {
      return { bodyHeaders: undefined, body: Shims.ReadableStreamFrom(body as AsyncIterable<Uint8Array>) };
    } else {
      return this.#encoder({ body, headers });
    }
  }

  static Cloudflare = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static CloudflareError = Errors.CloudflareError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;

  accounts: API.Accounts = new API.Accounts(this);
  originCACertificates: API.OriginCACertificates = new API.OriginCACertificates(this);
  ips: API.IPs = new API.IPs(this);
  memberships: API.Memberships = new API.Memberships(this);
  user: API.User = new API.User(this);
  zones: API.Zones = new API.Zones(this);
  loadBalancers: API.LoadBalancers = new API.LoadBalancers(this);
  cache: API.Cache = new API.Cache(this);
  ssl: API.SSL = new API.SSL(this);
  acm: API.ACM = new API.ACM(this);
  argo: API.Argo = new API.Argo(this);
  certificateAuthorities: API.CertificateAuthorities = new API.CertificateAuthorities(this);
  clientCertificates: API.ClientCertificates = new API.ClientCertificates(this);
  customCertificates: API.CustomCertificates = new API.CustomCertificates(this);
  customHostnames: API.CustomHostnames = new API.CustomHostnames(this);
  customNameservers: API.CustomNameservers = new API.CustomNameservers(this);
  dnsFirewall: API.DNSFirewall = new API.DNSFirewall(this);
  dns: API.DNS = new API.DNS(this);
  emailSecurity: API.EmailSecurity = new API.EmailSecurity(this);
  emailRouting: API.EmailRouting = new API.EmailRouting(this);
  filters: API.Filters = new API.Filters(this);
  firewall: API.Firewall = new API.Firewall(this);
  healthchecks: API.Healthchecks = new API.Healthchecks(this);
  keylessCertificates: API.KeylessCertificates = new API.KeylessCertificates(this);
  logpush: API.Logpush = new API.Logpush(this);
  logs: API.Logs = new API.Logs(this);
  originTLSClientAuth: API.OriginTLSClientAuth = new API.OriginTLSClientAuth(this);
  pageRules: API.PageRules = new API.PageRules(this);
  rateLimits: API.RateLimits = new API.RateLimits(this);
  waitingRooms: API.WaitingRooms = new API.WaitingRooms(this);
  web3: API.Web3 = new API.Web3(this);
  workers: API.Workers = new API.Workers(this);
  kv: API.KV = new API.KV(this);
  durableObjects: API.DurableObjects = new API.DurableObjects(this);
  queues: API.Queues = new API.Queues(this);
  apiGateway: API.APIGateway = new API.APIGateway(this);
  managedTransforms: API.ManagedTransforms = new API.ManagedTransforms(this);
  pageShield: API.PageShield = new API.PageShield(this);
  rulesets: API.Rulesets = new API.Rulesets(this);
  urlNormalization: API.URLNormalization = new API.URLNormalization(this);
  spectrum: API.Spectrum = new API.Spectrum(this);
  addressing: API.Addressing = new API.Addressing(this);
  auditLogs: API.AuditLogs = new API.AuditLogs(this);
  billing: API.Billing = new API.Billing(this);
  brandProtection: API.BrandProtection = new API.BrandProtection(this);
  diagnostics: API.Diagnostics = new API.Diagnostics(this);
  images: API.Images = new API.Images(this);
  intel: API.Intel = new API.Intel(this);
  magicTransit: API.MagicTransit = new API.MagicTransit(this);
  magicNetworkMonitoring: API.MagicNetworkMonitoring = new API.MagicNetworkMonitoring(this);
  networkInterconnects: API.NetworkInterconnects = new API.NetworkInterconnects(this);
  mtlsCertificates: API.MTLSCertificates = new API.MTLSCertificates(this);
  pages: API.Pages = new API.Pages(this);
  registrar: API.Registrar = new API.Registrar(this);
  requestTracers: API.RequestTracers = new API.RequestTracers(this);
  rules: API.Rules = new API.Rules(this);
  stream: API.Stream = new API.Stream(this);
  alerting: API.Alerting = new API.Alerting(this);
  d1: API.D1Resource = new API.D1Resource(this);
  r2: API.R2 = new API.R2(this);
  workersForPlatforms: API.WorkersForPlatforms = new API.WorkersForPlatforms(this);
  zeroTrust: API.ZeroTrust = new API.ZeroTrust(this);
  turnstile: API.Turnstile = new API.Turnstile(this);
  hyperdrive: API.HyperdriveResource = new API.HyperdriveResource(this);
  rum: API.RUM = new API.RUM(this);
  vectorize: API.Vectorize = new API.Vectorize(this);
  urlScanner: API.URLScanner = new API.URLScanner(this);
  radar: API.Radar = new API.Radar(this);
  botManagement: API.BotManagement = new API.BotManagement(this);
  originPostQuantumEncryption: API.OriginPostQuantumEncryption = new API.OriginPostQuantumEncryption(this);
  zaraz: API.Zaraz = new API.Zaraz(this);
  speed: API.Speed = new API.Speed(this);
  dcvDelegation: API.DCVDelegation = new API.DCVDelegation(this);
  hostnames: API.Hostnames = new API.Hostnames(this);
  snippets: API.Snippets = new API.Snippets(this);
  calls: API.Calls = new API.Calls(this);
  cloudforceOne: API.CloudforceOne = new API.CloudforceOne(this);
  aiGateway: API.AIGateway = new API.AIGateway(this);
  iam: API.IAM = new API.IAM(this);
  cloudConnector: API.CloudConnector = new API.CloudConnector(this);
  botnetFeed: API.BotnetFeed = new API.BotnetFeed(this);
  securityTXT: API.SecurityTXT = new API.SecurityTXT(this);
  workflows: API.Workflows = new API.Workflows(this);
  resourceSharing: API.ResourceSharing = new API.ResourceSharing(this);
  leakedCredentialChecks: API.LeakedCredentialChecks = new API.LeakedCredentialChecks(this);
  contentScanning: API.ContentScanning = new API.ContentScanning(this);
  abuseReports: API.AbuseReports = new API.AbuseReports(this);
  ai: API.AI = new API.AI(this);
  securityCenter: API.SecurityCenter = new API.SecurityCenter(this);
  browserRendering: API.BrowserRendering = new API.BrowserRendering(this);
  customPages: API.CustomPages = new API.CustomPages(this);
}
Cloudflare.Accounts = Accounts;
Cloudflare.OriginCACertificates = OriginCACertificates;
Cloudflare.IPs = IPs;
Cloudflare.Memberships = Memberships;
Cloudflare.User = User;
Cloudflare.Zones = Zones;
Cloudflare.LoadBalancers = LoadBalancers;
Cloudflare.Cache = Cache;
Cloudflare.SSL = SSL;
Cloudflare.ACM = ACM;
Cloudflare.Argo = Argo;
Cloudflare.CertificateAuthorities = CertificateAuthorities;
Cloudflare.ClientCertificates = ClientCertificates;
Cloudflare.CustomCertificates = CustomCertificates;
Cloudflare.CustomHostnames = CustomHostnames;
Cloudflare.CustomNameservers = CustomNameservers;
Cloudflare.DNSFirewall = DNSFirewall;
Cloudflare.DNS = DNS;
Cloudflare.EmailSecurity = EmailSecurity;
Cloudflare.EmailRouting = EmailRouting;
Cloudflare.Filters = Filters;
Cloudflare.Firewall = Firewall;
Cloudflare.Healthchecks = Healthchecks;
Cloudflare.KeylessCertificates = KeylessCertificates;
Cloudflare.Logpush = Logpush;
Cloudflare.Logs = Logs;
Cloudflare.OriginTLSClientAuth = OriginTLSClientAuth;
Cloudflare.PageRules = PageRules;
Cloudflare.RateLimits = RateLimits;
Cloudflare.WaitingRooms = WaitingRooms;
Cloudflare.Web3 = Web3;
Cloudflare.Workers = Workers;
Cloudflare.KV = KV;
Cloudflare.DurableObjects = DurableObjects;
Cloudflare.Queues = Queues;
Cloudflare.APIGateway = APIGateway;
Cloudflare.ManagedTransforms = ManagedTransforms;
Cloudflare.PageShield = PageShield;
Cloudflare.Rulesets = Rulesets;
Cloudflare.URLNormalization = URLNormalization;
Cloudflare.Spectrum = Spectrum;
Cloudflare.Addressing = Addressing;
Cloudflare.AuditLogs = AuditLogs;
Cloudflare.Billing = Billing;
Cloudflare.BrandProtection = BrandProtection;
Cloudflare.Diagnostics = Diagnostics;
Cloudflare.Images = Images;
Cloudflare.Intel = Intel;
Cloudflare.MagicTransit = MagicTransit;
Cloudflare.MagicNetworkMonitoring = MagicNetworkMonitoring;
Cloudflare.NetworkInterconnects = NetworkInterconnects;
Cloudflare.MTLSCertificates = MTLSCertificates;
Cloudflare.Pages = Pages;
Cloudflare.Registrar = Registrar;
Cloudflare.RequestTracers = RequestTracers;
Cloudflare.Rules = Rules;
Cloudflare.Stream = Stream;
Cloudflare.Alerting = Alerting;
Cloudflare.D1Resource = D1Resource;
Cloudflare.R2 = R2;
Cloudflare.WorkersForPlatforms = WorkersForPlatforms;
Cloudflare.ZeroTrust = ZeroTrust;
Cloudflare.Turnstile = Turnstile;
Cloudflare.HyperdriveResource = HyperdriveResource;
Cloudflare.RUM = RUM;
Cloudflare.Vectorize = Vectorize;
Cloudflare.URLScanner = URLScanner;
Cloudflare.Radar = Radar;
Cloudflare.BotManagement = BotManagement;
Cloudflare.OriginPostQuantumEncryption = OriginPostQuantumEncryption;
Cloudflare.Zaraz = Zaraz;
Cloudflare.Speed = Speed;
Cloudflare.DCVDelegation = DCVDelegation;
Cloudflare.Hostnames = Hostnames;
Cloudflare.Snippets = Snippets;
Cloudflare.Calls = Calls;
Cloudflare.CloudforceOne = CloudforceOne;
Cloudflare.AIGateway = AIGateway;
Cloudflare.IAM = IAM;
Cloudflare.CloudConnector = CloudConnector;
Cloudflare.BotnetFeed = BotnetFeed;
Cloudflare.SecurityTXT = SecurityTXT;
Cloudflare.Workflows = Workflows;
Cloudflare.ResourceSharing = ResourceSharing;
Cloudflare.LeakedCredentialChecks = LeakedCredentialChecks;
Cloudflare.ContentScanning = ContentScanning;
Cloudflare.AbuseReports = AbuseReports;
Cloudflare.AI = AI;
Cloudflare.SecurityCenter = SecurityCenter;
Cloudflare.BrowserRendering = BrowserRendering;
Cloudflare.CustomPages = CustomPages;
export declare namespace Cloudflare {
  export type RequestOptions = Opts.RequestOptions;

  export import V4PagePagination = Pagination.V4PagePagination;
  export {
    type V4PagePaginationParams as V4PagePaginationParams,
    type V4PagePaginationResponse as V4PagePaginationResponse,
  };

  export import V4PagePaginationArray = Pagination.V4PagePaginationArray;
  export {
    type V4PagePaginationArrayParams as V4PagePaginationArrayParams,
    type V4PagePaginationArrayResponse as V4PagePaginationArrayResponse,
  };

  export import CursorPagination = Pagination.CursorPagination;
  export {
    type CursorPaginationParams as CursorPaginationParams,
    type CursorPaginationResponse as CursorPaginationResponse,
  };

  export import CursorLimitPagination = Pagination.CursorLimitPagination;
  export {
    type CursorLimitPaginationParams as CursorLimitPaginationParams,
    type CursorLimitPaginationResponse as CursorLimitPaginationResponse,
  };

  export import SinglePage = Pagination.SinglePage;
  export { type SinglePageResponse as SinglePageResponse };

  export { Accounts as Accounts };

  export { OriginCACertificates as OriginCACertificates };

  export { IPs as IPs };

  export { Memberships as Memberships };

  export { User as User };

  export { Zones as Zones };

  export { LoadBalancers as LoadBalancers };

  export { Cache as Cache };

  export { SSL as SSL };

  export { ACM as ACM };

  export { Argo as Argo };

  export { CertificateAuthorities as CertificateAuthorities };

  export { ClientCertificates as ClientCertificates };

  export { CustomCertificates as CustomCertificates };

  export { CustomHostnames as CustomHostnames };

  export { CustomNameservers as CustomNameservers };

  export { DNSFirewall as DNSFirewall };

  export { DNS as DNS };

  export { EmailSecurity as EmailSecurity };

  export { EmailRouting as EmailRouting };

  export { Filters as Filters };

  export { Firewall as Firewall };

  export { Healthchecks as Healthchecks };

  export { KeylessCertificates as KeylessCertificates };

  export { Logpush as Logpush };

  export { Logs as Logs };

  export { OriginTLSClientAuth as OriginTLSClientAuth };

  export { PageRules as PageRules };

  export { RateLimits as RateLimits };

  export { WaitingRooms as WaitingRooms };

  export { Web3 as Web3 };

  export { Workers as Workers };

  export { KV as KV };

  export { DurableObjects as DurableObjects };

  export { Queues as Queues };

  export { APIGateway as APIGateway };

  export { ManagedTransforms as ManagedTransforms };

  export { PageShield as PageShield };

  export { Rulesets as Rulesets };

  export { URLNormalization as URLNormalization };

  export { Spectrum as Spectrum };

  export { Addressing as Addressing };

  export { AuditLogs as AuditLogs };

  export { Billing as Billing };

  export { BrandProtection as BrandProtection };

  export { Diagnostics as Diagnostics };

  export { Images as Images };

  export { Intel as Intel };

  export { MagicTransit as MagicTransit };

  export { MagicNetworkMonitoring as MagicNetworkMonitoring };

  export { NetworkInterconnects as NetworkInterconnects };

  export { MTLSCertificates as MTLSCertificates };

  export { Pages as Pages };

  export { Registrar as Registrar };

  export { RequestTracers as RequestTracers };

  export { Rules as Rules };

  export { Stream as Stream };

  export { Alerting as Alerting };

  export { D1Resource as D1Resource };

  export { R2 as R2 };

  export { WorkersForPlatforms as WorkersForPlatforms };

  export { ZeroTrust as ZeroTrust };

  export { Turnstile as Turnstile };

  export { HyperdriveResource as HyperdriveResource };

  export { RUM as RUM };

  export { Vectorize as Vectorize };

  export { URLScanner as URLScanner };

  export { Radar as Radar };

  export { BotManagement as BotManagement };

  export { OriginPostQuantumEncryption as OriginPostQuantumEncryption };

  export { Zaraz as Zaraz };

  export { Speed as Speed };

  export { DCVDelegation as DCVDelegation };

  export { Hostnames as Hostnames };

  export { Snippets as Snippets };

  export { Calls as Calls };

  export { CloudforceOne as CloudforceOne };

  export { AIGateway as AIGateway };

  export { IAM as IAM };

  export { CloudConnector as CloudConnector };

  export { BotnetFeed as BotnetFeed };

  export { SecurityTXT as SecurityTXT };

  export { Workflows as Workflows };

  export { ResourceSharing as ResourceSharing };

  export { LeakedCredentialChecks as LeakedCredentialChecks };

  export { ContentScanning as ContentScanning };

  export { AbuseReports as AbuseReports };

  export { AI as AI };

  export { SecurityCenter as SecurityCenter };

  export { BrowserRendering as BrowserRendering };

  export { CustomPages as CustomPages };

  export type ASN = API.ASN;
  export type AuditLog = API.AuditLog;
  export type CertificateCA = API.CertificateCA;
  export type CertificateRequestType = API.CertificateRequestType;
  export type CloudflareTunnel = API.CloudflareTunnel;
  export type ErrorData = API.ErrorData;
  export type Identifier = API.Identifier;
  export type LoadBalancerPreview = API.LoadBalancerPreview;
  export type Member = API.Member;
  export type PaginationInfo = API.PaginationInfo;
  export type Permission = API.Permission;
  export type PermissionGrant = API.PermissionGrant;
  export type RatePlan = API.RatePlan;
  export type ResponseInfo = API.ResponseInfo;
  export type Result = API.Result;
  export type Role = API.Role;
  export type SortDirection = API.SortDirection;
  export type Subscription = API.Subscription;
  export type SubscriptionComponent = API.SubscriptionComponent;
  export type SubscriptionZone = API.SubscriptionZone;
  export type Token = API.Token;
  export type TokenConditionCIDRList = API.TokenConditionCIDRList;
  export type TokenPolicy = API.TokenPolicy;
  export type TokenValue = API.TokenValue;
}
