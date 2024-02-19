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
  purgeCaches: API.PurgeCaches = new API.PurgeCaches(this);
  ssls: API.SSLs = new API.SSLs(this);
  subscriptions: API.Subscriptions = new API.Subscriptions(this);
  acms: API.Acms = new API.Acms(this);
  analytics: API.Analytics = new API.Analytics(this);
  argo: API.Argo = new API.Argo(this);
  availablePlans: API.AvailablePlans = new API.AvailablePlans(this);
  availableRatePlans: API.AvailableRatePlans = new API.AvailableRatePlans(this);
  caches: API.Caches = new API.Caches(this);
  certificateAuthorities: API.CertificateAuthorities = new API.CertificateAuthorities(this);
  clientCertificates: API.ClientCertificates = new API.ClientCertificates(this);
  customCertificates: API.CustomCertificates = new API.CustomCertificates(this);
  customHostnames: API.CustomHostnames = new API.CustomHostnames(this);
  customNs: API.CustomNs = new API.CustomNs(this);
  dnsRecords: API.DNSRecords = new API.DNSRecords(this);
  dnssecs: API.DNSSECs = new API.DNSSECs(this);
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
  web3s: API.Web3s = new API.Web3s(this);
  workers: API.Workers = new API.Workers(this);
  activationChecks: API.ActivationChecks = new API.ActivationChecks(this);
  managedHeaders: API.ManagedHeaders = new API.ManagedHeaders(this);
  pageShields: API.PageShields = new API.PageShields(this);
  rulesets: API.Rulesets = new API.Rulesets(this);
  urlNormalizations: API.URLNormalizations = new API.URLNormalizations(this);
  spectrums: API.Spectrums = new API.Spectrums(this);
  addresses: API.Addresses = new API.Addresses(this);
  auditLogs: API.AuditLogs = new API.AuditLogs(this);
  billings: API.Billings = new API.Billings(this);
  brandProtections: API.BrandProtections = new API.BrandProtections(this);
  cfdTunnels: API.CfdTunnels = new API.CfdTunnels(this);
  diagnostics: API.Diagnostics = new API.Diagnostics(this);
  dlps: API.DLPs = new API.DLPs(this);
  dnsFirewalls: API.DNSFirewalls = new API.DNSFirewalls(this);
  images: API.Images = new API.Images(this);
  intels: API.Intels = new API.Intels(this);
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
  tunnels: API.Tunnels = new API.Tunnels(this);
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
  intel: API.Intel = new API.Intel(this);
  rum: API.Rum = new API.Rum(this);
  vectorize: API.Vectorize = new API.Vectorize(this);
  urlScanner: API.URLScanner = new API.URLScanner(this);
  radar: API.Radar = new API.Radar(this);
  botManagements: API.BotManagements = new API.BotManagements(this);
  cacheReserves: API.CacheReserves = new API.CacheReserves(this);
  originPostQuantumEncryptions: API.OriginPostQuantumEncryptions = new API.OriginPostQuantumEncryptions(this);
  cache: API.Cache = new API.Cache(this);
  firewall: API.Firewall = new API.Firewall(this);
  zaraz: API.Zaraz = new API.Zaraz(this);
  speedAPI: API.SpeedAPI = new API.SpeedAPI(this);
  dcvDelegation: API.DcvDelegation = new API.DcvDelegation(this);
  hostnames: API.Hostnames = new API.Hostnames(this);
  pageShield: API.PageShield = new API.PageShield(this);
  fontSettings: API.FontSettings = new API.FontSettings(this);
  snippets: API.Snippets = new API.Snippets(this);
  dlp: API.DLP = new API.DLP(this);
  gateway: API.Gateway = new API.Gateway(this);
  accessTags: API.AccessTags = new API.AccessTags(this);
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
  export import AccountUpdateResponse = API.AccountUpdateResponse;
  export import AccountListResponse = API.AccountListResponse;
  export import AccountGetResponse = API.AccountGetResponse;
  export import AccountListResponsesV4PagePaginationArray = API.AccountListResponsesV4PagePaginationArray;
  export import AccountUpdateParams = API.AccountUpdateParams;
  export import AccountListParams = API.AccountListParams;

  export import Certificates = API.Certificates;
  export import CertificateDeleteResponse = API.CertificateDeleteResponse;
  export import CertificateGetResponse = API.CertificateGetResponse;
  export import CertificateOriginCaCreateCertificateResponse = API.CertificateOriginCaCreateCertificateResponse;
  export import CertificateOriginCaListCertificatesResponse = API.CertificateOriginCaListCertificatesResponse;
  export import CertificateOriginCaCreateCertificateParams = API.CertificateOriginCaCreateCertificateParams;

  export import IPs = API.IPs;
  export import IPListResponse = API.IPListResponse;
  export import IPListParams = API.IPListParams;

  export import Memberships = API.Memberships;
  export import MembershipUpdateResponse = API.MembershipUpdateResponse;
  export import MembershipListResponse = API.MembershipListResponse;
  export import MembershipDeleteResponse = API.MembershipDeleteResponse;
  export import MembershipGetResponse = API.MembershipGetResponse;
  export import MembershipListResponsesV4PagePaginationArray = API.MembershipListResponsesV4PagePaginationArray;
  export import MembershipUpdateParams = API.MembershipUpdateParams;
  export import MembershipListParams = API.MembershipListParams;

  export import Users = API.Users;
  export import UserUserEditUserResponse = API.UserUserEditUserResponse;
  export import UserUserUserDetailsResponse = API.UserUserUserDetailsResponse;
  export import UserUserEditUserParams = API.UserUserEditUserParams;

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
  export import AIRunResponse = API.AIRunResponse;
  export import AIRunParams = API.AIRunParams;

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

  export import PurgeCaches = API.PurgeCaches;
  export import PurgeCachZonePurgeResponse = API.PurgeCachZonePurgeResponse;
  export import PurgeCachZonePurgeParams = API.PurgeCachZonePurgeParams;

  export import SSLs = API.SSLs;

  export import Subscriptions = API.Subscriptions;
  export import SubscriptionUpdateResponse = API.SubscriptionUpdateResponse;
  export import SubscriptionDeleteResponse = API.SubscriptionDeleteResponse;
  export import SubscriptionAccountSubscriptionsCreateSubscriptionResponse = API.SubscriptionAccountSubscriptionsCreateSubscriptionResponse;
  export import SubscriptionAccountSubscriptionsListSubscriptionsResponse = API.SubscriptionAccountSubscriptionsListSubscriptionsResponse;
  export import SubscriptionZoneSubscriptionCreateZoneSubscriptionResponse = API.SubscriptionZoneSubscriptionCreateZoneSubscriptionResponse;
  export import SubscriptionZoneSubscriptionUpdateZoneSubscriptionResponse = API.SubscriptionZoneSubscriptionUpdateZoneSubscriptionResponse;
  export import SubscriptionZoneSubscriptionZoneSubscriptionDetailsResponse = API.SubscriptionZoneSubscriptionZoneSubscriptionDetailsResponse;
  export import SubscriptionUpdateParams = API.SubscriptionUpdateParams;
  export import SubscriptionAccountSubscriptionsCreateSubscriptionParams = API.SubscriptionAccountSubscriptionsCreateSubscriptionParams;
  export import SubscriptionZoneSubscriptionCreateZoneSubscriptionParams = API.SubscriptionZoneSubscriptionCreateZoneSubscriptionParams;
  export import SubscriptionZoneSubscriptionUpdateZoneSubscriptionParams = API.SubscriptionZoneSubscriptionUpdateZoneSubscriptionParams;

  export import Acms = API.Acms;

  export import Analytics = API.Analytics;

  export import Argo = API.Argo;

  export import AvailablePlans = API.AvailablePlans;
  export import AvailablePlanListResponse = API.AvailablePlanListResponse;
  export import AvailablePlanGetResponse = API.AvailablePlanGetResponse;

  export import AvailableRatePlans = API.AvailableRatePlans;
  export import AvailableRatePlanZoneRatePlanListAvailableRatePlansResponse = API.AvailableRatePlanZoneRatePlanListAvailableRatePlansResponse;

  export import Caches = API.Caches;

  export import CertificateAuthorities = API.CertificateAuthorities;

  export import ClientCertificates = API.ClientCertificates;
  export import ClientCertificateUpdateResponse = API.ClientCertificateUpdateResponse;
  export import ClientCertificateDeleteResponse = API.ClientCertificateDeleteResponse;
  export import ClientCertificateClientCertificateForAZoneCreateClientCertificateResponse = API.ClientCertificateClientCertificateForAZoneCreateClientCertificateResponse;
  export import ClientCertificateClientCertificateForAZoneListClientCertificatesResponse = API.ClientCertificateClientCertificateForAZoneListClientCertificatesResponse;
  export import ClientCertificateGetResponse = API.ClientCertificateGetResponse;
  export import ClientCertificateClientCertificateForAZoneCreateClientCertificateParams = API.ClientCertificateClientCertificateForAZoneCreateClientCertificateParams;
  export import ClientCertificateClientCertificateForAZoneListClientCertificatesParams = API.ClientCertificateClientCertificateForAZoneListClientCertificatesParams;

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
  export import CustomHostnameUpdateResponse = API.CustomHostnameUpdateResponse;
  export import CustomHostnameDeleteResponse = API.CustomHostnameDeleteResponse;
  export import CustomHostnameCustomHostnameForAZoneCreateCustomHostnameResponse = API.CustomHostnameCustomHostnameForAZoneCreateCustomHostnameResponse;
  export import CustomHostnameCustomHostnameForAZoneListCustomHostnamesResponse = API.CustomHostnameCustomHostnameForAZoneListCustomHostnamesResponse;
  export import CustomHostnameGetResponse = API.CustomHostnameGetResponse;
  export import CustomHostnameUpdateParams = API.CustomHostnameUpdateParams;
  export import CustomHostnameCustomHostnameForAZoneCreateCustomHostnameParams = API.CustomHostnameCustomHostnameForAZoneCreateCustomHostnameParams;
  export import CustomHostnameCustomHostnameForAZoneListCustomHostnamesParams = API.CustomHostnameCustomHostnameForAZoneListCustomHostnamesParams;

  export import CustomNs = API.CustomNs;
  export import CustomNCreateResponse = API.CustomNCreateResponse;
  export import CustomNListResponse = API.CustomNListResponse;
  export import CustomNDeleteResponse = API.CustomNDeleteResponse;
  export import CustomNCreateParams = API.CustomNCreateParams;

  export import DNSRecords = API.DNSRecords;
  export import DNSRecordCreateResponse = API.DNSRecordCreateResponse;
  export import DNSRecordUpdateResponse = API.DNSRecordUpdateResponse;
  export import DNSRecordListResponse = API.DNSRecordListResponse;
  export import DNSRecordDeleteResponse = API.DNSRecordDeleteResponse;
  export import DNSRecordExportResponse = API.DNSRecordExportResponse;
  export import DNSRecordGetResponse = API.DNSRecordGetResponse;
  export import DNSRecordImportResponse = API.DNSRecordImportResponse;
  export import DNSRecordScanResponse = API.DNSRecordScanResponse;
  export import DNSRecordListResponsesV4PagePaginationArray = API.DNSRecordListResponsesV4PagePaginationArray;
  export import DNSRecordCreateParams = API.DNSRecordCreateParams;
  export import DNSRecordUpdateParams = API.DNSRecordUpdateParams;
  export import DNSRecordListParams = API.DNSRecordListParams;
  export import DNSRecordImportParams = API.DNSRecordImportParams;

  export import DNSSECs = API.DNSSECs;
  export import DNSSECUpdateResponse = API.DNSSECUpdateResponse;
  export import DNSSECGetResponse = API.DNSSECGetResponse;
  export import DNSSECUpdateParams = API.DNSSECUpdateParams;

  export import Emails = API.Emails;

  export import Filters = API.Filters;
  export import FilterUpdateResponse = API.FilterUpdateResponse;
  export import FilterDeleteResponse = API.FilterDeleteResponse;
  export import FilterFiltersCreateFiltersResponse = API.FilterFiltersCreateFiltersResponse;
  export import FilterFiltersListFiltersResponse = API.FilterFiltersListFiltersResponse;
  export import FilterFiltersUpdateFiltersResponse = API.FilterFiltersUpdateFiltersResponse;
  export import FilterGetResponse = API.FilterGetResponse;
  export import FilterUpdateParams = API.FilterUpdateParams;
  export import FilterFiltersCreateFiltersParams = API.FilterFiltersCreateFiltersParams;
  export import FilterFiltersListFiltersParams = API.FilterFiltersListFiltersParams;
  export import FilterFiltersUpdateFiltersParams = API.FilterFiltersUpdateFiltersParams;

  export import Firewalls = API.Firewalls;

  export import Healthchecks = API.Healthchecks;
  export import HealthcheckUpdateResponse = API.HealthcheckUpdateResponse;
  export import HealthcheckDeleteResponse = API.HealthcheckDeleteResponse;
  export import HealthcheckGetResponse = API.HealthcheckGetResponse;
  export import HealthcheckHealthChecksCreateHealthCheckResponse = API.HealthcheckHealthChecksCreateHealthCheckResponse;
  export import HealthcheckHealthChecksListHealthChecksResponse = API.HealthcheckHealthChecksListHealthChecksResponse;
  export import HealthcheckUpdateParams = API.HealthcheckUpdateParams;
  export import HealthcheckHealthChecksCreateHealthCheckParams = API.HealthcheckHealthChecksCreateHealthCheckParams;

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
  export import PageruleUpdateResponse = API.PageruleUpdateResponse;
  export import PageruleListResponse = API.PageruleListResponse;
  export import PageruleDeleteResponse = API.PageruleDeleteResponse;
  export import PageruleGetResponse = API.PageruleGetResponse;
  export import PageruleCreateParams = API.PageruleCreateParams;
  export import PageruleUpdateParams = API.PageruleUpdateParams;
  export import PageruleListParams = API.PageruleListParams;

  export import RateLimits = API.RateLimits;
  export import RateLimitUpdateResponse = API.RateLimitUpdateResponse;
  export import RateLimitListResponse = API.RateLimitListResponse;
  export import RateLimitGetResponse = API.RateLimitGetResponse;
  export import RateLimitListResponsesV4PagePaginationArray = API.RateLimitListResponsesV4PagePaginationArray;
  export import RateLimitUpdateParams = API.RateLimitUpdateParams;
  export import RateLimitListParams = API.RateLimitListParams;

  export import SecondaryDNS = API.SecondaryDNS;

  export import Settings = API.Settings;
  export import SettingListResponse = API.SettingListResponse;
  export import SettingEditResponse = API.SettingEditResponse;
  export import SettingEditParams = API.SettingEditParams;

  export import WaitingRooms = API.WaitingRooms;
  export import WaitingRoomCreateResponse = API.WaitingRoomCreateResponse;
  export import WaitingRoomUpdateResponse = API.WaitingRoomUpdateResponse;
  export import WaitingRoomListResponse = API.WaitingRoomListResponse;
  export import WaitingRoomDeleteResponse = API.WaitingRoomDeleteResponse;
  export import WaitingRoomGetResponse = API.WaitingRoomGetResponse;
  export import WaitingRoomCreateParams = API.WaitingRoomCreateParams;
  export import WaitingRoomUpdateParams = API.WaitingRoomUpdateParams;

  export import Web3s = API.Web3s;

  export import Workers = API.Workers;

  export import ActivationChecks = API.ActivationChecks;
  export import ActivationCheckPutZonesZoneIDActivationCheckResponse = API.ActivationCheckPutZonesZoneIDActivationCheckResponse;

  export import ManagedHeaders = API.ManagedHeaders;
  export import ManagedHeaderListResponse = API.ManagedHeaderListResponse;
  export import ManagedHeaderManagedTransformsUpdateStatusOfManagedTransformsResponse = API.ManagedHeaderManagedTransformsUpdateStatusOfManagedTransformsResponse;
  export import ManagedHeaderManagedTransformsUpdateStatusOfManagedTransformsParams = API.ManagedHeaderManagedTransformsUpdateStatusOfManagedTransformsParams;

  export import PageShields = API.PageShields;
  export import PageShieldListResponse = API.PageShieldListResponse;
  export import PageShieldPageShieldUpdatePageShieldSettingsResponse = API.PageShieldPageShieldUpdatePageShieldSettingsResponse;
  export import PageShieldPageShieldUpdatePageShieldSettingsParams = API.PageShieldPageShieldUpdatePageShieldSettingsParams;

  export import Rulesets = API.Rulesets;
  export import RulesetCreateResponse = API.RulesetCreateResponse;
  export import RulesetUpdateResponse = API.RulesetUpdateResponse;
  export import RulesetListResponse = API.RulesetListResponse;
  export import RulesetGetResponse = API.RulesetGetResponse;
  export import RulesetCreateParams = API.RulesetCreateParams;
  export import RulesetUpdateParams = API.RulesetUpdateParams;

  export import URLNormalizations = API.URLNormalizations;
  export import URLNormalizationURLNormalizationGetURLNormalizationSettingsResponse = API.URLNormalizationURLNormalizationGetURLNormalizationSettingsResponse;
  export import URLNormalizationURLNormalizationUpdateURLNormalizationSettingsResponse = API.URLNormalizationURLNormalizationUpdateURLNormalizationSettingsResponse;
  export import URLNormalizationURLNormalizationUpdateURLNormalizationSettingsParams = API.URLNormalizationURLNormalizationUpdateURLNormalizationSettingsParams;

  export import Spectrums = API.Spectrums;

  export import Addresses = API.Addresses;

  export import AuditLogs = API.AuditLogs;
  export import AuditLogAuditLogsGetAccountAuditLogsResponse = API.AuditLogAuditLogsGetAccountAuditLogsResponse;
  export import AuditLogAuditLogsGetAccountAuditLogsParams = API.AuditLogAuditLogsGetAccountAuditLogsParams;

  export import Billings = API.Billings;

  export import BrandProtections = API.BrandProtections;

  export import CfdTunnels = API.CfdTunnels;
  export import CfdTunnelUpdateResponse = API.CfdTunnelUpdateResponse;
  export import CfdTunnelDeleteResponse = API.CfdTunnelDeleteResponse;
  export import CfdTunnelCloudflareTunnelCreateACloudflareTunnelResponse = API.CfdTunnelCloudflareTunnelCreateACloudflareTunnelResponse;
  export import CfdTunnelCloudflareTunnelListCloudflareTunnelsResponse = API.CfdTunnelCloudflareTunnelListCloudflareTunnelsResponse;
  export import CfdTunnelGetResponse = API.CfdTunnelGetResponse;
  export import CfdTunnelUpdateParams = API.CfdTunnelUpdateParams;
  export import CfdTunnelDeleteParams = API.CfdTunnelDeleteParams;
  export import CfdTunnelCloudflareTunnelCreateACloudflareTunnelParams = API.CfdTunnelCloudflareTunnelCreateACloudflareTunnelParams;
  export import CfdTunnelCloudflareTunnelListCloudflareTunnelsParams = API.CfdTunnelCloudflareTunnelListCloudflareTunnelsParams;

  export import Diagnostics = API.Diagnostics;

  export import DLPs = API.DLPs;

  export import DNSFirewalls = API.DNSFirewalls;
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

  export import Intels = API.Intels;

  export import Magics = API.Magics;

  export import AccountMembers = API.AccountMembers;
  export import AccountMemberCreateResponse = API.AccountMemberCreateResponse;
  export import AccountMemberUpdateResponse = API.AccountMemberUpdateResponse;
  export import AccountMemberListResponse = API.AccountMemberListResponse;
  export import AccountMemberDeleteResponse = API.AccountMemberDeleteResponse;
  export import AccountMemberGetResponse = API.AccountMemberGetResponse;
  export import AccountMemberListResponsesV4PagePaginationArray = API.AccountMemberListResponsesV4PagePaginationArray;
  export import AccountMemberCreateParams = API.AccountMemberCreateParams;
  export import AccountMemberUpdateParams = API.AccountMemberUpdateParams;
  export import AccountMemberListParams = API.AccountMemberListParams;

  export import Mnms = API.Mnms;

  export import MtlsCertificates = API.MtlsCertificates;
  export import MtlsCertificateUpdateResponse = API.MtlsCertificateUpdateResponse;
  export import MtlsCertificateListResponse = API.MtlsCertificateListResponse;
  export import MtlsCertificateDeleteResponse = API.MtlsCertificateDeleteResponse;
  export import MtlsCertificateGetResponse = API.MtlsCertificateGetResponse;
  export import MtlsCertificateUpdateParams = API.MtlsCertificateUpdateParams;

  export import Pages = API.Pages;

  export import Pcaps = API.Pcaps;
  export import PcapGetResponse = API.PcapGetResponse;
  export import PcapMagicPcapCollectionCreatePcapRequestResponse = API.PcapMagicPcapCollectionCreatePcapRequestResponse;
  export import PcapMagicPcapCollectionListPacketCaptureRequestsResponse = API.PcapMagicPcapCollectionListPacketCaptureRequestsResponse;
  export import PcapMagicPcapCollectionCreatePcapRequestParams = API.PcapMagicPcapCollectionCreatePcapRequestParams;

  export import Registrar = API.Registrar;

  export import RequestTracers = API.RequestTracers;

  export import Roles = API.Roles;
  export import RoleAccountRolesListRolesResponse = API.RoleAccountRolesListRolesResponse;
  export import RoleGetResponse = API.RoleGetResponse;

  export import Rules = API.Rules;

  export import Storage = API.Storage;

  export import Stream = API.Stream;
  export import StreamUpdateResponse = API.StreamUpdateResponse;
  export import StreamGetResponse = API.StreamGetResponse;
  export import StreamStreamVideosListVideosResponse = API.StreamStreamVideosListVideosResponse;
  export import StreamUpdateParams = API.StreamUpdateParams;
  export import StreamStreamVideosInitiateVideoUploadsUsingTusParams = API.StreamStreamVideosInitiateVideoUploadsUsingTusParams;
  export import StreamStreamVideosListVideosParams = API.StreamStreamVideosListVideosParams;

  export import Teamnets = API.Teamnets;

  export import Tunnels = API.Tunnels;
  export import TunnelDeleteResponse = API.TunnelDeleteResponse;
  export import TunnelArgoTunnelCreateAnArgoTunnelResponse = API.TunnelArgoTunnelCreateAnArgoTunnelResponse;
  export import TunnelArgoTunnelListArgoTunnelsResponse = API.TunnelArgoTunnelListArgoTunnelsResponse;
  export import TunnelGetResponse = API.TunnelGetResponse;
  export import TunnelDeleteParams = API.TunnelDeleteParams;
  export import TunnelArgoTunnelCreateAnArgoTunnelParams = API.TunnelArgoTunnelCreateAnArgoTunnelParams;
  export import TunnelArgoTunnelListArgoTunnelsParams = API.TunnelArgoTunnelListArgoTunnelsParams;

  export import Gateways = API.Gateways;
  export import GatewayZeroTrustAccountsCreateZeroTrustAccountResponse = API.GatewayZeroTrustAccountsCreateZeroTrustAccountResponse;
  export import GatewayZeroTrustAccountsGetZeroTrustAccountInformationResponse = API.GatewayZeroTrustAccountsGetZeroTrustAccountInformationResponse;

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

  export import Intel = API.Intel;

  export import Rum = API.Rum;

  export import Vectorize = API.Vectorize;

  export import URLScanner = API.URLScanner;
  export import URLScannerScanResponse = API.URLScannerScanResponse;
  export import URLScannerScanParams = API.URLScannerScanParams;

  export import Radar = API.Radar;

  export import BotManagements = API.BotManagements;
  export import BotManagementUpdateResponse = API.BotManagementUpdateResponse;
  export import BotManagementGetResponse = API.BotManagementGetResponse;
  export import BotManagementUpdateParams = API.BotManagementUpdateParams;

  export import CacheReserves = API.CacheReserves;
  export import CacheReserveCreateResponse = API.CacheReserveCreateResponse;
  export import CacheReserveClearResponse = API.CacheReserveClearResponse;

  export import OriginPostQuantumEncryptions = API.OriginPostQuantumEncryptions;
  export import OriginPostQuantumEncryptionUpdateResponse = API.OriginPostQuantumEncryptionUpdateResponse;
  export import OriginPostQuantumEncryptionGetResponse = API.OriginPostQuantumEncryptionGetResponse;
  export import OriginPostQuantumEncryptionUpdateParams = API.OriginPostQuantumEncryptionUpdateParams;

  export import Cache = API.Cache;
  export import CacheRegionalTieredCachesResponse = API.CacheRegionalTieredCachesResponse;
  export import CacheUpdateRegionalTieredCacheResponse = API.CacheUpdateRegionalTieredCacheResponse;
  export import CacheUpdateRegionalTieredCacheParams = API.CacheUpdateRegionalTieredCacheParams;

  export import Firewall = API.Firewall;

  export import Zaraz = API.Zaraz;
  export import ZarazWorkflowUpdateResponse = API.ZarazWorkflowUpdateResponse;
  export import ZarazWorkflowUpdateParams = API.ZarazWorkflowUpdateParams;

  export import SpeedAPI = API.SpeedAPI;
  export import SpeedAPIAvailabilitiesListResponse = API.SpeedAPIAvailabilitiesListResponse;
  export import SpeedAPIPagesListResponse = API.SpeedAPIPagesListResponse;
  export import SpeedAPIScheduleDeleteResponse = API.SpeedAPIScheduleDeleteResponse;
  export import SpeedAPIScheduleGetResponse = API.SpeedAPIScheduleGetResponse;
  export import SpeedAPITestsCreateResponse = API.SpeedAPITestsCreateResponse;
  export import SpeedAPITestsDeleteResponse = API.SpeedAPITestsDeleteResponse;
  export import SpeedAPITestsGetResponse = API.SpeedAPITestsGetResponse;
  export import SpeedAPITestsListResponse = API.SpeedAPITestsListResponse;
  export import SpeedAPITrendsListResponse = API.SpeedAPITrendsListResponse;
  export import SpeedAPIScheduleDeleteParams = API.SpeedAPIScheduleDeleteParams;
  export import SpeedAPIScheduleGetParams = API.SpeedAPIScheduleGetParams;
  export import SpeedAPITestsCreateParams = API.SpeedAPITestsCreateParams;
  export import SpeedAPITestsDeleteParams = API.SpeedAPITestsDeleteParams;
  export import SpeedAPITestsListParams = API.SpeedAPITestsListParams;
  export import SpeedAPITrendsListParams = API.SpeedAPITrendsListParams;

  export import DcvDelegation = API.DcvDelegation;

  export import Hostnames = API.Hostnames;

  export import PageShield = API.PageShield;

  export import FontSettings = API.FontSettings;
  export import FontSettingUpdateResponse = API.FontSettingUpdateResponse;
  export import FontSettingGetResponse = API.FontSettingGetResponse;
  export import FontSettingUpdateParams = API.FontSettingUpdateParams;

  export import Snippets = API.Snippets;
  export import SnippetUpdateResponse = API.SnippetUpdateResponse;
  export import SnippetListResponse = API.SnippetListResponse;
  export import SnippetDeleteResponse = API.SnippetDeleteResponse;
  export import SnippetGetResponse = API.SnippetGetResponse;
  export import SnippetUpdateParams = API.SnippetUpdateParams;

  export import DLP = API.DLP;

  export import Gateway = API.Gateway;

  export import AccessTags = API.AccessTags;
  export import AccessTagCreateResponse = API.AccessTagCreateResponse;
  export import AccessTagUpdateResponse = API.AccessTagUpdateResponse;
  export import AccessTagDeleteResponse = API.AccessTagDeleteResponse;
  export import AccessTagGetResponse = API.AccessTagGetResponse;
  export import AccessTagCreateParams = API.AccessTagCreateParams;
  export import AccessTagUpdateParams = API.AccessTagUpdateParams;

  export import Calls = API.Calls;
  export import CallCreateResponse = API.CallCreateResponse;
  export import CallUpdateResponse = API.CallUpdateResponse;
  export import CallListResponse = API.CallListResponse;
  export import CallDeleteResponse = API.CallDeleteResponse;
  export import CallGetResponse = API.CallGetResponse;
  export import CallCreateParams = API.CallCreateParams;
  export import CallUpdateParams = API.CallUpdateParams;
}

export default Cloudflare;
