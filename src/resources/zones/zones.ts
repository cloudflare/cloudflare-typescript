// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ActivationCheckAPI from './activation-check';
import {
  ActivationCheck,
  ActivationCheckTriggerParams,
  ActivationCheckTriggerResponse,
} from './activation-check';
import * as CustomNameserversAPI from './custom-nameservers';
import {
  CustomNameserverGetParams,
  CustomNameserverGetResponse,
  CustomNameserverUpdateParams,
  CustomNameserverUpdateResponse,
  CustomNameservers,
} from './custom-nameservers';
import * as HoldsAPI from './holds';
import { HoldCreateParams, HoldDeleteParams, HoldEditParams, HoldGetParams, Holds, ZoneHold } from './holds';
import * as PlansAPI from './plans';
import {
  AvailableRatePlan,
  AvailableRatePlansSinglePage,
  PlanGetParams,
  PlanListParams,
  Plans,
} from './plans';
import * as RatePlansAPI from './rate-plans';
import { RatePlanGetParams, RatePlanGetResponse, RatePlans } from './rate-plans';
import * as SettingsAPI from './settings';
import {
  AdvancedDDoS,
  Aegis,
  AlwaysOnline,
  AlwaysUseHTTPS,
  AutomaticHTTPSRewrites,
  AutomaticPlatformOptimization,
  Brotli,
  BrowserCacheTTL,
  BrowserCheck,
  CacheLevel,
  ChallengeTTL,
  Ciphers,
  DevelopmentMode,
  EarlyHints,
  EmailObfuscation,
  FontSettings,
  H2Prioritization,
  HTTP2,
  HTTP3,
  HotlinkProtection,
  IPGeolocation,
  IPV6,
  ImageResizing,
  MinTLSVersion,
  Mirage,
  NEL,
  OpportunisticEncryption,
  OpportunisticOnion,
  OrangeToOrange,
  OriginErrorPagePassThru,
  OriginMaxHTTPVersion,
  Polish,
  PrefetchPreload,
  ProxyReadTimeout,
  PseudoIPV4,
  ResponseBuffering,
  RocketLoader,
  SSL,
  SSLRecommender,
  SecurityHeaders,
  SecurityLevel,
  ServerSideExcludes,
  SettingEditParams,
  SettingEditResponse,
  SettingGetParams,
  SettingGetResponse,
  Settings,
  SortQueryStringForCache,
  TLS1_3,
  TLSClientAuth,
  TrueClientIPHeader,
  WAF,
  WebP,
  Websocket,
  ZeroRTT,
} from './settings';
import * as SubscriptionsAPI from './subscriptions';
import {
  SubscriptionCreateParams,
  SubscriptionCreateResponse,
  SubscriptionGetResponse,
  SubscriptionUpdateParams,
  SubscriptionUpdateResponse,
  Subscriptions,
} from './subscriptions';
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

Zones.ActivationCheck = ActivationCheck;
Zones.Settings = Settings;
Zones.CustomNameservers = CustomNameservers;
Zones.Holds = Holds;
Zones.Subscriptions = Subscriptions;
Zones.Plans = Plans;
Zones.AvailableRatePlansSinglePage = AvailableRatePlansSinglePage;
Zones.RatePlans = RatePlans;

export declare namespace Zones {
  export {
    ActivationCheck as ActivationCheck,
    type ActivationCheckTriggerResponse as ActivationCheckTriggerResponse,
    type ActivationCheckTriggerParams as ActivationCheckTriggerParams,
  };

  export {
    Settings as Settings,
    type AdvancedDDoS as AdvancedDDoS,
    type Aegis as Aegis,
    type AlwaysOnline as AlwaysOnline,
    type AlwaysUseHTTPS as AlwaysUseHTTPS,
    type AutomaticHTTPSRewrites as AutomaticHTTPSRewrites,
    type AutomaticPlatformOptimization as AutomaticPlatformOptimization,
    type Brotli as Brotli,
    type BrowserCacheTTL as BrowserCacheTTL,
    type BrowserCheck as BrowserCheck,
    type CacheLevel as CacheLevel,
    type ChallengeTTL as ChallengeTTL,
    type Ciphers as Ciphers,
    type DevelopmentMode as DevelopmentMode,
    type EarlyHints as EarlyHints,
    type EmailObfuscation as EmailObfuscation,
    type FontSettings as FontSettings,
    type H2Prioritization as H2Prioritization,
    type HotlinkProtection as HotlinkProtection,
    type HTTP2 as HTTP2,
    type HTTP3 as HTTP3,
    type ImageResizing as ImageResizing,
    type IPGeolocation as IPGeolocation,
    type IPV6 as IPV6,
    type MinTLSVersion as MinTLSVersion,
    type Mirage as Mirage,
    type NEL as NEL,
    type OpportunisticEncryption as OpportunisticEncryption,
    type OpportunisticOnion as OpportunisticOnion,
    type OrangeToOrange as OrangeToOrange,
    type OriginErrorPagePassThru as OriginErrorPagePassThru,
    type OriginMaxHTTPVersion as OriginMaxHTTPVersion,
    type Polish as Polish,
    type PrefetchPreload as PrefetchPreload,
    type ProxyReadTimeout as ProxyReadTimeout,
    type PseudoIPV4 as PseudoIPV4,
    type ResponseBuffering as ResponseBuffering,
    type RocketLoader as RocketLoader,
    type SecurityHeaders as SecurityHeaders,
    type SecurityLevel as SecurityLevel,
    type ServerSideExcludes as ServerSideExcludes,
    type SortQueryStringForCache as SortQueryStringForCache,
    type SSL as SSL,
    type SSLRecommender as SSLRecommender,
    type TLS1_3 as TLS1_3,
    type TLSClientAuth as TLSClientAuth,
    type TrueClientIPHeader as TrueClientIPHeader,
    type WAF as WAF,
    type WebP as WebP,
    type Websocket as Websocket,
    type ZeroRTT as ZeroRTT,
    type SettingEditResponse as SettingEditResponse,
    type SettingGetResponse as SettingGetResponse,
    type SettingEditParams as SettingEditParams,
    type SettingGetParams as SettingGetParams,
  };

  export {
    CustomNameservers as CustomNameservers,
    type CustomNameserverUpdateResponse as CustomNameserverUpdateResponse,
    type CustomNameserverGetResponse as CustomNameserverGetResponse,
    type CustomNameserverUpdateParams as CustomNameserverUpdateParams,
    type CustomNameserverGetParams as CustomNameserverGetParams,
  };

  export {
    Holds as Holds,
    type ZoneHold as ZoneHold,
    type HoldCreateParams as HoldCreateParams,
    type HoldDeleteParams as HoldDeleteParams,
    type HoldEditParams as HoldEditParams,
    type HoldGetParams as HoldGetParams,
  };

  export {
    Subscriptions as Subscriptions,
    type SubscriptionCreateResponse as SubscriptionCreateResponse,
    type SubscriptionUpdateResponse as SubscriptionUpdateResponse,
    type SubscriptionGetResponse as SubscriptionGetResponse,
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionUpdateParams as SubscriptionUpdateParams,
  };

  export {
    Plans as Plans,
    type AvailableRatePlan as AvailableRatePlan,
    AvailableRatePlansSinglePage as AvailableRatePlansSinglePage,
    type PlanListParams as PlanListParams,
    type PlanGetParams as PlanGetParams,
  };

  export {
    RatePlans as RatePlans,
    type RatePlanGetResponse as RatePlanGetResponse,
    type RatePlanGetParams as RatePlanGetParams,
  };
}
