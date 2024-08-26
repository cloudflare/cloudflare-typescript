// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import { ActivationCheck } from './activation-check';
import { Settings } from './settings';
import { CustomNameservers } from './custom-nameservers';
import { Holds } from './holds';
import { Subscriptions } from './subscriptions';
import * as ZonesAPI from './zones';
import * as ActivationCheckAPI from './activation-check';
import * as CustomNameserversAPI from './custom-nameservers';
import * as HoldsAPI from './holds';
import * as SettingsAPI from './settings';
import * as SubscriptionsAPI from './subscriptions';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class Zones extends APIResource {
  activationCheck: ActivationCheckAPI.ActivationCheck = new ActivationCheckAPI.ActivationCheck(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  customNameservers: CustomNameserversAPI.CustomNameservers = new CustomNameserversAPI.CustomNameservers(this._client);
  holds: HoldsAPI.Holds = new HoldsAPI.Holds(this._client);
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);

  /**
   * Create Zone
   */
  create(body: ZoneCreateParams, options?: Core.RequestOptions): Core.APIPromise<Zone> {
    return (this._client.post('/zones', { body, ...options }) as Core.APIPromise<{ result: Zone }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists, searches, sorts, and filters your zones. Listing zones across more than
   * 500 accounts is currently not allowed.
   */
  list(query?: ZoneListParams, options?: Core.RequestOptions): Core.PagePromise<ZonesV4PagePaginationArray, Zone>
  list(options?: Core.RequestOptions): Core.PagePromise<ZonesV4PagePaginationArray, Zone>
  list(query: ZoneListParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.PagePromise<ZonesV4PagePaginationArray, Zone> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/zones', ZonesV4PagePaginationArray, { query, ...options });
  }

  /**
   * Deletes an existing zone.
   */
  delete(params: ZoneDeleteParams, options?: Core.RequestOptions): Core.APIPromise<ZoneDeleteResponse | null> {
    const { zone_id } = params;
    return (this._client.delete(`/zones/${zone_id}`, options) as Core.APIPromise<{ result: ZoneDeleteResponse | null }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Edits a zone. Only one zone property can be changed at a time.
   */
  edit(params: ZoneEditParams, options?: Core.RequestOptions): Core.APIPromise<Zone> {
    const { zone_id, ...body } = params;
    return (this._client.patch(`/zones/${zone_id}`, { body, ...options }) as Core.APIPromise<{ result: Zone }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Zone Details
   */
  get(params: ZoneGetParams, options?: Core.RequestOptions): Core.APIPromise<Zone> {
    const { zone_id } = params;
    return (this._client.get(`/zones/${zone_id}`, options) as Core.APIPromise<{ result: Zone }>)._thenUnwrap((obj) => obj.result);
  }
}

export class ZonesV4PagePaginationArray extends V4PagePaginationArray<Zone> {
}

/**
 * A full zone implies that DNS is hosted with Cloudflare. A partial zone is
 * typically a partner-hosted zone or a CNAME setup.
 */
export type Type = 'full' | 'partial' | 'secondary'

/**
 * A full zone implies that DNS is hosted with Cloudflare. A partial zone is
 * typically a partner-hosted zone or a CNAME setup.
 */
export type TypeParam = 'full' | 'partial' | 'secondary'

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
   * Body param: (Deprecated) Please use the `/zones/{zone_id}/subscription` API to
   * update a zone's plan. Changing this value will create/cancel associated
   * subscriptions. To view available plans for this zone, see Zone Plans.
   */
  plan?: ZoneEditParams.Plan;

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

export namespace ZoneEditParams {
  /**
   * (Deprecated) Please use the `/zones/{zone_id}/subscription` API to update a
   * zone's plan. Changing this value will create/cancel associated subscriptions. To
   * view available plans for this zone, see Zone Plans.
   */
  export interface Plan {
    /**
     * Identifier
     */
    id?: string;
  }
}

export interface ZoneGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Zones {
  export import ActivationCheck = ActivationCheckAPI.ActivationCheck;
  export import ActivationCheckTriggerResponse = ActivationCheckAPI.ActivationCheckTriggerResponse;
  export import ActivationCheckTriggerParams = ActivationCheckAPI.ActivationCheckTriggerParams;
  export import Settings = SettingsAPI.Settings;
  export import AdvancedDDoS = SettingsAPI.AdvancedDDoS;
  export import AlwaysOnline = SettingsAPI.AlwaysOnline;
  export import AlwaysUseHTTPS = SettingsAPI.AlwaysUseHTTPS;
  export import AutomaticHTTPSRewrites = SettingsAPI.AutomaticHTTPSRewrites;
  export import AutomaticPlatformOptimization = SettingsAPI.AutomaticPlatformOptimization;
  export import Brotli = SettingsAPI.Brotli;
  export import BrowserCacheTTL = SettingsAPI.BrowserCacheTTL;
  export import BrowserCheck = SettingsAPI.BrowserCheck;
  export import CacheLevel = SettingsAPI.CacheLevel;
  export import ChallengeTTL = SettingsAPI.ChallengeTTL;
  export import Ciphers = SettingsAPI.Ciphers;
  export import DevelopmentMode = SettingsAPI.DevelopmentMode;
  export import EarlyHints = SettingsAPI.EarlyHints;
  export import EmailObfuscation = SettingsAPI.EmailObfuscation;
  export import FontSettings = SettingsAPI.FontSettings;
  export import H2Prioritization = SettingsAPI.H2Prioritization;
  export import HotlinkProtection = SettingsAPI.HotlinkProtection;
  export import HTTP2 = SettingsAPI.HTTP2;
  export import HTTP3 = SettingsAPI.HTTP3;
  export import ImageResizing = SettingsAPI.ImageResizing;
  export import IPGeolocation = SettingsAPI.IPGeolocation;
  export import IPV6 = SettingsAPI.IPV6;
  export import MinTLSVersion = SettingsAPI.MinTLSVersion;
  export import Minify = SettingsAPI.Minify;
  export import Mirage = SettingsAPI.Mirage;
  export import MobileRedirect = SettingsAPI.MobileRedirect;
  export import NEL = SettingsAPI.NEL;
  export import OpportunisticEncryption = SettingsAPI.OpportunisticEncryption;
  export import OpportunisticOnion = SettingsAPI.OpportunisticOnion;
  export import OrangeToOrange = SettingsAPI.OrangeToOrange;
  export import OriginErrorPagePassThru = SettingsAPI.OriginErrorPagePassThru;
  export import OriginMaxHTTPVersion = SettingsAPI.OriginMaxHTTPVersion;
  export import Polish = SettingsAPI.Polish;
  export import PrefetchPreload = SettingsAPI.PrefetchPreload;
  export import ProxyReadTimeout = SettingsAPI.ProxyReadTimeout;
  export import PseudoIPV4 = SettingsAPI.PseudoIPV4;
  export import ResponseBuffering = SettingsAPI.ResponseBuffering;
  export import RocketLoader = SettingsAPI.RocketLoader;
  export import SecurityHeaders = SettingsAPI.SecurityHeaders;
  export import SecurityLevel = SettingsAPI.SecurityLevel;
  export import ServerSideExcludes = SettingsAPI.ServerSideExcludes;
  export import SortQueryStringForCache = SettingsAPI.SortQueryStringForCache;
  export import SSL = SettingsAPI.SSL;
  export import SSLRecommender = SettingsAPI.SSLRecommender;
  export import TLS1_3 = SettingsAPI.TLS1_3;
  export import TLSClientAuth = SettingsAPI.TLSClientAuth;
  export import TrueClientIPHeader = SettingsAPI.TrueClientIPHeader;
  export import WAF = SettingsAPI.WAF;
  export import WebP = SettingsAPI.WebP;
  export import Websocket = SettingsAPI.Websocket;
  export import ZeroRTT = SettingsAPI.ZeroRTT;
  export import SettingEditResponse = SettingsAPI.SettingEditResponse;
  export import SettingGetResponse = SettingsAPI.SettingGetResponse;
  export import SettingEditParams = SettingsAPI.SettingEditParams;
  export import SettingGetParams = SettingsAPI.SettingGetParams;
  export import CustomNameservers = CustomNameserversAPI.CustomNameservers;
  export import CustomNameserverUpdateResponse = CustomNameserversAPI.CustomNameserverUpdateResponse;
  export import CustomNameserverGetResponse = CustomNameserversAPI.CustomNameserverGetResponse;
  export import CustomNameserverUpdateParams = CustomNameserversAPI.CustomNameserverUpdateParams;
  export import CustomNameserverGetParams = CustomNameserversAPI.CustomNameserverGetParams;
  export import Holds = HoldsAPI.Holds;
  export import ZoneHold = HoldsAPI.ZoneHold;
  export import HoldCreateParams = HoldsAPI.HoldCreateParams;
  export import HoldDeleteParams = HoldsAPI.HoldDeleteParams;
  export import HoldGetParams = HoldsAPI.HoldGetParams;
  export import Subscriptions = SubscriptionsAPI.Subscriptions;
  export import SubscriptionCreateResponse = SubscriptionsAPI.SubscriptionCreateResponse;
  export import SubscriptionGetResponse = SubscriptionsAPI.SubscriptionGetResponse;
  export import SubscriptionCreateParams = SubscriptionsAPI.SubscriptionCreateParams;
  export import SubscriptionListParams = SubscriptionsAPI.SubscriptionListParams;
}
