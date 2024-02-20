// File generated from our OpenAPI spec by Stainless.

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
  apiKey?: string | undefined;

  /**
   * Defaults to process.env['CLOUDFLARE_EMAIL'].
   */
  apiEmail?: string | undefined;

  /**
   * Defaults to process.env['CLOUDFLARE_API_TOKEN'].
   */
  apiToken?: string | undefined;

  /**
   * Defaults to process.env['CLOUDFLARE_API_USER_SERVICE_KEY'].
   */
  userServiceKey?: string | undefined;

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
  apiKey: string;
  apiEmail: string;
  apiToken: string;
  userServiceKey: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Cloudflare API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['CLOUDFLARE_API_KEY'] ?? undefined]
   * @param {string | undefined} [opts.apiEmail=process.env['CLOUDFLARE_EMAIL'] ?? undefined]
   * @param {string | undefined} [opts.apiToken=process.env['CLOUDFLARE_API_TOKEN'] ?? undefined]
   * @param {string | undefined} [opts.userServiceKey=process.env['CLOUDFLARE_API_USER_SERVICE_KEY'] ?? undefined]
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
    apiKey = Core.readEnv('CLOUDFLARE_API_KEY'),
    apiEmail = Core.readEnv('CLOUDFLARE_EMAIL'),
    apiToken = Core.readEnv('CLOUDFLARE_API_TOKEN'),
    userServiceKey = Core.readEnv('CLOUDFLARE_API_USER_SERVICE_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.CloudflareError(
        "The CLOUDFLARE_API_KEY environment variable is missing or empty; either provide it, or instantiate the Cloudflare client with an apiKey option, like new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194' }).",
      );
    }
    if (apiEmail === undefined) {
      throw new Errors.CloudflareError(
        "The CLOUDFLARE_EMAIL environment variable is missing or empty; either provide it, or instantiate the Cloudflare client with an apiEmail option, like new Cloudflare({ apiEmail: 'dev@cloudflare.com' }).",
      );
    }
    if (apiToken === undefined) {
      throw new Errors.CloudflareError(
        "The CLOUDFLARE_API_TOKEN environment variable is missing or empty; either provide it, or instantiate the Cloudflare client with an apiToken option, like new Cloudflare({ apiToken: 'Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY' }).",
      );
    }
    if (userServiceKey === undefined) {
      throw new Errors.CloudflareError(
        "The CLOUDFLARE_API_USER_SERVICE_KEY environment variable is missing or empty; either provide it, or instantiate the Cloudflare client with an userServiceKey option, like new Cloudflare({ userServiceKey: 'My User Service Key' }).",
      );
    }

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
  certificates: API.Certificates = new API.Certificates(this);
  ips: API.IPs = new API.IPs(this);
  memberships: API.Memberships = new API.Memberships(this);
  users: API.Users = new API.Users(this);
  zones: API.Zones = new API.Zones(this);
  ai: API.AI = new API.AI(this);
  loadBalancers: API.LoadBalancers = new API.LoadBalancers(this);
  access: API.Access = new API.Access(this);
  dnsAnalytics: API.DNSAnalytics = new API.DNSAnalytics(this);
  cache: API.Cache = new API.Cache(this);
  ssl: API.SSL = new API.SSL(this);
  subscriptions: API.Subscriptions = new API.Subscriptions(this);
  acm: API.Acm = new API.Acm(this);
  argo: API.Argo = new API.Argo(this);
  availablePlans: API.AvailablePlans = new API.AvailablePlans(this);
  availableRatePlans: API.AvailableRatePlans = new API.AvailableRatePlans(this);
  certificateAuthorities: API.CertificateAuthorities = new API.CertificateAuthorities(this);
  clientCertificates: API.ClientCertificates = new API.ClientCertificates(this);
  customCertificates: API.CustomCertificates = new API.CustomCertificates(this);
  customHostnames: API.CustomHostnames = new API.CustomHostnames(this);
  customNameservers: API.CustomNameservers = new API.CustomNameservers(this);
  dnsRecords: API.DNSRecords = new API.DNSRecords(this);
  dnssec: API.DNSSEC = new API.DNSSEC(this);
  emails: API.Emails = new API.Emails(this);
  filters: API.Filters = new API.Filters(this);
  firewalls: API.Firewalls = new API.Firewalls(this);
  healthchecks: API.Healthchecks = new API.Healthchecks(this);
  keylessCertificates: API.KeylessCertificates = new API.KeylessCertificates(this);
  logpush: API.Logpush = new API.Logpush(this);
  logs: API.Logs = new API.Logs(this);
  originTLSClientAuth: API.OriginTLSClientAuth = new API.OriginTLSClientAuth(this);
  pagerules: API.Pagerules = new API.Pagerules(this);
  rateLimits: API.RateLimits = new API.RateLimits(this);
  secondaryDNS: API.SecondaryDNS = new API.SecondaryDNS(this);
  settings: API.Settings = new API.Settings(this);
  waitingRooms: API.WaitingRooms = new API.WaitingRooms(this);
  web3: API.Web3 = new API.Web3(this);
  workers: API.Workers = new API.Workers(this);
  activationChecks: API.ActivationChecks = new API.ActivationChecks(this);
  managedHeaders: API.ManagedHeaders = new API.ManagedHeaders(this);
  pageShield: API.PageShield = new API.PageShield(this);
  rulesets: API.Rulesets = new API.Rulesets(this);
  urlNormalizations: API.URLNormalizations = new API.URLNormalizations(this);
  spectrum: API.Spectrum = new API.Spectrum(this);
  addresses: API.Addresses = new API.Addresses(this);
  auditLogs: API.AuditLogs = new API.AuditLogs(this);
  billings: API.Billings = new API.Billings(this);
  brandProtection: API.BrandProtection = new API.BrandProtection(this);
  tunnels: API.Tunnels = new API.Tunnels(this);
  diagnostics: API.Diagnostics = new API.Diagnostics(this);
  dlp: API.DLP = new API.DLP(this);
  dnsFirewall: API.DNSFirewall = new API.DNSFirewall(this);
  images: API.Images = new API.Images(this);
  intel: API.Intel = new API.Intel(this);
  magics: API.Magics = new API.Magics(this);
  accountMembers: API.AccountMembers = new API.AccountMembers(this);
  mnms: API.Mnms = new API.Mnms(this);
  mtlsCertificates: API.MtlsCertificates = new API.MtlsCertificates(this);
  pages: API.Pages = new API.Pages(this);
  pcaps: API.Pcaps = new API.Pcaps(this);
  registrar: API.Registrar = new API.Registrar(this);
  requestTracers: API.RequestTracers = new API.RequestTracers(this);
  roles: API.Roles = new API.Roles(this);
  rules: API.Rules = new API.Rules(this);
  storage: API.Storage = new API.Storage(this);
  stream: API.Stream = new API.Stream(this);
  teamnets: API.Teamnets = new API.Teamnets(this);
  gateways: API.Gateways = new API.Gateways(this);
  alerting: API.Alerting = new API.Alerting(this);
  devices: API.Devices = new API.Devices(this);
  d1: API.D1 = new API.D1(this);
  dex: API.DEX = new API.DEX(this);
  r2: API.R2 = new API.R2(this);
  teamnet: API.Teamnet = new API.Teamnet(this);
  warpConnector: API.WarpConnector = new API.WarpConnector(this);
  dispatchers: API.Dispatchers = new API.Dispatchers(this);
  workersForPlatforms: API.WorkersForPlatforms = new API.WorkersForPlatforms(this);
  workerDomains: API.WorkerDomains = new API.WorkerDomains(this);
  workerScripts: API.WorkerScripts = new API.WorkerScripts(this);
  zerotrust: API.Zerotrust = new API.Zerotrust(this);
  addressing: API.Addressing = new API.Addressing(this);
  challenges: API.Challenges = new API.Challenges(this);
  hyperdrive: API.Hyperdrive = new API.Hyperdrive(this);
  rum: API.Rum = new API.Rum(this);
  vectorize: API.Vectorize = new API.Vectorize(this);
  urlScanner: API.URLScanner = new API.URLScanner(this);
  radar: API.Radar = new API.Radar(this);
  botManagement: API.BotManagement = new API.BotManagement(this);
  cacheReserve: API.CacheReserve = new API.CacheReserve(this);
  originPostQuantumEncryption: API.OriginPostQuantumEncryption = new API.OriginPostQuantumEncryption(this);
  firewall: API.Firewall = new API.Firewall(this);
  zaraz: API.Zaraz = new API.Zaraz(this);
  speed: API.Speed = new API.Speed(this);
  dcvDelegation: API.DcvDelegation = new API.DcvDelegation(this);
  hostnames: API.Hostnames = new API.Hostnames(this);
  snippets: API.Snippets = new API.Snippets(this);
  calls: API.Calls = new API.Calls(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      'x-auth-email': this.apiEmail,
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    const apiEmailAuth = this.apiEmailAuth(opts);
    const apiKeyAuth = this.apiKeyAuth(opts);
    const apiTokenAuth = this.apiTokenAuth(opts);
    const userServiceKeyAuth = this.userServiceKeyAuth(opts);
    return {};
  }

  protected apiEmailAuth(opts: Core.FinalRequestOptions): Core.Headers {
    return { 'X-Auth-Email': this.apiEmail };
  }

  protected apiKeyAuth(opts: Core.FinalRequestOptions): Core.Headers {
    return { 'X-Auth-Key': this.apiKey };
  }

  protected apiTokenAuth(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: `Bearer ${this.apiToken}` };
  }

  protected userServiceKeyAuth(opts: Core.FinalRequestOptions): Core.Headers {
    return { 'X-Auth-User-Service-Key': this.userServiceKey };
  }

  protected override stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
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

  export import Accounts = API.Accounts;
  export import AccountListResponse = API.AccountListResponse;
  export import AccountGetResponse = API.AccountGetResponse;
  export import AccountReplaceResponse = API.AccountReplaceResponse;
  export import AccountListResponsesV4PagePaginationArray = API.AccountListResponsesV4PagePaginationArray;
  export import AccountListParams = API.AccountListParams;
  export import AccountReplaceParams = API.AccountReplaceParams;

  export import Certificates = API.Certificates;
  export import CertificateCreateResponse = API.CertificateCreateResponse;
  export import CertificateListResponse = API.CertificateListResponse;
  export import CertificateDeleteResponse = API.CertificateDeleteResponse;
  export import CertificateGetResponse = API.CertificateGetResponse;
  export import CertificateCreateParams = API.CertificateCreateParams;

  export import IPs = API.IPs;
  export import IPListResponse = API.IPListResponse;
  export import IPListParams = API.IPListParams;

  export import Memberships = API.Memberships;
  export import MembershipListResponse = API.MembershipListResponse;
  export import MembershipDeleteResponse = API.MembershipDeleteResponse;
  export import MembershipGetResponse = API.MembershipGetResponse;
  export import MembershipReplaceResponse = API.MembershipReplaceResponse;
  export import MembershipListResponsesV4PagePaginationArray = API.MembershipListResponsesV4PagePaginationArray;
  export import MembershipListParams = API.MembershipListParams;
  export import MembershipReplaceParams = API.MembershipReplaceParams;

  export import Users = API.Users;
  export import UserUpdateResponse = API.UserUpdateResponse;
  export import UserListResponse = API.UserListResponse;
  export import UserUpdateParams = API.UserUpdateParams;

  export import Zones = API.Zones;
  export import ZoneCreateResponse = API.ZoneCreateResponse;
  export import ZoneUpdateResponse = API.ZoneUpdateResponse;
  export import ZoneListResponse = API.ZoneListResponse;
  export import ZoneDeleteResponse = API.ZoneDeleteResponse;
  export import ZoneGetResponse = API.ZoneGetResponse;
  export import ZoneListResponsesV4PagePaginationArray = API.ZoneListResponsesV4PagePaginationArray;
  export import ZoneCreateParams = API.ZoneCreateParams;
  export import ZoneUpdateParams = API.ZoneUpdateParams;
  export import ZoneListParams = API.ZoneListParams;

  export import AI = API.AI;
  export import AICreateResponse = API.AICreateResponse;
  export import AICreateParams = API.AICreateParams;

  export import LoadBalancers = API.LoadBalancers;
  export import LoadBalancerCreateResponse = API.LoadBalancerCreateResponse;
  export import LoadBalancerUpdateResponse = API.LoadBalancerUpdateResponse;
  export import LoadBalancerListResponse = API.LoadBalancerListResponse;
  export import LoadBalancerDeleteResponse = API.LoadBalancerDeleteResponse;
  export import LoadBalancerGetResponse = API.LoadBalancerGetResponse;
  export import LoadBalancerCreateParams = API.LoadBalancerCreateParams;
  export import LoadBalancerUpdateParams = API.LoadBalancerUpdateParams;

  export import Access = API.Access;

  export import DNSAnalytics = API.DNSAnalytics;

  export import Cache = API.Cache;
  export import CachePurgeResponse = API.CachePurgeResponse;
  export import CachePurgeParams = API.CachePurgeParams;

  export import SSL = API.SSL;

  export import Subscriptions = API.Subscriptions;
  export import SubscriptionCreateResponse = API.SubscriptionCreateResponse;
  export import SubscriptionListResponse = API.SubscriptionListResponse;
  export import SubscriptionDeleteResponse = API.SubscriptionDeleteResponse;
  export import SubscriptionGetResponse = API.SubscriptionGetResponse;
  export import SubscriptionReplaceResponse = API.SubscriptionReplaceResponse;
  export import SubscriptionCreateParams = API.SubscriptionCreateParams;
  export import SubscriptionReplaceParams = API.SubscriptionReplaceParams;

  export import Acm = API.Acm;

  export import Argo = API.Argo;

  export import AvailablePlans = API.AvailablePlans;
  export import AvailablePlanListResponse = API.AvailablePlanListResponse;
  export import AvailablePlanGetResponse = API.AvailablePlanGetResponse;

  export import AvailableRatePlans = API.AvailableRatePlans;
  export import AvailableRatePlanListResponse = API.AvailableRatePlanListResponse;

  export import CertificateAuthorities = API.CertificateAuthorities;

  export import ClientCertificates = API.ClientCertificates;
  export import ClientCertificateCreateResponse = API.ClientCertificateCreateResponse;
  export import ClientCertificateUpdateResponse = API.ClientCertificateUpdateResponse;
  export import ClientCertificateListResponse = API.ClientCertificateListResponse;
  export import ClientCertificateDeleteResponse = API.ClientCertificateDeleteResponse;
  export import ClientCertificateGetResponse = API.ClientCertificateGetResponse;
  export import ClientCertificateListResponsesV4PagePaginationArray = API.ClientCertificateListResponsesV4PagePaginationArray;
  export import ClientCertificateCreateParams = API.ClientCertificateCreateParams;
  export import ClientCertificateListParams = API.ClientCertificateListParams;

  export import CustomCertificates = API.CustomCertificates;
  export import CustomCertificateCreateResponse = API.CustomCertificateCreateResponse;
  export import CustomCertificateUpdateResponse = API.CustomCertificateUpdateResponse;
  export import CustomCertificateListResponse = API.CustomCertificateListResponse;
  export import CustomCertificateDeleteResponse = API.CustomCertificateDeleteResponse;
  export import CustomCertificateGetResponse = API.CustomCertificateGetResponse;
  export import CustomCertificateListResponsesV4PagePaginationArray = API.CustomCertificateListResponsesV4PagePaginationArray;
  export import CustomCertificateCreateParams = API.CustomCertificateCreateParams;
  export import CustomCertificateUpdateParams = API.CustomCertificateUpdateParams;
  export import CustomCertificateListParams = API.CustomCertificateListParams;

  export import CustomHostnames = API.CustomHostnames;
  export import CustomHostnameCreateResponse = API.CustomHostnameCreateResponse;
  export import CustomHostnameUpdateResponse = API.CustomHostnameUpdateResponse;
  export import CustomHostnameListResponse = API.CustomHostnameListResponse;
  export import CustomHostnameDeleteResponse = API.CustomHostnameDeleteResponse;
  export import CustomHostnameGetResponse = API.CustomHostnameGetResponse;
  export import CustomHostnameListResponsesV4PagePaginationArray = API.CustomHostnameListResponsesV4PagePaginationArray;
  export import CustomHostnameCreateParams = API.CustomHostnameCreateParams;
  export import CustomHostnameUpdateParams = API.CustomHostnameUpdateParams;
  export import CustomHostnameListParams = API.CustomHostnameListParams;

  export import CustomNameservers = API.CustomNameservers;
  export import CustomNameserverCreateResponse = API.CustomNameserverCreateResponse;
  export import CustomNameserverListResponse = API.CustomNameserverListResponse;
  export import CustomNameserverDeleteResponse = API.CustomNameserverDeleteResponse;
  export import CustomNameserverAvailabiltyResponse = API.CustomNameserverAvailabiltyResponse;
  export import CustomNameserverVerifyResponse = API.CustomNameserverVerifyResponse;
  export import CustomNameserverCreateParams = API.CustomNameserverCreateParams;

  export import DNSRecords = API.DNSRecords;
  export import DNSRecordCreateResponse = API.DNSRecordCreateResponse;
  export import DNSRecordListResponse = API.DNSRecordListResponse;
  export import DNSRecordDeleteResponse = API.DNSRecordDeleteResponse;
  export import DNSRecordExportResponse = API.DNSRecordExportResponse;
  export import DNSRecordGetResponse = API.DNSRecordGetResponse;
  export import DNSRecordImportResponse = API.DNSRecordImportResponse;
  export import DNSRecordReplaceResponse = API.DNSRecordReplaceResponse;
  export import DNSRecordScanResponse = API.DNSRecordScanResponse;
  export import DNSRecordListResponsesV4PagePaginationArray = API.DNSRecordListResponsesV4PagePaginationArray;
  export import DNSRecordCreateParams = API.DNSRecordCreateParams;
  export import DNSRecordListParams = API.DNSRecordListParams;
  export import DNSRecordImportParams = API.DNSRecordImportParams;
  export import DNSRecordReplaceParams = API.DNSRecordReplaceParams;

  export import DNSSEC = API.DNSSEC;
  export import DNSSECUpdateResponse = API.DNSSECUpdateResponse;
  export import DNSSECDeleteResponse = API.DNSSECDeleteResponse;
  export import DNSSECGetResponse = API.DNSSECGetResponse;
  export import DNSSECUpdateParams = API.DNSSECUpdateParams;

  export import Emails = API.Emails;

  export import Filters = API.Filters;
  export import FilterCreateResponse = API.FilterCreateResponse;
  export import FilterListResponse = API.FilterListResponse;
  export import FilterDeleteResponse = API.FilterDeleteResponse;
  export import FilterGetResponse = API.FilterGetResponse;
  export import FilterReplaceResponse = API.FilterReplaceResponse;
  export import FilterListResponsesV4PagePaginationArray = API.FilterListResponsesV4PagePaginationArray;
  export import FilterCreateParams = API.FilterCreateParams;
  export import FilterListParams = API.FilterListParams;
  export import FilterReplaceParams = API.FilterReplaceParams;

  export import Firewalls = API.Firewalls;

  export import Healthchecks = API.Healthchecks;
  export import HealthcheckCreateResponse = API.HealthcheckCreateResponse;
  export import HealthcheckListResponse = API.HealthcheckListResponse;
  export import HealthcheckDeleteResponse = API.HealthcheckDeleteResponse;
  export import HealthcheckGetResponse = API.HealthcheckGetResponse;
  export import HealthcheckReplaceResponse = API.HealthcheckReplaceResponse;
  export import HealthcheckCreateParams = API.HealthcheckCreateParams;
  export import HealthcheckReplaceParams = API.HealthcheckReplaceParams;

  export import KeylessCertificates = API.KeylessCertificates;
  export import KeylessCertificateCreateResponse = API.KeylessCertificateCreateResponse;
  export import KeylessCertificateUpdateResponse = API.KeylessCertificateUpdateResponse;
  export import KeylessCertificateListResponse = API.KeylessCertificateListResponse;
  export import KeylessCertificateDeleteResponse = API.KeylessCertificateDeleteResponse;
  export import KeylessCertificateGetResponse = API.KeylessCertificateGetResponse;
  export import KeylessCertificateCreateParams = API.KeylessCertificateCreateParams;
  export import KeylessCertificateUpdateParams = API.KeylessCertificateUpdateParams;

  export import Logpush = API.Logpush;

  export import Logs = API.Logs;

  export import OriginTLSClientAuth = API.OriginTLSClientAuth;
  export import OriginTLSClientAuthCreateResponse = API.OriginTLSClientAuthCreateResponse;
  export import OriginTLSClientAuthListResponse = API.OriginTLSClientAuthListResponse;
  export import OriginTLSClientAuthDeleteResponse = API.OriginTLSClientAuthDeleteResponse;
  export import OriginTLSClientAuthGetResponse = API.OriginTLSClientAuthGetResponse;
  export import OriginTLSClientAuthCreateParams = API.OriginTLSClientAuthCreateParams;

  export import Pagerules = API.Pagerules;
  export import PageruleCreateResponse = API.PageruleCreateResponse;
  export import PageruleListResponse = API.PageruleListResponse;
  export import PageruleDeleteResponse = API.PageruleDeleteResponse;
  export import PageruleGetResponse = API.PageruleGetResponse;
  export import PageruleReplaceResponse = API.PageruleReplaceResponse;
  export import PageruleCreateParams = API.PageruleCreateParams;
  export import PageruleListParams = API.PageruleListParams;
  export import PageruleReplaceParams = API.PageruleReplaceParams;

  export import RateLimits = API.RateLimits;
  export import RateLimitCreateResponse = API.RateLimitCreateResponse;
  export import RateLimitUpdateResponse = API.RateLimitUpdateResponse;
  export import RateLimitListResponse = API.RateLimitListResponse;
  export import RateLimitDeleteResponse = API.RateLimitDeleteResponse;
  export import RateLimitGetResponse = API.RateLimitGetResponse;
  export import RateLimitListResponsesV4PagePaginationArray = API.RateLimitListResponsesV4PagePaginationArray;
  export import RateLimitCreateParams = API.RateLimitCreateParams;
  export import RateLimitUpdateParams = API.RateLimitUpdateParams;
  export import RateLimitListParams = API.RateLimitListParams;

  export import SecondaryDNS = API.SecondaryDNS;

  export import Settings = API.Settings;
  export import SettingListResponse = API.SettingListResponse;
  export import SettingEditResponse = API.SettingEditResponse;
  export import SettingEditParams = API.SettingEditParams;

  export import WaitingRooms = API.WaitingRooms;
  export import WaitingRoomCreateResponse = API.WaitingRoomCreateResponse;
  export import WaitingRoomListResponse = API.WaitingRoomListResponse;
  export import WaitingRoomDeleteResponse = API.WaitingRoomDeleteResponse;
  export import WaitingRoomGetResponse = API.WaitingRoomGetResponse;
  export import WaitingRoomPreviewResponse = API.WaitingRoomPreviewResponse;
  export import WaitingRoomReplaceResponse = API.WaitingRoomReplaceResponse;
  export import WaitingRoomCreateParams = API.WaitingRoomCreateParams;
  export import WaitingRoomPreviewParams = API.WaitingRoomPreviewParams;
  export import WaitingRoomReplaceParams = API.WaitingRoomReplaceParams;

  export import Web3 = API.Web3;

  export import Workers = API.Workers;

  export import ActivationChecks = API.ActivationChecks;
  export import ActivationCheckReplaceResponse = API.ActivationCheckReplaceResponse;

  export import ManagedHeaders = API.ManagedHeaders;
  export import ManagedHeaderUpdateResponse = API.ManagedHeaderUpdateResponse;
  export import ManagedHeaderListResponse = API.ManagedHeaderListResponse;
  export import ManagedHeaderUpdateParams = API.ManagedHeaderUpdateParams;

  export import PageShield = API.PageShield;
  export import PageShieldListResponse = API.PageShieldListResponse;
  export import PageShieldReplaceResponse = API.PageShieldReplaceResponse;
  export import PageShieldReplaceParams = API.PageShieldReplaceParams;

  export import Rulesets = API.Rulesets;
  export import RulesetCreateResponse = API.RulesetCreateResponse;
  export import RulesetListResponse = API.RulesetListResponse;
  export import RulesetGetResponse = API.RulesetGetResponse;
  export import RulesetReplaceResponse = API.RulesetReplaceResponse;
  export import RulesetCreateParams = API.RulesetCreateParams;
  export import RulesetReplaceParams = API.RulesetReplaceParams;

  export import URLNormalizations = API.URLNormalizations;
  export import URLNormalizationGetResponse = API.URLNormalizationGetResponse;
  export import URLNormalizationReplaceResponse = API.URLNormalizationReplaceResponse;
  export import URLNormalizationReplaceParams = API.URLNormalizationReplaceParams;

  export import Spectrum = API.Spectrum;

  export import Addresses = API.Addresses;

  export import AuditLogs = API.AuditLogs;
  export import AuditLogListResponse = API.AuditLogListResponse;
  export import AuditLogListResponsesV4PagePaginationArray = API.AuditLogListResponsesV4PagePaginationArray;
  export import AuditLogListParams = API.AuditLogListParams;

  export import Billings = API.Billings;

  export import BrandProtection = API.BrandProtection;

  export import Tunnels = API.Tunnels;
  export import TunnelCreateResponse = API.TunnelCreateResponse;
  export import TunnelUpdateResponse = API.TunnelUpdateResponse;
  export import TunnelListResponse = API.TunnelListResponse;
  export import TunnelDeleteResponse = API.TunnelDeleteResponse;
  export import TunnelGetResponse = API.TunnelGetResponse;
  export import TunnelListResponsesV4PagePaginationArray = API.TunnelListResponsesV4PagePaginationArray;
  export import TunnelCreateParams = API.TunnelCreateParams;
  export import TunnelUpdateParams = API.TunnelUpdateParams;
  export import TunnelListParams = API.TunnelListParams;
  export import TunnelDeleteParams = API.TunnelDeleteParams;

  export import Diagnostics = API.Diagnostics;

  export import DLP = API.DLP;

  export import DNSFirewall = API.DNSFirewall;
  export import DNSFirewallCreateResponse = API.DNSFirewallCreateResponse;
  export import DNSFirewallUpdateResponse = API.DNSFirewallUpdateResponse;
  export import DNSFirewallListResponse = API.DNSFirewallListResponse;
  export import DNSFirewallDeleteResponse = API.DNSFirewallDeleteResponse;
  export import DNSFirewallGetResponse = API.DNSFirewallGetResponse;
  export import DNSFirewallListResponsesV4PagePaginationArray = API.DNSFirewallListResponsesV4PagePaginationArray;
  export import DNSFirewallCreateParams = API.DNSFirewallCreateParams;
  export import DNSFirewallUpdateParams = API.DNSFirewallUpdateParams;
  export import DNSFirewallListParams = API.DNSFirewallListParams;

  export import Images = API.Images;

  export import Intel = API.Intel;

  export import Magics = API.Magics;

  export import AccountMembers = API.AccountMembers;
  export import AccountMemberCreateResponse = API.AccountMemberCreateResponse;
  export import AccountMemberListResponse = API.AccountMemberListResponse;
  export import AccountMemberDeleteResponse = API.AccountMemberDeleteResponse;
  export import AccountMemberGetResponse = API.AccountMemberGetResponse;
  export import AccountMemberReplaceResponse = API.AccountMemberReplaceResponse;
  export import AccountMemberListResponsesV4PagePaginationArray = API.AccountMemberListResponsesV4PagePaginationArray;
  export import AccountMemberCreateParams = API.AccountMemberCreateParams;
  export import AccountMemberListParams = API.AccountMemberListParams;
  export import AccountMemberReplaceParams = API.AccountMemberReplaceParams;

  export import Mnms = API.Mnms;

  export import MtlsCertificates = API.MtlsCertificates;
  export import MtlsCertificateCreateResponse = API.MtlsCertificateCreateResponse;
  export import MtlsCertificateListResponse = API.MtlsCertificateListResponse;
  export import MtlsCertificateDeleteResponse = API.MtlsCertificateDeleteResponse;
  export import MtlsCertificateGetResponse = API.MtlsCertificateGetResponse;
  export import MtlsCertificateCreateParams = API.MtlsCertificateCreateParams;

  export import Pages = API.Pages;

  export import Pcaps = API.Pcaps;
  export import PcapCreateResponse = API.PcapCreateResponse;
  export import PcapListResponse = API.PcapListResponse;
  export import PcapGetResponse = API.PcapGetResponse;
  export import PcapCreateParams = API.PcapCreateParams;

  export import Registrar = API.Registrar;

  export import RequestTracers = API.RequestTracers;

  export import Roles = API.Roles;
  export import RoleListResponse = API.RoleListResponse;
  export import RoleGetResponse = API.RoleGetResponse;

  export import Rules = API.Rules;

  export import Storage = API.Storage;

  export import Stream = API.Stream;
  export import StreamListResponse = API.StreamListResponse;
  export import StreamGetResponse = API.StreamGetResponse;
  export import StreamCreateParams = API.StreamCreateParams;
  export import StreamListParams = API.StreamListParams;

  export import Teamnets = API.Teamnets;

  export import Gateways = API.Gateways;
  export import GatewayCreateResponse = API.GatewayCreateResponse;
  export import GatewayListResponse = API.GatewayListResponse;

  export import Alerting = API.Alerting;

  export import Devices = API.Devices;
  export import DeviceDevicesListDevicesResponse = API.DeviceDevicesListDevicesResponse;
  export import DeviceGetResponse = API.DeviceGetResponse;

  export import D1 = API.D1;

  export import DEX = API.DEX;

  export import R2 = API.R2;

  export import Teamnet = API.Teamnet;

  export import WarpConnector = API.WarpConnector;
  export import WarpConnectorCreateResponse = API.WarpConnectorCreateResponse;
  export import WarpConnectorUpdateResponse = API.WarpConnectorUpdateResponse;
  export import WarpConnectorListResponse = API.WarpConnectorListResponse;
  export import WarpConnectorDeleteResponse = API.WarpConnectorDeleteResponse;
  export import WarpConnectorGetResponse = API.WarpConnectorGetResponse;
  export import WarpConnectorListResponsesV4PagePaginationArray = API.WarpConnectorListResponsesV4PagePaginationArray;
  export import WarpConnectorCreateParams = API.WarpConnectorCreateParams;
  export import WarpConnectorUpdateParams = API.WarpConnectorUpdateParams;
  export import WarpConnectorListParams = API.WarpConnectorListParams;
  export import WarpConnectorDeleteParams = API.WarpConnectorDeleteParams;

  export import Dispatchers = API.Dispatchers;

  export import WorkersForPlatforms = API.WorkersForPlatforms;

  export import WorkerDomains = API.WorkerDomains;
  export import WorkerDomainGetResponse = API.WorkerDomainGetResponse;

  export import WorkerScripts = API.WorkerScripts;

  export import Zerotrust = API.Zerotrust;

  export import Addressing = API.Addressing;

  export import Challenges = API.Challenges;

  export import Hyperdrive = API.Hyperdrive;

  export import Rum = API.Rum;

  export import Vectorize = API.Vectorize;

  export import URLScanner = API.URLScanner;
  export import URLScannerScanResponse = API.URLScannerScanResponse;
  export import URLScannerScanParams = API.URLScannerScanParams;

  export import Radar = API.Radar;

  export import BotManagement = API.BotManagement;
  export import BotManagementGetResponse = API.BotManagementGetResponse;
  export import BotManagementReplaceResponse = API.BotManagementReplaceResponse;
  export import BotManagementReplaceParams = API.BotManagementReplaceParams;

  export import CacheReserve = API.CacheReserve;
  export import CacheReserveCreateResponse = API.CacheReserveCreateResponse;
  export import CacheReserveGetResponse = API.CacheReserveGetResponse;

  export import OriginPostQuantumEncryption = API.OriginPostQuantumEncryption;
  export import OriginPostQuantumEncryptionGetResponse = API.OriginPostQuantumEncryptionGetResponse;
  export import OriginPostQuantumEncryptionReplaceResponse = API.OriginPostQuantumEncryptionReplaceResponse;
  export import OriginPostQuantumEncryptionReplaceParams = API.OriginPostQuantumEncryptionReplaceParams;

  export import Firewall = API.Firewall;

  export import Zaraz = API.Zaraz;
  export import ZarazReplaceResponse = API.ZarazReplaceResponse;
  export import ZarazReplaceParams = API.ZarazReplaceParams;

  export import Speed = API.Speed;
  export import SpeedCreateResponse = API.SpeedCreateResponse;
  export import SpeedDeleteResponse = API.SpeedDeleteResponse;
  export import SpeedScheduleGetResponse = API.SpeedScheduleGetResponse;
  export import SpeedTestsGetResponse = API.SpeedTestsGetResponse;
  export import SpeedTrendsListResponse = API.SpeedTrendsListResponse;
  export import SpeedCreateParams = API.SpeedCreateParams;
  export import SpeedDeleteParams = API.SpeedDeleteParams;
  export import SpeedScheduleGetParams = API.SpeedScheduleGetParams;
  export import SpeedTrendsListParams = API.SpeedTrendsListParams;

  export import DcvDelegation = API.DcvDelegation;

  export import Hostnames = API.Hostnames;

  export import Snippets = API.Snippets;
  export import SnippetListResponse = API.SnippetListResponse;
  export import SnippetDeleteResponse = API.SnippetDeleteResponse;
  export import SnippetGetResponse = API.SnippetGetResponse;
  export import SnippetReplaceResponse = API.SnippetReplaceResponse;
  export import SnippetReplaceParams = API.SnippetReplaceParams;

  export import Calls = API.Calls;
  export import CallCreateResponse = API.CallCreateResponse;
  export import CallListResponse = API.CallListResponse;
  export import CallDeleteResponse = API.CallDeleteResponse;
  export import CallGetResponse = API.CallGetResponse;
  export import CallReplaceResponse = API.CallReplaceResponse;
  export import CallCreateParams = API.CallCreateParams;
  export import CallReplaceParams = API.CallReplaceParams;
}

export default Cloudflare;
