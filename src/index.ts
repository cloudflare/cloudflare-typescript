// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Errors from './error';
import * as Uploads from './uploads';
import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Pagination from './pagination';
import * as API from './resources/index';

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
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Cloudflare API.
 */
export class Cloudflare extends Core.APIClient {
  apiToken: string | null;
  apiKey: string | null;
  apiEmail: string | null;
  userServiceKey: string | null;

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
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('CLOUDFLARE_BASE_URL'),
    apiToken = Core.readEnv('CLOUDFLARE_API_TOKEN') ?? null,
    apiKey = Core.readEnv('CLOUDFLARE_API_KEY') ?? null,
    apiEmail = Core.readEnv('CLOUDFLARE_EMAIL') ?? null,
    userServiceKey = Core.readEnv('CLOUDFLARE_API_USER_SERVICE_KEY') ?? null,
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

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.apiToken = apiToken;
    this.apiKey = apiKey;
    this.apiEmail = apiEmail;
    this.userServiceKey = userServiceKey;
  }

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
  dns: API.DNS = new API.DNS(this);
  dnssec: API.DNSSECResource = new API.DNSSECResource(this);
  emailSecurity: API.EmailSecurity = new API.EmailSecurity(this);
  emailRouting: API.EmailRouting = new API.EmailRouting(this);
  filters: API.Filters = new API.Filters(this);
  firewall: API.Firewall = new API.Firewall(this);
  healthchecks: API.Healthchecks = new API.Healthchecks(this);
  keylessCertificates: API.KeylessCertificates = new API.KeylessCertificates(this);
  logpush: API.Logpush = new API.Logpush(this);
  logs: API.Logs = new API.Logs(this);
  originTLSClientAuth: API.OriginTLSClientAuth = new API.OriginTLSClientAuth(this);
  pagerules: API.Pagerules = new API.Pagerules(this);
  rateLimits: API.RateLimits = new API.RateLimits(this);
  secondaryDNS: API.SecondaryDNS = new API.SecondaryDNS(this);
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
  mtlsCertificates: API.MTLSCertificates = new API.MTLSCertificates(this);
  pages: API.Pages = new API.Pages(this);
  registrar: API.Registrar = new API.Registrar(this);
  requestTracers: API.RequestTracers = new API.RequestTracers(this);
  rules: API.Rules = new API.Rules(this);
  storage: API.Storage = new API.Storage(this);
  stream: API.Stream = new API.Stream(this);
  alerting: API.Alerting = new API.Alerting(this);
  d1: API.D1Resource = new API.D1Resource(this);
  r2: API.R2 = new API.R2(this);
  warpConnector: API.WARPConnector = new API.WARPConnector(this);
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

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      'X-Auth-Key': this.apiKey,
      'X-Auth-Email': this.apiEmail,
      ...this._options.defaultHeaders,
    };
  }

  protected override validateHeaders(headers: Core.Headers, customHeaders: Core.Headers) {
    if (this.apiEmail && headers['x-auth-email']) {
      return;
    }
    if (customHeaders['x-auth-email'] === null) {
      return;
    }

    if (this.apiKey && headers['x-auth-key']) {
      return;
    }
    if (customHeaders['x-auth-key'] === null) {
      return;
    }

    if (this.apiToken && headers['authorization']) {
      return;
    }
    if (customHeaders['authorization'] === null) {
      return;
    }

    if (this.userServiceKey && headers['x-auth-user-service-key']) {
      return;
    }
    if (customHeaders['x-auth-user-service-key'] === null) {
      return;
    }

    throw new Error(
      'Could not resolve authentication method. Expected one of apiEmail, apiKey, apiToken or userServiceKey to be set. Or for one of the "X-Auth-Email", "X-Auth-Key", "Authorization" or "X-Auth-User-Service-Key" headers to be explicitly omitted',
    );
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    const apiEmailAuth = this.apiEmailAuth(opts);
    const apiKeyAuth = this.apiKeyAuth(opts);
    const apiTokenAuth = this.apiTokenAuth(opts);
    const userServiceKeyAuth = this.userServiceKeyAuth(opts);

    if (
      apiEmailAuth != null &&
      !Core.isEmptyObj(apiEmailAuth) &&
      apiKeyAuth != null &&
      !Core.isEmptyObj(apiKeyAuth)
    ) {
      return { ...apiEmailAuth, ...apiKeyAuth };
    }

    if (apiTokenAuth != null && !Core.isEmptyObj(apiTokenAuth)) {
      return apiTokenAuth;
    }

    if (userServiceKeyAuth != null && !Core.isEmptyObj(userServiceKeyAuth)) {
      return userServiceKeyAuth;
    }
    return {};
  }

  protected apiEmailAuth(opts: Core.FinalRequestOptions): Core.Headers {
    if (this.apiEmail == null) {
      return {};
    }
    return { 'X-Auth-Email': this.apiEmail };
  }

  protected apiKeyAuth(opts: Core.FinalRequestOptions): Core.Headers {
    if (this.apiKey == null) {
      return {};
    }
    return { 'X-Auth-Key': this.apiKey };
  }

  protected apiTokenAuth(opts: Core.FinalRequestOptions): Core.Headers {
    if (this.apiToken == null) {
      return {};
    }
    return { Authorization: `Bearer ${this.apiToken}` };
  }

  protected userServiceKeyAuth(opts: Core.FinalRequestOptions): Core.Headers {
    if (this.userServiceKey == null) {
      return {};
    }
    return { 'X-Auth-User-Service-Key': this.userServiceKey };
  }

  protected override stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { allowDots: true, arrayFormat: 'repeat' });
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
  static fileFromPath = Uploads.fileFromPath;
}

