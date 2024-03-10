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
  certificates: API.Certificates = new API.Certificates(this);
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
  availablePlans: API.AvailablePlans = new API.AvailablePlans(this);
  availableRatePlans: API.AvailableRatePlans = new API.AvailableRatePlans(this);
  certificateAuthorities: API.CertificateAuthorities = new API.CertificateAuthorities(this);
  clientCertificates: API.ClientCertificates = new API.ClientCertificates(this);
  customCertificates: API.CustomCertificates = new API.CustomCertificates(this);
  customHostnames: API.CustomHostnames = new API.CustomHostnames(this);
  customNameservers: API.CustomNameservers = new API.CustomNameservers(this);
  dns: API.DNS = new API.DNS(this);
  dnssec: API.DNSSEC = new API.DNSSEC(this);
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
  hyperdrive: API.Hyperdrive = new API.Hyperdrive(this);
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

  export import CursorPagination = Pagination.CursorPagination;
  export import CursorPaginationParams = Pagination.CursorPaginationParams;
  export import CursorPaginationResponse = Pagination.CursorPaginationResponse;

  export import CursorLimitPagination = Pagination.CursorLimitPagination;
  export import CursorLimitPaginationParams = Pagination.CursorLimitPaginationParams;
  export import CursorLimitPaginationResponse = Pagination.CursorLimitPaginationResponse;

  export import Accounts = API.Accounts;
  export import Account = API.Account;
  export import AccountUpdateResponse = API.AccountUpdateResponse;
  export import AccountListResponse = API.AccountListResponse;
  export import AccountGetResponse = API.AccountGetResponse;
  export import AccountListResponsesV4PagePaginationArray = API.AccountListResponsesV4PagePaginationArray;
  export import AccountUpdateParams = API.AccountUpdateParams;
  export import AccountListParams = API.AccountListParams;
  export import AccountGetParams = API.AccountGetParams;

  export import Certificates = API.Certificates;
  export import OriginCACertificate = API.OriginCACertificate;
  export import CertificateCreateResponse = API.CertificateCreateResponse;
  export import CertificateListResponse = API.CertificateListResponse;
  export import CertificateDeleteResponse = API.CertificateDeleteResponse;
  export import CertificateGetResponse = API.CertificateGetResponse;
  export import CertificateCreateParams = API.CertificateCreateParams;

  export import IPs = API.IPs;
  export import JdcloudIPs = API.JdcloudIPs;
  export import IPListResponse = API.IPListResponse;
  export import IPListParams = API.IPListParams;

  export import Memberships = API.Memberships;
  export import Membership = API.Membership;
  export import MembershipUpdateResponse = API.MembershipUpdateResponse;
  export import MembershipDeleteResponse = API.MembershipDeleteResponse;
  export import MembershipGetResponse = API.MembershipGetResponse;
  export import MembershipsV4PagePaginationArray = API.MembershipsV4PagePaginationArray;
  export import MembershipUpdateParams = API.MembershipUpdateParams;
  export import MembershipListParams = API.MembershipListParams;

  export import UserResource = API.UserResource;
  export import User = API.User;
  export import UserEditResponse = API.UserEditResponse;
  export import UserGetResponse = API.UserGetResponse;
  export import UserEditParams = API.UserEditParams;

  export import Zones = API.Zones;
  export import Zone = API.Zone;
  export import ZoneCreateResponse = API.ZoneCreateResponse;
  export import ZoneListResponse = API.ZoneListResponse;
  export import ZoneDeleteResponse = API.ZoneDeleteResponse;
  export import ZoneEditResponse = API.ZoneEditResponse;
  export import ZoneGetResponse = API.ZoneGetResponse;
  export import ZoneListResponsesV4PagePaginationArray = API.ZoneListResponsesV4PagePaginationArray;
  export import ZoneCreateParams = API.ZoneCreateParams;
  export import ZoneListParams = API.ZoneListParams;
  export import ZoneDeleteParams = API.ZoneDeleteParams;
  export import ZoneEditParams = API.ZoneEditParams;
  export import ZoneGetParams = API.ZoneGetParams;

  export import LoadBalancers = API.LoadBalancers;
  export import LoadBalancer = API.LoadBalancer;
  export import LoadBalancerListResponse = API.LoadBalancerListResponse;
  export import LoadBalancerDeleteResponse = API.LoadBalancerDeleteResponse;
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
  export import SubscriptionCreateResponse = API.SubscriptionCreateResponse;
  export import SubscriptionUpdateResponse = API.SubscriptionUpdateResponse;
  export import SubscriptionListResponse = API.SubscriptionListResponse;
  export import SubscriptionDeleteResponse = API.SubscriptionDeleteResponse;
  export import SubscriptionGetResponse = API.SubscriptionGetResponse;
  export import SubscriptionCreateParams = API.SubscriptionCreateParams;
  export import SubscriptionUpdateParams = API.SubscriptionUpdateParams;

  export import ACM = API.ACM;

  export import Argo = API.Argo;

  export import AvailablePlans = API.AvailablePlans;
  export import BillSubsAPIAvailableRatePlan = API.BillSubsAPIAvailableRatePlan;
  export import AvailablePlanListResponse = API.AvailablePlanListResponse;

  export import AvailableRatePlans = API.AvailableRatePlans;
  export import BillSubsRatePlan = API.BillSubsRatePlan;
  export import AvailableRatePlanGetResponse = API.AvailableRatePlanGetResponse;

  export import CertificateAuthorities = API.CertificateAuthorities;

  export import ClientCertificates = API.ClientCertificates;
  export import TLSCertificatesAndHostnamesClientCertificate = API.TLSCertificatesAndHostnamesClientCertificate;
  export import TLSCertificatesAndHostnamesClientCertificatesV4PagePaginationArray = API.TLSCertificatesAndHostnamesClientCertificatesV4PagePaginationArray;
  export import ClientCertificateCreateParams = API.ClientCertificateCreateParams;
  export import ClientCertificateListParams = API.ClientCertificateListParams;
  export import ClientCertificateDeleteParams = API.ClientCertificateDeleteParams;
  export import ClientCertificateEditParams = API.ClientCertificateEditParams;
  export import ClientCertificateGetParams = API.ClientCertificateGetParams;

  export import CustomCertificates = API.CustomCertificates;
  export import TLSCertificatesAndHostnamesCustomCertificate = API.TLSCertificatesAndHostnamesCustomCertificate;
  export import CustomCertificateCreateResponse = API.CustomCertificateCreateResponse;
  export import CustomCertificateDeleteResponse = API.CustomCertificateDeleteResponse;
  export import CustomCertificateEditResponse = API.CustomCertificateEditResponse;
  export import CustomCertificateGetResponse = API.CustomCertificateGetResponse;
  export import TLSCertificatesAndHostnamesCustomCertificatesV4PagePaginationArray = API.TLSCertificatesAndHostnamesCustomCertificatesV4PagePaginationArray;
  export import CustomCertificateCreateParams = API.CustomCertificateCreateParams;
  export import CustomCertificateListParams = API.CustomCertificateListParams;
  export import CustomCertificateDeleteParams = API.CustomCertificateDeleteParams;
  export import CustomCertificateEditParams = API.CustomCertificateEditParams;
  export import CustomCertificateGetParams = API.CustomCertificateGetParams;

  export import CustomHostnames = API.CustomHostnames;
  export import TLSCertificatesAndHostnamesCustomHostname = API.TLSCertificatesAndHostnamesCustomHostname;
  export import CustomHostnameCreateResponse = API.CustomHostnameCreateResponse;
  export import CustomHostnameListResponse = API.CustomHostnameListResponse;
  export import CustomHostnameDeleteResponse = API.CustomHostnameDeleteResponse;
  export import CustomHostnameEditResponse = API.CustomHostnameEditResponse;
  export import CustomHostnameGetResponse = API.CustomHostnameGetResponse;
  export import CustomHostnameListResponsesV4PagePaginationArray = API.CustomHostnameListResponsesV4PagePaginationArray;
  export import CustomHostnameCreateParams = API.CustomHostnameCreateParams;
  export import CustomHostnameListParams = API.CustomHostnameListParams;
  export import CustomHostnameDeleteParams = API.CustomHostnameDeleteParams;
  export import CustomHostnameEditParams = API.CustomHostnameEditParams;
  export import CustomHostnameGetParams = API.CustomHostnameGetParams;

  export import CustomNameservers = API.CustomNameservers;
  export import DNSCustomNameserversCustomNS = API.DNSCustomNameserversCustomNS;
  export import CustomNameserverDeleteResponse = API.CustomNameserverDeleteResponse;
  export import CustomNameserverAvailabiltyResponse = API.CustomNameserverAvailabiltyResponse;
  export import CustomNameserverGetResponse = API.CustomNameserverGetResponse;
  export import CustomNameserverVerifyResponse = API.CustomNameserverVerifyResponse;
  export import CustomNameserverCreateParams = API.CustomNameserverCreateParams;
  export import CustomNameserverDeleteParams = API.CustomNameserverDeleteParams;
  export import CustomNameserverAvailabiltyParams = API.CustomNameserverAvailabiltyParams;
  export import CustomNameserverGetParams = API.CustomNameserverGetParams;
  export import CustomNameserverVerifyParams = API.CustomNameserverVerifyParams;

  export import DNS = API.DNS;

  export import DNSSEC = API.DNSSEC;
  export import DNSSECDNSSEC = API.DNSSECDNSSEC;
  export import DNSSECDeleteResponse = API.DNSSECDeleteResponse;
  export import DNSSECDeleteParams = API.DNSSECDeleteParams;
  export import DNSSECEditParams = API.DNSSECEditParams;
  export import DNSSECGetParams = API.DNSSECGetParams;

  export import EmailRouting = API.EmailRouting;

  export import Filters = API.Filters;
  export import LegacyJhsFilter = API.LegacyJhsFilter;
  export import FilterCreateResponse = API.FilterCreateResponse;
  export import LegacyJhsFiltersV4PagePaginationArray = API.LegacyJhsFiltersV4PagePaginationArray;
  export import FilterCreateParams = API.FilterCreateParams;
  export import FilterUpdateParams = API.FilterUpdateParams;
  export import FilterListParams = API.FilterListParams;

  export import Firewall = API.Firewall;

  export import Healthchecks = API.Healthchecks;
  export import HealthchecksHealthchecks = API.HealthchecksHealthchecks;
  export import HealthcheckListResponse = API.HealthcheckListResponse;
  export import HealthcheckDeleteResponse = API.HealthcheckDeleteResponse;
  export import HealthcheckCreateParams = API.HealthcheckCreateParams;
  export import HealthcheckUpdateParams = API.HealthcheckUpdateParams;
  export import HealthcheckEditParams = API.HealthcheckEditParams;

  export import KeylessCertificates = API.KeylessCertificates;
  export import TLSCertificatesAndHostnamesBase = API.TLSCertificatesAndHostnamesBase;
  export import TLSCertificatesAndHostnamesKeylessCertificate = API.TLSCertificatesAndHostnamesKeylessCertificate;
  export import KeylessCertificateListResponse = API.KeylessCertificateListResponse;
  export import KeylessCertificateDeleteResponse = API.KeylessCertificateDeleteResponse;
  export import KeylessCertificateCreateParams = API.KeylessCertificateCreateParams;
  export import KeylessCertificateListParams = API.KeylessCertificateListParams;
  export import KeylessCertificateDeleteParams = API.KeylessCertificateDeleteParams;
  export import KeylessCertificateEditParams = API.KeylessCertificateEditParams;
  export import KeylessCertificateGetParams = API.KeylessCertificateGetParams;

  export import Logpush = API.Logpush;

  export import Logs = API.Logs;

  export import OriginTLSClientAuth = API.OriginTLSClientAuth;
  export import TLSCertificatesAndHostnamesZoneAuthenticatedOriginPull = API.TLSCertificatesAndHostnamesZoneAuthenticatedOriginPull;
  export import OriginTLSClientAuthCreateResponse = API.OriginTLSClientAuthCreateResponse;
  export import OriginTLSClientAuthListResponse = API.OriginTLSClientAuthListResponse;
  export import OriginTLSClientAuthDeleteResponse = API.OriginTLSClientAuthDeleteResponse;
  export import OriginTLSClientAuthGetResponse = API.OriginTLSClientAuthGetResponse;
  export import OriginTLSClientAuthCreateParams = API.OriginTLSClientAuthCreateParams;
  export import OriginTLSClientAuthListParams = API.OriginTLSClientAuthListParams;
  export import OriginTLSClientAuthDeleteParams = API.OriginTLSClientAuthDeleteParams;
  export import OriginTLSClientAuthGetParams = API.OriginTLSClientAuthGetParams;

  export import Pagerules = API.Pagerules;
  export import ZonesPageRule = API.ZonesPageRule;
  export import PageruleCreateResponse = API.PageruleCreateResponse;
  export import PageruleUpdateResponse = API.PageruleUpdateResponse;
  export import PageruleListResponse = API.PageruleListResponse;
  export import PageruleDeleteResponse = API.PageruleDeleteResponse;
  export import PageruleEditResponse = API.PageruleEditResponse;
  export import PageruleGetResponse = API.PageruleGetResponse;
  export import PageruleCreateParams = API.PageruleCreateParams;
  export import PageruleUpdateParams = API.PageruleUpdateParams;
  export import PageruleListParams = API.PageruleListParams;
  export import PageruleDeleteParams = API.PageruleDeleteParams;
  export import PageruleEditParams = API.PageruleEditParams;
  export import PageruleGetParams = API.PageruleGetParams;

  export import RateLimits = API.RateLimits;
  export import LegacyJhsRateLimits = API.LegacyJhsRateLimits;
  export import RateLimitCreateResponse = API.RateLimitCreateResponse;
  export import RateLimitListResponse = API.RateLimitListResponse;
  export import RateLimitDeleteResponse = API.RateLimitDeleteResponse;
  export import RateLimitEditResponse = API.RateLimitEditResponse;
  export import RateLimitGetResponse = API.RateLimitGetResponse;
  export import RateLimitListResponsesV4PagePaginationArray = API.RateLimitListResponsesV4PagePaginationArray;
  export import RateLimitCreateParams = API.RateLimitCreateParams;
  export import RateLimitListParams = API.RateLimitListParams;
  export import RateLimitEditParams = API.RateLimitEditParams;

  export import SecondaryDNS = API.SecondaryDNS;

  export import WaitingRooms = API.WaitingRooms;
  export import WaitingroomWaitingroom = API.WaitingroomWaitingroom;
  export import WaitingRoomListResponse = API.WaitingRoomListResponse;
  export import WaitingRoomDeleteResponse = API.WaitingRoomDeleteResponse;
  export import WaitingRoomPreviewResponse = API.WaitingRoomPreviewResponse;
  export import WaitingRoomCreateParams = API.WaitingRoomCreateParams;
  export import WaitingRoomUpdateParams = API.WaitingRoomUpdateParams;
  export import WaitingRoomEditParams = API.WaitingRoomEditParams;
  export import WaitingRoomPreviewParams = API.WaitingRoomPreviewParams;

  export import Web3 = API.Web3;

  export import Workers = API.Workers;

  export import KV = API.KV;

  export import DurableObjects = API.DurableObjects;

  export import Queues = API.Queues;
  export import WorkersQueue = API.WorkersQueue;
  export import WorkersQueueCreated = API.WorkersQueueCreated;
  export import WorkersQueueUpdated = API.WorkersQueueUpdated;
  export import QueueListResponse = API.QueueListResponse;
  export import QueueDeleteResponse = API.QueueDeleteResponse;
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
  export import PageShieldGetZoneSettings = API.PageShieldGetZoneSettings;
  export import PageShieldUpdateZoneSettings = API.PageShieldUpdateZoneSettings;
  export import PageShieldUpdateParams = API.PageShieldUpdateParams;
  export import PageShieldListParams = API.PageShieldListParams;

  export import Rulesets = API.Rulesets;
  export import RulesetsRulesetResponse = API.RulesetsRulesetResponse;
  export import RulesetsRulesetsResponse = API.RulesetsRulesetsResponse;
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

  export import Billing = API.Billing;

  export import BrandProtection = API.BrandProtection;
  export import IntelPhishingURLInfo = API.IntelPhishingURLInfo;
  export import IntelPhishingURLSubmit = API.IntelPhishingURLSubmit;
  export import BrandProtectionSubmitParams = API.BrandProtectionSubmitParams;
  export import BrandProtectionURLInfoParams = API.BrandProtectionURLInfoParams;

  export import Diagnostics = API.Diagnostics;

  export import Images = API.Images;

  export import Intel = API.Intel;

  export import MagicTransit = API.MagicTransit;

  export import MagicNetworkMonitoring = API.MagicNetworkMonitoring;

  export import MTLSCertificates = API.MTLSCertificates;
  export import TLSCertificatesAndHostnamesCertificateObjectPost = API.TLSCertificatesAndHostnamesCertificateObjectPost;
  export import TLSCertificatesAndHostnamesComponentsSchemasCertificateObject = API.TLSCertificatesAndHostnamesComponentsSchemasCertificateObject;
  export import MTLSCertificateListResponse = API.MTLSCertificateListResponse;
  export import MTLSCertificateCreateParams = API.MTLSCertificateCreateParams;
  export import MTLSCertificateListParams = API.MTLSCertificateListParams;
  export import MTLSCertificateDeleteParams = API.MTLSCertificateDeleteParams;
  export import MTLSCertificateGetParams = API.MTLSCertificateGetParams;

  export import Pages = API.Pages;

  export import PCAPs = API.PCAPs;
  export import PCAPCreateResponse = API.PCAPCreateResponse;
  export import PCAPListResponse = API.PCAPListResponse;
  export import PCAPGetResponse = API.PCAPGetResponse;
  export import PCAPCreateParams = API.PCAPCreateParams;
  export import PCAPListParams = API.PCAPListParams;
  export import PCAPGetParams = API.PCAPGetParams;

  export import Registrar = API.Registrar;

  export import RequestTracers = API.RequestTracers;

  export import Rules = API.Rules;

  export import Storage = API.Storage;

  export import Stream = API.Stream;
  export import StreamVideos = API.StreamVideos;
  export import StreamListResponse = API.StreamListResponse;
  export import StreamCreateParams = API.StreamCreateParams;
  export import StreamListParams = API.StreamListParams;
  export import StreamDeleteParams = API.StreamDeleteParams;
  export import StreamGetParams = API.StreamGetParams;

  export import Alerting = API.Alerting;

  export import D1 = API.D1;

  export import R2 = API.R2;

  export import WARPConnector = API.WARPConnector;
  export import WARPConnectorCreateResponse = API.WARPConnectorCreateResponse;
  export import WARPConnectorListResponse = API.WARPConnectorListResponse;
  export import WARPConnectorDeleteResponse = API.WARPConnectorDeleteResponse;
  export import WARPConnectorEditResponse = API.WARPConnectorEditResponse;
  export import WARPConnectorGetResponse = API.WARPConnectorGetResponse;
  export import WARPConnectorTokenResponse = API.WARPConnectorTokenResponse;
  export import WARPConnectorListResponsesV4PagePaginationArray = API.WARPConnectorListResponsesV4PagePaginationArray;
  export import WARPConnectorCreateParams = API.WARPConnectorCreateParams;
  export import WARPConnectorListParams = API.WARPConnectorListParams;
  export import WARPConnectorDeleteParams = API.WARPConnectorDeleteParams;
  export import WARPConnectorEditParams = API.WARPConnectorEditParams;
  export import WARPConnectorGetParams = API.WARPConnectorGetParams;
  export import WARPConnectorTokenParams = API.WARPConnectorTokenParams;

  export import WorkersForPlatforms = API.WorkersForPlatforms;

  export import ZeroTrust = API.ZeroTrust;

  export import Challenges = API.Challenges;

  export import Hyperdrive = API.Hyperdrive;

  export import RUM = API.RUM;

  export import Vectorize = API.Vectorize;

  export import URLScanner = API.URLScanner;
  export import URLScannerScanResponse = API.URLScannerScanResponse;
  export import URLScannerScanParams = API.URLScannerScanParams;

  export import Radar = API.Radar;

  export import BotManagement = API.BotManagement;
  export import BotManagementUpdateResponse = API.BotManagementUpdateResponse;
  export import BotManagementGetResponse = API.BotManagementGetResponse;
  export import BotManagementUpdateParams = API.BotManagementUpdateParams;
  export import BotManagementGetParams = API.BotManagementGetParams;

  export import OriginPostQuantumEncryption = API.OriginPostQuantumEncryption;
  export import OriginPostQuantumEncryptionUpdateResponse = API.OriginPostQuantumEncryptionUpdateResponse;
  export import OriginPostQuantumEncryptionGetResponse = API.OriginPostQuantumEncryptionGetResponse;
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
  export import SnippetListResponse = API.SnippetListResponse;
  export import SnippetDeleteResponse = API.SnippetDeleteResponse;
  export import SnippetUpdateParams = API.SnippetUpdateParams;

  export import Calls = API.Calls;
  export import CallsApp = API.CallsApp;
  export import CallsAppWithSecret = API.CallsAppWithSecret;
  export import CallListResponse = API.CallListResponse;
  export import CallCreateParams = API.CallCreateParams;
  export import CallUpdateParams = API.CallUpdateParams;
  export import CallListParams = API.CallListParams;
  export import CallDeleteParams = API.CallDeleteParams;
  export import CallGetParams = API.CallGetParams;

  export import CloudforceOne = API.CloudforceOne;
}

export default Cloudflare;
