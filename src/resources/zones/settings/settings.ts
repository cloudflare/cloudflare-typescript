// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SettingsAPI from 'cloudflare/resources/zones/settings/settings';
import * as AdvancedDDOSAPI from 'cloudflare/resources/zones/settings/advanced-ddos';
import * as AlwaysOnlineAPI from 'cloudflare/resources/zones/settings/always-online';
import * as AlwaysUseHTTPSAPI from 'cloudflare/resources/zones/settings/always-use-https';
import * as AutomaticHTTPSRewritesAPI from 'cloudflare/resources/zones/settings/automatic-https-rewrites';
import * as AutomaticPlatformOptimizationAPI from 'cloudflare/resources/zones/settings/automatic-platform-optimization';
import * as BrotliAPI from 'cloudflare/resources/zones/settings/brotli';
import * as BrowserCacheTTLAPI from 'cloudflare/resources/zones/settings/browser-cache-ttl';
import * as BrowserCheckAPI from 'cloudflare/resources/zones/settings/browser-check';
import * as CacheLevelAPI from 'cloudflare/resources/zones/settings/cache-level';
import * as ChallengeTTLAPI from 'cloudflare/resources/zones/settings/challenge-ttl';
import * as CiphersAPI from 'cloudflare/resources/zones/settings/ciphers';
import * as DevelopmentModeAPI from 'cloudflare/resources/zones/settings/development-mode';
import * as EarlyHintsAPI from 'cloudflare/resources/zones/settings/early-hints';
import * as EmailObfuscationAPI from 'cloudflare/resources/zones/settings/email-obfuscation';
import * as FontSettingsAPI from 'cloudflare/resources/zones/settings/font-settings';
import * as H2PrioritizationAPI from 'cloudflare/resources/zones/settings/h2-prioritization';
import * as HotlinkProtectionAPI from 'cloudflare/resources/zones/settings/hotlink-protection';
import * as HTTP2API from 'cloudflare/resources/zones/settings/http2';
import * as HTTP3API from 'cloudflare/resources/zones/settings/http3';
import * as ImageResizingAPI from 'cloudflare/resources/zones/settings/image-resizing';
import * as IPGeolocationAPI from 'cloudflare/resources/zones/settings/ip-geolocation';
import * as IPV6API from 'cloudflare/resources/zones/settings/ipv6';
import * as MinTLSVersionAPI from 'cloudflare/resources/zones/settings/min-tls-version';
import * as MinifyAPI from 'cloudflare/resources/zones/settings/minify';
import * as MirageAPI from 'cloudflare/resources/zones/settings/mirage';
import * as MobileRedirectAPI from 'cloudflare/resources/zones/settings/mobile-redirect';
import * as NELAPI from 'cloudflare/resources/zones/settings/nel';
import * as OpportunisticEncryptionAPI from 'cloudflare/resources/zones/settings/opportunistic-encryption';
import * as OpportunisticOnionAPI from 'cloudflare/resources/zones/settings/opportunistic-onion';
import * as OrangeToOrangeAPI from 'cloudflare/resources/zones/settings/orange-to-orange';
import * as OriginErrorPagePassThruAPI from 'cloudflare/resources/zones/settings/origin-error-page-pass-thru';
import * as OriginMaxHTTPVersionAPI from 'cloudflare/resources/zones/settings/origin-max-http-version';
import * as PolishAPI from 'cloudflare/resources/zones/settings/polish';
import * as PrefetchPreloadAPI from 'cloudflare/resources/zones/settings/prefetch-preload';
import * as ProxyReadTimeoutAPI from 'cloudflare/resources/zones/settings/proxy-read-timeout';
import * as PseudoIPV4API from 'cloudflare/resources/zones/settings/pseudo-ipv4';
import * as ResponseBufferingAPI from 'cloudflare/resources/zones/settings/response-buffering';
import * as RocketLoaderAPI from 'cloudflare/resources/zones/settings/rocket-loader';
import * as SecurityHeadersAPI from 'cloudflare/resources/zones/settings/security-headers';
import * as SecurityLevelAPI from 'cloudflare/resources/zones/settings/security-level';
import * as ServerSideExcludesAPI from 'cloudflare/resources/zones/settings/server-side-excludes';
import * as SortQueryStringForCacheAPI from 'cloudflare/resources/zones/settings/sort-query-string-for-cache';
import * as SSLAPI from 'cloudflare/resources/zones/settings/ssl';
import * as SSLRecommenderAPI from 'cloudflare/resources/zones/settings/ssl-recommender';
import * as TLS1_3API from 'cloudflare/resources/zones/settings/tls-1-3';
import * as TLSClientAuthAPI from 'cloudflare/resources/zones/settings/tls-client-auth';
import * as TrueClientIPHeaderAPI from 'cloudflare/resources/zones/settings/true-client-ip-header';
import * as WAFAPI from 'cloudflare/resources/zones/settings/waf';
import * as WebPAPI from 'cloudflare/resources/zones/settings/webp';
import * as WebsocketAPI from 'cloudflare/resources/zones/settings/websocket';
import * as ZeroRTTAPI from 'cloudflare/resources/zones/settings/zero-rtt';

