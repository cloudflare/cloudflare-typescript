// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from './core';
import * as Errors from './error';
import { type Agent } from './_shims/index';
import * as Uploads from './uploads';
import * as qs from 'qs';
import * as Pagination from 'cloudflare/pagination';
import * as API from 'cloudflare/resources/index';

export interface ClientOptions {
  /**
   * Defaults to process.env['CLOUDFLARE_API_KEY'].
   */
  apiKey?: string | null | undefined;

  /**
   * Defaults to process.env['CLOUDFLARE_EMAIL'].
   */
  apiEmail?: string | null | undefined;

  /**
   * Defaults to process.env['CLOUDFLARE_API_TOKEN'].
   */
  apiToken?: string | null | undefined;

  /**
   * Defaults to process.env['CLOUDFLARE_API_USER_SERVICE_KEY'].
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

/** API Client for interfacing with the Cloudflare API. */
export class Cloudflare extends Core.APIClient {
  apiKey: string | null;
  apiEmail: string | null;
  apiToken: string | null;
  userServiceKey: string | null;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Cloudflare API.
   *
   * @param {string | null | undefined} [opts.apiKey=process.env['CLOUDFLARE_API_KEY'] ?? null]
   * @param {string | null | undefined} [opts.apiEmail=process.env['CLOUDFLARE_EMAIL'] ?? null]
   * @param {string | null | undefined} [opts.apiToken=process.env['CLOUDFLARE_API_TOKEN'] ?? null]
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
    apiKey = Core.readEnv('CLOUDFLARE_API_KEY') ?? null,
    apiEmail = Core.readEnv('CLOUDFLARE_EMAIL') ?? null,
    apiToken = Core.readEnv('CLOUDFLARE_API_TOKEN') ?? null,
    userServiceKey = Core.readEnv('CLOUDFLARE_API_USER_SERVICE_KEY') ?? null,
    ...opts
  }: ClientOptions = {}) {
    const options: ClientOptions = {
      apiKey,
      apiEmail,
      apiToken,
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

    this.apiKey = apiKey;
    this.apiEmail = apiEmail;
    this.apiToken = apiToken;
    this.userServiceKey = userServiceKey;
  }

  accounts: API.Accounts = new API.Accounts(this);
  originCACertificates: API.OriginCACertificates = new API.OriginCACertificates(this);
  ips: API.IPs = new API.IPs(this);
  memberships: API.Memberships = new API.Memberships(this);
  user: API.UserResource = new API.UserResource(this);
  zones: API.Zones = new API.Zones(this);
  loadBalancers: API.LoadBalancers = new API.LoadBalancers(this);
  cache: API.Cache = new API.Cache(this);
  ssl: API.SSL = new API.SSL(this);
  subscriptions: API.Subscriptions = new API.Subscriptions(this);
  acm: API.ACM = new API.ACM(this);
  argo: API.Argo = new API.Argo(this);
  plans: API.Plans = new API.Plans(this);
  ratePlans: API.RatePlans = new API.RatePlans(this);
  certificateAuthorities: API.CertificateAuthorities = new API.CertificateAuthorities(this);
  clientCertificates: API.ClientCertificates = new API.ClientCertificates(this);
  customCertificates: API.CustomCertificates = new API.CustomCertificates(this);
  customHostnames: API.CustomHostnames = new API.CustomHostnames(this);
  customNameservers: API.CustomNameservers = new API.CustomNameservers(this);
  dns: API.DNS = new API.DNS(this);
  dnssec: API.DNSSECResource = new API.DNSSECResource(this);
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
  managedHeaders: API.ManagedHeaders = new API.ManagedHeaders(this);
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
  pcaps: API.PCAPs = new API.PCAPs(this);
  registrar: API.Registrar = new API.Registrar(this);
  requestTracers: API.RequestTracers = new API.RequestTracers(this);
  rules: API.Rules = new API.Rules(this);
  storage: API.Storage = new API.Storage(this);
  stream: API.Stream = new API.Stream(this);
  alerting: API.Alerting = new API.Alerting(this);
  d1: API.D1 = new API.D1(this);
  r2: API.R2 = new API.R2(this);
  warpConnector: API.WARPConnector = new API.WARPConnector(this);
  workersForPlatforms: API.WorkersForPlatforms = new API.WorkersForPlatforms(this);
  zeroTrust: API.ZeroTrust = new API.ZeroTrust(this);
  challenges: API.Challenges = new API.Challenges(this);
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
    return qs.stringify(query, { arrayFormat: 'repeat' });
  }

  static Cloudflare = this;

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
  // Helper functions
  export import toFile = Uploads.toFile;
  export import fileFromPath = Uploads.fileFromPath;

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
  export import Account = API.Account;
  export import AccountListResponse = API.AccountListResponse;
  export import AccountListResponsesV4PagePaginationArray = API.AccountListResponsesV4PagePaginationArray;
  export import AccountUpdateParams = API.AccountUpdateParams;
  export import AccountListParams = API.AccountListParams;
  export import AccountGetParams = API.AccountGetParams;

  export import OriginCACertificates = API.OriginCACertificates;
  export import OriginCACertificate = API.OriginCACertificate;
  export import OriginCACertificatesSinglePage = API.OriginCACertificatesSinglePage;
  export import OriginCACertificateCreateParams = API.OriginCACertificateCreateParams;
  export import OriginCACertificateListParams = API.OriginCACertificateListParams;
  export import OriginCACertificateDeleteParams = API.OriginCACertificateDeleteParams;

  export import IPs = API.IPs;
  export import JDCloudIPs = API.JDCloudIPs;
  export import IPListResponse = API.IPListResponse;
  export import IPListParams = API.IPListParams;

  export import Memberships = API.Memberships;
  export import Membership = API.Membership;
  export import MembershipDeleteResponse = API.MembershipDeleteResponse;
  export import MembershipsV4PagePaginationArray = API.MembershipsV4PagePaginationArray;
  export import MembershipUpdateParams = API.MembershipUpdateParams;
  export import MembershipListParams = API.MembershipListParams;
  export import MembershipDeleteParams = API.MembershipDeleteParams;

  export import UserResource = API.UserResource;
  export import User = API.User;
  export import UserEditParams = API.UserEditParams;

  export import Zones = API.Zones;
  export import Zone = API.Zone;
  export import ZoneDeleteResponse = API.ZoneDeleteResponse;
  export import ZonesV4PagePaginationArray = API.ZonesV4PagePaginationArray;
  export import ZoneCreateParams = API.ZoneCreateParams;
  export import ZoneListParams = API.ZoneListParams;
  export import ZoneDeleteParams = API.ZoneDeleteParams;
  export import ZoneEditParams = API.ZoneEditParams;
  export import ZoneGetParams = API.ZoneGetParams;

  export import LoadBalancers = API.LoadBalancers;
  export import LoadBalancer = API.LoadBalancer;
  export import UnnamedSchemaRef06ba14ec7860c091efc98fd9af30f382 = API.UnnamedSchemaRef06ba14ec7860c091efc98fd9af30f382;
  export import LoadBalancerDeleteResponse = API.LoadBalancerDeleteResponse;
  export import LoadBalancersSinglePage = API.LoadBalancersSinglePage;
  export import LoadBalancerCreateParams = API.LoadBalancerCreateParams;
  export import LoadBalancerUpdateParams = API.LoadBalancerUpdateParams;
  export import LoadBalancerListParams = API.LoadBalancerListParams;
  export import LoadBalancerDeleteParams = API.LoadBalancerDeleteParams;
  export import LoadBalancerEditParams = API.LoadBalancerEditParams;
  export import LoadBalancerGetParams = API.LoadBalancerGetParams;

  export import Cache = API.Cache;
  export import CachePurgeResponse = API.CachePurgeResponse;
  export import CachePurgeParams = API.CachePurgeParams;

  export import SSL = API.SSL;

  export import Subscriptions = API.Subscriptions;
  export import SubscriptionListResponse = API.SubscriptionListResponse;
  export import SubscriptionDeleteResponse = API.SubscriptionDeleteResponse;
  export import SubscriptionListResponsesSinglePage = API.SubscriptionListResponsesSinglePage;
  export import SubscriptionCreateParams = API.SubscriptionCreateParams;
  export import SubscriptionUpdateParams = API.SubscriptionUpdateParams;
  export import SubscriptionDeleteParams = API.SubscriptionDeleteParams;

  export import ACM = API.ACM;

  export import Argo = API.Argo;

  export import Plans = API.Plans;
  export import AvailableRatePlan = API.AvailableRatePlan;
  export import AvailableRatePlansSinglePage = API.AvailableRatePlansSinglePage;

  export import RatePlans = API.RatePlans;
  export import RatePlan = API.RatePlan;
  export import RatePlanGetResponse = API.RatePlanGetResponse;

  export import CertificateAuthorities = API.CertificateAuthorities;

  export import ClientCertificates = API.ClientCertificates;
  export import ClientCertificate = API.ClientCertificate;
  export import ClientCertificatesV4PagePaginationArray = API.ClientCertificatesV4PagePaginationArray;
  export import ClientCertificateCreateParams = API.ClientCertificateCreateParams;
  export import ClientCertificateListParams = API.ClientCertificateListParams;
  export import ClientCertificateDeleteParams = API.ClientCertificateDeleteParams;
  export import ClientCertificateEditParams = API.ClientCertificateEditParams;
  export import ClientCertificateGetParams = API.ClientCertificateGetParams;

  export import CustomCertificates = API.CustomCertificates;
  export import CustomCertificate = API.CustomCertificate;
  export import CustomCertificatesV4PagePaginationArray = API.CustomCertificatesV4PagePaginationArray;
  export import CustomCertificateCreateParams = API.CustomCertificateCreateParams;
  export import CustomCertificateListParams = API.CustomCertificateListParams;
  export import CustomCertificateDeleteParams = API.CustomCertificateDeleteParams;
  export import CustomCertificateEditParams = API.CustomCertificateEditParams;
  export import CustomCertificateGetParams = API.CustomCertificateGetParams;

  export import CustomHostnames = API.CustomHostnames;
  export import CustomHostname = API.CustomHostname;
  export import UnnamedSchemaRef16aca57bde2963201c7e6e895436c1c1 = API.UnnamedSchemaRef16aca57bde2963201c7e6e895436c1c1;
  export import UnnamedSchemaRef78adb375f06c6d462dd92b99e2ecf510 = API.UnnamedSchemaRef78adb375f06c6d462dd92b99e2ecf510;
  export import UnnamedSchemaRef9a9935a9a770967bb604ae41a81e42e1 = API.UnnamedSchemaRef9a9935a9a770967bb604ae41a81e42e1;
  export import UnnamedSchemaRefD2a16d7ee1ad3a888dd5821c918d51fd = API.UnnamedSchemaRefD2a16d7ee1ad3a888dd5821c918d51fd;
  export import CustomHostnameCreateResponse = API.CustomHostnameCreateResponse;
  export import CustomHostnameListResponse = API.CustomHostnameListResponse;
  export import CustomHostnameEditResponse = API.CustomHostnameEditResponse;
  export import CustomHostnameGetResponse = API.CustomHostnameGetResponse;
  export import CustomHostnameListResponsesV4PagePaginationArray = API.CustomHostnameListResponsesV4PagePaginationArray;
  export import CustomHostnameCreateParams = API.CustomHostnameCreateParams;
  export import CustomHostnameListParams = API.CustomHostnameListParams;
  export import CustomHostnameDeleteParams = API.CustomHostnameDeleteParams;
  export import CustomHostnameEditParams = API.CustomHostnameEditParams;
  export import CustomHostnameGetParams = API.CustomHostnameGetParams;

  export import CustomNameservers = API.CustomNameservers;
  export import CustomNameserver = API.CustomNameserver;
  export import CustomNameserverAvailabiltyResponse = API.CustomNameserverAvailabiltyResponse;
  export import CustomNameserverGetResponse = API.CustomNameserverGetResponse;
  export import CustomNameserverVerifyResponse = API.CustomNameserverVerifyResponse;
  export import CustomNameserverCreateParams = API.CustomNameserverCreateParams;
  export import CustomNameserverDeleteParams = API.CustomNameserverDeleteParams;
  export import CustomNameserverAvailabiltyParams = API.CustomNameserverAvailabiltyParams;
  export import CustomNameserverGetParams = API.CustomNameserverGetParams;
  export import CustomNameserverVerifyParams = API.CustomNameserverVerifyParams;

  export import DNS = API.DNS;
  export import UnnamedSchemaRef6595695ff25b0614667b25f66b7bbaba = API.UnnamedSchemaRef6595695ff25b0614667b25f66b7bbaba;
  export import UnnamedSchemaRef65be9614de145bf4a58d0fddf46df7ca = API.UnnamedSchemaRef65be9614de145bf4a58d0fddf46df7ca;
  export import UnnamedSchemaRef85b45d163202bbab7456da6b346d9fe2 = API.UnnamedSchemaRef85b45d163202bbab7456da6b346d9fe2;

  export import DNSSECResource = API.DNSSECResource;
  export import DNSSEC = API.DNSSEC;
  export import DNSSECDeleteParams = API.DNSSECDeleteParams;
  export import DNSSECEditParams = API.DNSSECEditParams;
  export import DNSSECGetParams = API.DNSSECGetParams;

  export import EmailRouting = API.EmailRouting;
  export import EmailSettings = API.EmailSettings;
  export import EmailRoutingDisableResponse = API.EmailRoutingDisableResponse;
  export import EmailRoutingEnableResponse = API.EmailRoutingEnableResponse;
  export import EmailRoutingGetResponse = API.EmailRoutingGetResponse;
  export import EmailRoutingDisableParams = API.EmailRoutingDisableParams;
  export import EmailRoutingEnableParams = API.EmailRoutingEnableParams;

  export import Filters = API.Filters;
  export import FirewallFilter = API.FirewallFilter;
  export import UnnamedSchemaRef39af4f78d23244e2595fb47c811221df = API.UnnamedSchemaRef39af4f78d23244e2595fb47c811221df;
  export import FilterCreateResponse = API.FilterCreateResponse;
  export import FirewallFiltersV4PagePaginationArray = API.FirewallFiltersV4PagePaginationArray;
  export import FilterCreateParams = API.FilterCreateParams;
  export import FilterUpdateParams = API.FilterUpdateParams;
  export import FilterListParams = API.FilterListParams;
  export import FilterDeleteParams = API.FilterDeleteParams;

  export import Firewall = API.Firewall;

  export import Healthchecks = API.Healthchecks;
  export import Healthcheck = API.Healthcheck;
  export import UnnamedSchemaRefAaa560acadcbf1ae1dc619ba1ea5948e = API.UnnamedSchemaRefAaa560acadcbf1ae1dc619ba1ea5948e;
  export import HealthcheckDeleteResponse = API.HealthcheckDeleteResponse;
  export import HealthchecksSinglePage = API.HealthchecksSinglePage;
  export import HealthcheckCreateParams = API.HealthcheckCreateParams;
  export import HealthcheckUpdateParams = API.HealthcheckUpdateParams;
  export import HealthcheckListParams = API.HealthcheckListParams;
  export import HealthcheckDeleteParams = API.HealthcheckDeleteParams;
  export import HealthcheckEditParams = API.HealthcheckEditParams;
  export import HealthcheckGetParams = API.HealthcheckGetParams;

  export import KeylessCertificates = API.KeylessCertificates;
  export import KeylessCertificate = API.KeylessCertificate;
  export import KeylessCertificateHostname = API.KeylessCertificateHostname;
  export import UnnamedSchemaRefA91f0bd72ee433f010eecfdc94ccf298 = API.UnnamedSchemaRefA91f0bd72ee433f010eecfdc94ccf298;
  export import KeylessCertificateHostnamesSinglePage = API.KeylessCertificateHostnamesSinglePage;
  export import KeylessCertificateCreateParams = API.KeylessCertificateCreateParams;
  export import KeylessCertificateListParams = API.KeylessCertificateListParams;
  export import KeylessCertificateDeleteParams = API.KeylessCertificateDeleteParams;
  export import KeylessCertificateEditParams = API.KeylessCertificateEditParams;
  export import KeylessCertificateGetParams = API.KeylessCertificateGetParams;

  export import Logpush = API.Logpush;

  export import Logs = API.Logs;

  export import OriginTLSClientAuth = API.OriginTLSClientAuth;
  export import OriginTLSClientCertificateZoneAuthenticatedOriginPull = API.OriginTLSClientCertificateZoneAuthenticatedOriginPull;
  export import OriginTLSClientAuthListResponse = API.OriginTLSClientAuthListResponse;
  export import OriginTLSClientAuthListResponsesSinglePage = API.OriginTLSClientAuthListResponsesSinglePage;
  export import OriginTLSClientAuthCreateParams = API.OriginTLSClientAuthCreateParams;
  export import OriginTLSClientAuthListParams = API.OriginTLSClientAuthListParams;
  export import OriginTLSClientAuthDeleteParams = API.OriginTLSClientAuthDeleteParams;
  export import OriginTLSClientAuthGetParams = API.OriginTLSClientAuthGetParams;

  export import Pagerules = API.Pagerules;
  export import ZonesPagerule = API.ZonesPagerule;
  export import PageruleListResponse = API.PageruleListResponse;
  export import PageruleDeleteResponse = API.PageruleDeleteResponse;
  export import PageruleCreateParams = API.PageruleCreateParams;
  export import PageruleUpdateParams = API.PageruleUpdateParams;
  export import PageruleListParams = API.PageruleListParams;
  export import PageruleDeleteParams = API.PageruleDeleteParams;
  export import PageruleEditParams = API.PageruleEditParams;
  export import PageruleGetParams = API.PageruleGetParams;

  export import RateLimits = API.RateLimits;
  export import RateLimit = API.RateLimit;
  export import RateLimitListResponse = API.RateLimitListResponse;
  export import RateLimitDeleteResponse = API.RateLimitDeleteResponse;
  export import RateLimitListResponsesV4PagePaginationArray = API.RateLimitListResponsesV4PagePaginationArray;
  export import RateLimitCreateParams = API.RateLimitCreateParams;
  export import RateLimitListParams = API.RateLimitListParams;
  export import RateLimitDeleteParams = API.RateLimitDeleteParams;
  export import RateLimitEditParams = API.RateLimitEditParams;

  export import SecondaryDNS = API.SecondaryDNS;

  export import WaitingRooms = API.WaitingRooms;
  export import UnnamedSchemaRefA282afe149b2cf60a204505bd4c53324 = API.UnnamedSchemaRefA282afe149b2cf60a204505bd4c53324;
  export import WaitingRoom = API.WaitingRoom;
  export import WaitingRoomDeleteResponse = API.WaitingRoomDeleteResponse;
  export import WaitingRoomsSinglePage = API.WaitingRoomsSinglePage;
  export import WaitingRoomCreateParams = API.WaitingRoomCreateParams;
  export import WaitingRoomUpdateParams = API.WaitingRoomUpdateParams;
  export import WaitingRoomListParams = API.WaitingRoomListParams;
  export import WaitingRoomDeleteParams = API.WaitingRoomDeleteParams;
  export import WaitingRoomEditParams = API.WaitingRoomEditParams;
  export import WaitingRoomGetParams = API.WaitingRoomGetParams;

  export import Web3 = API.Web3;

  export import Workers = API.Workers;

  export import KV = API.KV;

  export import DurableObjects = API.DurableObjects;

  export import Queues = API.Queues;
  export import Queue = API.Queue;
  export import QueueCreated = API.QueueCreated;
  export import QueueUpdated = API.QueueUpdated;
  export import QueueCreateResponse = API.QueueCreateResponse;
  export import QueueUpdateResponse = API.QueueUpdateResponse;
  export import QueueListResponse = API.QueueListResponse;
  export import QueueGetResponse = API.QueueGetResponse;
  export import QueueCreateParams = API.QueueCreateParams;
  export import QueueUpdateParams = API.QueueUpdateParams;
  export import QueueListParams = API.QueueListParams;
  export import QueueDeleteParams = API.QueueDeleteParams;
  export import QueueGetParams = API.QueueGetParams;

  export import ManagedHeaders = API.ManagedHeaders;
  export import ManagedHeaderListResponse = API.ManagedHeaderListResponse;
  export import ManagedHeaderEditResponse = API.ManagedHeaderEditResponse;
  export import ManagedHeaderListParams = API.ManagedHeaderListParams;
  export import ManagedHeaderEditParams = API.ManagedHeaderEditParams;

  export import PageShield = API.PageShield;
  export import PageShieldSetting = API.PageShieldSetting;
  export import PageShieldUpdateResponse = API.PageShieldUpdateResponse;
  export import PageShieldUpdateParams = API.PageShieldUpdateParams;
  export import PageShieldGetParams = API.PageShieldGetParams;

  export import Rulesets = API.Rulesets;
  export import BlockRule = API.BlockRule;
  export import ExecuteRule = API.ExecuteRule;
  export import LogRule = API.LogRule;
  export import RequestRule = API.RequestRule;
  export import Ruleset = API.Ruleset;
  export import SkipRule = API.SkipRule;
  export import RulesetCreateResponse = API.RulesetCreateResponse;
  export import RulesetUpdateResponse = API.RulesetUpdateResponse;
  export import RulesetGetResponse = API.RulesetGetResponse;
  export import RulesetsSinglePage = API.RulesetsSinglePage;
  export import RulesetCreateParams = API.RulesetCreateParams;
  export import RulesetUpdateParams = API.RulesetUpdateParams;
  export import RulesetListParams = API.RulesetListParams;
  export import RulesetDeleteParams = API.RulesetDeleteParams;
  export import RulesetGetParams = API.RulesetGetParams;

  export import URLNormalization = API.URLNormalization;
  export import URLNormalizationUpdateResponse = API.URLNormalizationUpdateResponse;
  export import URLNormalizationGetResponse = API.URLNormalizationGetResponse;
  export import URLNormalizationUpdateParams = API.URLNormalizationUpdateParams;
  export import URLNormalizationGetParams = API.URLNormalizationGetParams;

  export import Spectrum = API.Spectrum;

  export import Addressing = API.Addressing;

  export import AuditLogs = API.AuditLogs;
  export import AuditLogListResponse = API.AuditLogListResponse;
  export import AuditLogListResponsesV4PagePaginationArray = API.AuditLogListResponsesV4PagePaginationArray;
  export import AuditLogListParams = API.AuditLogListParams;

  export import Billing = API.Billing;

  export import BrandProtection = API.BrandProtection;
  export import IntelPhishingURLInfo = API.IntelPhishingURLInfo;
  export import IntelPhishingURLSubmit = API.IntelPhishingURLSubmit;
  export import UnnamedSchemaRef209db30ed499548152d6f3bccf720b54 = API.UnnamedSchemaRef209db30ed499548152d6f3bccf720b54;
  export import UnnamedSchemaRef39419d70e2399b28b15cd660afd342fb = API.UnnamedSchemaRef39419d70e2399b28b15cd660afd342fb;
  export import UnnamedSchemaRef3e10ea08deb8102a27500f986488c1e8 = API.UnnamedSchemaRef3e10ea08deb8102a27500f986488c1e8;
  export import UnnamedSchemaRef44e66100b948bfe723054c56b6144766 = API.UnnamedSchemaRef44e66100b948bfe723054c56b6144766;
  export import UnnamedSchemaRef767c0981cf47f45f0c766253dbd18669 = API.UnnamedSchemaRef767c0981cf47f45f0c766253dbd18669;
  export import UnnamedSchemaRef9b4c9779a35b172cb69c71389ebc7014 = API.UnnamedSchemaRef9b4c9779a35b172cb69c71389ebc7014;
  export import UnnamedSchemaRefA64e2a18a86750b6bd72cdf37ecfd869 = API.UnnamedSchemaRefA64e2a18a86750b6bd72cdf37ecfd869;
  export import BrandProtectionSubmitParams = API.BrandProtectionSubmitParams;
  export import BrandProtectionURLInfoParams = API.BrandProtectionURLInfoParams;

  export import Diagnostics = API.Diagnostics;

  export import Images = API.Images;

  export import Intel = API.Intel;

  export import MagicTransit = API.MagicTransit;
  export import UnnamedSchemaRef3b1a76a5e4a139b72ed7d93834773d39 = API.UnnamedSchemaRef3b1a76a5e4a139b72ed7d93834773d39;
  export import UnnamedSchemaRefEebdc868ce7f7ae92e23438caa84e7b5 = API.UnnamedSchemaRefEebdc868ce7f7ae92e23438caa84e7b5;

  export import MagicNetworkMonitoring = API.MagicNetworkMonitoring;

  export import MTLSCertificates = API.MTLSCertificates;
  export import MTLSCertificate = API.MTLSCertificate;
  export import MTLSCertificateUpdate = API.MTLSCertificateUpdate;
  export import MTLSCertificatesSinglePage = API.MTLSCertificatesSinglePage;
  export import MTLSCertificateCreateParams = API.MTLSCertificateCreateParams;
  export import MTLSCertificateListParams = API.MTLSCertificateListParams;
  export import MTLSCertificateDeleteParams = API.MTLSCertificateDeleteParams;
  export import MTLSCertificateGetParams = API.MTLSCertificateGetParams;

  export import Pages = API.Pages;

  export import PCAPs = API.PCAPs;
  export import PCAPCreateResponse = API.PCAPCreateResponse;
  export import PCAPListResponse = API.PCAPListResponse;
  export import PCAPGetResponse = API.PCAPGetResponse;
  export import PCAPListResponsesSinglePage = API.PCAPListResponsesSinglePage;
  export import PCAPCreateParams = API.PCAPCreateParams;
  export import PCAPListParams = API.PCAPListParams;
  export import PCAPGetParams = API.PCAPGetParams;

  export import Registrar = API.Registrar;

  export import RequestTracers = API.RequestTracers;

  export import Rules = API.Rules;

  export import Storage = API.Storage;

  export import Stream = API.Stream;
  export import StreamVideos = API.StreamVideos;
  export import StreamVideosSinglePage = API.StreamVideosSinglePage;
  export import StreamCreateParams = API.StreamCreateParams;
  export import StreamListParams = API.StreamListParams;
  export import StreamDeleteParams = API.StreamDeleteParams;
  export import StreamGetParams = API.StreamGetParams;

  export import Alerting = API.Alerting;
  export import UnnamedSchemaRefD6e23adacaca017802aaa484a8b3f405 = API.UnnamedSchemaRefD6e23adacaca017802aaa484a8b3f405;

  export import D1 = API.D1;

  export import R2 = API.R2;

  export import WARPConnector = API.WARPConnector;
  export import WARPConnectorTokenResponse = API.WARPConnectorTokenResponse;
  export import WARPConnectorCreateParams = API.WARPConnectorCreateParams;
  export import WARPConnectorListParams = API.WARPConnectorListParams;
  export import WARPConnectorDeleteParams = API.WARPConnectorDeleteParams;
  export import WARPConnectorEditParams = API.WARPConnectorEditParams;
  export import WARPConnectorGetParams = API.WARPConnectorGetParams;
  export import WARPConnectorTokenParams = API.WARPConnectorTokenParams;

  export import WorkersForPlatforms = API.WorkersForPlatforms;

  export import ZeroTrust = API.ZeroTrust;

  export import Challenges = API.Challenges;

  export import HyperdriveResource = API.HyperdriveResource;
  export import Hyperdrive = API.Hyperdrive;

  export import RUM = API.RUM;

  export import Vectorize = API.Vectorize;

  export import URLScanner = API.URLScanner;
  export import URLScannerScanResponse = API.URLScannerScanResponse;
  export import URLScannerScanParams = API.URLScannerScanParams;

  export import Radar = API.Radar;
  export import UnnamedSchemaRef16e559c45a31db5480e21fbe904b2e42 = API.UnnamedSchemaRef16e559c45a31db5480e21fbe904b2e42;
  export import UnnamedSchemaRef4124a22436f90127c7fa2c4543219752 = API.UnnamedSchemaRef4124a22436f90127c7fa2c4543219752;
  export import UnnamedSchemaRef73de8b634bb48667e28a6c6c56080c51 = API.UnnamedSchemaRef73de8b634bb48667e28a6c6c56080c51;
  export import UnnamedSchemaRef75bae70cf28e6bcef364b9840db3bdeb = API.UnnamedSchemaRef75bae70cf28e6bcef364b9840db3bdeb;
  export import UnnamedSchemaRef7826220e105d84352ba1108d9ed88e55 = API.UnnamedSchemaRef7826220e105d84352ba1108d9ed88e55;
  export import UnnamedSchemaRef83a14d589e799bc901b9ccc870251d09 = API.UnnamedSchemaRef83a14d589e799bc901b9ccc870251d09;
  export import UnnamedSchemaRef8b383e904d9fb02521257ef9cc77d297 = API.UnnamedSchemaRef8b383e904d9fb02521257ef9cc77d297;
  export import UnnamedSchemaRef9002274ed7cb7f3dc567421e31529a3a = API.UnnamedSchemaRef9002274ed7cb7f3dc567421e31529a3a;
  export import UnnamedSchemaRefB5f3bd1840490bc487ffef84567807b1 = API.UnnamedSchemaRefB5f3bd1840490bc487ffef84567807b1;
  export import UnnamedSchemaRefBaac9d7da12de53e99142f8ecd3982e5 = API.UnnamedSchemaRefBaac9d7da12de53e99142f8ecd3982e5;
  export import UnnamedSchemaRefC5858f1f916a921846e0b6159af470a7 = API.UnnamedSchemaRefC5858f1f916a921846e0b6159af470a7;

  export import BotManagement = API.BotManagement;
  export import BotManagementUpdateResponse = API.BotManagementUpdateResponse;
  export import BotManagementGetResponse = API.BotManagementGetResponse;
  export import BotManagementUpdateParams = API.BotManagementUpdateParams;
  export import BotManagementGetParams = API.BotManagementGetParams;

  export import OriginPostQuantumEncryption = API.OriginPostQuantumEncryption;
  export import OriginPostQuantumEncryptionUpdateParams = API.OriginPostQuantumEncryptionUpdateParams;
  export import OriginPostQuantumEncryptionGetParams = API.OriginPostQuantumEncryptionGetParams;

  export import Speed = API.Speed;
  export import ObservatorySchedule = API.ObservatorySchedule;
  export import ObservatoryTrend = API.ObservatoryTrend;
  export import SpeedDeleteResponse = API.SpeedDeleteResponse;
  export import SpeedDeleteParams = API.SpeedDeleteParams;
  export import SpeedScheduleGetParams = API.SpeedScheduleGetParams;
  export import SpeedTrendsListParams = API.SpeedTrendsListParams;

  export import DCVDelegation = API.DCVDelegation;

  export import Hostnames = API.Hostnames;

  export import Snippets = API.Snippets;
  export import Snippet = API.Snippet;
  export import SnippetsSinglePage = API.SnippetsSinglePage;
  export import SnippetUpdateParams = API.SnippetUpdateParams;

  export import Calls = API.Calls;
  export import CallsApp = API.CallsApp;
  export import CallsAppWithSecret = API.CallsAppWithSecret;
  export import CallsAppsSinglePage = API.CallsAppsSinglePage;
  export import CallCreateParams = API.CallCreateParams;
  export import CallUpdateParams = API.CallUpdateParams;
  export import CallListParams = API.CallListParams;
  export import CallDeleteParams = API.CallDeleteParams;
  export import CallGetParams = API.CallGetParams;

  export import CloudforceOne = API.CloudforceOne;

  export import ErrorData = API.ErrorData;
  export import UnnamedSchemaRef025497b7e63379c31929636b5186e45c = API.UnnamedSchemaRef025497b7e63379c31929636b5186e45c;
  export import UnnamedSchemaRef2173d81a0b2d332c9e2ac46900fe8bb9 = API.UnnamedSchemaRef2173d81a0b2d332c9e2ac46900fe8bb9;
  export import UnnamedSchemaRef23001f1f0b697900e282236466a95fa3 = API.UnnamedSchemaRef23001f1f0b697900e282236466a95fa3;
  export import UnnamedSchemaRef3248f24329456e19dfa042fff9986f72 = API.UnnamedSchemaRef3248f24329456e19dfa042fff9986f72;
  export import UnnamedSchemaRef33f2e3917f3fe46ad98af0acbb1d9a19 = API.UnnamedSchemaRef33f2e3917f3fe46ad98af0acbb1d9a19;
  export import UnnamedSchemaRef413ab4522f0bb93f63444799121fe2f8 = API.UnnamedSchemaRef413ab4522f0bb93f63444799121fe2f8;
  export import UnnamedSchemaRef5cf232a1d651060af6450ae882932776 = API.UnnamedSchemaRef5cf232a1d651060af6450ae882932776;
  export import UnnamedSchemaRef602dd5f63eab958d53da61434dec08f0 = API.UnnamedSchemaRef602dd5f63eab958d53da61434dec08f0;
  export import UnnamedSchemaRef619309774d07ec6904f1e354560d6028 = API.UnnamedSchemaRef619309774d07ec6904f1e354560d6028;
  export import UnnamedSchemaRef65e3c8c1a9c4638ec25cdbbaca7165c1 = API.UnnamedSchemaRef65e3c8c1a9c4638ec25cdbbaca7165c1;
  export import UnnamedSchemaRef67bbb1ccdd42c3e2937b9fd19f791151 = API.UnnamedSchemaRef67bbb1ccdd42c3e2937b9fd19f791151;
  export import UnnamedSchemaRef70f2c6ccd8a405358ac7ef8fc3d6751c = API.UnnamedSchemaRef70f2c6ccd8a405358ac7ef8fc3d6751c;
  export import UnnamedSchemaRef8900f4cb9dca9b9ed0ac41ad571e6837 = API.UnnamedSchemaRef8900f4cb9dca9b9ed0ac41ad571e6837;
  export import UnnamedSchemaRef8d6a37a1e4190f86652802244d29525f = API.UnnamedSchemaRef8d6a37a1e4190f86652802244d29525f;
  export import UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a = API.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a;
  export import UnnamedSchemaRefB0ec5cc02c98b665099a5707a2db4ea6 = API.UnnamedSchemaRefB0ec5cc02c98b665099a5707a2db4ea6;
  export import UnnamedSchemaRefB52ad7cf99890d19f16edcd84d16ef5b = API.UnnamedSchemaRefB52ad7cf99890d19f16edcd84d16ef5b;
  export import UnnamedSchemaRefB92f86eb861cd3dee83c40884802fda6 = API.UnnamedSchemaRefB92f86eb861cd3dee83c40884802fda6;
  export import UnnamedSchemaRefCc2ac1a037e5d6702fc77b3bcb527854 = API.UnnamedSchemaRefCc2ac1a037e5d6702fc77b3bcb527854;
  export import UnnamedSchemaRefD8600eb4758b3ae35607a0327bcd691b = API.UnnamedSchemaRefD8600eb4758b3ae35607a0327bcd691b;
  export import UnnamedSchemaRefDfef9380cb53cc7d4bda9f75e109d7a2 = API.UnnamedSchemaRefDfef9380cb53cc7d4bda9f75e109d7a2;
  export import UnnamedSchemaRefE7c61ebe06ebfc3861ae8b9db4ba152b = API.UnnamedSchemaRefE7c61ebe06ebfc3861ae8b9db4ba152b;
  export import UnnamedSchemaRefEc4d85c3d1bcc6b3b7e99c199ae99846 = API.UnnamedSchemaRefEc4d85c3d1bcc6b3b7e99c199ae99846;
  export import UnnamedSchemaRefEe1e79edcb234d14c4dd266880f2fd24 = API.UnnamedSchemaRefEe1e79edcb234d14c4dd266880f2fd24;
  export import UnnamedSchemaRefFb1dc8bb871d835b75bd0c2f50bd8572 = API.UnnamedSchemaRefFb1dc8bb871d835b75bd0c2f50bd8572;
}

export default Cloudflare;