export const {
  CloudflareError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace Cloudflare {
  export import RequestOptions = Core.RequestOptions;

  export import V4PagePagination = Pagination.V4PagePagination;
  export import V4PagePaginationParams = Pagination.V4PagePaginationParams;
  export import V4PagePaginationResponse = Pagination.V4PagePaginationResponse;

  export import V4PagePaginationArray = Pagination.V4PagePaginationArray;
  export import V4PagePaginationArrayParams = Pagination.V4PagePaginationArrayParams;
  export import V4PagePaginationArrayResponse = Pagination.V4PagePaginationArrayResponse;

  export import CursorPagination = Pagination.CursorPagination;
  export import CursorPaginationParams = Pagination.CursorPaginationParams;
  export import CursorPaginationResponse = Pagination.CursorPaginationResponse;

  export import CursorLimitPagination = Pagination.CursorLimitPagination;
  export import CursorLimitPaginationParams = Pagination.CursorLimitPaginationParams;
  export import CursorLimitPaginationResponse = Pagination.CursorLimitPaginationResponse;

  export import SinglePage = Pagination.SinglePage;
  export import SinglePageResponse = Pagination.SinglePageResponse;

  export import Accounts = API.Accounts;

  export import OriginCACertificates = API.OriginCACertificates;

  export import IPs = API.IPs;

  export import Memberships = API.Memberships;

  export import User = API.User;

  export import Zones = API.Zones;

  export import LoadBalancers = API.LoadBalancers;

  export import Cache = API.Cache;

  export import SSL = API.SSL;

  export import ACM = API.ACM;

  export import Argo = API.Argo;

  export import CertificateAuthorities = API.CertificateAuthorities;

  export import ClientCertificates = API.ClientCertificates;

  export import CustomCertificates = API.CustomCertificates;

  export import CustomHostnames = API.CustomHostnames;

  export import CustomNameservers = API.CustomNameservers;

  export import DNS = API.DNS;

  export import DNSSECResource = API.DNSSECResource;

  export import EmailSecurity = API.EmailSecurity;

  export import EmailRouting = API.EmailRouting;

  export import Filters = API.Filters;

  export import Firewall = API.Firewall;

  export import Healthchecks = API.Healthchecks;

  export import KeylessCertificates = API.KeylessCertificates;

  export import Logpush = API.Logpush;

  export import Logs = API.Logs;

  export import OriginTLSClientAuth = API.OriginTLSClientAuth;

  export import Pagerules = API.Pagerules;

  export import RateLimits = API.RateLimits;

  export import SecondaryDNS = API.SecondaryDNS;

  export import WaitingRooms = API.WaitingRooms;

  export import Web3 = API.Web3;

  export import Workers = API.Workers;

  export import KV = API.KV;

  export import DurableObjects = API.DurableObjects;

  export import Queues = API.Queues;

  export import APIGateway = API.APIGateway;

  export import ManagedTransforms = API.ManagedTransforms;

  export import PageShield = API.PageShield;

  export import Rulesets = API.Rulesets;

  export import URLNormalization = API.URLNormalization;

  export import Spectrum = API.Spectrum;

  export import Addressing = API.Addressing;

  export import AuditLogs = API.AuditLogs;

  export import Billing = API.Billing;

  export import BrandProtection = API.BrandProtection;

  export import Diagnostics = API.Diagnostics;

  export import Images = API.Images;

  export import Intel = API.Intel;

  export import MagicTransit = API.MagicTransit;

  export import MagicNetworkMonitoring = API.MagicNetworkMonitoring;

  export import MTLSCertificates = API.MTLSCertificates;

  export import Pages = API.Pages;

  export import Registrar = API.Registrar;

  export import RequestTracers = API.RequestTracers;

  export import Rules = API.Rules;

  export import Storage = API.Storage;

  export import Stream = API.Stream;

  export import Alerting = API.Alerting;

  export import D1Resource = API.D1Resource;

  export import R2 = API.R2;

  export import WARPConnector = API.WARPConnector;

  export import WorkersForPlatforms = API.WorkersForPlatforms;

  export import ZeroTrust = API.ZeroTrust;

  export import Turnstile = API.Turnstile;

  export import HyperdriveResource = API.HyperdriveResource;

  export import RUM = API.RUM;

  export import Vectorize = API.Vectorize;

  export import URLScanner = API.URLScanner;

  export import Radar = API.Radar;

  export import BotManagement = API.BotManagement;

  export import OriginPostQuantumEncryption = API.OriginPostQuantumEncryption;

  export import Speed = API.Speed;

  export import DCVDelegation = API.DCVDelegation;

  export import Hostnames = API.Hostnames;

  export import Snippets = API.Snippets;

  export import Calls = API.Calls;

  export import CloudforceOne = API.CloudforceOne;

  export import AIGateway = API.AIGateway;

  export import IAM = API.IAM;

  export import CloudConnector = API.CloudConnector;

  export import BotnetFeed = API.BotnetFeed;

  export import SecurityTXT = API.SecurityTXT;
  export import SecurityTXTUpdateResponse = API.SecurityTXTUpdateResponse;
  export import SecurityTXTDeleteResponse = API.SecurityTXTDeleteResponse;
  export import SecurityTXTGetResponse = API.SecurityTXTGetResponse;
  export import SecurityTXTUpdateParams = API.SecurityTXTUpdateParams;
  export import SecurityTXTDeleteParams = API.SecurityTXTDeleteParams;
  export import SecurityTXTGetParams = API.SecurityTXTGetParams;

  export import ASN = API.ASN;
  export import AuditLog = API.AuditLog;
  export import CertificateCA = API.CertificateCA;
  export import CertificateRequestType = API.CertificateRequestType;
  export import CloudflareTunnel = API.CloudflareTunnel;
  export import ErrorData = API.ErrorData;
  export import Identifier = API.Identifier;
  export import LoadBalancerPreview = API.LoadBalancerPreview;
  export import Member = API.Member;
  export import PaginationInfo = API.PaginationInfo;
  export import Permission = API.Permission;
  export import PermissionGrant = API.PermissionGrant;
  export import RatePlan = API.RatePlan;
  export import ResponseInfo = API.ResponseInfo;
  export import Result = API.Result;
  export import Role = API.Role;
  export import SortDirection = API.SortDirection;
  export import Subscription = API.Subscription;
  export import SubscriptionComponent = API.SubscriptionComponent;
  export import SubscriptionZone = API.SubscriptionZone;
}

export default Cloudflare;