export class Settings extends APIResource {
  zeroRTT: ZeroRTTAPI.ZeroRTT = new ZeroRTTAPI.ZeroRTT(this._client);
  advancedDDOS: AdvancedDDOSAPI.AdvancedDDOS = new AdvancedDDOSAPI.AdvancedDDOS(this._client);
  alwaysOnline: AlwaysOnlineAPI.AlwaysOnline = new AlwaysOnlineAPI.AlwaysOnline(this._client);
  alwaysUseHTTPS: AlwaysUseHTTPSAPI.AlwaysUseHTTPS = new AlwaysUseHTTPSAPI.AlwaysUseHTTPS(this._client);
  automaticHTTPSRewrites: AutomaticHTTPSRewritesAPI.AutomaticHTTPSRewrites =
    new AutomaticHTTPSRewritesAPI.AutomaticHTTPSRewrites(this._client);
  automaticPlatformOptimization: AutomaticPlatformOptimizationAPI.AutomaticPlatformOptimization =
    new AutomaticPlatformOptimizationAPI.AutomaticPlatformOptimization(this._client);
  brotli: BrotliAPI.Brotli = new BrotliAPI.Brotli(this._client);
  browserCacheTTL: BrowserCacheTTLAPI.BrowserCacheTTL = new BrowserCacheTTLAPI.BrowserCacheTTL(this._client);
  browserCheck: BrowserCheckAPI.BrowserCheck = new BrowserCheckAPI.BrowserCheck(this._client);
  cacheLevel: CacheLevelAPI.CacheLevel = new CacheLevelAPI.CacheLevel(this._client);
  challengeTTL: ChallengeTTLAPI.ChallengeTTL = new ChallengeTTLAPI.ChallengeTTL(this._client);
  ciphers: CiphersAPI.Ciphers = new CiphersAPI.Ciphers(this._client);
  developmentMode: DevelopmentModeAPI.DevelopmentMode = new DevelopmentModeAPI.DevelopmentMode(this._client);
  earlyHints: EarlyHintsAPI.EarlyHints = new EarlyHintsAPI.EarlyHints(this._client);
  emailObfuscation: EmailObfuscationAPI.EmailObfuscation = new EmailObfuscationAPI.EmailObfuscation(
    this._client,
  );
  h2Prioritization: H2PrioritizationAPI.H2Prioritization = new H2PrioritizationAPI.H2Prioritization(
    this._client,
  );
  hotlinkProtection: HotlinkProtectionAPI.HotlinkProtection = new HotlinkProtectionAPI.HotlinkProtection(
    this._client,
  );
  http2: HTTP2API.HTTP2 = new HTTP2API.HTTP2(this._client);
  http3: HTTP3API.HTTP3 = new HTTP3API.HTTP3(this._client);
  imageResizing: ImageResizingAPI.ImageResizing = new ImageResizingAPI.ImageResizing(this._client);
  ipGeolocation: IPGeolocationAPI.IPGeolocation = new IPGeolocationAPI.IPGeolocation(this._client);
  ipv6: IPV6API.IPV6 = new IPV6API.IPV6(this._client);
  minTLSVersion: MinTLSVersionAPI.MinTLSVersion = new MinTLSVersionAPI.MinTLSVersion(this._client);
  minify: MinifyAPI.Minify = new MinifyAPI.Minify(this._client);
  mirage: MirageAPI.Mirage = new MirageAPI.Mirage(this._client);
  mobileRedirect: MobileRedirectAPI.MobileRedirect = new MobileRedirectAPI.MobileRedirect(this._client);
  nel: NELAPI.NEL = new NELAPI.NEL(this._client);
  opportunisticEncryption: OpportunisticEncryptionAPI.OpportunisticEncryption =
    new OpportunisticEncryptionAPI.OpportunisticEncryption(this._client);
  opportunisticOnion: OpportunisticOnionAPI.OpportunisticOnion = new OpportunisticOnionAPI.OpportunisticOnion(
    this._client,
  );
  orangeToOrange: OrangeToOrangeAPI.OrangeToOrange = new OrangeToOrangeAPI.OrangeToOrange(this._client);
  originErrorPagePassThru: OriginErrorPagePassThruAPI.OriginErrorPagePassThru =
    new OriginErrorPagePassThruAPI.OriginErrorPagePassThru(this._client);
  originMaxHTTPVersion: OriginMaxHTTPVersionAPI.OriginMaxHTTPVersion =
    new OriginMaxHTTPVersionAPI.OriginMaxHTTPVersion(this._client);
  polish: PolishAPI.Polish = new PolishAPI.Polish(this._client);
  prefetchPreload: PrefetchPreloadAPI.PrefetchPreload = new PrefetchPreloadAPI.PrefetchPreload(this._client);
  proxyReadTimeout: ProxyReadTimeoutAPI.ProxyReadTimeout = new ProxyReadTimeoutAPI.ProxyReadTimeout(
    this._client,
  );
  pseudoIPV4: PseudoIPV4API.PseudoIPV4 = new PseudoIPV4API.PseudoIPV4(this._client);
  responseBuffering: ResponseBufferingAPI.ResponseBuffering = new ResponseBufferingAPI.ResponseBuffering(
    this._client,
  );
  rocketLoader: RocketLoaderAPI.RocketLoader = new RocketLoaderAPI.RocketLoader(this._client);
  securityHeaders: SecurityHeadersAPI.SecurityHeaders = new SecurityHeadersAPI.SecurityHeaders(this._client);
  securityLevel: SecurityLevelAPI.SecurityLevel = new SecurityLevelAPI.SecurityLevel(this._client);
  serverSideExcludes: ServerSideExcludesAPI.ServerSideExcludes = new ServerSideExcludesAPI.ServerSideExcludes(
    this._client,
  );
  sortQueryStringForCache: SortQueryStringForCacheAPI.SortQueryStringForCache =
    new SortQueryStringForCacheAPI.SortQueryStringForCache(this._client);
  ssl: SSLAPI.SSL = new SSLAPI.SSL(this._client);
  sslRecommender: SSLRecommenderAPI.SSLRecommender = new SSLRecommenderAPI.SSLRecommender(this._client);
  tls1_3: TLS1_3API.TLS1_3 = new TLS1_3API.TLS1_3(this._client);
  tlsClientAuth: TLSClientAuthAPI.TLSClientAuth = new TLSClientAuthAPI.TLSClientAuth(this._client);
  trueClientIPHeader: TrueClientIPHeaderAPI.TrueClientIPHeader = new TrueClientIPHeaderAPI.TrueClientIPHeader(
    this._client,
  );
  waf: WAFAPI.WAF = new WAFAPI.WAF(this._client);
  WebP: WebPAPI.WebP = new WebPAPI.WebP(this._client);
  websocket: WebsocketAPI.Websocket = new WebsocketAPI.Websocket(this._client);
  fontSettings: FontSettingsAPI.FontSettings = new FontSettingsAPI.FontSettings(this._client);

