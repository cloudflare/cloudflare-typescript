// File generated from our OpenAPI spec by Stainless.

import * as Core from './core';
import * as Errors from './error';
import { type Agent } from './_shims/index';
import * as Uploads from './uploads';
import * as qs from 'qs';
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

  userServiceKey: string;

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
   * @param {string} opts.userServiceKey
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
    userServiceKey,
    ...opts
  }: ClientOptions) {
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
        "Missing required client option userServiceKey; you need to instantiate the Cloudflare client with an userServiceKey option, like new Cloudflare({ userServiceKey: 'My User Service Key' }).",
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
  ips: API.IPs = new API.IPs(this);
  zones: API.Zones = new API.Zones(this);
  ai: API.AI = new API.AI(this);
  loadBalancers: API.LoadBalancers = new API.LoadBalancers(this);
  access: API.Access = new API.Access(this);
  dnsRecords: API.DNSRecords = new API.DNSRecords(this);
  emails: API.Emails = new API.Emails(this);
  accountMembers: API.AccountMembers = new API.AccountMembers(this);
  tunnels: API.Tunnels = new API.Tunnels(this);
  d1: API.D1 = new API.D1(this);
  dex: API.Dex = new API.Dex(this);
  r2: API.R2 = new API.R2(this);
  stream: API.Stream = new API.Stream(this);
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
  vectorizeIndexes: API.VectorizeIndexes = new API.VectorizeIndexes(this);
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
  logpush: API.Logpush = new API.Logpush(this);
  hold: API.Hold = new API.Hold(this);
  pageShield: API.PageShield = new API.PageShield(this);
  fontSettings: API.FontSettings = new API.FontSettings(this);
  snippets: API.Snippets = new API.Snippets(this);
  dlp: API.Dlp = new API.Dlp(this);
  gateway: API.Gateway = new API.Gateway(this);
  accessTags: API.AccessTags = new API.AccessTags(this);

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

  export import Accounts = API.Accounts;
  export import AccountListResponse = API.AccountListResponse;
  export import AccountListParams = API.AccountListParams;

  export import IPs = API.IPs;
  export import IPListResponse = API.IPListResponse;
  export import IPListParams = API.IPListParams;

  export import Zones = API.Zones;
  export import ZoneCreateResponse = API.ZoneCreateResponse;
  export import ZoneListResponse = API.ZoneListResponse;
  export import ZoneCreateParams = API.ZoneCreateParams;
  export import ZoneListParams = API.ZoneListParams;

  export import AI = API.AI;
  export import AIRunModelResponse = API.AIRunModelResponse;
  export import AIRunModelParams = API.AIRunModelParams;

  export import LoadBalancers = API.LoadBalancers;
  export import LoadBalancerCreateResponse = API.LoadBalancerCreateResponse;
  export import LoadBalancerRetrieveResponse = API.LoadBalancerRetrieveResponse;
  export import LoadBalancerUpdateResponse = API.LoadBalancerUpdateResponse;
  export import LoadBalancerListResponse = API.LoadBalancerListResponse;
  export import LoadBalancerDeleteResponse = API.LoadBalancerDeleteResponse;
  export import LoadBalancerCreateParams = API.LoadBalancerCreateParams;
  export import LoadBalancerUpdateParams = API.LoadBalancerUpdateParams;

  export import Access = API.Access;

  export import DNSRecords = API.DNSRecords;
  export import DNSRecordRetrieveResponse = API.DNSRecordRetrieveResponse;
  export import DNSRecordUpdateResponse = API.DNSRecordUpdateResponse;
  export import DNSRecordDeleteResponse = API.DNSRecordDeleteResponse;
  export import DNSRecordDNSRecordsForAZoneCreateDNSRecordResponse = API.DNSRecordDNSRecordsForAZoneCreateDNSRecordResponse;
  export import DNSRecordDNSRecordsForAZoneListDNSRecordsResponse = API.DNSRecordDNSRecordsForAZoneListDNSRecordsResponse;
  export import DNSRecordUpdateParams = API.DNSRecordUpdateParams;
  export import DNSRecordDNSRecordsForAZoneCreateDNSRecordParams = API.DNSRecordDNSRecordsForAZoneCreateDNSRecordParams;
  export import DNSRecordDNSRecordsForAZoneListDNSRecordsParams = API.DNSRecordDNSRecordsForAZoneListDNSRecordsParams;

  export import Emails = API.Emails;

  export import AccountMembers = API.AccountMembers;

  export import Tunnels = API.Tunnels;
  export import TunnelRetrieveResponse = API.TunnelRetrieveResponse;
  export import TunnelDeleteResponse = API.TunnelDeleteResponse;
  export import TunnelArgoTunnelCreateAnArgoTunnelResponse = API.TunnelArgoTunnelCreateAnArgoTunnelResponse;
  export import TunnelArgoTunnelListArgoTunnelsResponse = API.TunnelArgoTunnelListArgoTunnelsResponse;
  export import TunnelDeleteParams = API.TunnelDeleteParams;
  export import TunnelArgoTunnelCreateAnArgoTunnelParams = API.TunnelArgoTunnelCreateAnArgoTunnelParams;
  export import TunnelArgoTunnelListArgoTunnelsParams = API.TunnelArgoTunnelListArgoTunnelsParams;

  export import D1 = API.D1;

  export import Dex = API.Dex;

  export import R2 = API.R2;

  export import Stream = API.Stream;

  export import Teamnet = API.Teamnet;

  export import WarpConnector = API.WarpConnector;
  export import WarpConnectorCreateResponse = API.WarpConnectorCreateResponse;
  export import WarpConnectorRetrieveResponse = API.WarpConnectorRetrieveResponse;
  export import WarpConnectorUpdateResponse = API.WarpConnectorUpdateResponse;
  export import WarpConnectorListResponse = API.WarpConnectorListResponse;
  export import WarpConnectorDeleteResponse = API.WarpConnectorDeleteResponse;
  export import WarpConnectorCreateParams = API.WarpConnectorCreateParams;
  export import WarpConnectorUpdateParams = API.WarpConnectorUpdateParams;
  export import WarpConnectorListParams = API.WarpConnectorListParams;
  export import WarpConnectorDeleteParams = API.WarpConnectorDeleteParams;

  export import Dispatchers = API.Dispatchers;

  export import WorkersForPlatforms = API.WorkersForPlatforms;

  export import WorkerDomains = API.WorkerDomains;
  export import WorkerDomainRetrieveResponse = API.WorkerDomainRetrieveResponse;

  export import WorkerScripts = API.WorkerScripts;

  export import Zerotrust = API.Zerotrust;

  export import Addressing = API.Addressing;

  export import Challenges = API.Challenges;

  export import Hyperdrive = API.Hyperdrive;

  export import Intel = API.Intel;

  export import Rum = API.Rum;

  export import Vectorize = API.Vectorize;

  export import VectorizeIndexes = API.VectorizeIndexes;
  export import VectorizeIndexCreateResponse = API.VectorizeIndexCreateResponse;
  export import VectorizeIndexRetrieveResponse = API.VectorizeIndexRetrieveResponse;
  export import VectorizeIndexUpdateResponse = API.VectorizeIndexUpdateResponse;
  export import VectorizeIndexDeleteResponse = API.VectorizeIndexDeleteResponse;
  export import VectorizeIndexDeleteByIDsResponse = API.VectorizeIndexDeleteByIDsResponse;
  export import VectorizeIndexGetByIDsResponse = API.VectorizeIndexGetByIDsResponse;
  export import VectorizeIndexInsertResponse = API.VectorizeIndexInsertResponse;
  export import VectorizeIndexQueryResponse = API.VectorizeIndexQueryResponse;
  export import VectorizeIndexUpsertResponse = API.VectorizeIndexUpsertResponse;
  export import VectorizeIndexCreateParams = API.VectorizeIndexCreateParams;
  export import VectorizeIndexUpdateParams = API.VectorizeIndexUpdateParams;
  export import VectorizeIndexDeleteByIDsParams = API.VectorizeIndexDeleteByIDsParams;
  export import VectorizeIndexGetByIDsParams = API.VectorizeIndexGetByIDsParams;
  export import VectorizeIndexInsertParams = API.VectorizeIndexInsertParams;
  export import VectorizeIndexQueryParams = API.VectorizeIndexQueryParams;
  export import VectorizeIndexUpsertParams = API.VectorizeIndexUpsertParams;

  export import URLScanner = API.URLScanner;
  export import URLScannerScanResponse = API.URLScannerScanResponse;
  export import URLScannerScanParams = API.URLScannerScanParams;

  export import Radar = API.Radar;

  export import BotManagements = API.BotManagements;
  export import BotManagementRetrieveResponse = API.BotManagementRetrieveResponse;
  export import BotManagementUpdateResponse = API.BotManagementUpdateResponse;
  export import BotManagementUpdateParams = API.BotManagementUpdateParams;

  export import CacheReserves = API.CacheReserves;
  export import CacheReserveCreateResponse = API.CacheReserveCreateResponse;
  export import CacheReserveClearResponse = API.CacheReserveClearResponse;

  export import OriginPostQuantumEncryptions = API.OriginPostQuantumEncryptions;
  export import OriginPostQuantumEncryptionRetrieveResponse = API.OriginPostQuantumEncryptionRetrieveResponse;
  export import OriginPostQuantumEncryptionUpdateResponse = API.OriginPostQuantumEncryptionUpdateResponse;
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
  export import SpeedAPIScheduleRetrieveResponse = API.SpeedAPIScheduleRetrieveResponse;
  export import SpeedAPITestsCreateResponse = API.SpeedAPITestsCreateResponse;
  export import SpeedAPITestsDeleteResponse = API.SpeedAPITestsDeleteResponse;
  export import SpeedAPITestsListResponse = API.SpeedAPITestsListResponse;
  export import SpeedAPITestsRetrieveResponse = API.SpeedAPITestsRetrieveResponse;
  export import SpeedAPITrendsListResponse = API.SpeedAPITrendsListResponse;
  export import SpeedAPIScheduleDeleteParams = API.SpeedAPIScheduleDeleteParams;
  export import SpeedAPIScheduleRetrieveParams = API.SpeedAPIScheduleRetrieveParams;
  export import SpeedAPITestsCreateParams = API.SpeedAPITestsCreateParams;
  export import SpeedAPITestsDeleteParams = API.SpeedAPITestsDeleteParams;
  export import SpeedAPITestsListParams = API.SpeedAPITestsListParams;
  export import SpeedAPITrendsListParams = API.SpeedAPITrendsListParams;

  export import DcvDelegation = API.DcvDelegation;

  export import Hostnames = API.Hostnames;

  export import Logpush = API.Logpush;

  export import Hold = API.Hold;
  export import HoldRetrieveResponse = API.HoldRetrieveResponse;
  export import HoldEnforceResponse = API.HoldEnforceResponse;
  export import HoldRemoveResponse = API.HoldRemoveResponse;
  export import HoldEnforceParams = API.HoldEnforceParams;
  export import HoldRemoveParams = API.HoldRemoveParams;

  export import PageShield = API.PageShield;

  export import FontSettings = API.FontSettings;

  export import Snippets = API.Snippets;
  export import SnippetRetrieveResponse = API.SnippetRetrieveResponse;
  export import SnippetUpdateResponse = API.SnippetUpdateResponse;
  export import SnippetListResponse = API.SnippetListResponse;
  export import SnippetDeleteResponse = API.SnippetDeleteResponse;
  export import SnippetUpdateParams = API.SnippetUpdateParams;

  export import Dlp = API.Dlp;

  export import Gateway = API.Gateway;

  export import AccessTags = API.AccessTags;
  export import AccessTagCreateResponse = API.AccessTagCreateResponse;
  export import AccessTagRetrieveResponse = API.AccessTagRetrieveResponse;
  export import AccessTagUpdateResponse = API.AccessTagUpdateResponse;
  export import AccessTagDeleteResponse = API.AccessTagDeleteResponse;
  export import AccessTagCreateParams = API.AccessTagCreateParams;
  export import AccessTagUpdateParams = API.AccessTagUpdateParams;
}

export default Cloudflare;
