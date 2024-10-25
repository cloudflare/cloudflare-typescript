// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ActivationCheckAPI from './activation-check';
import * as CustomNameserversAPI from './custom-nameservers';
import * as HoldsAPI from './holds';
import * as PlansAPI from './plans';
import * as RatePlansAPI from './rate-plans';
import * as SettingsAPI from './settings';
import * as SubscriptionsAPI from './subscriptions';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class Zones extends APIResource {
  activationCheck: ActivationCheckAPI.ActivationCheck = new ActivationCheckAPI.ActivationCheck(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  customNameservers: CustomNameserversAPI.CustomNameservers = new CustomNameserversAPI.CustomNameservers(
    this._client,
  );
  holds: HoldsAPI.Holds = new HoldsAPI.Holds(this._client);
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
  plans: PlansAPI.Plans = new PlansAPI.Plans(this._client);
  ratePlans: RatePlansAPI.RatePlans = new RatePlansAPI.RatePlans(this._client);

  /**
   * Create Zone
   */
  create(body: ZoneCreateParams, options?: Core.RequestOptions): Core.APIPromise<Zone> {
    return (
      this._client.post('/zones', { body, ...options }) as Core.APIPromise<{ result: Zone }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists, searches, sorts, and filters your zones. Listing zones across more than
   * 500 accounts is currently not allowed.
   */
  list(
    query?: ZoneListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ZonesV4PagePaginationArray, Zone>;
  list(options?: Core.RequestOptions): Core.PagePromise<ZonesV4PagePaginationArray, Zone>;
  list(
    query: ZoneListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ZonesV4PagePaginationArray, Zone> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/zones', ZonesV4PagePaginationArray, { query, ...options });
  }

  /**
   * Deletes an existing zone.
   */
  delete(
    params: ZoneDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZoneDeleteResponse | null> {
    const { zone_id } = params;
    return (
      this._client.delete(`/zones/${zone_id}`, options) as Core.APIPromise<{
        result: ZoneDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Edits a zone. Only one zone property can be changed at a time.
   */
  edit(params: ZoneEditParams, options?: Core.RequestOptions): Core.APIPromise<Zone> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}`, { body, ...options }) as Core.APIPromise<{ result: Zone }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Zone Details
   */
  get(params: ZoneGetParams, options?: Core.RequestOptions): Core.APIPromise<Zone> {
    const { zone_id } = params;
    return (this._client.get(`/zones/${zone_id}`, options) as Core.APIPromise<{ result: Zone }>)._thenUnwrap(
      (obj) => obj.result,
    );
  }
}

export class ZonesV4PagePaginationArray extends V4PagePaginationArray<Zone> {}

/**
 * A full zone implies that DNS is hosted with Cloudflare. A partial zone is
 * typically a partner-hosted zone or a CNAME setup.
 */
export type Type = 'full' | 'partial' | 'secondary';

/**
 * A full zone implies that DNS is hosted with Cloudflare. A partial zone is
 * typically a partner-hosted zone or a CNAME setup.
 */
export type TypeParam = 'full' | 'partial' | 'secondary';

export interface Zone {
  /**
   * Identifier
   */
  id: string;

  /**
   * The account the zone belongs to
   */
  account: Zone.Account;

  /**
   * The last time proof of ownership was detected and the zone was made active
   */
  activated_on: string | null;

  /**
   * When the zone was created
   */
  created_on: string;

  /**
   * The interval (in seconds) from when development mode expires (positive integer)
   * or last expired (negative integer) for the domain. If development mode has never
   * been enabled, this value is 0.
   */
  development_mode: number;

  /**
   * Metadata about the zone
   */
  meta: Zone.Meta;

  /**
   * When the zone was last modified
   */
  modified_on: string;

  /**
   * The domain name
   */
  name: string;

  /**
   * The name servers Cloudflare assigns to a zone
   */
  name_servers: Array<string>;

  /**
   * DNS host at the time of switching to Cloudflare
   */
  original_dnshost: string | null;

  /**
   * Original name servers before moving to Cloudflare
   */
  original_name_servers: Array<string> | null;

  /**
   * Registrar for the domain at the time of switching to Cloudflare
   */
  original_registrar: string | null;

  /**
   * The owner of the zone
   */
  owner: Zone.Owner;

  /**
   * Indicates whether the zone is only using Cloudflare DNS services. A true value
   * means the zone will not receive security or performance benefits.
   */
  paused?: boolean;

  /**
   * The zone status on Cloudflare.
   */
  status?: 'initializing' | 'pending' | 'active' | 'moved';

  /**
   * A full zone implies that DNS is hosted with Cloudflare. A partial zone is
   * typically a partner-hosted zone or a CNAME setup.
   */
  type?: Type;

  /**
   * An array of domains used for custom name servers. This is only available for
   * Business and Enterprise plans.
   */
  vanity_name_servers?: Array<string>;
}

export namespace Zone {
  /**
   * The account the zone belongs to
   */
  export interface Account {
    /**
     * Identifier
     */
    id?: string;

    /**
     * The name of the account
     */
    name?: string;
  }

  /**
   * Metadata about the zone
   */
  export interface Meta {
    /**
     * The zone is only configured for CDN
     */
    cdn_only?: boolean;

    /**
     * Number of Custom Certificates the zone can have
     */
    custom_certificate_quota?: number;

    /**
     * The zone is only configured for DNS
     */
    dns_only?: boolean;

    /**
     * The zone is setup with Foundation DNS
     */
    foundation_dns?: boolean;

    /**
     * Number of Page Rules a zone can have
     */
    page_rule_quota?: number;

    /**
     * The zone has been flagged for phishing
     */
    phishing_detected?: boolean;

    step?: number;
  }

  /**
   * The owner of the zone
   */
  export interface Owner {
    /**
     * Identifier
     */
    id?: string;

    /**
     * Name of the owner
     */
    name?: string;

    /**
     * The type of owner
     */
    type?: string;
  }
}

export interface ZoneDeleteResponse {
  /**
   * Identifier
   */
  id: string;
}

export interface ZoneCreateParams {
  account: ZoneCreateParams.Account;

  /**
   * The domain name
   */
  name: string;

  /**
   * A full zone implies that DNS is hosted with Cloudflare. A partial zone is
   * typically a partner-hosted zone or a CNAME setup.
   */
  type?: TypeParam;
}

export namespace ZoneCreateParams {
  export interface Account {
    /**
     * Identifier
     */
    id?: string;
  }
}

export interface ZoneListParams extends V4PagePaginationArrayParams {
  account?: ZoneListParams.Account;

  /**
   * Direction to order zones.
   */
  direction?: 'asc' | 'desc';

  /**
   * Whether to match all search requirements or at least one (any).
   */
  match?: 'any' | 'all';

  /**
   * A domain name. Optional filter operators can be provided to extend refine the
   * search:
   *
   * - `equal` (default)
   * - `not_equal`
   * - `starts_with`
   * - `ends_with`
   * - `contains`
   * - `starts_with_case_sensitive`
   * - `ends_with_case_sensitive`
   * - `contains_case_sensitive`
   */
  name?: string;

  /**
   * Field to order zones by.
   */
  order?: 'name' | 'status' | 'account.id' | 'account.name';

  /**
   * A zone status
   */
  status?: 'initializing' | 'pending' | 'active' | 'moved';
}

export namespace ZoneListParams {
  export interface Account {
    /**
     * An account ID
     */
    id?: string;

    /**
     * An account Name. Optional filter operators can be provided to extend refine the
     * search:
     *
     * - `equal` (default)
     * - `not_equal`
     * - `starts_with`
     * - `ends_with`
     * - `contains`
     * - `starts_with_case_sensitive`
     * - `ends_with_case_sensitive`
     * - `contains_case_sensitive`
     */
    name?: string;
  }
}

export interface ZoneDeleteParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface ZoneEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: A full zone implies that DNS is hosted with Cloudflare. A partial
   * zone is typically a partner-hosted zone or a CNAME setup. This parameter is only
   * available to Enterprise customers or if it has been explicitly enabled on a
   * zone.
   */
  type?: 'full' | 'partial' | 'secondary';

  /**
   * Body param: An array of domains used for custom name servers. This is only
   * available for Business and Enterprise plans.
   */
  vanity_name_servers?: Array<string>;
}

export interface ZoneGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Zones {
  export import ActivationCheck = ActivationCheckAPI.ActivationCheck;
  export type ActivationCheckTriggerResponse = ActivationCheckAPI.ActivationCheckTriggerResponse;
  export type ActivationCheckTriggerParams = ActivationCheckAPI.ActivationCheckTriggerParams;
  export import Settings = SettingsAPI.Settings;
  export type AdvancedDDoS = SettingsAPI.AdvancedDDoS;
  export type AlwaysOnline = SettingsAPI.AlwaysOnline;
  export type AlwaysUseHTTPS = SettingsAPI.AlwaysUseHTTPS;
  export type AutomaticHTTPSRewrites = SettingsAPI.AutomaticHTTPSRewrites;
  export type AutomaticPlatformOptimization = SettingsAPI.AutomaticPlatformOptimization;
  export type Brotli = SettingsAPI.Brotli;
  export type BrowserCacheTTL = SettingsAPI.BrowserCacheTTL;
  export type BrowserCheck = SettingsAPI.BrowserCheck;
  export type CacheLevel = SettingsAPI.CacheLevel;
  export type ChallengeTTL = SettingsAPI.ChallengeTTL;
  export type Ciphers = SettingsAPI.Ciphers;
  export type DevelopmentMode = SettingsAPI.DevelopmentMode;
  export type EarlyHints = SettingsAPI.EarlyHints;
  export type EmailObfuscation = SettingsAPI.EmailObfuscation;
  export type FontSettings = SettingsAPI.FontSettings;
  export type H2Prioritization = SettingsAPI.H2Prioritization;
  export type HotlinkProtection = SettingsAPI.HotlinkProtection;
  export type HTTP2 = SettingsAPI.HTTP2;
  export type HTTP3 = SettingsAPI.HTTP3;
  export type ImageResizing = SettingsAPI.ImageResizing;
  export type IPGeolocation = SettingsAPI.IPGeolocation;
  export type IPV6 = SettingsAPI.IPV6;
  export type MinTLSVersion = SettingsAPI.MinTLSVersion;
  export type Mirage = SettingsAPI.Mirage;
  export type NEL = SettingsAPI.NEL;
  export type OpportunisticEncryption = SettingsAPI.OpportunisticEncryption;
  export type OpportunisticOnion = SettingsAPI.OpportunisticOnion;
  export type OrangeToOrange = SettingsAPI.OrangeToOrange;
  export type OriginErrorPagePassThru = SettingsAPI.OriginErrorPagePassThru;
  export type OriginMaxHTTPVersion = SettingsAPI.OriginMaxHTTPVersion;
  export type Polish = SettingsAPI.Polish;
  export type PrefetchPreload = SettingsAPI.PrefetchPreload;
  export type ProxyReadTimeout = SettingsAPI.ProxyReadTimeout;
  export type PseudoIPV4 = SettingsAPI.PseudoIPV4;
  export type ResponseBuffering = SettingsAPI.ResponseBuffering;
  export type RocketLoader = SettingsAPI.RocketLoader;
  export type SecurityHeaders = SettingsAPI.SecurityHeaders;
  export type SecurityLevel = SettingsAPI.SecurityLevel;
  export type ServerSideExcludes = SettingsAPI.ServerSideExcludes;
  export type SortQueryStringForCache = SettingsAPI.SortQueryStringForCache;
  export type SSL = SettingsAPI.SSL;
  export type SSLRecommender = SettingsAPI.SSLRecommender;
  export type TLS1_3 = SettingsAPI.TLS1_3;
  export type TLSClientAuth = SettingsAPI.TLSClientAuth;
  export type TrueClientIPHeader = SettingsAPI.TrueClientIPHeader;
  export type WAF = SettingsAPI.WAF;
  export type WebP = SettingsAPI.WebP;
  export type Websocket = SettingsAPI.Websocket;
  export type ZeroRTT = SettingsAPI.ZeroRTT;
  export type SettingEditResponse = SettingsAPI.SettingEditResponse;
  export type SettingGetResponse = SettingsAPI.SettingGetResponse;
  export type SettingEditParams = SettingsAPI.SettingEditParams;
  export type SettingGetParams = SettingsAPI.SettingGetParams;
  export import CustomNameservers = CustomNameserversAPI.CustomNameservers;
  export type CustomNameserverUpdateResponse = CustomNameserversAPI.CustomNameserverUpdateResponse;
  export type CustomNameserverGetResponse = CustomNameserversAPI.CustomNameserverGetResponse;
  export type CustomNameserverUpdateParams = CustomNameserversAPI.CustomNameserverUpdateParams;
  export type CustomNameserverGetParams = CustomNameserversAPI.CustomNameserverGetParams;
  export import Holds = HoldsAPI.Holds;
  export type ZoneHold = HoldsAPI.ZoneHold;
  export type HoldCreateParams = HoldsAPI.HoldCreateParams;
  export type HoldDeleteParams = HoldsAPI.HoldDeleteParams;
  export type HoldGetParams = HoldsAPI.HoldGetParams;
  export import Subscriptions = SubscriptionsAPI.Subscriptions;
  export type SubscriptionCreateResponse = SubscriptionsAPI.SubscriptionCreateResponse;
  export type SubscriptionUpdateResponse = SubscriptionsAPI.SubscriptionUpdateResponse;
  export type SubscriptionGetResponse = SubscriptionsAPI.SubscriptionGetResponse;
  export type SubscriptionCreateParams = SubscriptionsAPI.SubscriptionCreateParams;
  export type SubscriptionUpdateParams = SubscriptionsAPI.SubscriptionUpdateParams;
  export import Plans = PlansAPI.Plans;
  export type AvailableRatePlan = PlansAPI.AvailableRatePlan;
  export import AvailableRatePlansSinglePage = PlansAPI.AvailableRatePlansSinglePage;
  export type PlanListParams = PlansAPI.PlanListParams;
  export type PlanGetParams = PlansAPI.PlanGetParams;
  export import RatePlans = RatePlansAPI.RatePlans;
  export type RatePlanGetResponse = RatePlansAPI.RatePlanGetResponse;
  export type RatePlanGetParams = RatePlansAPI.RatePlanGetParams;
}