  /**
   * Edit settings for a zone.
   */
  edit(params: SettingEditParams, options?: Core.RequestOptions): Core.APIPromise<SettingEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings`, { body, ...options }) as Core.APIPromise<{
        result: SettingEditResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Available settings for your user in relation to a zone.
   */
  get(params: SettingGetParams, options?: Core.RequestOptions): Core.APIPromise<SettingGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings`, options) as Core.APIPromise<{
        result: SettingGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type SettingEditResponse = Array<
  | ZeroRTTAPI.Zones0rtt
  | AdvancedDDOSAPI.ZonesAdvancedDDOS
  | AlwaysOnlineAPI.ZonesAlwaysOnline
  | AlwaysUseHTTPSAPI.ZonesAlwaysUseHTTPS
  | AutomaticHTTPSRewritesAPI.ZonesAutomaticHTTPSRewrites
  | BrotliAPI.ZonesBrotli
  | BrowserCacheTTLAPI.ZonesBrowserCacheTTL
  | BrowserCheckAPI.ZonesBrowserCheck
  | CacheLevelAPI.ZonesCacheLevel
  | ChallengeTTLAPI.ZonesChallengeTTL
  | CiphersAPI.ZonesCiphers
  | SettingEditResponse.ZonesCNAMEFlattening
  | DevelopmentModeAPI.ZonesDevelopmentMode
  | EarlyHintsAPI.ZonesEarlyHints
  | SettingEditResponse.ZonesEdgeCacheTTL
  | EmailObfuscationAPI.ZonesEmailObfuscation
  | H2PrioritizationAPI.ZonesH2Prioritization
  | HotlinkProtectionAPI.ZonesHotlinkProtection
  | HTTP2API.ZonesHTTP2
  | HTTP3API.ZonesHTTP3
  | ImageResizingAPI.ZonesImageResizing
  | IPGeolocationAPI.ZonesIPGeolocation
  | IPV6API.ZonesIPV6
  | SettingEditResponse.ZonesMaxUpload
  | MinTLSVersionAPI.ZonesMinTLSVersion
  | MinifyAPI.ZonesMinify
  | MirageAPI.ZonesMirage
  | MobileRedirectAPI.ZonesMobileRedirect
  | NELAPI.ZonesNEL
  | OpportunisticEncryptionAPI.ZonesOpportunisticEncryption
  | OpportunisticOnionAPI.ZonesOpportunisticOnion
  | OrangeToOrangeAPI.ZonesOrangeToOrange
  | OriginErrorPagePassThruAPI.ZonesOriginErrorPagePassThru
  | PolishAPI.ZonesPolish
  | PrefetchPreloadAPI.ZonesPrefetchPreload
  | ProxyReadTimeoutAPI.ZonesProxyReadTimeout
  | PseudoIPV4API.ZonesPseudoIPV4
  | ResponseBufferingAPI.ZonesBuffering
  | RocketLoaderAPI.ZonesRocketLoader
  | SettingEditResponse.ZonesSchemasAutomaticPlatformOptimization
  | SecurityHeadersAPI.ZonesSecurityHeader
  | SecurityLevelAPI.ZonesSecurityLevel
  | ServerSideExcludesAPI.ZonesServerSideExclude
  | SettingEditResponse.ZonesSha1Support
  | SortQueryStringForCacheAPI.ZonesSortQueryStringForCache
  | SSLAPI.ZonesSSL
  | SSLRecommenderAPI.ZonesSSLRecommender
  | SettingEditResponse.ZonesTLS1_2Only
  | TLS1_3API.ZonesTLS1_3
  | TLSClientAuthAPI.ZonesTLSClientAuth
  | TrueClientIPHeaderAPI.ZonesTrueClientIPHeader
  | WAFAPI.ZonesWAF
  | WebPAPI.ZonesWebP
  | WebsocketAPI.ZonesWebsockets
>;

export namespace SettingEditResponse {
  /**
   * Whether or not cname flattening is on.
   */
  export interface ZonesCNAMEFlattening {
    /**
     * How to flatten the cname destination.
     */
    id: 'cname_flattening';

    /**
     * Current value of the zone setting.
     */
    value: 'flatten_at_root' | 'flatten_all';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Time (in seconds) that a resource will be ensured to remain on Cloudflare's
   * cache servers.
   */
  export interface ZonesEdgeCacheTTL {
    /**
     * ID of the zone setting.
     */
    id: 'edge_cache_ttl';

    /**
     * Current value of the zone setting.
     */
    value:
      | 30
      | 60
      | 300
      | 1200
      | 1800
      | 3600
      | 7200
      | 10800
      | 14400
      | 18000
      | 28800
      | 43200
      | 57600
      | 72000
      | 86400
      | 172800
      | 259200
      | 345600
      | 432000
      | 518400
      | 604800;

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Maximum size of an allowable upload.
   */
  export interface ZonesMaxUpload {
    /**
     * identifier of the zone setting.
     */
    id: 'max_upload';

    /**
     * Current value of the zone setting.
     */
    value: 100 | 200 | 500;

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * [Automatic Platform Optimization for WordPress](https://developers.cloudflare.com/automatic-platform-optimization/)
   * serves your WordPress site from Cloudflare's edge network and caches third-party
   * fonts.
   */
  export interface ZonesSchemasAutomaticPlatformOptimization {
    /**
     * ID of the zone setting.
     */
    id: 'automatic_platform_optimization';

    /**
     * Current value of the zone setting.
     */
    value: AutomaticPlatformOptimizationAPI.ZonesAutomaticPlatformOptimization;

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Allow SHA1 support.
   */
  export interface ZonesSha1Support {
    /**
     * Zone setting identifier.
     */
    id: 'sha1_support';

    /**
     * Current value of the zone setting.
     */
    value: 'off' | 'on';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Only allows TLS1.2.
   */
  export interface ZonesTLS1_2Only {
    /**
     * Zone setting identifier.
     */
    id: 'tls_1_2_only';

    /**
     * Current value of the zone setting.
     */
    value: 'off' | 'on';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }
}

export type SettingGetResponse = Array<
  | ZeroRTTAPI.Zones0rtt
  | AdvancedDDOSAPI.ZonesAdvancedDDOS
  | AlwaysOnlineAPI.ZonesAlwaysOnline
  | AlwaysUseHTTPSAPI.ZonesAlwaysUseHTTPS
  | AutomaticHTTPSRewritesAPI.ZonesAutomaticHTTPSRewrites
  | BrotliAPI.ZonesBrotli
  | BrowserCacheTTLAPI.ZonesBrowserCacheTTL
  | BrowserCheckAPI.ZonesBrowserCheck
  | CacheLevelAPI.ZonesCacheLevel
  | ChallengeTTLAPI.ZonesChallengeTTL
  | CiphersAPI.ZonesCiphers
  | SettingGetResponse.ZonesCNAMEFlattening
  | DevelopmentModeAPI.ZonesDevelopmentMode
  | EarlyHintsAPI.ZonesEarlyHints
  | SettingGetResponse.ZonesEdgeCacheTTL
  | EmailObfuscationAPI.ZonesEmailObfuscation
  | H2PrioritizationAPI.ZonesH2Prioritization
  | HotlinkProtectionAPI.ZonesHotlinkProtection
  | HTTP2API.ZonesHTTP2
  | HTTP3API.ZonesHTTP3
  | ImageResizingAPI.ZonesImageResizing
  | IPGeolocationAPI.ZonesIPGeolocation
  | IPV6API.ZonesIPV6
  | SettingGetResponse.ZonesMaxUpload
  | MinTLSVersionAPI.ZonesMinTLSVersion
  | MinifyAPI.ZonesMinify
  | MirageAPI.ZonesMirage
  | MobileRedirectAPI.ZonesMobileRedirect
  | NELAPI.ZonesNEL
  | OpportunisticEncryptionAPI.ZonesOpportunisticEncryption
  | OpportunisticOnionAPI.ZonesOpportunisticOnion
  | OrangeToOrangeAPI.ZonesOrangeToOrange
  | OriginErrorPagePassThruAPI.ZonesOriginErrorPagePassThru
  | PolishAPI.ZonesPolish
  | PrefetchPreloadAPI.ZonesPrefetchPreload
  | ProxyReadTimeoutAPI.ZonesProxyReadTimeout
  | PseudoIPV4API.ZonesPseudoIPV4
  | ResponseBufferingAPI.ZonesBuffering
  | RocketLoaderAPI.ZonesRocketLoader
  | SettingGetResponse.ZonesSchemasAutomaticPlatformOptimization
  | SecurityHeadersAPI.ZonesSecurityHeader
  | SecurityLevelAPI.ZonesSecurityLevel
  | ServerSideExcludesAPI.ZonesServerSideExclude
  | SettingGetResponse.ZonesSha1Support
  | SortQueryStringForCacheAPI.ZonesSortQueryStringForCache
  | SSLAPI.ZonesSSL
  | SSLRecommenderAPI.ZonesSSLRecommender
  | SettingGetResponse.ZonesTLS1_2Only
  | TLS1_3API.ZonesTLS1_3
  | TLSClientAuthAPI.ZonesTLSClientAuth
  | TrueClientIPHeaderAPI.ZonesTrueClientIPHeader
  | WAFAPI.ZonesWAF
  | WebPAPI.ZonesWebP
  | WebsocketAPI.ZonesWebsockets
>;

export namespace SettingGetResponse {
  /**
   * Whether or not cname flattening is on.
   */
  export interface ZonesCNAMEFlattening {
    /**
     * How to flatten the cname destination.
     */
    id: 'cname_flattening';

    /**
     * Current value of the zone setting.
     */
    value: 'flatten_at_root' | 'flatten_all';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Time (in seconds) that a resource will be ensured to remain on Cloudflare's
   * cache servers.
   */
  export interface ZonesEdgeCacheTTL {
    /**
     * ID of the zone setting.
     */
    id: 'edge_cache_ttl';

    /**
     * Current value of the zone setting.
     */
    value:
      | 30
      | 60
      | 300
      | 1200
      | 1800
      | 3600
      | 7200
      | 10800
      | 14400
      | 18000
      | 28800
      | 43200
      | 57600
      | 72000
      | 86400
      | 172800
      | 259200
      | 345600
      | 432000
      | 518400
      | 604800;

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Maximum size of an allowable upload.
   */
  export interface ZonesMaxUpload {
    /**
     * identifier of the zone setting.
     */
    id: 'max_upload';

    /**
     * Current value of the zone setting.
     */
    value: 100 | 200 | 500;

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * [Automatic Platform Optimization for WordPress](https://developers.cloudflare.com/automatic-platform-optimization/)
   * serves your WordPress site from Cloudflare's edge network and caches third-party
   * fonts.
   */
  export interface ZonesSchemasAutomaticPlatformOptimization {
    /**
     * ID of the zone setting.
     */
    id: 'automatic_platform_optimization';

    /**
     * Current value of the zone setting.
     */
    value: AutomaticPlatformOptimizationAPI.ZonesAutomaticPlatformOptimization;

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Allow SHA1 support.
   */
  export interface ZonesSha1Support {
    /**
     * Zone setting identifier.
     */
    id: 'sha1_support';

    /**
     * Current value of the zone setting.
     */
    value: 'off' | 'on';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Only allows TLS1.2.
   */
  export interface ZonesTLS1_2Only {
    /**
     * Zone setting identifier.
     */
    id: 'tls_1_2_only';

    /**
     * Current value of the zone setting.
     */
    value: 'off' | 'on';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }
}

export interface SettingEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: One or more zone setting objects. Must contain an ID and a value.
   */
  items: Array<
    | ZeroRTTAPI.Zones0rtt
    | AdvancedDDOSAPI.ZonesAdvancedDDOS
    | AlwaysOnlineAPI.ZonesAlwaysOnline
    | AlwaysUseHTTPSAPI.ZonesAlwaysUseHTTPS
    | AutomaticHTTPSRewritesAPI.ZonesAutomaticHTTPSRewrites
    | BrotliAPI.ZonesBrotli
    | BrowserCacheTTLAPI.ZonesBrowserCacheTTL
    | BrowserCheckAPI.ZonesBrowserCheck
    | CacheLevelAPI.ZonesCacheLevel
    | ChallengeTTLAPI.ZonesChallengeTTL
    | CiphersAPI.ZonesCiphers
    | SettingEditParams.ZonesCNAMEFlattening
    | DevelopmentModeAPI.ZonesDevelopmentMode
    | EarlyHintsAPI.ZonesEarlyHints
    | SettingEditParams.ZonesEdgeCacheTTL
    | EmailObfuscationAPI.ZonesEmailObfuscation
    | H2PrioritizationAPI.ZonesH2Prioritization
    | HotlinkProtectionAPI.ZonesHotlinkProtection
    | HTTP2API.ZonesHTTP2
    | HTTP3API.ZonesHTTP3
    | ImageResizingAPI.ZonesImageResizing
    | IPGeolocationAPI.ZonesIPGeolocation
    | IPV6API.ZonesIPV6
    | SettingEditParams.ZonesMaxUpload
    | MinTLSVersionAPI.ZonesMinTLSVersion
    | MinifyAPI.ZonesMinify
    | MirageAPI.ZonesMirage
    | MobileRedirectAPI.ZonesMobileRedirect
    | NELAPI.ZonesNEL
    | OpportunisticEncryptionAPI.ZonesOpportunisticEncryption
    | OpportunisticOnionAPI.ZonesOpportunisticOnion
    | OrangeToOrangeAPI.ZonesOrangeToOrange
    | OriginErrorPagePassThruAPI.ZonesOriginErrorPagePassThru
    | PolishAPI.ZonesPolish
    | PrefetchPreloadAPI.ZonesPrefetchPreload
    | ProxyReadTimeoutAPI.ZonesProxyReadTimeout
    | PseudoIPV4API.ZonesPseudoIPV4
    | ResponseBufferingAPI.ZonesBuffering
    | RocketLoaderAPI.ZonesRocketLoader
    | SettingEditParams.ZonesSchemasAutomaticPlatformOptimization
    | SecurityHeadersAPI.ZonesSecurityHeader
    | SecurityLevelAPI.ZonesSecurityLevel
    | ServerSideExcludesAPI.ZonesServerSideExclude
    | SettingEditParams.ZonesSha1Support
    | SortQueryStringForCacheAPI.ZonesSortQueryStringForCache
    | SSLAPI.ZonesSSL
    | SSLRecommenderAPI.ZonesSSLRecommender
    | SettingEditParams.ZonesTLS1_2Only
    | TLS1_3API.ZonesTLS1_3
    | TLSClientAuthAPI.ZonesTLSClientAuth
    | TrueClientIPHeaderAPI.ZonesTrueClientIPHeader
    | WAFAPI.ZonesWAF
    | WebPAPI.ZonesWebP
    | WebsocketAPI.ZonesWebsockets
  >;
}

export namespace SettingEditParams {
  /**
   * Whether or not cname flattening is on.
   */
  export interface ZonesCNAMEFlattening {
    /**
     * How to flatten the cname destination.
     */
    id: 'cname_flattening';

    /**
     * Current value of the zone setting.
     */
    value: 'flatten_at_root' | 'flatten_all';
  }

  /**
   * Time (in seconds) that a resource will be ensured to remain on Cloudflare's
   * cache servers.
   */
  export interface ZonesEdgeCacheTTL {
    /**
     * ID of the zone setting.
     */
    id: 'edge_cache_ttl';

    /**
     * Current value of the zone setting.
     */
    value:
      | 30
      | 60
      | 300
      | 1200
      | 1800
      | 3600
      | 7200
      | 10800
      | 14400
      | 18000
      | 28800
      | 43200
      | 57600
      | 72000
      | 86400
      | 172800
      | 259200
      | 345600
      | 432000
      | 518400
      | 604800;
  }

  /**
   * Maximum size of an allowable upload.
   */
  export interface ZonesMaxUpload {
    /**
     * identifier of the zone setting.
     */
    id: 'max_upload';

    /**
     * Current value of the zone setting.
     */
    value: 100 | 200 | 500;
  }

  /**
   * [Automatic Platform Optimization for WordPress](https://developers.cloudflare.com/automatic-platform-optimization/)
   * serves your WordPress site from Cloudflare's edge network and caches third-party
   * fonts.
   */
  export interface ZonesSchemasAutomaticPlatformOptimization {
    /**
     * ID of the zone setting.
     */
    id: 'automatic_platform_optimization';

    /**
     * Current value of the zone setting.
     */
    value: AutomaticPlatformOptimizationAPI.ZonesAutomaticPlatformOptimization;
  }

  /**
   * Allow SHA1 support.
   */
  export interface ZonesSha1Support {
    /**
     * Zone setting identifier.
     */
    id: 'sha1_support';

    /**
     * Current value of the zone setting.
     */
    value: 'off' | 'on';
  }

  /**
   * Only allows TLS1.2.
   */
  export interface ZonesTLS1_2Only {
    /**
     * Zone setting identifier.
     */
    id: 'tls_1_2_only';

    /**
     * Current value of the zone setting.
     */
    value: 'off' | 'on';
  }
}

export interface SettingGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Settings {
  export import SettingEditResponse = SettingsAPI.SettingEditResponse;
  export import SettingGetResponse = SettingsAPI.SettingGetResponse;
  export import SettingEditParams = SettingsAPI.SettingEditParams;
  export import SettingGetParams = SettingsAPI.SettingGetParams;
  export import ZeroRTT = ZeroRTTAPI.ZeroRTT;
  export import Zones0rtt = ZeroRTTAPI.Zones0rtt;
  export import ZeroRTTEditParams = ZeroRTTAPI.ZeroRTTEditParams;
  export import ZeroRTTGetParams = ZeroRTTAPI.ZeroRTTGetParams;
  export import AdvancedDDOS = AdvancedDDOSAPI.AdvancedDDOS;
  export import ZonesAdvancedDDOS = AdvancedDDOSAPI.ZonesAdvancedDDOS;
  export import AdvancedDDOSGetParams = AdvancedDDOSAPI.AdvancedDDOSGetParams;
  export import AlwaysOnline = AlwaysOnlineAPI.AlwaysOnline;
  export import ZonesAlwaysOnline = AlwaysOnlineAPI.ZonesAlwaysOnline;
  export import AlwaysOnlineEditParams = AlwaysOnlineAPI.AlwaysOnlineEditParams;
  export import AlwaysOnlineGetParams = AlwaysOnlineAPI.AlwaysOnlineGetParams;
  export import AlwaysUseHTTPS = AlwaysUseHTTPSAPI.AlwaysUseHTTPS;
  export import ZonesAlwaysUseHTTPS = AlwaysUseHTTPSAPI.ZonesAlwaysUseHTTPS;
  export import AlwaysUseHTTPSEditParams = AlwaysUseHTTPSAPI.AlwaysUseHTTPSEditParams;
  export import AlwaysUseHTTPSGetParams = AlwaysUseHTTPSAPI.AlwaysUseHTTPSGetParams;
  export import AutomaticHTTPSRewrites = AutomaticHTTPSRewritesAPI.AutomaticHTTPSRewrites;
  export import ZonesAutomaticHTTPSRewrites = AutomaticHTTPSRewritesAPI.ZonesAutomaticHTTPSRewrites;
  export import AutomaticHTTPSRewriteEditParams = AutomaticHTTPSRewritesAPI.AutomaticHTTPSRewriteEditParams;
  export import AutomaticHTTPSRewriteGetParams = AutomaticHTTPSRewritesAPI.AutomaticHTTPSRewriteGetParams;
  export import AutomaticPlatformOptimization = AutomaticPlatformOptimizationAPI.AutomaticPlatformOptimization;
  export import ZonesAutomaticPlatformOptimization = AutomaticPlatformOptimizationAPI.ZonesAutomaticPlatformOptimization;
  export import AutomaticPlatformOptimizationEditParams = AutomaticPlatformOptimizationAPI.AutomaticPlatformOptimizationEditParams;
  export import AutomaticPlatformOptimizationGetParams = AutomaticPlatformOptimizationAPI.AutomaticPlatformOptimizationGetParams;
  export import Brotli = BrotliAPI.Brotli;
  export import ZonesBrotli = BrotliAPI.ZonesBrotli;
  export import BrotliEditParams = BrotliAPI.BrotliEditParams;
  export import BrotliGetParams = BrotliAPI.BrotliGetParams;
  export import BrowserCacheTTL = BrowserCacheTTLAPI.BrowserCacheTTL;
  export import ZonesBrowserCacheTTL = BrowserCacheTTLAPI.ZonesBrowserCacheTTL;
  export import BrowserCacheTTLEditParams = BrowserCacheTTLAPI.BrowserCacheTTLEditParams;
  export import BrowserCacheTTLGetParams = BrowserCacheTTLAPI.BrowserCacheTTLGetParams;
  export import BrowserCheck = BrowserCheckAPI.BrowserCheck;
  export import ZonesBrowserCheck = BrowserCheckAPI.ZonesBrowserCheck;
  export import BrowserCheckEditParams = BrowserCheckAPI.BrowserCheckEditParams;
  export import BrowserCheckGetParams = BrowserCheckAPI.BrowserCheckGetParams;
  export import CacheLevel = CacheLevelAPI.CacheLevel;
  export import ZonesCacheLevel = CacheLevelAPI.ZonesCacheLevel;
  export import CacheLevelEditParams = CacheLevelAPI.CacheLevelEditParams;
  export import CacheLevelGetParams = CacheLevelAPI.CacheLevelGetParams;
  export import ChallengeTTL = ChallengeTTLAPI.ChallengeTTL;
  export import ZonesChallengeTTL = ChallengeTTLAPI.ZonesChallengeTTL;
  export import ChallengeTTLEditParams = ChallengeTTLAPI.ChallengeTTLEditParams;
  export import ChallengeTTLGetParams = ChallengeTTLAPI.ChallengeTTLGetParams;
  export import Ciphers = CiphersAPI.Ciphers;
  export import ZonesCiphers = CiphersAPI.ZonesCiphers;
  export import CipherEditParams = CiphersAPI.CipherEditParams;
  export import CipherGetParams = CiphersAPI.CipherGetParams;
  export import DevelopmentMode = DevelopmentModeAPI.DevelopmentMode;
  export import ZonesDevelopmentMode = DevelopmentModeAPI.ZonesDevelopmentMode;
  export import DevelopmentModeEditParams = DevelopmentModeAPI.DevelopmentModeEditParams;
  export import DevelopmentModeGetParams = DevelopmentModeAPI.DevelopmentModeGetParams;
  export import EarlyHints = EarlyHintsAPI.EarlyHints;
  export import ZonesEarlyHints = EarlyHintsAPI.ZonesEarlyHints;
  export import EarlyHintEditParams = EarlyHintsAPI.EarlyHintEditParams;
  export import EarlyHintGetParams = EarlyHintsAPI.EarlyHintGetParams;
  export import EmailObfuscation = EmailObfuscationAPI.EmailObfuscation;
  export import ZonesEmailObfuscation = EmailObfuscationAPI.ZonesEmailObfuscation;
  export import EmailObfuscationEditParams = EmailObfuscationAPI.EmailObfuscationEditParams;
  export import EmailObfuscationGetParams = EmailObfuscationAPI.EmailObfuscationGetParams;
  export import H2Prioritization = H2PrioritizationAPI.H2Prioritization;
  export import ZonesH2Prioritization = H2PrioritizationAPI.ZonesH2Prioritization;
  export import H2PrioritizationEditParams = H2PrioritizationAPI.H2PrioritizationEditParams;
  export import H2PrioritizationGetParams = H2PrioritizationAPI.H2PrioritizationGetParams;
  export import HotlinkProtection = HotlinkProtectionAPI.HotlinkProtection;
  export import ZonesHotlinkProtection = HotlinkProtectionAPI.ZonesHotlinkProtection;
  export import HotlinkProtectionEditParams = HotlinkProtectionAPI.HotlinkProtectionEditParams;
  export import HotlinkProtectionGetParams = HotlinkProtectionAPI.HotlinkProtectionGetParams;
  export import HTTP2 = HTTP2API.HTTP2;
  export import ZonesHTTP2 = HTTP2API.ZonesHTTP2;
  export import HTTP2EditParams = HTTP2API.HTTP2EditParams;
  export import HTTP2GetParams = HTTP2API.HTTP2GetParams;
  export import HTTP3 = HTTP3API.HTTP3;
  export import ZonesHTTP3 = HTTP3API.ZonesHTTP3;
  export import HTTP3EditParams = HTTP3API.HTTP3EditParams;
  export import HTTP3GetParams = HTTP3API.HTTP3GetParams;
  export import ImageResizing = ImageResizingAPI.ImageResizing;
  export import ZonesImageResizing = ImageResizingAPI.ZonesImageResizing;
  export import ImageResizingEditParams = ImageResizingAPI.ImageResizingEditParams;
  export import ImageResizingGetParams = ImageResizingAPI.ImageResizingGetParams;
  export import IPGeolocation = IPGeolocationAPI.IPGeolocation;
  export import ZonesIPGeolocation = IPGeolocationAPI.ZonesIPGeolocation;
  export import IPGeolocationEditParams = IPGeolocationAPI.IPGeolocationEditParams;
  export import IPGeolocationGetParams = IPGeolocationAPI.IPGeolocationGetParams;
  export import IPV6 = IPV6API.IPV6;
  export import ZonesIPV6 = IPV6API.ZonesIPV6;
  export import IPV6EditParams = IPV6API.IPV6EditParams;
  export import IPV6GetParams = IPV6API.IPV6GetParams;
  export import MinTLSVersion = MinTLSVersionAPI.MinTLSVersion;
  export import ZonesMinTLSVersion = MinTLSVersionAPI.ZonesMinTLSVersion;
  export import MinTLSVersionEditParams = MinTLSVersionAPI.MinTLSVersionEditParams;
  export import MinTLSVersionGetParams = MinTLSVersionAPI.MinTLSVersionGetParams;
  export import Minify = MinifyAPI.Minify;
  export import ZonesMinify = MinifyAPI.ZonesMinify;
  export import MinifyEditParams = MinifyAPI.MinifyEditParams;
  export import MinifyGetParams = MinifyAPI.MinifyGetParams;
  export import Mirage = MirageAPI.Mirage;
  export import ZonesMirage = MirageAPI.ZonesMirage;
  export import MirageEditParams = MirageAPI.MirageEditParams;
  export import MirageGetParams = MirageAPI.MirageGetParams;
  export import MobileRedirect = MobileRedirectAPI.MobileRedirect;
  export import ZonesMobileRedirect = MobileRedirectAPI.ZonesMobileRedirect;
  export import MobileRedirectEditParams = MobileRedirectAPI.MobileRedirectEditParams;
  export import MobileRedirectGetParams = MobileRedirectAPI.MobileRedirectGetParams;
  export import NEL = NELAPI.NEL;
  export import ZonesNEL = NELAPI.ZonesNEL;
  export import NELEditParams = NELAPI.NELEditParams;
  export import NELGetParams = NELAPI.NELGetParams;
  export import OpportunisticEncryption = OpportunisticEncryptionAPI.OpportunisticEncryption;
  export import ZonesOpportunisticEncryption = OpportunisticEncryptionAPI.ZonesOpportunisticEncryption;
  export import OpportunisticEncryptionEditParams = OpportunisticEncryptionAPI.OpportunisticEncryptionEditParams;
  export import OpportunisticEncryptionGetParams = OpportunisticEncryptionAPI.OpportunisticEncryptionGetParams;
  export import OpportunisticOnion = OpportunisticOnionAPI.OpportunisticOnion;
  export import ZonesOpportunisticOnion = OpportunisticOnionAPI.ZonesOpportunisticOnion;
  export import OpportunisticOnionEditParams = OpportunisticOnionAPI.OpportunisticOnionEditParams;
  export import OpportunisticOnionGetParams = OpportunisticOnionAPI.OpportunisticOnionGetParams;
  export import OrangeToOrange = OrangeToOrangeAPI.OrangeToOrange;
  export import ZonesOrangeToOrange = OrangeToOrangeAPI.ZonesOrangeToOrange;
  export import OrangeToOrangeEditParams = OrangeToOrangeAPI.OrangeToOrangeEditParams;
  export import OrangeToOrangeGetParams = OrangeToOrangeAPI.OrangeToOrangeGetParams;
  export import OriginErrorPagePassThru = OriginErrorPagePassThruAPI.OriginErrorPagePassThru;
  export import ZonesOriginErrorPagePassThru = OriginErrorPagePassThruAPI.ZonesOriginErrorPagePassThru;
  export import OriginErrorPagePassThruEditParams = OriginErrorPagePassThruAPI.OriginErrorPagePassThruEditParams;
  export import OriginErrorPagePassThruGetParams = OriginErrorPagePassThruAPI.OriginErrorPagePassThruGetParams;
  export import OriginMaxHTTPVersion = OriginMaxHTTPVersionAPI.OriginMaxHTTPVersion;
  export import OriginMaxHTTPVersionEditResponse = OriginMaxHTTPVersionAPI.OriginMaxHTTPVersionEditResponse;
  export import OriginMaxHTTPVersionGetResponse = OriginMaxHTTPVersionAPI.OriginMaxHTTPVersionGetResponse;
  export import OriginMaxHTTPVersionEditParams = OriginMaxHTTPVersionAPI.OriginMaxHTTPVersionEditParams;
  export import OriginMaxHTTPVersionGetParams = OriginMaxHTTPVersionAPI.OriginMaxHTTPVersionGetParams;
  export import Polish = PolishAPI.Polish;
  export import ZonesPolish = PolishAPI.ZonesPolish;
  export import PolishEditParams = PolishAPI.PolishEditParams;
  export import PolishGetParams = PolishAPI.PolishGetParams;
  export import PrefetchPreload = PrefetchPreloadAPI.PrefetchPreload;
  export import ZonesPrefetchPreload = PrefetchPreloadAPI.ZonesPrefetchPreload;
  export import PrefetchPreloadEditParams = PrefetchPreloadAPI.PrefetchPreloadEditParams;
  export import PrefetchPreloadGetParams = PrefetchPreloadAPI.PrefetchPreloadGetParams;
  export import ProxyReadTimeout = ProxyReadTimeoutAPI.ProxyReadTimeout;
  export import ZonesProxyReadTimeout = ProxyReadTimeoutAPI.ZonesProxyReadTimeout;
  export import ProxyReadTimeoutEditParams = ProxyReadTimeoutAPI.ProxyReadTimeoutEditParams;
  export import ProxyReadTimeoutGetParams = ProxyReadTimeoutAPI.ProxyReadTimeoutGetParams;
  export import PseudoIPV4 = PseudoIPV4API.PseudoIPV4;
  export import ZonesPseudoIPV4 = PseudoIPV4API.ZonesPseudoIPV4;
  export import PseudoIPV4EditParams = PseudoIPV4API.PseudoIPV4EditParams;
  export import PseudoIPV4GetParams = PseudoIPV4API.PseudoIPV4GetParams;
  export import ResponseBuffering = ResponseBufferingAPI.ResponseBuffering;
  export import ZonesBuffering = ResponseBufferingAPI.ZonesBuffering;
  export import ResponseBufferingEditParams = ResponseBufferingAPI.ResponseBufferingEditParams;
  export import ResponseBufferingGetParams = ResponseBufferingAPI.ResponseBufferingGetParams;
  export import RocketLoader = RocketLoaderAPI.RocketLoader;
  export import ZonesRocketLoader = RocketLoaderAPI.ZonesRocketLoader;
  export import RocketLoaderEditParams = RocketLoaderAPI.RocketLoaderEditParams;
  export import RocketLoaderGetParams = RocketLoaderAPI.RocketLoaderGetParams;
  export import SecurityHeaders = SecurityHeadersAPI.SecurityHeaders;
  export import ZonesSecurityHeader = SecurityHeadersAPI.ZonesSecurityHeader;
  export import SecurityHeaderEditParams = SecurityHeadersAPI.SecurityHeaderEditParams;
  export import SecurityHeaderGetParams = SecurityHeadersAPI.SecurityHeaderGetParams;
  export import SecurityLevel = SecurityLevelAPI.SecurityLevel;
  export import ZonesSecurityLevel = SecurityLevelAPI.ZonesSecurityLevel;
  export import SecurityLevelEditParams = SecurityLevelAPI.SecurityLevelEditParams;
  export import SecurityLevelGetParams = SecurityLevelAPI.SecurityLevelGetParams;
  export import ServerSideExcludes = ServerSideExcludesAPI.ServerSideExcludes;
  export import ZonesServerSideExclude = ServerSideExcludesAPI.ZonesServerSideExclude;
  export import ServerSideExcludeEditParams = ServerSideExcludesAPI.ServerSideExcludeEditParams;
  export import ServerSideExcludeGetParams = ServerSideExcludesAPI.ServerSideExcludeGetParams;
  export import SortQueryStringForCache = SortQueryStringForCacheAPI.SortQueryStringForCache;
  export import ZonesSortQueryStringForCache = SortQueryStringForCacheAPI.ZonesSortQueryStringForCache;
  export import SortQueryStringForCacheEditParams = SortQueryStringForCacheAPI.SortQueryStringForCacheEditParams;
  export import SortQueryStringForCacheGetParams = SortQueryStringForCacheAPI.SortQueryStringForCacheGetParams;
  export import SSL = SSLAPI.SSL;
  export import ZonesSSL = SSLAPI.ZonesSSL;
  export import SSLEditParams = SSLAPI.SSLEditParams;
  export import SSLGetParams = SSLAPI.SSLGetParams;
  export import SSLRecommender = SSLRecommenderAPI.SSLRecommender;
  export import ZonesSSLRecommender = SSLRecommenderAPI.ZonesSSLRecommender;
  export import SSLRecommenderEditParams = SSLRecommenderAPI.SSLRecommenderEditParams;
  export import SSLRecommenderGetParams = SSLRecommenderAPI.SSLRecommenderGetParams;
  export import TLS1_3 = TLS1_3API.TLS1_3;
  export import ZonesTLS1_3 = TLS1_3API.ZonesTLS1_3;
  export import TLS1_3EditParams = TLS1_3API.TLS1_3EditParams;
  export import TLS1_3GetParams = TLS1_3API.TLS1_3GetParams;
  export import TLSClientAuth = TLSClientAuthAPI.TLSClientAuth;
  export import ZonesTLSClientAuth = TLSClientAuthAPI.ZonesTLSClientAuth;
  export import TLSClientAuthEditParams = TLSClientAuthAPI.TLSClientAuthEditParams;
  export import TLSClientAuthGetParams = TLSClientAuthAPI.TLSClientAuthGetParams;
  export import TrueClientIPHeader = TrueClientIPHeaderAPI.TrueClientIPHeader;
  export import ZonesTrueClientIPHeader = TrueClientIPHeaderAPI.ZonesTrueClientIPHeader;
  export import TrueClientIPHeaderEditParams = TrueClientIPHeaderAPI.TrueClientIPHeaderEditParams;
  export import TrueClientIPHeaderGetParams = TrueClientIPHeaderAPI.TrueClientIPHeaderGetParams;
  export import WAF = WAFAPI.WAF;
  export import ZonesWAF = WAFAPI.ZonesWAF;
  export import WAFEditParams = WAFAPI.WAFEditParams;
  export import WAFGetParams = WAFAPI.WAFGetParams;
  export import WebP = WebPAPI.WebP;
  export import ZonesWebP = WebPAPI.ZonesWebP;
  export import WebPEditParams = WebPAPI.WebPEditParams;
  export import WebPGetParams = WebPAPI.WebPGetParams;
  export import Websocket = WebsocketAPI.Websocket;
  export import ZonesWebsockets = WebsocketAPI.ZonesWebsockets;
  export import WebsocketEditParams = WebsocketAPI.WebsocketEditParams;
  export import WebsocketGetParams = WebsocketAPI.WebsocketGetParams;
  export import FontSettings = FontSettingsAPI.FontSettings;
  export import SpeedCloudflareFonts = FontSettingsAPI.SpeedCloudflareFonts;
  export import FontSettingEditParams = FontSettingsAPI.FontSettingEditParams;
  export import FontSettingGetParams = FontSettingsAPI.FontSettingGetParams;
}
